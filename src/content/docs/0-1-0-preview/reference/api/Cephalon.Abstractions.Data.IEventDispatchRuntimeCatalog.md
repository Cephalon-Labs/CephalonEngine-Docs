---
title: Interface IEventDispatchRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ieventdispatchruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the operator-facing dispatch runtime state currently reported for durable event publication paths.

```csharp
public interface IEventDispatchRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IEventDispatchRuntimeCatalog_States"></a> States

Gets the reported dispatch state entries visible to the current runtime.

```csharp
IReadOnlyList<EventDispatchRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IEventDispatchRuntimeCatalog_GetByOutboxId_System_String_"></a> GetByOutboxId\(string\)

Gets the latest reported dispatch state for one outbox-backed publication path.

```csharp
EventDispatchRuntimeState? GetByOutboxId(string outboxId)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier to resolve.

#### Returns

 [EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)?

The latest reported state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when that path has not reported runtime state.

### <a id="Cephalon_Abstractions_Data_IEventDispatchRuntimeCatalog_TryGet_System_String_Cephalon_Abstractions_Data_EventDispatchRuntimeState__"></a> TryGet\(string, out EventDispatchRuntimeState?\)

Tries to get the latest reported dispatch state for one outbox-backed publication path.

```csharp
bool TryGet(string outboxId, out EventDispatchRuntimeState? state)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier to resolve.

`state` [EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)?

Receives the latest reported state when the path has reported one.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a reported state exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
