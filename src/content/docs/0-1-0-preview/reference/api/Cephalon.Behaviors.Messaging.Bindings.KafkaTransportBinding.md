---
title: Class KafkaTransportBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-kafkatransportbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Kafka messaging transport binding (transport ID: <code>"kafka"</code>).
Consumes messages from a Kafka topic and dispatches them through the ABT behavior dispatcher.
Manually commits offsets after successful dispatch. Supports partition assignment/revocation logging.

```csharp
public sealed class KafkaTransportBinding : IMessagingBehaviorBinding, IAsyncDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KafkaTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-kafkatransportbinding/)

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

### <a id="Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding__ctor_Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding__Microsoft_Extensions_DependencyInjection_IServiceScopeFactory_"></a> KafkaTransportBinding\(KafkaTransportOptions, ILogger<KafkaTransportBinding\>, IServiceScopeFactory?\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Messaging.Bindings.KafkaTransportBinding" data-throw-if-not-resolved="false"></xref> with the supplied options and logger.

```csharp
public KafkaTransportBinding(KafkaTransportOptions options, ILogger<KafkaTransportBinding> logger, IServiceScopeFactory? scopeFactory = null)
```

#### Parameters

`options` [KafkaTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-kafkatransportoptions/)

The Kafka transport options.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[KafkaTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-kafkatransportbinding/)\>

The logger for this binding.

`scopeFactory` [IServiceScopeFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicescopefactory)?

Optional scope factory used to resolve scoped services such as <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> per message.

## Properties

### <a id="Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding_TransportId"></a> TransportId

Gets the canonical transport identifier (e.g. <code>"rabbitmq"</code>, <code>"kafka"</code>, <code>"in-memory"</code>).

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding_DisposeAsync"></a> DisposeAsync\(\)

Performs application-defined tasks associated with freeing, releasing, or
resetting unmanaged resources asynchronously.

```csharp
public ValueTask DisposeAsync()
```

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that represents the asynchronous dispose operation.

### <a id="Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding_StartAsync_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_System_Threading_CancellationToken_"></a> StartAsync\(BehaviorTopologyDescriptor, BehaviorDispatcher, CancellationToken\)

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

### <a id="Cephalon_Behaviors_Messaging_Bindings_KafkaTransportBinding_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

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
