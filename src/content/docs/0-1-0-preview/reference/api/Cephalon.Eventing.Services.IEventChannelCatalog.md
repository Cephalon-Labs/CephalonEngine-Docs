---
title: Interface IEventChannelCatalog
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelcatalog
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Exposes the merged set of event channels available to the active eventing runtime.

```csharp
public interface IEventChannelCatalog
```

## Properties

### <a id="Cephalon_Eventing_Services_IEventChannelCatalog_Channels"></a> Channels

Gets the effective channel set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<EventChannelDescriptor> Channels { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)\>

## Methods

### <a id="Cephalon_Eventing_Services_IEventChannelCatalog_TryGet_System_String_Cephalon_Eventing_Services_EventChannelDescriptor__"></a> TryGet\(string, out EventChannelDescriptor\)

Attempts to resolve an event channel descriptor by identifier.

```csharp
bool TryGet(string channelId, out EventChannelDescriptor channel)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The channel identifier to resolve.

`channel` [EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)

When this method returns, contains the resolved channel if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the channel exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
