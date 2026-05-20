---
title: Class DiscoveryService
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Demonstrates the baseline unary and streaming discovery endpoints exposed by the
Cephalon ASP.NET Core gRPC adapter.

```csharp
public static class DiscoveryService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiscoveryService](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_Descriptor"></a> Descriptor

Service descriptor

```csharp
public static ServiceDescriptor Descriptor { get; }
```

#### Property Value

 ServiceDescriptor

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_BindService_Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceBase_"></a> BindService\(DiscoveryServiceBase\)

Creates service definition that can be registered with a server

```csharp
public static ServerServiceDefinition BindService(DiscoveryService.DiscoveryServiceBase serviceImpl)
```

#### Parameters

`serviceImpl` [DiscoveryService](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice/).[DiscoveryServiceBase](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryservicebase/)

An object implementing the server-side handling logic.

#### Returns

 [ServerServiceDefinition](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ServerServiceDefinition.cs)

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_BindService_Grpc_Core_ServiceBinderBase_Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceBase_"></a> BindService\(ServiceBinderBase, DiscoveryServiceBase\)

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    Note: this method is part of an experimental API that can change or be removed without any prior notice.

```csharp
public static void BindService(ServiceBinderBase serviceBinder, DiscoveryService.DiscoveryServiceBase serviceImpl)
```

#### Parameters

`serviceBinder` [ServiceBinderBase](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ServiceBinderBase.cs)

Service methods will be bound by calling <code>AddMethod</code> on this object.

`serviceImpl` [DiscoveryService](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice/).[DiscoveryServiceBase](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryservicebase/)

An object implementing the server-side handling logic.
