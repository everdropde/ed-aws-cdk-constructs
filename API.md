# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayToSqsToLambda <a name="ApiGatewayToSqsToLambda" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda"></a>

#### Initializers <a name="Initializers" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer"></a>

```typescript
import { ApiGatewayToSqsToLambda } from 'everdrop-aws-cdk-constructs'

new ApiGatewayToSqsToLambda(scope: Construct, id: string, props: ApiGatewayToSqsToLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - represents the scope for all the resources. |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | - this is a a scope-unique id. |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.props">props</a></code> | <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps">ApiGatewayToSqsToLambdaProps</a></code> | - user provided props for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

represents the scope for all the resources.

---

##### `id`<sup>Required</sup> <a name="id" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.id"></a>

- *Type:* string

this is a a scope-unique id.

---

##### `props`<sup>Required</sup> <a name="props" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps">ApiGatewayToSqsToLambdaProps</a>

user provided props for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.isConstruct"></a>

```typescript
import { ApiGatewayToSqsToLambda } from 'everdrop-aws-cdk-constructs'

ApiGatewayToSqsToLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGateway">apiGateway</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApi</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGatewayRole">apiGatewayRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.sqsQueue">sqsQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGatewayCloudWatchRole">apiGatewayCloudWatchRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.DeadLetterQueue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGateway"></a>

```typescript
public readonly apiGateway: RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi

---

##### `apiGatewayRole`<sup>Required</sup> <a name="apiGatewayRole" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGatewayRole"></a>

```typescript
public readonly apiGatewayRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `sqsQueue`<sup>Required</sup> <a name="sqsQueue" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.sqsQueue"></a>

```typescript
public readonly sqsQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `apiGatewayCloudWatchRole`<sup>Optional</sup> <a name="apiGatewayCloudWatchRole" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.apiGatewayCloudWatchRole"></a>

```typescript
public readonly apiGatewayCloudWatchRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambda.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: DeadLetterQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.DeadLetterQueue

---


## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayToSqsToLambdaProps <a name="ApiGatewayToSqsToLambdaProps" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps"></a>

#### Initializer <a name="Initializer" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.Initializer"></a>

```typescript
import { ApiGatewayToSqsToLambdaProps } from 'everdrop-aws-cdk-constructs'

const apiGatewayToSqsToLambdaProps: ApiGatewayToSqsToLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.domainCertArn">domainCertArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.route53HostedZoneId">route53HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.deployDeadLetterQueue">deployDeadLetterQueue</a></code> | <code>boolean</code> | *No description.* |

---

##### `domain`<sup>Required</sup> <a name="domain" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainCertArn`<sup>Required</sup> <a name="domainCertArn" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.domainCertArn"></a>

```typescript
public readonly domainCertArn: string;
```

- *Type:* string

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `route53HostedZoneId`<sup>Required</sup> <a name="route53HostedZoneId" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.route53HostedZoneId"></a>

```typescript
public readonly route53HostedZoneId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `deployDeadLetterQueue`<sup>Optional</sup> <a name="deployDeadLetterQueue" id="everdrop-aws-cdk-constructs.ApiGatewayToSqsToLambdaProps.property.deployDeadLetterQueue"></a>

```typescript
public readonly deployDeadLetterQueue: boolean;
```

- *Type:* boolean

---



