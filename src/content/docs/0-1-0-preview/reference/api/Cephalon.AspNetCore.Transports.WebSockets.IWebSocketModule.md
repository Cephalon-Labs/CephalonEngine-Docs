---
title: Interface IWebSocketModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-websockets-iwebsocketmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.WebSockets](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-websockets/)  
Assembly: Cephalon.AspNetCore.dll  

Defines WebSocket endpoint contributions made by a Cephalon module on ASP.NET Core.

```csharp
public interface IWebSocketModule : IModule
```

#### Implements

IModule

## Methods

### <a id="Cephalon_AspNetCore_Transports_WebSockets_IWebSocketModule_MapWebSocketEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapWebSocketEndpoints\(IEndpointRouteBuilder\)

Maps the module's WebSocket endpoints onto the supplied endpoint route builder.

```csharp
void MapWebSocketEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
