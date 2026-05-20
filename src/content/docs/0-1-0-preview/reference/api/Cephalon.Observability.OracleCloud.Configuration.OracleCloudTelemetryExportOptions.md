---
title: Class OracleCloudTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-oraclecloud-configuration-oraclecloudtelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.OracleCloud.Configuration](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-configuration/)  
Assembly: Cephalon.Observability.OracleCloud.dll  

Configures Oracle Cloud observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class OracleCloudTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OracleCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-configuration-oraclecloudtelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions__ctor"></a> OracleCloudTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OracleCloud.Configuration.OracleCloudTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OracleCloudTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_DataUploadEndpoint"></a> DataUploadEndpoint

Gets or sets the Oracle Cloud APM data upload endpoint used to build direct managed
OTLP/HTTP ingestion URLs.

```csharp
public string? DataUploadEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This value should be the Oracle Cloud APM <code>DataUploadEndpoint</code> for the target domain.
The package appends the documented OpenTelemetry signal paths when direct managed ingestion is enabled.

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted Oracle Cloud platform whose default resource attributes should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>compute</code>, <code>oke</code>, and <code>functions</code>.
The package maps them to the current OpenTelemetry <code>cloud.platform</code> attribute values.

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_MetricsDataKey"></a> MetricsDataKey

Gets or sets the Oracle Cloud APM private metrics data key used for direct managed metrics ingestion.

```csharp
public string? MetricsDataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_Region"></a> Region

Gets or sets the Oracle Cloud region to stamp onto exported resources when one should be explicit.

```csharp
public string? Region { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_TraceDataKey"></a> TraceDataKey

Gets or sets the Oracle Cloud APM trace data key used for direct managed trace ingestion.

```csharp
public string? TraceDataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When <xref href="Cephalon.Observability.OracleCloud.Configuration.OracleCloudTelemetryExportOptions.UsePublicTraceDataKey" data-throw-if-not-resolved="false"></xref> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, this should be the public
trace key. Otherwise it should be the private trace key.

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_UseManagedOpenTelemetryIngestion"></a> UseManagedOpenTelemetryIngestion

Gets or sets a value indicating whether the package should use Oracle Cloud APM managed
OpenTelemetry ingestion when no shared collector endpoint is configured.

```csharp
public bool UseManagedOpenTelemetryIngestion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This direct managed path is intentionally limited to traces and metrics over OTLP/HTTP.
Logs stay on the shared collector path, Oracle Log Analytics, or another runtime-specific route
instead of being redirected implicitly.

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_UsePublicTraceDataKey"></a> UsePublicTraceDataKey

Gets or sets a value indicating whether trace ingestion should use the public Oracle Cloud
APM data key path instead of the private data key path.

```csharp
public bool UsePublicTraceDataKey { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Metrics always use the private-key path in Oracle Cloud APM.

## Methods

### <a id="Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Oracle Cloud telemetry export options from configuration.

```csharp
public static OracleCloudTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [OracleCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-configuration-oraclecloudtelemetryexportoptions/)

The bound Oracle Cloud telemetry export options.
