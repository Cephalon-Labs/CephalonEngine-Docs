---
title: Interface IEventSubscriptionRegistry
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionregistry
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Collects event subscription descriptors contributed to the active eventing runtime pack.

```csharp
public interface IEventSubscriptionRegistry
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionRegistry_Add_Cephalon_Eventing_Services_EventSubscriptionDescriptor_"></a> Add\(EventSubscriptionDescriptor\)

Adds an event subscription descriptor to the registry.

```csharp
void Add(EventSubscriptionDescriptor subscription)
```

#### Parameters

`subscription` [EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)

The subscription descriptor to contribute.
