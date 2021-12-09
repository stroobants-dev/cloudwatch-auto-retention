const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Tom Stroobants',
  authorAddress: 'tom@stroobants.dev',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cloudwatch-auto-retention',
  keywords: ['awscdk', 'aws', 'cdk', 'cloudwatch', 'retention', 'loggroups', 'finops'],
  repository: 'https://github.com/stroobants-dev/cloudwatch-auto-retention',
  repositoryUrl: 'https://github.com/stroobants-dev/cloudwatch-auto-retention.git',
  python: {
    distName: 'cloudwatch-auto-retention',
    module: 'cdk_cloudwatch_auto_retention',
  },
  workflowNodeVersion: '^14.17.0',
  peerDeps: [
    // 'aws-cdk-lib/',
    // 'aws-cdk-lib/aws_events_targets',
    // 'aws-cdk-lib/aws_events',
    // 'aws-cdk-lib/aws_lambda',
    // 'aws-cdk-lib/aws_iam',
    'constructs',
    'aws-cdk-lib',

  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  /* AWS CDK modules required for testing. */
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