---
title: Class KubernetesGatewayTrafficObservationModes
slug: 0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficobservationmodes
editUrl: false
---

Namespace: [Cephalon.Edge.KubernetesGateway.Configuration](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration/)  
Assembly: Cephalon.Edge.KubernetesGateway.dll  

Defines the stable control-plane modes supported by the Kubernetes Gateway traffic materializer.

```csharp
public static class KubernetesGatewayTrafficObservationModes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesGatewayTrafficObservationModes](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficobservationmodes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationModes_ApplyAndReconcile"></a> ApplyAndReconcile

Applies owned HTTPRoute resources and then reconciles the observed Gateway API status back into the shared runtime catalog.

```csharp
public const string ApplyAndReconcile = "apply-and-reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationModes_ConfiguredIntent"></a> ConfiguredIntent

Publishes configured Kubernetes Gateway API intent without reading or writing live control-plane resources.

```csharp
public const string ConfiguredIntent = "configured-intent"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficObservationModes_ObserveOnly"></a> ObserveOnly

Reads live Kubernetes Gateway API status and projects the observed posture back into the shared runtime catalog.

```csharp
public const string ObserveOnly = "observe-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
