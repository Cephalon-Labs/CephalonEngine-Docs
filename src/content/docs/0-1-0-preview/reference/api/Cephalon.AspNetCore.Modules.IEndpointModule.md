---
title: Interface IEndpointModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-modules-iendpointmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Modules](/0-1-0-preview/reference/api/cephalon-aspnetcore-modules/)  
Assembly: Cephalon.AspNetCore.dll  

Legacy REST module contract kept for compatibility with earlier Cephalon hosts.

```csharp
public interface IEndpointModule : IRestModule, IModule
```

#### Implements

[IRestModule](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-irestmodule/), 
IModule

## Remarks

New module code should generally implement <xref href="Cephalon.AspNetCore.Transports.Rest.IRestModule" data-throw-if-not-resolved="false"></xref> directly.

## Methods

### <a id="Cephalon_AspNetCore_Modules_IEndpointModule_MapEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapEndpoints\(IEndpointRouteBuilder\)

Maps the module's REST endpoints onto the supplied endpoint route builder.

```csharp
void MapEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
