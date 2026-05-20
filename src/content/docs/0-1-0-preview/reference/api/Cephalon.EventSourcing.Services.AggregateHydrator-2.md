---
title: Class AggregateHydrator
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-services-aggregatehydrator-2
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Services](/0-1-0-preview/reference/api/cephalon-eventsourcing-services/)  
Assembly: Cephalon.EventSourcing.dll  

Rehydrates aggregate state by replaying domain events from an event store.

```csharp
public sealed class AggregateHydrator<TAggregate, TState> where TAggregate : IAggregate<TState>, new()
```

#### Type Parameters

`TAggregate` 

The aggregate type that applies domain events.

`TState` 

The aggregate state shape.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AggregateHydrator<TAggregate, TState\>](Cephalon.EventSourcing.Services.AggregateHydrator\-2.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_Services_AggregateHydrator_2__ctor"></a> AggregateHydrator\(\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Services.AggregateHydrator%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AggregateHydrator()
```

## Methods

### <a id="Cephalon_EventSourcing_Services_AggregateHydrator_2_HydrateAsync_Cephalon_Abstractions_EventSourcing_IEventStore_System_String_System_Int64_System_Threading_CancellationToken_"></a> HydrateAsync\(IEventStore, string, long, CancellationToken\)

Rehydrates one aggregate state by replaying the requested event stream.

```csharp
public Task<(TState State, long Version)> HydrateAsync(IEventStore eventStore, string streamId, long fromVersion = 0, CancellationToken cancellationToken = default)
```

#### Parameters

`eventStore` IEventStore

The event store to read from.

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`fromVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The first version to replay. The default is <code>0</code>.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<\(TState [State](https://learn.microsoft.com/dotnet/api/system.valuetuple\-\-1,system.int64\-.state), [long](https://learn.microsoft.com/dotnet/api/system.int64) [Version](https://learn.microsoft.com/dotnet/api/system.valuetuple\-\-1,system.int64\-.version)\)\>

The rehydrated aggregate state and the latest version applied.
