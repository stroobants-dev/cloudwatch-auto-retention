import { Rule, Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import { PolicyStatement, Policy } from '@aws-cdk/aws-iam';
import { Code, Function, Runtime, Architecture } from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
export class CdkCloudwatchAutoRetention extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    // Create Lambda function

    const handler = new Function(this, 'LambdaCloudwatchAutoRetention', {
      handler: 'run.handler',
      code: Code.fromAsset('functions'),
      runtime: Runtime.PYTHON_3_9,
      architecture: Architecture.ARM_64,
      description: 'Lambda that gets triggered the first of the month. Checks all Cloudwatch log groups and changes those with never-expire to one month.',
    });

    // Set task role and permissions
    const cloudwatchListSetRetention = new PolicyStatement({
      actions: [
        'logs:DescribeLogGroups',
        'logs:PutRetentionPolicy',
      ],
      resources: ['arn:aws:logs:*:*:log-group:*'],
    });

    handler.role?.attachInlinePolicy(
      new Policy(this, 'cloudwatch-list-set-retention', {
        statements: [cloudwatchListSetRetention],
      }),
    );

    // Run this script once a month on the first of the month
    const rule = new Rule(this, 'ScheduleCloudwatchAutoRetention', {
      schedule: Schedule.cron({ minute: '0', hour: '1', day: '1' }),
    });

    rule.addTarget(new LambdaFunction(handler));

  }
}