---
title: Class KubernetesTelemetryExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-kubernetes-configuration-kubernetestelemetryexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Kubernetes.Configuration](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-configuration/)  
Assembly: Cephalon.Observability.Kubernetes.dll  

Configures Kubernetes observability defaults on top of the shared Cephalon telemetry contract.

```csharp
public sealed class KubernetesTelemetryExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-configuration-kubernetestelemetryexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions__ctor"></a> KubernetesTelemetryExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Kubernetes.Configuration.KubernetesTelemetryExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KubernetesTelemetryExportOptions()
```

## Properties

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_ClusterName"></a> ClusterName

Gets or sets the Kubernetes cluster name to stamp onto exported resources.

```csharp
public string? ClusterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_CollectorNamespace"></a> CollectorNamespace

Gets or sets the collector namespace used to build the in-cluster Kubernetes collector endpoint.

```csharp
public string? CollectorNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to <xref href="Cephalon.Observability.Kubernetes.Configuration.KubernetesTelemetryExportOptions.Namespace" data-throw-if-not-resolved="false"></xref> and then to <code>POD_NAMESPACE</code> when
the host runs inside a pod.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_CollectorPort"></a> CollectorPort

Gets or sets the collector port used for the in-cluster Kubernetes collector endpoint.

```csharp
public int? CollectorPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Remarks

When omitted, the package falls back to <code>4317</code> for <code>otlp</code> / <code>otlp/grpc</code> and
<code>4318</code> for <code>otlp/http</code>.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_CollectorScheme"></a> CollectorScheme

Gets or sets the URI scheme used for the in-cluster Kubernetes collector endpoint.

```csharp
public string? CollectorScheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>http</code> and <code>https</code>. The default is <code>http</code>.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_CollectorServiceName"></a> CollectorServiceName

Gets or sets the collector service name used to build the in-cluster Kubernetes collector endpoint.

```csharp
public string? CollectorServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_ContainerName"></a> ContainerName

Gets or sets the container name to stamp onto exported resources.

```csharp
public string? ContainerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the <code>CONTAINER_NAME</code> environment variable when it is available.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_Headers"></a> Headers

Gets or sets the raw OTLP headers string added to Kubernetes collector requests.

```csharp
public string? Headers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use the standard OTLP <code>key=value</code> comma-separated format when a collector, gateway, or route
expects explicit headers.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_Namespace"></a> Namespace

Gets or sets the workload namespace to stamp onto exported resources.

```csharp
public string? Namespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the current pod namespace through the <code>POD_NAMESPACE</code>
environment variable when it is available.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_NodeName"></a> NodeName

Gets or sets the Kubernetes node name to stamp onto exported resources.

```csharp
public string? NodeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the <code>NODE_NAME</code> environment variable when it is available.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_PodName"></a> PodName

Gets or sets the pod name to stamp onto exported resources.

```csharp
public string? PodName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to <code>POD_NAME</code> and then <code>HOSTNAME</code> when those environment
variables are available.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_PodUid"></a> PodUid

Gets or sets the pod UID to stamp onto exported resources.

```csharp
public string? PodUid { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the package falls back to the <code>POD_UID</code> environment variable when it is available.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_ServiceDnsSuffix"></a> ServiceDnsSuffix

Gets or sets the service DNS suffix used to build the in-cluster Kubernetes collector endpoint.

```csharp
public string? ServiceDnsSuffix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

The default is <code>svc.cluster.local</code>. Set this when a cluster uses a non-default service DNS suffix.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_TrustedCaCertificatePath"></a> TrustedCaCertificatePath

Gets or sets the filesystem path to a trusted CA bundle used for HTTPS OTLP/HTTP traces and metrics
against in-cluster or shared Kubernetes collectors.

```csharp
public string? TrustedCaCertificatePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Because the current OTLP logging exporter does not support custom <code>HttpClient</code> wiring for HTTP,
the package rejects configurations that require this custom CA path for logs. OTLP/gRPC custom CA
wiring is also left explicit and unsupported for now.

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_UseInClusterCollectorService"></a> UseInClusterCollectorService

Gets or sets a value indicating whether the package should target an in-cluster collector service when no
shared endpoint is configured.

```csharp
public bool UseInClusterCollectorService { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Kubernetes telemetry export options from configuration.

```csharp
public static KubernetesTelemetryExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [KubernetesTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-configuration-kubernetestelemetryexportoptions/)

The bound Kubernetes telemetry export options.
