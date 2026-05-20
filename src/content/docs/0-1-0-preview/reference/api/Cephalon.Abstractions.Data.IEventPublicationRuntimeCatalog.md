---
title: Interface IEventPublicationRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ieventpublicationruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes operator-facing runtime state reported by event-publication paths.

```csharp
public interface IEventPublicationRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IEventPublicationRuntimeCatalog_States"></a> States

Gets the reported publication-state entries visible to the current runtime.

```csharp
IReadOnlyList<EventPublicationRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IEventPublicationRuntimeCatalog_GetByChannelId_System_String_"></a> GetByChannelId\(string\)

Gets the reported publication states for one channel identifier.

```csharp
IReadOnlyList<EventPublicationRuntimeState> GetByChannelId(string channelId)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable channel identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate/)\>

The reported states for the channel, ordered by publication identifier.

### <a id="Cephalon_Abstractions_Data_IEventPublicationRuntimeCatalog_GetByPublicationId_System_String_"></a> GetByPublicationId\(string\)

Gets the latest reported publication state for one publication id.

```csharp
EventPublicationRuntimeState? GetByPublicationId(string publicationId)
```

#### Parameters

`publicationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier to resolve.

#### Returns

 [EventPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate/)?

The latest reported state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when that publication has not reported runtime state.

### <a id="Cephalon_Abstractions_Data_IEventPublicationRuntimeCatalog_TryGet_System_String_Cephalon_Abstractions_Data_EventPublicationRuntimeState__"></a> TryGet\(string, out EventPublicationRuntimeState?\)

Tries to get the latest reported publication state for one publication id.

```csharp
bool TryGet(string publicationId, out EventPublicationRuntimeState? state)
```

#### Parameters

`publicationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier to resolve.

`state` [EventPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate/)?

Receives the latest reported state when one exists.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a reported state exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
