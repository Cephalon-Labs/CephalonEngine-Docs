---
title: Class GraphqlWsBehaviorBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlwsbehaviorbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

GraphQL over WebSocket transport binding (transport ID: <code>http.graphql-ws</code>).
Upgrades canonical routes such as <code>GET /graphql-ws/v1/cart/get</code> to a WebSocket connection.
The connection implements the
<code>graphql-transport-ws</code> sub-protocol:
<code>connection_init</code> → <code>connection_ack</code> → <code>subscribe</code> → <code>next</code> → <code>complete</code>.

```csharp
public sealed class GraphqlWsBehaviorBinding : IHttpBehaviorBinding
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GraphqlWsBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlwsbehaviorbinding/)

#### Implements

[IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlWsBehaviorBinding__ctor_Microsoft_Extensions_Configuration_IConfiguration_"></a> GraphqlWsBehaviorBinding\(IConfiguration?\)

Initializes a new <xref href="Cephalon.Behaviors.Http.Bindings.GraphqlWsBehaviorBinding" data-throw-if-not-resolved="false"></xref>.

```csharp
public GraphqlWsBehaviorBinding(IConfiguration? configuration = null)
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

Optional configuration used to resolve canonical behavior transport routes.
When omitted, the binding falls back to the default <code>/graphql-ws/v1</code> route policy.

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlWsBehaviorBinding_TransportId"></a> TransportId

Gets the canonical transport identifier, e.g. <code>http.jsonrpc</code>.

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlWsBehaviorBinding_MapAsync_Microsoft_AspNetCore_Builder_WebApplication_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_"></a> MapAsync\(WebApplication, BehaviorTopologyDescriptor, BehaviorDispatcher\)

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
