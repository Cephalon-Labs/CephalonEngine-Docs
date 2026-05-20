---
title: Class TelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-configuration-telemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Configuration](/0-1-0-preview/reference/api/cephalon-observability-configuration/)  
Assembly: Cephalon.Observability.dll  

Describes how operators intend host telemetry to be exported.

```csharp
public sealed class TelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-telemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These settings let Cephalon packages, hosts, and downstream companion packages agree on provider,
protocol, endpoint, and enabled signals without forcing exporter dependencies into the engine core.
Companion packages such as <code>Cephalon.Observability.OpenTelemetry</code>,
<code>Cephalon.Observability.AlibabaCloud</code>, <code>Cephalon.Observability.Aws</code>, <code>Cephalon.Observability.Gcp</code>,
<code>Cephalon.Observability.DigitalOcean</code>, <code>Cephalon.Observability.GrafanaCloud</code>,
<code>Cephalon.Observability.HuaweiCloud</code>,
<code>Cephalon.Observability.NewRelic</code>,
<code>Cephalon.Observability.OracleCloud</code>, <code>Cephalon.Observability.OpenShift</code>,
<code>Cephalon.Observability.Tanzu</code>, or
<code>Cephalon.Observability.AzureMonitor</code>
can interpret the same contract when a host wants a supported export path, including the explicit
self-hosted collector defaults that remain outside <code>Cephalon.Engine</code>. The same contract is
also intended for developer-authored provider packages that need to layer Cloudflare, internal gateway,
or other deployment-targeted auth, resource attributes, and hosted defaults
on top of the existing <code>ILogger</code> pipeline.

## Constructors

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions__ctor"></a> TelemetryExportOptions\(\)

Creates telemetry export options with the default guidance values.

```csharp
public TelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_Endpoint"></a> Endpoint

Gets or sets the target export endpoint, if one is configured.
Companion packages interpret this as the base collector endpoint for the selected export protocol.

```csharp
public string? Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_ExportLogs"></a> ExportLogs

Gets or sets a value indicating whether logs should be exported.

```csharp
public bool ExportLogs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_ExportMetrics"></a> ExportMetrics

Gets or sets a value indicating whether metrics should be exported.

```csharp
public bool ExportMetrics { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_ExportTraces"></a> ExportTraces

Gets or sets a value indicating whether traces should be exported.

```csharp
public bool ExportTraces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_Protocol"></a> Protocol

Gets or sets the telemetry transport protocol, such as <code>otlp</code>, <code>otlp/grpc</code>, or <code>otlp/http</code>.

```csharp
public string Protocol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_Provider"></a> Provider

Gets or sets the telemetry provider name, such as <code>OpenTelemetry</code>.

```csharp
public string Provider { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_Configuration_TelemetryExportOptions_UseSelfHostedDefaults"></a> UseSelfHostedDefaults

Gets or sets a value indicating whether companion packages should apply the supported
self-hosted collector and runtime defaults when the export endpoint is omitted.

```csharp
public bool UseSelfHostedDefaults { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The shipped OpenTelemetry companion interprets this flag as an explicit self-hosted path on
top of the shared OTLP baseline, using the standard local collector ports and host-managed
runtime resource defaults instead of vendor-specific wiring.
