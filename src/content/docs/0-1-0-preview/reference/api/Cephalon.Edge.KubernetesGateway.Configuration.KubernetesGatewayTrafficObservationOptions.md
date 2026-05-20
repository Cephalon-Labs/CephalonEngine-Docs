---
title: Class KubernetesGatewayTrafficObservationOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficobservationoptions
editUrl: false
---

Namespace: [Cephalon.Edge.KubernetesGateway.Configuration](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration/)  
Assembly: Cephalon.Edge.KubernetesGateway.dll  

Configures how the Kubernetes Gateway traffic materializer interacts with the Kubernetes Gateway API control plane.

```csharp
public sealed class KubernetesGatewayTrafficObservationOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesGatewayTrafficObservationOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficobservationoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions__ctor"></a> KubernetesGatewayTrafficObservationOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.KubernetesGateway.Configuration.KubernetesGatewayTrafficObservationOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KubernetesGatewayTrafficObservationOptions()
```

## Properties

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_EnableCleanupSweep"></a> EnableCleanupSweep

Gets or sets a value indicating whether apply-and-reconcile mode should also sweep previously owned stale HTTPRoute resources.

```csharp
public bool EnableCleanupSweep { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This cleanup sweep is disabled by default so existing apply-and-reconcile behavior stays additive. When enabled, the
materializer will delete transferred resources and prune orphaned resources that still carry Cephalon ownership labels
in the configured route namespaces.

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_KubeConfigPath"></a> KubeConfigPath

Gets or sets the explicit kubeconfig path used when the pack creates its own client outside the cluster.

```csharp
public string? KubeConfigPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_KubeContext"></a> KubeContext

Gets or sets the optional kubeconfig context override used when the pack creates its own client.

```csharp
public string? KubeContext { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_MasterUrl"></a> MasterUrl

Gets or sets the optional API-server override used when the pack creates its own client from kubeconfig.

```csharp
public string? MasterUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_Mode"></a> Mode

Gets or sets the control-plane mode used by the Kubernetes Gateway materializer.

```csharp
public string Mode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default value keeps the pack in configured-intent mode so existing projected-intent behavior remains additive
without claiming a live apply. Set this to <code>observe-only</code> when the pack should read live Gateway API resources
without writing them, or <code>apply-and-reconcile</code> when the pack should manage owned HTTPRoute resources and
continuously reconcile observed status back into the shared runtime surfaces.

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, used for recurring live observation or reconciliation after startup materialization.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_StaleAfterSeconds"></a> StaleAfterSeconds

Gets or sets the freshness window, in seconds, that observed status should advertise to operators.

```csharp
public int StaleAfterSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationOptions_UseInClusterConfiguration"></a> UseInClusterConfiguration

Gets or sets a value indicating whether in-cluster Kubernetes configuration should be used when the pack creates its own client.

```csharp
public bool UseInClusterConfiguration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
