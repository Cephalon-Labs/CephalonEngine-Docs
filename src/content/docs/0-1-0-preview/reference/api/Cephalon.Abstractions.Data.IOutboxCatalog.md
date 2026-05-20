---
title: Interface IOutboxCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ioutboxcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the outbox surfaces visible to the current runtime.

```csharp
public interface IOutboxCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IOutboxCatalog_Outboxes"></a> Outboxes

Gets all outbox surfaces visible to the current runtime.

```csharp
IReadOnlyList<OutboxDescriptor> Outboxes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IOutboxCatalog_GetByChannelId_System_String_"></a> GetByChannelId\(string\)

Gets all outboxes that explicitly declare the requested channel identifier.

```csharp
IReadOnlyList<OutboxDescriptor> GetByChannelId(string channelId)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The channel identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)\>

The matching outboxes, or an empty list when no outbox declares that channel.

### <a id="Cephalon_Abstractions_Data_IOutboxCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one outbox by its stable identifier.

```csharp
OutboxDescriptor? GetById(string outboxId)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier to resolve.

#### Returns

 [OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)?

The matching outbox, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Data_IOutboxCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all outboxes backed by the requested provider identifier.

```csharp
IReadOnlyList<OutboxDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)\>

The matching outboxes, or an empty list when the provider contributes none.

### <a id="Cephalon_Abstractions_Data_IOutboxCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all outboxes contributed by the requested module.

```csharp
IReadOnlyList<OutboxDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)\>

The matching outboxes, or an empty list when the module contributed none.
