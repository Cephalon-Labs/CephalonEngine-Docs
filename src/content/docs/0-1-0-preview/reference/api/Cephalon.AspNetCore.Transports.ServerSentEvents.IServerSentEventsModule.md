---
title: Interface IServerSentEventsModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-serversentevents-iserversenteventsmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.ServerSentEvents](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-serversentevents/)  
Assembly: Cephalon.AspNetCore.dll  

Defines Server-Sent Events endpoint contributions made by a Cephalon module on ASP.NET Core.

```csharp
public interface IServerSentEventsModule : IModule
```

#### Implements

IModule

## Methods

### <a id="Cephalon_AspNetCore_Transports_ServerSentEvents_IServerSentEventsModule_MapServerSentEvents_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapServerSentEvents\(IEndpointRouteBuilder\)

Maps the module's Server-Sent Events endpoints onto the supplied endpoint route builder.

```csharp
void MapServerSentEvents(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
