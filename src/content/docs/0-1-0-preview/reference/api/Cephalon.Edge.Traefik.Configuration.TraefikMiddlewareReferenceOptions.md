---
title: Class TraefikMiddlewareReferenceOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikmiddlewarereferenceoptions
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Configuration](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Configures one Traefik middleware reference that should attach to a projected IngressRoute rule.

```csharp
public sealed class TraefikMiddlewareReferenceOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikMiddlewareReferenceOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikmiddlewarereferenceoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikMiddlewareReferenceOptions__ctor"></a> TraefikMiddlewareReferenceOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.Traefik.Configuration.TraefikMiddlewareReferenceOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TraefikMiddlewareReferenceOptions()
```

## Properties

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikMiddlewareReferenceOptions_Name"></a> Name

Gets or sets the Traefik middleware resource name.

```csharp
public string? Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikMiddlewareReferenceOptions_Namespace"></a> Namespace

Gets or sets the optional Kubernetes namespace that owns the middleware.
When omitted, the materializer falls back to the effective IngressRoute namespace.

```csharp
public string? Namespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
