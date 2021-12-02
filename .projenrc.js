const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Tom Stroobants',
  authorAddress: 'tom@stroobants.dev',
  cdkVersion: '1.129.0',
  defaultReleaseBranch: 'main',
  name: 'cloudwatch-auto-retention',
  keywords: ['awscdk', 'aws', 'cdk', 'cloudwatch', 'retention', 'loggroups'],
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
    '@aws-cdk/cloudformation-diff',
  ], /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  description: 'CloudWatch Auto Retention is a construct that creates a Lambda with a cronjob that checks whether CloudWatch loggroups are set to never-expire. If so, the construct sets it to one month.', /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();