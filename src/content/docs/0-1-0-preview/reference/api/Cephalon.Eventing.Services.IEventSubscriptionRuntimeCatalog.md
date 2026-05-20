---
title: Interface IEventSubscriptionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Exposes the latest reported runtime state for declared event subscriptions.

```csharp
public interface IEventSubscriptionRuntimeCatalog
```

## Properties

### <a id="Cephalon_Eventing_Services_IEventSubscriptionRuntimeCatalog_States"></a> States

Gets the currently known runtime-state entries ordered by subscription identifier.

```csharp
IReadOnlyList<EventSubscriptionRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionRuntimeState](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate/)\>

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Looks up one reported runtime-state entry by declared subscription identifier.

```csharp
EventSubscriptionRuntimeState? GetById(string subscriptionId)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

#### Returns

 [EventSubscriptionRuntimeState](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate/)?

The current runtime state when one has been reported; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

### <a id="Cephalon_Eventing_Services_IEventSubscriptionRuntimeCatalog_TryGet_System_String_Cephalon_Eventing_Services_EventSubscriptionRuntimeState__"></a> TryGet\(string, out EventSubscriptionRuntimeState?\)

Attempts to look up one reported runtime-state entry by declared subscription identifier.

```csharp
bool TryGet(string subscriptionId, out EventSubscriptionRuntimeState? state)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`state` [EventSubscriptionRuntimeState](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate/)?

The current runtime state when one has been reported.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when one runtime-state entry is available; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
