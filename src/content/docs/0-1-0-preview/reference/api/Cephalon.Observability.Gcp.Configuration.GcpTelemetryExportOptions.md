---
title: Class GcpTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-gcp-configuration-gcptelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Gcp.Configuration](/0-1-0-preview/reference/api/cephalon-observability-gcp-configuration/)  
Assembly: Cephalon.Observability.Gcp.dll  

Configures GCP-hosted observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class GcpTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GcpTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-gcp-configuration-gcptelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions__ctor"></a> GcpTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Gcp.Configuration.GcpTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GcpTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted GCP platform whose default resource attributes should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>gce</code>, <code>gke</code>, <code>cloudrun</code>, <code>appengine</code>, and <code>functions</code>.
The package maps them to the current OpenTelemetry <code>cloud.platform</code> attribute values.

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_Location"></a> Location

Gets or sets the GCP location to stamp onto exported resources when one should be made explicit.

```csharp
public string? Location { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When the value looks like a zonal location such as <code>asia-southeast1-b</code>, the package also derives
the matching <code>cloud.region</code>. When omitted, the package falls back to common GCP runtime
environment variables when they are available.

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_QuotaProjectId"></a> QuotaProjectId

Gets or sets the optional quota project header used for Google-managed ingestion requests.

```csharp
public string? QuotaProjectId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This value is written to the <code>x-goog-user-project</code> header only for Google-managed ingestion.
Shared collector or self-hosted OTLP paths ignore it.

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_UseApplicationDefaultCredentials"></a> UseApplicationDefaultCredentials

Gets or sets a value indicating whether Google-managed ingestion should authenticate by using
Application Default Credentials.

```csharp
public bool UseApplicationDefaultCredentials { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This setting only applies when <xref href="Cephalon.Observability.Gcp.Configuration.GcpTelemetryExportOptions.UseGoogleManagedIngestion" data-throw-if-not-resolved="false"></xref> is enabled and no shared
collector endpoint is configured.

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_UseGoogleManagedIngestion"></a> UseGoogleManagedIngestion

Gets or sets a value indicating whether the package should use Google-managed OTLP ingestion for traces
and metrics when no shared collector endpoint is configured.

```csharp
public bool UseGoogleManagedIngestion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

When this flag is enabled, the package targets <code>https://telemetry.googleapis.com</code> for traces and
metrics by using OTLP/HTTP plus Application Default Credentials. Logs stay on the shared collector or
platform logging path instead of being redirected through the Google-managed ingestion endpoint.

## Methods

### <a id="Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds GCP telemetry export options from configuration.

```csharp
public static GcpTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [GcpTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-gcp-configuration-gcptelemetryexportoptions/)

The bound GCP telemetry export options.
