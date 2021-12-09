import { App, Stack } from 'aws-cdk-lib';
import { CloudwatchAutoRetention } from './index';

const app = new App();
const stack = new Stack(app, 'CloudwatchAutoRetention');

new CloudwatchAutoRetention(stack, 'Cloudwatch-Auto-Retention');
