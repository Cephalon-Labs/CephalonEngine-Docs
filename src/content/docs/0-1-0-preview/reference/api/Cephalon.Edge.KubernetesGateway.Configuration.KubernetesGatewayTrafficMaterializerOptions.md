---
title: Class KubernetesGatewayTrafficMaterializerOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficmaterializeroptions
editUrl: false
---

Namespace: [Cephalon.Edge.KubernetesGateway.Configuration](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration/)  
Assembly: Cephalon.Edge.KubernetesGateway.dll  

Configures the Kubernetes Gateway API control-plane materializer for provider-managed cell traffic automation.

```csharp
public sealed class KubernetesGatewayTrafficMaterializerOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesGatewayTrafficMaterializerOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficmaterializeroptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions__ctor"></a> KubernetesGatewayTrafficMaterializerOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Edge.KubernetesGateway.Configuration.KubernetesGatewayTrafficMaterializerOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KubernetesGatewayTrafficMaterializerOptions()
```

## Fields

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_DefaultMaterializerId"></a> DefaultMaterializerId

Gets the default materializer identifier used by the Kubernetes Gateway traffic materializer.

```csharp
public const string DefaultMaterializerId = "kubernetes-gateway-materializer"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_DefaultProviderId"></a> DefaultProviderId

Gets the default provider identifier used by the Kubernetes Gateway traffic materializer.

```csharp
public const string DefaultProviderId = "kubernetes-gateway"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_ControllerName"></a> ControllerName

Gets or sets the optional Gateway controller name that owns the configured GatewayClass.

```csharp
public string? ControllerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_GatewayClassName"></a> GatewayClassName

Gets or sets the optional default GatewayClass name that backs the projected traffic intent.

```csharp
public string? GatewayClassName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_GatewayName"></a> GatewayName

Gets or sets the default Gateway name targeted by projected HTTPRoute parent references.

```csharp
public string? GatewayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_GatewayNamespace"></a> GatewayNamespace

Gets or sets the default Kubernetes namespace that contains the projected Gateway resource.

```csharp
public string? GatewayNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_ListenerName"></a> ListenerName

Gets or sets the optional default Gateway listener or section name used by projected parent references.

```csharp
public string? ListenerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_MaterializerId"></a> MaterializerId

Gets or sets the stable materializer identifier that should appear on operator-facing runtime answers.

```csharp
public string MaterializerId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_Observation"></a> Observation

Gets the live-observation options used to overlay Kubernetes Gateway API status back into the shared runtime catalog.

```csharp
public KubernetesGatewayTrafficObservationOptions Observation { get; }
```

#### Property Value

 [KubernetesGatewayTrafficObservationOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficobservationoptions/)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_Priority"></a> Priority

Gets or sets the priority used when multiple provider materializers can reconcile the same automation answer.
Higher values win while ties still fail deterministically in the engine.

```csharp
public int Priority { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_ProviderId"></a> ProviderId

Gets or sets the provider identifier that the materializer owns.

```csharp
public string ProviderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_RouteNamespace"></a> RouteNamespace

Gets or sets the default namespace used for projected HTTPRoute resources when a route-level override is absent.

```csharp
public string? RouteNamespace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions_Routes"></a> Routes

Gets the route-level Kubernetes Gateway projections owned by this materializer.

```csharp
public IList<KubernetesGatewayTrafficRouteOptions> Routes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KubernetesGatewayTrafficRouteOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficrouteoptions/)\>
