---
title: Class AwsTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-aws-configuration-awstelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Aws.Configuration](/0-1-0-preview/reference/api/cephalon-observability-aws-configuration/)  
Assembly: Cephalon.Observability.Aws.dll  

Configures AWS-hosted observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class AwsTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AwsTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-aws-configuration-awstelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions__ctor"></a> AwsTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Aws.Configuration.AwsTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AwsTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_EnableAwsSdkInstrumentation"></a> EnableAwsSdkInstrumentation

Gets or sets a value indicating whether AWS SDK client instrumentation should be enabled for traces.

```csharp
public bool EnableAwsSdkInstrumentation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_EnableLambdaContextExtraction"></a> EnableLambdaContextExtraction

Gets or sets a value indicating whether Lambda context extraction should be configured when the hosted
platform is <code>lambda</code>.

```csharp
public bool EnableLambdaContextExtraction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This does not wrap Lambda handlers automatically. It only configures the OpenTelemetry Lambda extension
so hosts that already use the wrapper APIs can keep AWS X-Ray context extraction aligned.

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted AWS platform whose default resource attributes and detectors should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>ec2</code>, <code>ecs</code>, <code>eks</code>, <code>elasticbeanstalk</code>, and <code>lambda</code>.
The package maps them to the current OpenTelemetry <code>cloud.platform</code> attribute values and uses
the matching AWS resource detector when one is available.

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_UseXRayPropagator"></a> UseXRayPropagator

Gets or sets a value indicating whether the AWS X-Ray text-map propagator should become the default
propagator for the host when traces are enabled.

```csharp
public bool UseXRayPropagator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_UseXRayTraceIds"></a> UseXRayTraceIds

Gets or sets a value indicating whether AWS X-Ray-compatible trace identifiers should be used.

```csharp
public bool UseXRayTraceIds { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds AWS telemetry export options from configuration.

```csharp
public static AwsTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [AwsTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-aws-configuration-awstelemetryexportoptions/)

The bound AWS telemetry export options.
