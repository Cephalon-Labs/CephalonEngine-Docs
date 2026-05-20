---
title: Interface IGrpcModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-modules-igrpcmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Modules](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-modules/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Defines gRPC endpoint contributions made by a Cephalon module on ASP.NET Core.

```csharp
public interface IGrpcModule : IModule
```

#### Implements

IModule

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Modules_IGrpcModule_MapGrpcEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapGrpcEndpoints\(IEndpointRouteBuilder\)

Maps the module's gRPC endpoints onto the supplied endpoint route builder.

```csharp
void MapGrpcEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
