---
title: Interface IAggregate
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-iaggregate-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Applies domain events to an aggregate state projection.

```csharp
public interface IAggregate<TState>
```

#### Type Parameters

`TState` 

The state shape produced by the aggregate.

## Methods

### <a id="Cephalon_Abstractions_EventSourcing_IAggregate_1_Apply__0_Cephalon_Abstractions_EventSourcing_IDomainEvent_"></a> Apply\(TState, IDomainEvent\)

Applies one event to the current state and returns the next state snapshot.

```csharp
TState Apply(TState current, IDomainEvent evt)
```

#### Parameters

`current` TState

The current aggregate state.

`evt` [IDomainEvent](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-idomainevent/)

The event to apply.

#### Returns

 TState

The updated aggregate state.
