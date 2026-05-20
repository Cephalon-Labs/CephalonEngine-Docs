---
title: Class TraefikIngressRouteOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikingressrouteoptions
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Configuration](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Configures one cell traffic automation route that should materialize into Traefik IngressRoute intent.

```csharp
public sealed class TraefikIngressRouteOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikIngressRouteOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikingressrouteoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions__ctor"></a> TraefikIngressRouteOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.Traefik.Configuration.TraefikIngressRouteOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TraefikIngressRouteOptions()
```

## Properties

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_BackendNamespace"></a> BackendNamespace

Gets or sets the Kubernetes namespace that owns the backend Service.
When omitted, the materializer falls back to the effective IngressRoute namespace.

```csharp
public string? BackendNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_BackendPort"></a> BackendPort

Gets or sets the backend Service port referenced by the projected route.

```csharp
public int? BackendPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_BackendScheme"></a> BackendScheme

Gets or sets the optional backend scheme such as <code>http</code> or <code>https</code>.

```csharp
public string? BackendScheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_BackendServiceName"></a> BackendServiceName

Gets or sets the backend Kubernetes Service name referenced by the projected route.

```csharp
public string? BackendServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_BackendWeight"></a> BackendWeight

Gets or sets the optional backend weight applied to the projected Service reference.

```csharp
public int? BackendWeight { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_EntryPoints"></a> EntryPoints

Gets the Traefik entry points that should accept requests for the projected route.
When empty, the materializer falls back to the pack-level <code>EntryPoints</code> list.

```csharp
public IList<string> EntryPoints { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_IngressRouteName"></a> IngressRouteName

Gets or sets the IngressRoute resource name that should represent the route in Traefik.
When omitted, the materializer derives a deterministic DNS-safe name from <xref href="Cephalon.Edge.Traefik.Configuration.TraefikIngressRouteOptions.RouteId" data-throw-if-not-resolved="false"></xref>.

```csharp
public string? IngressRouteName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_MatchRule"></a> MatchRule

Gets or sets the Traefik rule expression such as <code>Host(`api.example.com`) &amp;&amp; PathPrefix(`/orders`)</code>.

```csharp
public string? MatchRule { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_Middlewares"></a> Middlewares

Gets the middleware references that should attach to the projected route in declaration order.

```csharp
public IList<TraefikMiddlewareReferenceOptions> Middlewares { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TraefikMiddlewareReferenceOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefikmiddlewarereferenceoptions/)\>

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_PassHostHeader"></a> PassHostHeader

Gets or sets the optional pass-host-header posture applied to the projected backend Service reference.

```csharp
public bool? PassHostHeader { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_Priority"></a> Priority

Gets or sets the optional explicit Traefik route priority.

```csharp
public int? Priority { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_RouteId"></a> RouteId

Gets or sets the Cephalon cell-route identifier that this provider projection owns.

```csharp
public string? RouteId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_RouteNamespace"></a> RouteNamespace

Gets or sets the Kubernetes namespace that should own the projected IngressRoute resource.
When omitted, the materializer falls back to the pack-level <code>RouteNamespace</code>.

```csharp
public string? RouteNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_TlsOptionsName"></a> TlsOptionsName

Gets or sets the optional TLSOption resource name associated with the projected route.

```csharp
public string? TlsOptionsName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_TlsOptionsNamespace"></a> TlsOptionsNamespace

Gets or sets the optional Kubernetes namespace that owns the referenced TLSOption.
When omitted, the materializer falls back to the effective IngressRoute namespace.

```csharp
public string? TlsOptionsNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_Traefik_Configuration_TraefikIngressRouteOptions_TlsSecretName"></a> TlsSecretName

Gets or sets the optional TLS Secret name that should terminate the projected IngressRoute.

```csharp
public string? TlsSecretName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
