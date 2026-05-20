---
title: Interface IMessagingBehaviorBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Adapts a messaging transport to the ABT behavior dispatcher.
Each transport variant (InMemory, RabbitMQ, Kafka, etc.) implements this interface
and is registered in the <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.

```csharp
public interface IMessagingBehaviorBinding
```

## Properties

### <a id="Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBinding_TransportId"></a> TransportId

Gets the canonical transport identifier (e.g. <code>"rabbitmq"</code>, <code>"kafka"</code>, <code>"in-memory"</code>).

```csharp
string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBinding_StartAsync_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_System_Threading_CancellationToken_"></a> StartAsync\(BehaviorTopologyDescriptor, BehaviorDispatcher, CancellationToken\)

Starts consuming messages for the given behavior topology and dispatches them.
Called once per descriptor per transport; implementations should be idempotent.

```csharp
Task StartAsync(BehaviorTopologyDescriptor descriptor, BehaviorDispatcher dispatcher, CancellationToken ct)
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

### <a id="Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBinding_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

Stops the binding and releases transport resources.

```csharp
Task StopAsync(CancellationToken ct)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the graceful-stop wait.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the binding has fully stopped.
