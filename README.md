# cdk-cloudwatch-logs-auto-retention

cdk-cloudwatch-logs-auto-retention is an AWS CDK construct library that will check once a month if you have any Cloudwatch Log Groups in the region it is deployed with a never-expire retention and auto-fix this to one month. This is a cost-optimization as Cloudwatch Logs have a very high storage cost. If you need Cloudwatch logs for longer you should set an automated S3 export (cdk-cloudwatch-logs-s3-export is in the works 😚).

## Getting started

### TypeScript

#### Installation

//TODO

#### Usage

```typescript