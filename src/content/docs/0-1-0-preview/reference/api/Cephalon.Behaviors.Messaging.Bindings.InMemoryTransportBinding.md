---
title: Class InMemoryTransportBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-inmemorytransportbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

In-memory messaging transport binding (transport ID: <code>"in-memory"</code>).
Uses a bounded <xref href="System.Threading.Channels.Channel%601" data-throw-if-not-resolved="false"></xref> with
<xref href="System.Threading.Channels.BoundedChannelFullMode.Wait" data-throw-if-not-resolved="false"></xref> backpressure internally.
No external dependencies — suitable for testing and local development.

```csharp
public sealed class InMemoryTransportBinding : IMessagingBehaviorBinding, IAsyncDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InMemoryTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-inmemorytransportbinding/)

#### Implements

[IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/), 
[IAsyncDisposable](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding__ctor_Cephalon_Behaviors_Messaging_Options_InMemoryTransportOptions_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding__"></a> InMemoryTransportBinding\(InMemoryTransportOptions, ILogger<InMemoryTransportBinding\>\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Messaging.Bindings.InMemoryTransportBinding" data-throw-if-not-resolved="false"></xref> with the supplied options.

```csharp
public InMemoryTransportBinding(InMemoryTransportOptions options, ILogger<InMemoryTransportBinding> logger)
```

#### Parameters

`options` [InMemoryTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-inmemorytransportoptions/)

The in-memory transport options.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[InMemoryTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-inmemorytransportbinding/)\>

The logger for this binding.

## Properties

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding_TransportId"></a> TransportId

Gets the canonical transport identifier (e.g. <code>"rabbitmq"</code>, <code>"kafka"</code>, <code>"in-memory"</code>).

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding_DisposeAsync"></a> DisposeAsync\(\)

Performs application-defined tasks associated with freeing, releasing, or
resetting unmanaged resources asynchronously.

```csharp
public ValueTask DisposeAsync()
```

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that represents the asynchronous dispose operation.

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding_SendAsync_System_Object_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> SendAsync\(object, IBehaviorContext, CancellationToken\)

Enqueues a message for dispatch. Safe to call from multiple threads.
Will apply backpressure (async wait) when the channel reaches its configured capacity.

```csharp
public Task SendAsync(object input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`input` [object](https://learn.microsoft.com/dotnet/api/system.object)

The input message object.

`context` IBehaviorContext

The behavior execution context.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A cancellation token.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the message has been written to the channel.

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding_StartAsync_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_System_Threading_CancellationToken_"></a> StartAsync\(BehaviorTopologyDescriptor, BehaviorDispatcher, CancellationToken\)

Starts consuming messages for the given behavior topology and dispatches them.
Called once per descriptor per transport; implementations should be idempotent.

```csharp
public Task StartAsync(BehaviorTopologyDescriptor descriptor, BehaviorDispatcher dispatcher, CancellationToken ct)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor.

`dispatcher` [BehaviorDispatcher](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviordispatcher/)

The behavior dispatcher to invoke for each received message.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that signals when the host is shutting down.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the binding is fully started.

### <a id="Cephalon_Behaviors_Messaging_Bindings_InMemoryTransportBinding_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

Stops the binding and releases transport resources.

```csharp
public Task StopAsync(CancellationToken ct)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the graceful-stop wait.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the binding has fully stopped.
