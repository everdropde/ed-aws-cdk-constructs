const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Fabian Bosler',
  authorAddress: 'FBosler@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'ed-aws-cdk-constructs',
  repositoryUrl: 'https://github.com/FBosler/ed-aws-cdk-constructs.git',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['FBosler', 'dependabot[bot]'],
  },
  deps: ['aws-cdk-lib@^2.1.0', 'constructs@^10.0.5', '@aws-solutions-constructs/core@^2.25.0'],
  description: 'Package provides opinionated constrcuts for common patterns used in everdrop infrastructure',
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: 'everdrop-aws-cdk-constructs',
});

project.gitignore.exclude('.env');

project.synth();