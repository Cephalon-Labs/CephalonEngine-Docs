---
title: Class NewRelicTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-newrelic-configuration-newrelictelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.NewRelic.Configuration](/0-1-0-preview/reference/api/cephalon-observability-newrelic-configuration/)  
Assembly: Cephalon.Observability.NewRelic.dll  

Configures New Relic observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class NewRelicTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NewRelicTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-newrelic-configuration-newrelictelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions__ctor"></a> NewRelicTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.NewRelic.Configuration.NewRelicTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NewRelicTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_Endpoint"></a> Endpoint

Gets or sets the base New Relic OTLP endpoint used for direct ingestion.

```csharp
public string? Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

If this value is omitted and direct ingestion is enabled, the package derives the endpoint from
<xref href="Cephalon.Observability.NewRelic.Configuration.NewRelicTelemetryExportOptions.Region" data-throw-if-not-resolved="false"></xref>. For OTLP/HTTP the package treats this as the base endpoint and appends the
signal-specific <code>/v1/traces</code>, <code>/v1/metrics</code>, or <code>/v1/logs</code> suffix automatically.

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_Headers"></a> Headers

Gets or sets the raw OTLP headers string used for direct New Relic ingestion.

```csharp
public string? Headers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use the standard OTLP <code>key=value</code> comma-separated format. This value takes precedence over
<xref href="Cephalon.Observability.NewRelic.Configuration.NewRelicTelemetryExportOptions.LicenseKey" data-throw-if-not-resolved="false"></xref> when both are configured.

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_LicenseKey"></a> LicenseKey

Gets or sets the New Relic license key used to build the required <code>api-key</code> header
when the package should construct OTLP headers from structured settings.

```csharp
public string? LicenseKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_Region"></a> Region

Gets or sets the New Relic OTLP region used when the package derives the direct-ingestion endpoint.

```csharp
public string? Region { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>us</code>, <code>eu</code>, and <code>fedramp</code>. If omitted, the package defaults
to the New Relic US OTLP endpoint.

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_ServiceNamespace"></a> ServiceNamespace

Gets or sets the optional <code>service.namespace</code> resource attribute to stamp onto exported telemetry.

```csharp
public string? ServiceNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_UseNativeOtlpEndpoint"></a> UseNativeOtlpEndpoint

Gets or sets a value indicating whether the package should target the New Relic native OTLP endpoint
when no shared collector endpoint is configured.

```csharp
public bool UseNativeOtlpEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This direct path is intended for the documented New Relic native OTLP ingestion route. Teams that prefer
a collector or gateway can keep using the shared <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> contract instead.

## Methods

### <a id="Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds New Relic telemetry export options from configuration.

```csharp
public static NewRelicTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [NewRelicTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-newrelic-configuration-newrelictelemetryexportoptions/)

The bound New Relic telemetry export options.
