---
title: Class OpenShiftTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-openshift-configuration-openshifttelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.OpenShift.Configuration](/0-1-0-preview/reference/api/cephalon-observability-openshift-configuration/)  
Assembly: Cephalon.Observability.OpenShift.dll  

Configures Red Hat OpenShift observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class OpenShiftTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenShiftTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-openshift-configuration-openshifttelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions__ctor"></a> OpenShiftTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OpenShift.Configuration.OpenShiftTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OpenShiftTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_ClusterName"></a> ClusterName

Gets or sets the Kubernetes cluster name to stamp onto exported resources.

```csharp
public string? ClusterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_CollectorNamespace"></a> CollectorNamespace

Gets or sets the collector namespace used to build the in-cluster OpenShift collector endpoint.

```csharp
public string? CollectorNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to <xref href="Cephalon.Observability.OpenShift.Configuration.OpenShiftTelemetryExportOptions.Namespace" data-throw-if-not-resolved="false"></xref> and then to
<code>POD_NAMESPACE</code> when the host runs inside a pod.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_CollectorPort"></a> CollectorPort

Gets or sets the collector port used for the in-cluster OpenShift collector endpoint.

```csharp
public int? CollectorPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Remarks

When omitted, the package falls back to <code>4317</code> for <code>otlp</code> / <code>otlp/grpc</code> and
<code>4318</code> for <code>otlp/http</code>.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_CollectorScheme"></a> CollectorScheme

Gets or sets the URI scheme used for the in-cluster OpenShift collector endpoint.

```csharp
public string? CollectorScheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>http</code> and <code>https</code>. The default is <code>http</code>.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_CollectorServiceName"></a> CollectorServiceName

Gets or sets the collector service name used to build the in-cluster OpenShift collector endpoint.

```csharp
public string? CollectorServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_Headers"></a> Headers

Gets or sets the raw OTLP headers string added to OpenShift collector requests.

```csharp
public string? Headers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use the standard OTLP <code>key=value</code> comma-separated format when a collector, gateway, or route
expects explicit headers.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the OpenShift deployment target whose hosted defaults should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>openshift</code>, <code>aro</code>, and <code>rosa</code>.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_Namespace"></a> Namespace

Gets or sets the workload namespace to stamp onto exported resources.

```csharp
public string? Namespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the current pod namespace through the <code>POD_NAMESPACE</code>
environment variable when it is available.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_TrustedCaCertificatePath"></a> TrustedCaCertificatePath

Gets or sets the filesystem path to a trusted CA bundle used for HTTPS OTLP/HTTP traces and metrics
against in-cluster or shared OpenShift collectors.

```csharp
public string? TrustedCaCertificatePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This setting is intended for OpenShift service CAs or other cluster-local trust roots. Because the
current OTLP logging exporter does not support custom <code>HttpClient</code> wiring for HTTP, the package
rejects configurations that require this custom CA path for logs. OTLP/gRPC custom CA wiring is also
left explicit and unsupported for now.

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_UseInClusterCollectorService"></a> UseInClusterCollectorService

Gets or sets a value indicating whether the package should target an in-cluster OpenShift collector
service when no shared endpoint is configured.

```csharp
public bool UseInClusterCollectorService { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds OpenShift telemetry export options from configuration.

```csharp
public static OpenShiftTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [OpenShiftTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-openshift-configuration-openshifttelemetryexportoptions/)

The bound OpenShift telemetry export options.
