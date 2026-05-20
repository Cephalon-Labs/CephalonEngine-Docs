---
title: Class DiscoveryService.DiscoveryServiceClient
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryserviceclient
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Client for DiscoveryService

```csharp
public class DiscoveryService.DiscoveryServiceClient : ClientBase<DiscoveryService.DiscoveryServiceClient>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClientBase](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs) ← 
[ClientBase<DiscoveryService.DiscoveryServiceClient\>](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs) ← 
[DiscoveryService.DiscoveryServiceClient](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryserviceclient/)

#### Inherited Members

[ClientBase<DiscoveryService.DiscoveryServiceClient\>.WithHost\(string\)](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs), 
[ClientBase<DiscoveryService.DiscoveryServiceClient\>.NewInstance\(ClientBase.ClientBaseConfiguration\)](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs), 
[ClientBase.CallInvoker](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient__ctor_Grpc_Core_ChannelBase_"></a> DiscoveryServiceClient\(ChannelBase\)

Creates a new client for DiscoveryService

```csharp
public DiscoveryServiceClient(ChannelBase channel)
```

#### Parameters

`channel` [ChannelBase](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ChannelBase.cs)

The channel to use to make remote calls.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient__ctor_Grpc_Core_CallInvoker_"></a> DiscoveryServiceClient\(CallInvoker\)

Creates a new client for DiscoveryService that uses a custom <code>CallInvoker</code>.

```csharp
public DiscoveryServiceClient(CallInvoker callInvoker)
```

#### Parameters

`callInvoker` [CallInvoker](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/CallInvoker.cs)

The callInvoker to use to make remote calls.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient__ctor"></a> DiscoveryServiceClient\(\)

Protected parameterless constructor to allow creation of test doubles.

```csharp
protected DiscoveryServiceClient()
```

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient__ctor_Grpc_Core_ClientBase_ClientBaseConfiguration_"></a> DiscoveryServiceClient\(ClientBaseConfiguration\)

Protected constructor to allow creation of configured clients.

```csharp
protected DiscoveryServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

#### Parameters

`configuration` [ClientBase](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs).[ClientBaseConfiguration](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs)

The client configuration.

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_ExchangeGreetings_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> ExchangeGreetings\(Metadata, DateTime?, CancellationToken\)

Exchanges greeting messages bidirectionally to validate duplex streaming support.

```csharp
public virtual AsyncDuplexStreamingCall<HelloRequest, HelloReply> ExchangeGreetings(Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/Metadata.cs)

The initial metadata to send with the call. This parameter is optional.

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

An optional token for canceling the call.

#### Returns

 [AsyncDuplexStreamingCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncDuplexStreamingCall.cs)<[HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/), [HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

The call object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_ExchangeGreetings_Grpc_Core_CallOptions_"></a> ExchangeGreetings\(CallOptions\)

Exchanges greeting messages bidirectionally to validate duplex streaming support.

```csharp
public virtual AsyncDuplexStreamingCall<HelloRequest, HelloReply> ExchangeGreetings(CallOptions options)
```

#### Parameters

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/CallOptions.cs)

The options for the call.

#### Returns

 [AsyncDuplexStreamingCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncDuplexStreamingCall.cs)<[HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/), [HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

The call object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_NewInstance_Grpc_Core_ClientBase_ClientBaseConfiguration_"></a> NewInstance\(ClientBaseConfiguration\)

Creates a new instance of client from given <code>ClientBaseConfiguration</code>.

```csharp
protected override DiscoveryService.DiscoveryServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

#### Parameters

`configuration` [ClientBase](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs).[ClientBaseConfiguration](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/ClientBase.cs)

#### Returns

 [DiscoveryService](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice/).[DiscoveryServiceClient](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-discoveryservice-discoveryserviceclient/)

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_SayHello_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHello\(HelloRequest, Metadata, DateTime?, CancellationToken\)

Returns a single greeting for the requested caller.

```csharp
public virtual HelloReply SayHello(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

The request to send to the server.

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/Metadata.cs)

The initial metadata to send with the call. This parameter is optional.

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

An optional token for canceling the call.

#### Returns

 [HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)

The response received from the server.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_SayHello_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Grpc_Core_CallOptions_"></a> SayHello\(HelloRequest, CallOptions\)

Returns a single greeting for the requested caller.

```csharp
public virtual HelloReply SayHello(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

The request to send to the server.

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/CallOptions.cs)

The options for the call.

#### Returns

 [HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)

The response received from the server.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_SayHelloAsync_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> SayHelloAsync\(HelloRequest, Metadata, DateTime?, CancellationToken\)

Returns a single greeting for the requested caller.

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloAsync(HelloRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

The request to send to the server.

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/Metadata.cs)

The initial metadata to send with the call. This parameter is optional.

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

An optional token for canceling the call.

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

The call object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_SayHelloAsync_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Grpc_Core_CallOptions_"></a> SayHelloAsync\(HelloRequest, CallOptions\)

Returns a single greeting for the requested caller.

```csharp
public virtual AsyncUnaryCall<HelloReply> SayHelloAsync(HelloRequest request, CallOptions options)
```

#### Parameters

`request` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

The request to send to the server.

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/CallOptions.cs)

The options for the call.

#### Returns

 [AsyncUnaryCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncUnaryCall.cs)<[HelloReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-helloreply/)\>

The call object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_StreamPrinciples_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Grpc_Core_Metadata_System_Nullable_System_DateTime__System_Threading_CancellationToken_"></a> StreamPrinciples\(PrinciplesRequest, Metadata, DateTime?, CancellationToken\)

Streams the host principles that describe the Cephalon runtime shape.

```csharp
public virtual AsyncServerStreamingCall<PrincipleReply> StreamPrinciples(PrinciplesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

The request to send to the server.

`headers` [Metadata](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/Metadata.cs)

The initial metadata to send with the call. This parameter is optional.

`deadline` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

An optional token for canceling the call.

#### Returns

 [AsyncServerStreamingCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncServerStreamingCall.cs)<[PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)\>

The call object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_DiscoveryService_DiscoveryServiceClient_StreamPrinciples_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Grpc_Core_CallOptions_"></a> StreamPrinciples\(PrinciplesRequest, CallOptions\)

Streams the host principles that describe the Cephalon runtime shape.

```csharp
public virtual AsyncServerStreamingCall<PrincipleReply> StreamPrinciples(PrinciplesRequest request, CallOptions options)
```

#### Parameters

`request` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

The request to send to the server.

`options` [CallOptions](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/CallOptions.cs)

The options for the call.

#### Returns

 [AsyncServerStreamingCall](https://github.com/grpc/grpc\-dotnet/blob/c52862d2be28c252a20786e08b82c48edcbf7325/src/Grpc.Core.Api/AsyncServerStreamingCall.cs)<[PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)\>

The call object.
