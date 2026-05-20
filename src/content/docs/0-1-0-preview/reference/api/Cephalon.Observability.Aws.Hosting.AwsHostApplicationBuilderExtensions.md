---
title: Class AwsHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-aws-hosting-awshostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Aws.Hosting](/0-1-0-preview/reference/api/cephalon-observability-aws-hosting/)  
Assembly: Cephalon.Observability.Aws.dll  

Adds AWS-hosted observability defaults and OTLP exporter wiring for Cephalon hosts.

```csharp
public static class AwsHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AwsHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-aws-hosting-awshostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Aws_Hosting_AwsHostApplicationBuilderExtensions_AddCephalonAws__1___0_System_Action_Cephalon_Observability_Aws_Configuration_AwsTelemetryExportOptions__"></a> AddCephalonAws<TBuilder\>\(TBuilder, Action<AwsTelemetryExportOptions\>?\)

Adds AWS-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonAws<TBuilder>(this TBuilder builder, Action<AwsTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AwsTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-aws-configuration-awstelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven AWS telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps AWS-specific propagation, resource detection, and AWS SDK instrumentation outside
<code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract and the same OTLP exporter path as the cloud-neutral
OpenTelemetry package.
</p>
<p>
Registration is skipped when every signal is disabled or when no export endpoint is configured and
explicit self-hosted defaults are not enabled. When <code>HostedPlatform</code> is supplied, the package
adds AWS-specific resource detectors and hosted-platform defaults on top of the existing service-name,
service-version, and optional <code>deployment.environment.name</code> defaults.
</p>
