const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Tom Stroobants',
  authorAddress: 'tom@stroobants.dev',
  cdkVersion: '1.129.0',
  defaultReleaseBranch: 'main',
  name: 'cloudwatch-auto-retention',
  repository: 'https://github.com/stroobants-dev/cloudwatch-auto-retention',
  repositoryUrl: 'https://github.com/stroobants-dev/cloudwatch-auto-retention.git',
  python: {
    distName: 'cloudwatch-auto-retention',
    module: 'cdk_cloudwatch_auto_retention',
  },
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-iam',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  cdkTestDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-iam',
  ], /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();