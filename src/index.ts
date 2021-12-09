import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement, Policy } from 'aws-cdk-lib/aws-iam';
import { Code, Function, Runtime, Architecture } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';


export interface CloudwatchAutoRetentionProps {
  readonly schedule?: Schedule;
  readonly retention?: RetentionDays;
}

const DefaultsCloudwatchAutoRetentionProps: CloudwatchAutoRetentionProps = {
  schedule: Schedule.cron({ minute: '0', hour: '1', day: '1' }),
  retention: RetentionDays.ONE_MONTH,
};

export class CloudwatchAutoRetention extends Construct {
  private props: CloudwatchAutoRetentionProps;

  constructor(scope: Construct, id: string, props?: CloudwatchAutoRetentionProps) {
    super(scope, id);

    // Check if values are set
    this.props = { ...DefaultsCloudwatchAutoRetentionProps, ...props };

    // Create Lambda function

    const handler = new Function(this, 'LambdaCloudwatchAutoRetention', {
      handler: 'run.handler',
      code: Code.fromAsset('functions'),
      runtime: Runtime.PYTHON_3_9,
      architecture: Architecture.ARM_64,
      description: 'Lambda that gets triggered the first of the month. Checks all Cloudwatch log groups and changes those with never-expire to one month.',
      environment: {
        RETENTION_DAYS: this.props.retention!.toString(),
      },
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

    // Run this script according to schedule.
    const rule = new Rule(this, 'ScheduleCloudwatchAutoRetention', {
      schedule: this.props.schedule,
    });

    rule.addTarget(new LambdaFunction(handler));

  }
}