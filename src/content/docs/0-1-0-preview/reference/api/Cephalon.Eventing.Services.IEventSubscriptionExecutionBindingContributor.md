---
title: Interface IEventSubscriptionExecutionBindingContributor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutionbindingcontributor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Contributes one or more managed execution bindings for declared event subscriptions.

```csharp
public interface IEventSubscriptionExecutionBindingContributor
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutionBindingContributor_GetExecutionBindings"></a> GetExecutionBindings\(\)

Returns the managed execution bindings owned by the contributor.

```csharp
IReadOnlyList<EventSubscriptionExecutionBindingDescriptor> GetExecutionBindings()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)\>

The managed execution bindings for declared subscriptions.
