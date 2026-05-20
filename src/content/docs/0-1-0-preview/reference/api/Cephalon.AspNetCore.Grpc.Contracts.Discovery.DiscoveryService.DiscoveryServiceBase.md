---
title: Class DiscoveryService.DiscoveryServiceBase
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryservicebase
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Base class for server-side implementations of DiscoveryService

```csharp
[BindServiceMethod(typeof(DiscoveryService), "BindService")]
public abstract class DiscoveryService.DiscoveryServiceBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiscoveryService.DiscoveryServiceBase](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryservicebase/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceBase_ExchangeGreetings_Grpc_Core_IAsyncStreamReader_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest__Grpc_Core_IServerStreamWriter_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloReply__Grpc_Core_ServerCallContext_"></a> ExchangeGreetings\(IAsyncStreamReader<HelloRequest\>, IServerStreamWriter<HelloReply\>, ServerCallContext\)

Exchanges greeting messages bidirectionally to validate duplex streaming support.

```csharp
public virtual Task ExchangeGreetings(IAsyncStreamReader<HelloRequest> requestStream, IServerStreamWriter<HelloReply> responseStream, ServerCallContext context)
```

#### Parameters

`requestStream` [IAsyncStreamReader](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/IAsyncStreamReader.cs)<[HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)\>

Used for reading requests from the client.

`responseStream` [IServerStreamWriter](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/IServerStreamWriter.cs)<[HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

Used for sending responses back to the client.

`context` [ServerCallContext](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ServerCallContext.cs)

The context of the server-side call handler being invoked.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task indicating completion of the handler.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceBase_SayHello_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Grpc_Core_ServerCallContext_"></a> SayHello\(HelloRequest, ServerCallContext\)

Returns a single greeting for the requested caller.

```csharp
public virtual Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
```

#### Parameters

`request` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

The request received from the client.

`context` [ServerCallContext](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ServerCallContext.cs)

The context of the server-side call handler being invoked.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

The response to send back to the client (wrapped by a task).

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceBase_StreamPrinciples_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Grpc_Core_IServerStreamWriter_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply__Grpc_Core_ServerCallContext_"></a> StreamPrinciples\(PrinciplesRequest, IServerStreamWriter<PrincipleReply\>, ServerCallContext\)

Streams the host principles that describe the Cephalon runtime shape.

```csharp
public virtual Task StreamPrinciples(PrinciplesRequest request, IServerStreamWriter<PrincipleReply> responseStream, ServerCallContext context)
```

#### Parameters

`request` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

The request received from the client.

`responseStream` [IServerStreamWriter](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/IServerStreamWriter.cs)<[PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)\>

Used for sending responses back to the client.

`context` [ServerCallContext](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ServerCallContext.cs)

The context of the server-side call handler being invoked.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task indicating completion of the handler.
