import * as defaults from '@aws-solutions-constructs/core';
import { addProxyMethodToApiResource } from '@aws-solutions-constructs/core';
import { Aws, Duration } from 'aws-cdk-lib';
import {
  RestApi,
  RestApiProps,
  AuthorizationType,
} from 'aws-cdk-lib/aws-apigateway';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Role, ServicePrincipal, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function as LamdaFunction } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { ARecord, RecordTarget, HostedZone } from 'aws-cdk-lib/aws-route53';
import { ApiGateway as ApiGatewayTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Queue, DeadLetterQueue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';


/**
 * @summary The properties for the ApiGatewayToSqsToLambdaProps class.
 */
export interface ApiGatewayToSqsToLambdaProps {
  readonly serviceName: string;
  readonly domain: string;
  readonly domainCertArn: string;
  readonly route53HostedZoneId: string;
  readonly lambdaFunction: LamdaFunction;
  readonly deployDeadLetterQueue?: boolean;
}

/**
 * @summary The ApiGatewayToSqsToLambda class. Class is very opinionated and does not allow for existing queues or lambdas.
 * Class assumes a pulic domain should be created and the corresponding alias in route53 shall be created
 */
export class ApiGatewayToSqsToLambda extends Construct {
  public readonly apiGateway: RestApi;
  public readonly apiGatewayRole: Role;
  public readonly apiGatewayCloudWatchRole?: Role;
  public readonly sqsQueue: Queue;
  public readonly deadLetterQueue?: DeadLetterQueue;

  /**
   * @summary Constructs a new instance of the ApiGatewayToSqsToLambda class.
   * @param {cdk.App} scope - represents the scope for all the resources.
   * @param {string} id - this is a a scope-unique id.
   * @param {ApiGatewayToSqsToLambdaProps} props - user provided props for the construct.
   */

  constructor(
    scope: Construct,
    id: string,
    props: ApiGatewayToSqsToLambdaProps,
  ) {
    super(scope, id);

    const {
      serviceName,
      domain,
      domainCertArn,
      route53HostedZoneId,
      deployDeadLetterQueue,
      lambdaFunction,
    } = props;

    // Setup the dead letter queue, if applicable
    this.deadLetterQueue = defaults.buildDeadLetterQueue(this, {
      deployDeadLetterQueue: deployDeadLetterQueue,
      deadLetterQueueProps: { queueName: `${serviceName}-dl-queue` },
    });

    // this is not very clean, by default lambda has a 3 seconds timeout
    const lambdaTimeout =
      lambdaFunction.timeout != Duration.seconds(3)
        ? lambdaFunction.timeout
        : Duration.seconds(30);

    // Setup the queue
    this.sqsQueue = defaults.buildQueue(this, `${serviceName}-queue`, {
      deadLetterQueue: this.deadLetterQueue,
      queueProps: {
        queueName: `${serviceName}-queue`,
        visibilityTimeout: lambdaTimeout ? lambdaTimeout : Duration.seconds(30),
      },
    }).queue;

    const certificate = Certificate.fromCertificateArn(
      this,
      `*.${domain}`,
      domainCertArn,
    );

    const apiGatewayProps = {
      domainName: {
        domainName: `${serviceName}.${domain}`,
        certificate: certificate,
      },
      restApiName: serviceName,
    } as RestApiProps;

    // Setup API Gateway
    this.apiGateway = new RestApi(
      this,
      `${serviceName}-api-gateway`,
      apiGatewayProps,
    );

    this.apiGatewayRole = new Role(this, `${serviceName}-api-gateway-role`, {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
    });

    this.apiGatewayRole.addToPolicy(
      new PolicyStatement({
        resources: [this.sqsQueue.queueArn],
        actions: ['sqs:SendMessage'],
      }),
    );

    addProxyMethodToApiResource({
      service: 'sqs',
      path: `${Aws.ACCOUNT_ID}/${this.sqsQueue.queueName}`,
      apiGatewayRole: this.apiGatewayRole,
      apiMethod: 'POST',
      apiResource: this.apiGateway.root,
      requestTemplate:
        'Action=SendMessage&MessageBody=$util.urlEncode("$input.body")',
      contentType: "'application/x-www-form-urlencoded'",
      methodOptions: {
        authorizationType: AuthorizationType.NONE,
      },
    });

    // infering throws error, which is why we have to provide both
    const hostedZone = HostedZone.fromHostedZoneAttributes(
      this,
      `${domain}-zone`,
      {
        hostedZoneId: route53HostedZoneId,
        zoneName: domain,
      },
    );

    new ARecord(this, `${serviceName}-alias-record`, {
      zone: hostedZone,
      recordName: serviceName,
      target: RecordTarget.fromAlias(new ApiGatewayTarget(this.apiGateway)),
    });

    lambdaFunction.addEventSource(
      new SqsEventSource(this.sqsQueue, { reportBatchItemFailures: true }),
    );
  }
}
