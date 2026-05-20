---
title: Class KubernetesGatewayTrafficRouteOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficrouteoptions
editUrl: false
---

Namespace: [Cephalon.Edge.KubernetesGateway.Configuration](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration/)  
Assembly: Cephalon.Edge.KubernetesGateway.dll  

Configures one cell traffic automation route that should materialize into Kubernetes Gateway API intent.

```csharp
public sealed class KubernetesGatewayTrafficRouteOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesGatewayTrafficRouteOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficrouteoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions__ctor"></a> KubernetesGatewayTrafficRouteOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.KubernetesGateway.Configuration.KubernetesGatewayTrafficRouteOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KubernetesGatewayTrafficRouteOptions()
```

## Properties

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_BackendNamespace"></a> BackendNamespace

Gets or sets the Kubernetes namespace that contains the projected backend Service.
When omitted, the materializer falls back to the effective target route namespace.

```csharp
public string? BackendNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_BackendPort"></a> BackendPort

Gets or sets the backend Service port referenced by the projected HTTPRoute.

```csharp
public int? BackendPort { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_BackendServiceName"></a> BackendServiceName

Gets or sets the backend Kubernetes Service name referenced by the projected HTTPRoute.

```csharp
public string? BackendServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_BackendWeight"></a> BackendWeight

Gets or sets the optional backend weight applied to the projected Service reference.

```csharp
public int? BackendWeight { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_ControllerName"></a> ControllerName

Gets or sets the optional controller name associated with the parent GatewayClass.
When omitted, the materializer falls back to the pack-level <code>ControllerName</code>.

```csharp
public string? ControllerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_GatewayClassName"></a> GatewayClassName

Gets or sets the optional GatewayClass name associated with the parent Gateway.
When omitted, the materializer falls back to the pack-level <code>GatewayClassName</code>.

```csharp
public string? GatewayClassName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_GatewayName"></a> GatewayName

Gets or sets the parent Gateway name targeted by the projected HTTPRoute.
When omitted, the materializer falls back to the pack-level <code>GatewayName</code>.

```csharp
public string? GatewayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_GatewayNamespace"></a> GatewayNamespace

Gets or sets the Kubernetes namespace that contains the parent Gateway.
When omitted, the materializer falls back to the pack-level <code>GatewayNamespace</code>.

```csharp
public string? GatewayNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_Hostnames"></a> Hostnames

Gets the optional hostnames published by the projected HTTPRoute.

```csharp
public IList<string> Hostnames { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_HttpRouteName"></a> HttpRouteName

Gets or sets the HTTPRoute resource name that should represent the route in Kubernetes Gateway API.
When omitted, the materializer derives a deterministic DNS-safe name from <xref href="Cephalon.Edge.KubernetesGateway.Configuration.KubernetesGatewayTrafficRouteOptions.RouteId" data-throw-if-not-resolved="false"></xref>.

```csharp
public string? HttpRouteName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_ListenerName"></a> ListenerName

Gets or sets the optional Gateway listener or section name used by the projected parent reference.
When omitted, the materializer falls back to the pack-level <code>ListenerName</code>.

```csharp
public string? ListenerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_RouteId"></a> RouteId

Gets or sets the Cephalon cell-route identifier that this provider projection owns.

```csharp
public string? RouteId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficRouteOptions_RouteNamespace"></a> RouteNamespace

Gets or sets the Kubernetes namespace that should own the projected HTTPRoute resource.
When omitted, the materializer falls back to the pack-level <code>RouteNamespace</code> and then the effective Gateway namespace.

```csharp
public string? RouteNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
