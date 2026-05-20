---
title: Interface IRestModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-irestmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest/)  
Assembly: Cephalon.AspNetCore.dll  

Defines REST endpoint contributions made by a Cephalon module on ASP.NET Core.

```csharp
public interface IRestModule : IModule
```

#### Implements

IModule

## Methods

### <a id="Cephalon_AspNetCore_Transports_Rest_IRestModule_MapRestEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapRestEndpoints\(IEndpointRouteBuilder\)

Maps the module's REST endpoints onto the supplied endpoint route builder.

```csharp
void MapRestEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
