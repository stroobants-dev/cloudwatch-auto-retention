import * as cdk from '@aws-cdk/core';
import { CdkCloudwatchAutoRetention } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'CloudwatchAutoRetention');

new CdkCloudwatchAutoRetention(stack, 'Cdk-Cloudwatch-Auto-Retention');
