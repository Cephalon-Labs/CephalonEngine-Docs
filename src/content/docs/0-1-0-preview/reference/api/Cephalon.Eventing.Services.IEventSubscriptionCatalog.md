---
title: Interface IEventSubscriptionCatalog
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptioncatalog
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Exposes the merged set of declared event subscriptions available to the active eventing runtime.

```csharp
public interface IEventSubscriptionCatalog
```

## Properties

### <a id="Cephalon_Eventing_Services_IEventSubscriptionCatalog_Subscriptions"></a> Subscriptions

Gets the effective subscription set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<EventSubscriptionDescriptor> Subscriptions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)\>

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionCatalog_GetByChannelId_System_String_"></a> GetByChannelId\(string\)

Gets the subscriptions currently bound to one event channel identifier.

```csharp
IReadOnlyList<EventSubscriptionDescriptor> GetByChannelId(string channelId)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The event channel identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)\>

The subscriptions declared for the requested channel.

### <a id="Cephalon_Eventing_Services_IEventSubscriptionCatalog_TryGet_System_String_Cephalon_Eventing_Services_EventSubscriptionDescriptor__"></a> TryGet\(string, out EventSubscriptionDescriptor\)

Attempts to resolve a subscription descriptor by identifier.

```csharp
bool TryGet(string subscriptionId, out EventSubscriptionDescriptor subscription)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The subscription identifier to resolve.

`subscription` [EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)

When this method returns, contains the resolved subscription if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the subscription exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
