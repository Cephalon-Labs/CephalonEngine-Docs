---
title: Interface IHttpBehaviorBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Thin adapter that maps a behavior topology to one HTTP transport.
Each transport variant (JSON-RPC, GraphQL, GraphQL-SSE, GraphQL-WS, SSE, WebSocket, etc.)
implements this interface and is registered in the
<xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.

```csharp
public interface IHttpBehaviorBinding
```

## Properties

### <a id="Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBinding_TransportId"></a> TransportId

Gets the canonical transport identifier, e.g. <code>http.jsonrpc</code>.

```csharp
string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBinding_MapAsync_Microsoft_AspNetCore_Builder_WebApplication_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_"></a> MapAsync\(WebApplication, BehaviorTopologyDescriptor, BehaviorDispatcher\)

Maps the behavior's routes/endpoints onto the <xref href="Microsoft.AspNetCore.Builder.WebApplication" data-throw-if-not-resolved="false"></xref>.
Called at most once per descriptor per transport (lazy-init guards ensure this).

```csharp
Task MapAsync(WebApplication app, BehaviorTopologyDescriptor descriptor, BehaviorDispatcher dispatcher)
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
