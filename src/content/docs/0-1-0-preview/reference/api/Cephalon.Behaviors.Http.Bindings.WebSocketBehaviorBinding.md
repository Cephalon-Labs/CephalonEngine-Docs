---
title: Class WebSocketBehaviorBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-websocketbehaviorbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Bidirectional WebSocket transport binding (transport ID: <code>http.ws</code>).
Upgrades canonical routes such as <code>GET /ws/v1/cart/get</code> to a full-duplex WebSocket
connection.
Each received JSON text frame is dispatched to the behavior and the result
is sent back as a JSON text frame. The connection is closed gracefully on
client close or cancellation.

```csharp
public sealed class WebSocketBehaviorBinding : IHttpBehaviorBinding
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WebSocketBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-websocketbehaviorbinding/)

#### Implements

[IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Canonical routes are derived from the shared <xref href="Cephalon.Abstractions.Behaviors.BehaviorApiSurfaceDescriptor" data-throw-if-not-resolved="false"></xref> plus
the configured WebSocket prefix (canonically <code>ApiRoutes:Prefixes:Ws</code>) and the resolved
default behavior document name. <xref href="Cephalon.AspNetCore.Hosting.ApiRoutesOptions.WsPrefix" data-throw-if-not-resolved="false"></xref> controls the
configurable root prefix.

## Constructors

### <a id="Cephalon_Behaviors_Http_Bindings_WebSocketBehaviorBinding__ctor_Microsoft_Extensions_Configuration_IConfiguration_"></a> WebSocketBehaviorBinding\(IConfiguration?\)

Initializes a new <xref href="Cephalon.Behaviors.Http.Bindings.WebSocketBehaviorBinding" data-throw-if-not-resolved="false"></xref>.

```csharp
public WebSocketBehaviorBinding(IConfiguration? configuration = null)
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

Optional configuration used to resolve canonical behavior transport routes.
When omitted, the binding falls back to the default <code>/ws/v1</code> route policy.

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_WebSocketBehaviorBinding_TransportId"></a> TransportId

Gets the canonical transport identifier, e.g. <code>http.jsonrpc</code>.

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Http_Bindings_WebSocketBehaviorBinding_MapAsync_Microsoft_AspNetCore_Builder_WebApplication_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_"></a> MapAsync\(WebApplication, BehaviorTopologyDescriptor, BehaviorDispatcher\)

Maps the behavior's routes/endpoints onto the <xref href="Microsoft.AspNetCore.Builder.WebApplication" data-throw-if-not-resolved="false"></xref>.
Called at most once per descriptor per transport (lazy-init guards ensure this).

```csharp
public Task MapAsync(WebApplication app, BehaviorTopologyDescriptor descriptor, BehaviorDispatcher dispatcher)
```

#### Parameters

`app` [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

The web application to register routes on.

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor.

`dispatcher` BehaviorDispatcher

The behavior dispatcher to invoke.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when all routes are mapped.
