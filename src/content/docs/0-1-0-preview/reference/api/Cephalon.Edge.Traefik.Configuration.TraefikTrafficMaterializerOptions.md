---
title: Class TraefikTrafficMaterializerOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficmaterializeroptions
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Configuration](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Configures the Traefik IngressRoute control-plane materializer for provider-managed cell traffic automation.

```csharp
public sealed class TraefikTrafficMaterializerOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikTrafficMaterializerOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficmaterializeroptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions__ctor"></a> TraefikTrafficMaterializerOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.Traefik.Configuration.TraefikTrafficMaterializerOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TraefikTrafficMaterializerOptions()
```

## Fields

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_DefaultMaterializerId"></a> DefaultMaterializerId

Gets the default materializer identifier used by the Traefik traffic materializer.

```csharp
public const string DefaultMaterializerId = "traefik-materializer"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_DefaultProviderId"></a> DefaultProviderId

Gets the default provider identifier used by the Traefik traffic materializer.

```csharp
public const string DefaultProviderId = "traefik"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_EntryPoints"></a> EntryPoints

Gets the default Traefik entry points applied when a route-level override is absent.

```csharp
public IList<string> EntryPoints { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_MaterializerId"></a> MaterializerId

Gets or sets the stable materializer identifier that should appear on operator-facing runtime answers.

```csharp
public string MaterializerId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_Observation"></a> Observation

Gets the live-observation options used to overlay Traefik IngressRoute status back into the shared runtime catalog.

```csharp
public TraefikTrafficObservationOptions Observation { get; }
```

#### Property Value

 [TraefikTrafficObservationOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficobservationoptions/)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_Priority"></a> Priority

Gets or sets the priority used when multiple provider materializers can reconcile the same automation answer.
Higher values win while ties still fail deterministically in the engine.

```csharp
public int Priority { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_ProviderId"></a> ProviderId

Gets or sets the provider identifier that the materializer owns.

```csharp
public string ProviderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_RouteNamespace"></a> RouteNamespace

Gets or sets the default Kubernetes namespace that contains projected IngressRoute resources.

```csharp
public string? RouteNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions_Routes"></a> Routes

Gets the route-level Traefik IngressRoute projections owned by this materializer.

```csharp
public IList<TraefikIngressRouteOptions> Routes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TraefikIngressRouteOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikingressrouteoptions/)\>
