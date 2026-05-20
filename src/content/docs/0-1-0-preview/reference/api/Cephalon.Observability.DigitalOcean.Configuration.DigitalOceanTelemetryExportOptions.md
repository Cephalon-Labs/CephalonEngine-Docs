---
title: Class DigitalOceanTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-digitalocean-configuration-digitaloceantelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.DigitalOcean.Configuration](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-configuration/)  
Assembly: Cephalon.Observability.DigitalOcean.dll  

Configures DigitalOcean observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class DigitalOceanTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DigitalOceanTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-configuration-digitaloceantelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions__ctor"></a> DigitalOceanTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.DigitalOcean.Configuration.DigitalOceanTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DigitalOceanTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_AppId"></a> AppId

Gets or sets the App Platform application identifier to stamp onto exported resources.

```csharp
public string? AppId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the <code>APP_ID</code> or <code>DIGITALOCEAN_APP_ID</code> environment
variable when it is available.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_AppUrl"></a> AppUrl

Gets or sets the App Platform public URL to stamp onto exported resources.

```csharp
public string? AppUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the <code>APP_URL</code> or <code>DIGITALOCEAN_APP_URL</code>
environment variable when it is available.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_ClusterName"></a> ClusterName

Gets or sets the Kubernetes cluster name to stamp onto exported resources for DOKS deployments.

```csharp
public string? ClusterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_CollectorNamespace"></a> CollectorNamespace

Gets or sets the collector namespace used to build the in-cluster DOKS collector endpoint.

```csharp
public string? CollectorNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to <xref href="Cephalon.Observability.DigitalOcean.Configuration.DigitalOceanTelemetryExportOptions.Namespace" data-throw-if-not-resolved="false"></xref> and then to <code>POD_NAMESPACE</code>
when the host runs inside a pod.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_CollectorPort"></a> CollectorPort

Gets or sets the collector port used for the in-cluster DOKS collector endpoint.

```csharp
public int? CollectorPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Remarks

When omitted, the package falls back to <code>4317</code> for <code>otlp</code> / <code>otlp/grpc</code> and
<code>4318</code> for <code>otlp/http</code>.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_CollectorScheme"></a> CollectorScheme

Gets or sets the URI scheme used for the in-cluster DOKS collector endpoint.

```csharp
public string? CollectorScheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>http</code> and <code>https</code>. The default is <code>http</code>.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_CollectorServiceName"></a> CollectorServiceName

Gets or sets the collector service name used to build the in-cluster DOKS collector endpoint.

```csharp
public string? CollectorServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_DropletId"></a> DropletId

Gets or sets the Droplet identifier to stamp onto exported resources.

```csharp
public string? DropletId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted and <xref href="Cephalon.Observability.DigitalOcean.Configuration.DigitalOceanTelemetryExportOptions.UseDropletMetadataDefaults" data-throw-if-not-resolved="false"></xref> is enabled, the package attempts to read
the identifier from the Droplet metadata service.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_DropletMetadataEndpoint"></a> DropletMetadataEndpoint

Gets or sets the base URI of the Droplet metadata-service endpoint.

```csharp
public string? DropletMetadataEndpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the standard DigitalOcean metadata-service base URI.
This override exists mainly for proxies, alternative routing, or automated testing.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_Headers"></a> Headers

Gets or sets the raw OTLP headers string added to collector requests.

```csharp
public string? Headers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use the standard OTLP <code>key=value</code> comma-separated format when a collector, gateway, or route
expects explicit headers.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the DigitalOcean deployment target whose hosted defaults should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>droplet</code>, <code>doks</code>, and <code>app-platform</code>. The package maps them to
package-specific <code>cloud.platform</code> values so the collector-first DigitalOcean slice stays explicit
without pretending those values are part of the engine core.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_MetadataTimeoutMilliseconds"></a> MetadataTimeoutMilliseconds

Gets or sets the timeout, in milliseconds, used for Droplet metadata-service lookups.

```csharp
public int? MetadataTimeoutMilliseconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Remarks

When omitted, the package falls back to a short one-second timeout so non-Droplet hosts do not stall
during best-effort metadata detection.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_Namespace"></a> Namespace

Gets or sets the workload namespace to stamp onto exported resources for DOKS deployments.

```csharp
public string? Namespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the current pod namespace through the <code>POD_NAMESPACE</code>
environment variable when it is available.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_Region"></a> Region

Gets or sets the DigitalOcean region slug to stamp onto exported resources.

```csharp
public string? Region { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_TrustedCaCertificatePath"></a> TrustedCaCertificatePath

Gets or sets the filesystem path to a trusted CA bundle used for HTTPS OTLP/HTTP traces and metrics
against shared or in-cluster DigitalOcean collectors.

```csharp
public string? TrustedCaCertificatePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Because the current OTLP logging exporter does not support custom <code>HttpClient</code> wiring for HTTP,
the package rejects configurations that require this custom CA path for logs. OTLP/gRPC custom CA
wiring is also left explicit and unsupported for now.

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_UseDropletMetadataDefaults"></a> UseDropletMetadataDefaults

Gets or sets a value indicating whether the package should query the Droplet metadata service to fill
in best-effort <code>host.id</code>, <code>host.name</code>, and <code>cloud.region</code> values when they are missing.

```csharp
public bool UseDropletMetadataDefaults { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_UseInClusterCollectorService"></a> UseInClusterCollectorService

Gets or sets a value indicating whether the package should target an in-cluster collector service for
DOKS deployments when no shared endpoint is configured.

```csharp
public bool UseInClusterCollectorService { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds DigitalOcean telemetry export options from configuration.

```csharp
public static DigitalOceanTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [DigitalOceanTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-configuration-digitaloceantelemetryexportoptions/)

The bound DigitalOcean telemetry export options.
