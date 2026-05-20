---
title: Class TanzuTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-tanzu-configuration-tanzutelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Tanzu.Configuration](/0-1-0-preview/reference/api/cephalon-observability-tanzu-configuration/)  
Assembly: Cephalon.Observability.Tanzu.dll  

Configures VMware Tanzu observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class TanzuTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TanzuTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-tanzu-configuration-tanzutelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions__ctor"></a> TanzuTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Tanzu.Configuration.TanzuTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TanzuTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ClusterName"></a> ClusterName

Gets or sets the Kubernetes cluster name to stamp onto exported resources.

```csharp
public string? ClusterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_Headers"></a> Headers

Gets or sets the raw OTLP headers string added to Tanzu proxy or shared collector requests.

```csharp
public string? Headers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use the standard OTLP <code>key=value</code> comma-separated format when a proxy, route, or gateway expects
explicit headers.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the VMware Tanzu deployment target whose hosted defaults should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>tkg</code>, <code>tkgi</code>, and <code>tap</code>.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_Namespace"></a> Namespace

Gets or sets the workload namespace to stamp onto exported resources.

```csharp
public string? Namespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the current pod namespace through the <code>POD_NAMESPACE</code>
environment variable when it is available.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ProxyNamespace"></a> ProxyNamespace

Gets or sets the proxy namespace used to build the in-cluster Tanzu proxy endpoint.

```csharp
public string? ProxyNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to <xref href="Cephalon.Observability.Tanzu.Configuration.TanzuTelemetryExportOptions.Namespace" data-throw-if-not-resolved="false"></xref> and then to
<code>POD_NAMESPACE</code> when the host runs inside a pod.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ProxyPath"></a> ProxyPath

Gets or sets the optional base path used for the in-cluster Tanzu proxy endpoint.

```csharp
public string? ProxyPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When <code>otlp/http</code> is selected, the package still appends the standard OTLP signal path beneath
this base path unless the full signal path was already provided.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ProxyPort"></a> ProxyPort

Gets or sets the proxy port used for the in-cluster Tanzu proxy endpoint.

```csharp
public int? ProxyPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Remarks

This value stays required when <xref href="Cephalon.Observability.Tanzu.Configuration.TanzuTelemetryExportOptions.UseInClusterProxyService" data-throw-if-not-resolved="false"></xref> is enabled so the package does
not pretend the current Tanzu proxy path has one generic vendor-wide OTLP port for every deployment.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ProxyScheme"></a> ProxyScheme

Gets or sets the URI scheme used for the in-cluster Tanzu proxy endpoint.

```csharp
public string? ProxyScheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>http</code> and <code>https</code>. The default is <code>http</code>.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_ProxyServiceName"></a> ProxyServiceName

Gets or sets the proxy service name used to build the in-cluster Tanzu proxy endpoint.

```csharp
public string? ProxyServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_TrustedCaCertificatePath"></a> TrustedCaCertificatePath

Gets or sets the filesystem path to a trusted CA bundle used for HTTPS OTLP/HTTP traces and metrics
against shared collectors or Tanzu proxy endpoints.

```csharp
public string? TrustedCaCertificatePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Because the current OTLP logging exporter does not support custom <code>HttpClient</code> wiring for HTTP,
the package rejects configurations that require this custom CA path for logs. OTLP/gRPC custom CA
wiring is also left explicit and unsupported for now.

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_UseInClusterProxyService"></a> UseInClusterProxyService

Gets or sets a value indicating whether the package should target an in-cluster Tanzu proxy service
for trace handoff when no shared endpoint is configured.

```csharp
public bool UseInClusterProxyService { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This trace-handoff path intentionally stays explicit because the current Tanzu and Wavefront
documentation centers proxy-mediated OpenTelemetry traces, not one generic managed OTLP backend for
every signal.

## Methods

### <a id="Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Tanzu telemetry export options from configuration.

```csharp
public static TanzuTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [TanzuTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-tanzu-configuration-tanzutelemetryexportoptions/)

The bound Tanzu telemetry export options.
