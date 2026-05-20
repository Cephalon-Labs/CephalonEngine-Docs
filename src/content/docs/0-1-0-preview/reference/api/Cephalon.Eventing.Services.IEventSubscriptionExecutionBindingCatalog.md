---
title: Interface IEventSubscriptionExecutionBindingCatalog
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutionbindingcatalog
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Exposes managed execution bindings for declared event subscriptions.

```csharp
public interface IEventSubscriptionExecutionBindingCatalog
```

## Remarks

The catalog is a host-agnostic read contract for companion packs that bind declared subscriptions
to a real execution runtime. An empty catalog is a valid answer and means the active eventing
pack is still descriptor-first or application-managed for subscription execution.

## Properties

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutionBindingCatalog_Bindings"></a> Bindings

Gets the currently active managed execution bindings ordered by subscription identifier.

```csharp
IReadOnlyList<EventSubscriptionExecutionBindingDescriptor> Bindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)\>

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutionBindingCatalog_GetBySubscriptionId_System_String_"></a> GetBySubscriptionId\(string\)

Looks up the managed execution binding for one declared subscription.

```csharp
EventSubscriptionExecutionBindingDescriptor? GetBySubscriptionId(string subscriptionId)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

#### Returns

 [EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)?

The managed execution binding when one is active; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutionBindingCatalog_TryGet_System_String_Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor__"></a> TryGet\(string, out EventSubscriptionExecutionBindingDescriptor?\)

Attempts to resolve the managed execution binding for one declared subscription.

```csharp
bool TryGet(string subscriptionId, out EventSubscriptionExecutionBindingDescriptor? binding)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`binding` [EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)?

When this method returns, contains the resolved binding when one is active.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a binding exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
