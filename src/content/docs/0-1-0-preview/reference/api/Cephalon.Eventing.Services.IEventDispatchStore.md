---
title: Interface IEventDispatchStore
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchstore
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Reads pending staged events and applies durable dispatch outcomes for the active eventing runtime.

```csharp
public interface IEventDispatchStore
```

## Remarks

This contract stays runtime-neutral on purpose. It does not claim broker ownership, delivery guarantees,
or concurrency semantics beyond what the active outbox implementation actually provides.

## Properties

### <a id="Cephalon_Eventing_Services_IEventDispatchStore_OutboxIds"></a> OutboxIds

Gets the outbox identifiers explicitly owned by the dispatch store.

```csharp
IReadOnlyList<string> OutboxIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Eventing_Services_IEventDispatchStore_ApplyReportAsync_Cephalon_Eventing_Services_EventDispatchExecutionReport_System_Threading_CancellationToken_"></a> ApplyReportAsync\(EventDispatchExecutionReport, CancellationToken\)

Applies one durable dispatch outcome to the active staged-event store.

```csharp
ValueTask ApplyReportAsync(EventDispatchExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [EventDispatchExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionreport/)

The dispatch observation to apply.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the durable store has applied the dispatch observation.

### <a id="Cephalon_Eventing_Services_IEventDispatchStore_ReadPendingAsync_System_Int32_System_Threading_CancellationToken_"></a> ReadPendingAsync\(int, CancellationToken\)

Reads pending staged events that are eligible for dispatch.

```csharp
ValueTask<IReadOnlyList<EventDispatchItem>> ReadPendingAsync(int maximumCount, CancellationToken cancellationToken = default)
```

#### Parameters

`maximumCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of staged events to read.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventDispatchItem](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchitem/)\>\>

The pending staged events that are currently eligible for dispatch.
