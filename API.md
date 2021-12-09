# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CloudwatchAutoRetention <a name="cloudwatch-auto-retention.CloudwatchAutoRetention" id="cloudwatchautoretentioncloudwatchautoretention"></a>

#### Initializers <a name="cloudwatch-auto-retention.CloudwatchAutoRetention.Initializer" id="cloudwatchautoretentioncloudwatchautoretentioninitializer"></a>

```typescript
import { CloudwatchAutoRetention } from 'cloudwatch-auto-retention'

new CloudwatchAutoRetention(scope: Construct, id: string, props?: CloudwatchAutoRetentionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cloudwatchautoretentioncloudwatchautoretentionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cloudwatchautoretentioncloudwatchautoretentionparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cloudwatchautoretentioncloudwatchautoretentionparameterprops) | [`cloudwatch-auto-retention.CloudwatchAutoRetentionProps`](#cloudwatch-auto-retention.CloudwatchAutoRetentionProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cloudwatch-auto-retention.CloudwatchAutoRetention.parameter.scope" id="cloudwatchautoretentioncloudwatchautoretentionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cloudwatch-auto-retention.CloudwatchAutoRetention.parameter.id" id="cloudwatchautoretentioncloudwatchautoretentionparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="cloudwatch-auto-retention.CloudwatchAutoRetention.parameter.props" id="cloudwatchautoretentioncloudwatchautoretentionparameterprops"></a>

- *Type:* [`cloudwatch-auto-retention.CloudwatchAutoRetentionProps`](#cloudwatch-auto-retention.CloudwatchAutoRetentionProps)

---





## Structs <a name="Structs" id="structs"></a>

### CloudwatchAutoRetentionProps <a name="cloudwatch-auto-retention.CloudwatchAutoRetentionProps" id="cloudwatchautoretentioncloudwatchautoretentionprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CloudwatchAutoRetentionProps } from 'cloudwatch-auto-retention'

const cloudwatchAutoRetentionProps: CloudwatchAutoRetentionProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`retention`](#cloudwatchautoretentioncloudwatchautoretentionpropspropertyretention) | [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays) | *No description.* |
| [`schedule`](#cloudwatchautoretentioncloudwatchautoretentionpropspropertyschedule) | [`aws-cdk-lib.aws_events.Schedule`](#aws-cdk-lib.aws_events.Schedule) | *No description.* |

---

##### `retention`<sup>Optional</sup> <a name="cloudwatch-auto-retention.CloudwatchAutoRetentionProps.property.retention" id="cloudwatchautoretentioncloudwatchautoretentionpropspropertyretention"></a>

```typescript
public readonly retention: RetentionDays;
```

- *Type:* [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays)

---

##### `schedule`<sup>Optional</sup> <a name="cloudwatch-auto-retention.CloudwatchAutoRetentionProps.property.schedule" id="cloudwatchautoretentioncloudwatchautoretentionpropspropertyschedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* [`aws-cdk-lib.aws_events.Schedule`](#aws-cdk-lib.aws_events.Schedule)

---



