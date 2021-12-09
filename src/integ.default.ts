import { App, Stack } from 'aws-cdk-lib';
import { CdkCloudwatchAutoRetention } from './index';

const app = new App();
const stack = new Stack(app, 'CloudwatchAutoRetention');

new CdkCloudwatchAutoRetention(stack, 'Cdk-Cloudwatch-Auto-Retention');
