---
title: Interface IEventSubscriptionContributor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptioncontributor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Allows a module to contribute declared event subscriptions into the active eventing runtime pack.

```csharp
public interface IEventSubscriptionContributor
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionContributor_RegisterSubscriptions_Cephalon_Eventing_Services_IEventSubscriptionRegistry_"></a> RegisterSubscriptions\(IEventSubscriptionRegistry\)

Registers one or more event subscription descriptors with the supplied registry.

```csharp
void RegisterSubscriptions(IEventSubscriptionRegistry subscriptions)
```

#### Parameters

`subscriptions` [IEventSubscriptionRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionregistry/)

The registry that collects contributed subscription descriptors.
