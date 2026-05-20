---
title: Class HuaweiCloudTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-huaweicloud-configuration-huaweicloudtelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.HuaweiCloud.Configuration](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-configuration/)  
Assembly: Cephalon.Observability.HuaweiCloud.dll  

Configures Huawei Cloud observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class HuaweiCloudTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HuaweiCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-configuration-huaweicloudtelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions__ctor"></a> HuaweiCloudTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.HuaweiCloud.Configuration.HuaweiCloudTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HuaweiCloudTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_ApmEndpoint"></a> ApmEndpoint

Gets or sets the Huawei Cloud APM OTLP endpoint used for direct managed trace ingestion.

```csharp
public string? ApmEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This endpoint is only used when <xref href="Cephalon.Observability.HuaweiCloud.Configuration.HuaweiCloudTelemetryExportOptions.UseApmManagedTraceIngestion" data-throw-if-not-resolved="false"></xref> is enabled and the shared
<code>Engine:Observability:Telemetry:Endpoint</code> setting is omitted.

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_AuthenticationToken"></a> AuthenticationToken

Gets or sets the authentication token written to the Huawei Cloud <code>Authentication</code> header for
direct managed trace ingestion.

```csharp
public string? AuthenticationToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted Huawei Cloud platform whose default resource attributes should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>ecs</code>, <code>cce</code>, and <code>functiongraph</code>.

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_Region"></a> Region

Gets or sets the Huawei Cloud region to stamp onto exported resources when one should be explicit.

```csharp
public string? Region { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_UseApmManagedTraceIngestion"></a> UseApmManagedTraceIngestion

Gets or sets a value indicating whether the package should send traces directly to Huawei Cloud APM
when no shared OTLP endpoint is configured.

```csharp
public bool UseApmManagedTraceIngestion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This direct path is intentionally trace-only. Logs and metrics stay on the shared collector path or on
another runtime-specific route instead of being redirected implicitly.

## Methods

### <a id="Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Huawei Cloud telemetry export options from configuration.

```csharp
public static HuaweiCloudTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [HuaweiCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-configuration-huaweicloudtelemetryexportoptions/)

The bound Huawei Cloud telemetry export options.
