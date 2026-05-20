---
title: Interface IJsonRpcModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-jsonrpc-modules-ijsonrpcmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.JsonRpc.Modules](/0-1-0-preview/reference/api/cephalon-aspnetcore-jsonrpc-modules/)  
Assembly: Cephalon.AspNetCore.JsonRpc.dll  

Defines JSON-RPC endpoint contributions made by a Cephalon module on ASP.NET Core.

```csharp
public interface IJsonRpcModule : IModule
```

#### Implements

IModule

## Methods

### <a id="Cephalon_AspNetCore_JsonRpc_Modules_IJsonRpcModule_MapJsonRpcEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapJsonRpcEndpoints\(IEndpointRouteBuilder\)

Maps the module's JSON-RPC endpoints onto the supplied endpoint route builder.

```csharp
void MapJsonRpcEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder that receives the module routes.
