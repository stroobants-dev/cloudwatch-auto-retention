# Cloudwatch Auto Retention

![release](https://github.com/stroobants-dev/cloudwatch-auto-retention/actions/workflows/release.yml/badge.svg)[![npm version](https://badge.fury.io/js/cloudwatch-auto-retention.svg)](https://badge.fury.io/js/cloudwatch-auto-retention)[![PyPI version](https://badge.fury.io/py/cloudwatch-auto-retention.svg)](https://badge.fury.io/py/cloudwatch-auto-retention)


Cloudwatch Auto Retention is an AWS CDK construct library that will check once a month if you have any Cloudwatch Log Groups in the region it is deployed with a never-expire retention and auto-fix this to one month. This is a cost-optimization as Cloudwatch Logs have a very high storage cost. If you need Cloudwatch logs for longer you should set an automated S3 export (cloudwatch-logs-s3-export is in the works 😚).

## Getting started

### TypeScript

#### Installation

##### NPM
```
npm install --save cloudwatch-auto-retention
```

##### yarn
```
yarn add cloudwatch-auto-retention
```

#### Usage

```typescript
import * as cdk from '@aws-cdk/core';
import { CloudwatchAutoRetention } from 'cloudwatch-auto-retention';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Schedule } from 'aws-cdk-lib/aws-events';

const mockApp = new cdk.App();
const stack = new cdk.Stack(mockApp, '<your-stack-name>');

new CloudwatchAutoRetention(stack, 'cloudwatch-auto-retention');

// With retention set
new CloudwatchAutoRetention(stack, 'cloudwatch-auto-retention', {
    retention: RetentionDays.ONE_MONTH
});

// With schedule for the Lambda function set
new CloudwatchAutoRetention(stack, 'cloudwatch-auto-retention', {
    schedule: Schedule.cron({ minute: '0', hour: '1', day: '1' })
});
```

### Python

#### Installation

```bash
$ pip install cloudwatch-auto-retention
```

#### Usage

```python
import aws_cdk.core as cdk
from cdk_cloudwatch_auto_retention import CloudwatchAutoRetention 

app = cdk.App()
stack = cdk.Stack(app, "<your-stack-name>")

CdkCloudwatchAutoRetention(stack, "cloudwatch-auto-retention")
```

## Overview

A Cloudwatch cron rule will trigger a Lambda that will go over all Cloudwatch Log Groups and check if the retention is never-expire. If so, it will change it to one month default or whatever you set as `retention`.

![](https://raw.githubusercontent.com/stroobants-dev/cloudwatch-auto-retention/main/images/overview.png)