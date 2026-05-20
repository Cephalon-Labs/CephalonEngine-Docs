---
title: Interface IInboxCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iinboxcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the inbox surfaces visible to the current runtime.

```csharp
public interface IInboxCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IInboxCatalog_Inboxes"></a> Inboxes

Gets all inbox surfaces visible to the current runtime.

```csharp
IReadOnlyList<InboxDescriptor> Inboxes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IInboxCatalog_GetByChannelId_System_String_"></a> GetByChannelId\(string\)

Gets all inboxes that explicitly declare the requested channel identifier.

```csharp
IReadOnlyList<InboxDescriptor> GetByChannelId(string channelId)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The channel identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)\>

The matching inboxes, or an empty list when no inbox declares that channel.

### <a id="Cephalon_Abstractions_Data_IInboxCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one inbox by its stable identifier.

```csharp
InboxDescriptor? GetById(string inboxId)
```

#### Parameters

`inboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The inbox identifier to resolve.

#### Returns

 [InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)?

The matching inbox, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Data_IInboxCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all inboxes backed by the requested provider identifier.

```csharp
IReadOnlyList<InboxDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)\>

The matching inboxes, or an empty list when the provider contributes none.

### <a id="Cephalon_Abstractions_Data_IInboxCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all inboxes contributed by the requested module.

```csharp
IReadOnlyList<InboxDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)\>

The matching inboxes, or an empty list when the module contributed none.
