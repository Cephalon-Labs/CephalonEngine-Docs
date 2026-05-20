---
title: Class TraefikTrafficObservationModes
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficobservationmodes
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Configuration](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Defines the stable control-plane modes supported by the Traefik traffic materializer.

```csharp
public static class TraefikTrafficObservationModes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikTrafficObservationModes](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficobservationmodes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationModes_ApplyAndReconcile"></a> ApplyAndReconcile

Applies owned Traefik IngressRoute resources and then observes live control-plane posture from the same runtime surface.

```csharp
public const string ApplyAndReconcile = "apply-and-reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationModes_ConfiguredIntent"></a> ConfiguredIntent

Publishes configured Traefik IngressRoute intent without reading live control-plane resources.

```csharp
public const string ConfiguredIntent = "configured-intent"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficObservationModes_ObserveOnly"></a> ObserveOnly

Reads live Traefik Kubernetes CRD resources and projects the observed posture back into the shared runtime catalog.

```csharp
public const string ObserveOnly = "observe-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
