---
title: Class AlibabaCloudTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-alibabacloud-configuration-alibabacloudtelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.AlibabaCloud.Configuration](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-configuration/)  
Assembly: Cephalon.Observability.AlibabaCloud.dll  

Configures Alibaba Cloud observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class AlibabaCloudTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AlibabaCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-configuration-alibabacloudtelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions__ctor"></a> AlibabaCloudTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.AlibabaCloud.Configuration.AlibabaCloudTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AlibabaCloudTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_AuthenticationToken"></a> AuthenticationToken

Gets or sets the authentication token written to the Alibaba Cloud <code>Authentication</code> header for
OTLP/gRPC direct managed ingestion.

```csharp
public string? AuthenticationToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This value is only used when <xref href="Cephalon.Observability.AlibabaCloud.Configuration.AlibabaCloudTelemetryExportOptions.UseManagedOpenTelemetryIngestion" data-throw-if-not-resolved="false"></xref> is enabled and the
protocol stays on <code>otlp</code> or <code>otlp/grpc</code>. OTLP/HTTP managed ingestion expects the supplied
signal-specific endpoints to already follow the provider's documented tokenized URL shape instead.

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted Alibaba Cloud platform whose default resource attributes should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>ecs</code>, <code>fc</code> / <code>functioncompute</code>, and <code>openshift</code>.
The package maps them to the current OpenTelemetry <code>cloud.platform</code> attribute values.

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_ManagedGrpcEndpoint"></a> ManagedGrpcEndpoint

Gets or sets the Alibaba Cloud Managed Service for OpenTelemetry OTLP/gRPC endpoint used for direct
managed traces and metrics ingestion.

```csharp
public string? ManagedGrpcEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This endpoint is only used when <xref href="Cephalon.Observability.AlibabaCloud.Configuration.AlibabaCloudTelemetryExportOptions.UseManagedOpenTelemetryIngestion" data-throw-if-not-resolved="false"></xref> is enabled, the
shared <code>Engine:Observability:Telemetry:Endpoint</code> setting is omitted, and the protocol remains on
<code>otlp</code> or <code>otlp/grpc</code>.

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_ManagedHttpMetricsEndpoint"></a> ManagedHttpMetricsEndpoint

Gets or sets the Alibaba Cloud Managed Service for OpenTelemetry OTLP/HTTP metrics endpoint used for
direct managed ingestion.

```csharp
public string? ManagedHttpMetricsEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This endpoint is only used when <xref href="Cephalon.Observability.AlibabaCloud.Configuration.AlibabaCloudTelemetryExportOptions.UseManagedOpenTelemetryIngestion" data-throw-if-not-resolved="false"></xref> is enabled, the
shared endpoint is omitted, and the protocol stays on <code>otlp/http</code>. The value should already be
the full Alibaba Cloud-managed metrics URL, including any tokenized path shape required by the
provider.

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_ManagedHttpTracesEndpoint"></a> ManagedHttpTracesEndpoint

Gets or sets the Alibaba Cloud Managed Service for OpenTelemetry OTLP/HTTP traces endpoint used for
direct managed ingestion.

```csharp
public string? ManagedHttpTracesEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This endpoint is only used when <xref href="Cephalon.Observability.AlibabaCloud.Configuration.AlibabaCloudTelemetryExportOptions.UseManagedOpenTelemetryIngestion" data-throw-if-not-resolved="false"></xref> is enabled, the
shared endpoint is omitted, and the protocol stays on <code>otlp/http</code>. The value should already be
the full Alibaba Cloud-managed trace URL, including any tokenized path shape required by the
provider.

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_Region"></a> Region

Gets or sets the Alibaba Cloud region to stamp onto exported resources when one should be explicit.

```csharp
public string? Region { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_UseManagedOpenTelemetryIngestion"></a> UseManagedOpenTelemetryIngestion

Gets or sets a value indicating whether the package should use Alibaba Cloud Managed Service for
OpenTelemetry when no shared collector endpoint is configured.

```csharp
public bool UseManagedOpenTelemetryIngestion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This direct managed path is intentionally limited to traces and metrics. Logs stay on the shared
collector path, SLS, or another runtime-specific route instead of being redirected implicitly.

## Methods

### <a id="Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Alibaba Cloud telemetry export options from configuration.

```csharp
public static AlibabaCloudTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [AlibabaCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-configuration-alibabacloudtelemetryexportoptions/)

The bound Alibaba Cloud telemetry export options.
