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
    'constructs',
    'aws-cdk-lib',
  ],
  description: 'CloudWatch Auto Retention is a construct that creates a Lambda with a cronjob that checks whether CloudWatch loggroups are set to never-expire. If so, the construct sets it to one month.', /* The description is just a string that helps people understand the purpose of the package. */
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();