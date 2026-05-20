---
title: Class TraefikTrafficObservationOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficobservationoptions
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Configuration](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Configures how the Traefik traffic materializer reads live Kubernetes resources.

```csharp
public sealed class TraefikTrafficObservationOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikTrafficObservationOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficobservationoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions__ctor"></a> TraefikTrafficObservationOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.Traefik.Configuration.TraefikTrafficObservationOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TraefikTrafficObservationOptions()
```

## Properties

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_EnableCleanupSweep"></a> EnableCleanupSweep

Gets or sets a value indicating whether apply-and-reconcile mode should also sweep previously owned stale IngressRoute resources.

```csharp
public bool EnableCleanupSweep { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This cleanup sweep is disabled by default so existing apply-and-reconcile behavior stays additive. When enabled, the
materializer will delete transferred resources and prune orphaned resources that still carry Cephalon ownership labels
in the configured route namespaces.

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_KubeConfigPath"></a> KubeConfigPath

Gets or sets the explicit kubeconfig path used when the pack creates its own client outside the cluster.

```csharp
public string? KubeConfigPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_KubeContext"></a> KubeContext

Gets or sets the optional kubeconfig context override used when the pack creates its own client.

```csharp
public string? KubeContext { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_MasterUrl"></a> MasterUrl

Gets or sets the optional API-server override used when the pack creates its own client from kubeconfig.

```csharp
public string? MasterUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_Mode"></a> Mode

Gets or sets the control-plane mode used by the Traefik materializer.

```csharp
public string Mode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default value keeps the pack in configured-intent mode so projected-intent behavior remains additive without
claiming a live apply. Set this to <code>observe-only</code> when the pack should read live Traefik Kubernetes CRD
resources and project the observed posture back into the shared runtime catalog, or to
<code>apply-and-reconcile</code> when the pack should write owned <code>IngressRoute</code> resources before observing live
Traefik posture back into that same shared runtime catalog.

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, used for recurring live observation after startup materialization.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_StaleAfterSeconds"></a> StaleAfterSeconds

Gets or sets the freshness window, in seconds, that observed status should advertise to operators.

```csharp
public int StaleAfterSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationOptions_UseInClusterConfiguration"></a> UseInClusterConfiguration

Gets or sets a value indicating whether in-cluster Kubernetes configuration should be used when the pack creates its own client.

```csharp
public bool UseInClusterConfiguration { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
