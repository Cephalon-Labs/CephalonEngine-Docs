---
title: Interface ISagaChoreographyPublicationRuntimeStateCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-isagachoreographypublicationruntimestatecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the operator-facing live saga-choreography publication state currently reported for the
active runtime.

```csharp
public interface ISagaChoreographyPublicationRuntimeStateCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_States"></a> States

Gets the reported choreography publication-state entries visible to the current runtime.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets the reported publication-state entries for one choreography behavior.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable choreography behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching publication-state entries, or an empty list when the behavior has not reported
live publication state.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetByChannelId_System_String_"></a> GetByChannelId\(string\)

Gets the reported publication-state entries that targeted the requested channel.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetByChannelId(string channelId)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching publication-state entries, or an empty list when no publication targeted that
channel.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetByCorrelationId_System_String_"></a> GetByCorrelationId\(string\)

Gets the reported publication-state entries associated with one correlation identifier.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetByCorrelationId(string correlationId)
```

#### Parameters

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The correlation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching publication-state entries, or an empty list when none reported that correlation.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetById_System_String_"></a> GetById\(string\)

Gets the latest reported publication state for one choreography publication path.

```csharp
SagaChoreographyPublicationRuntimeState? GetById(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable runtime-state identifier to resolve.

#### Returns

 [SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)?

The latest reported publication state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when that identifier has
not reported choreography runtime state.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets the reported publication-state entries contributed by one source module.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching publication-state entries, or an empty list when the module has not reported
live publication state.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets the reported publication-state entries exposed over one transport.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching publication-state entries, or an empty list when none reported live publication
state for that transport.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetCompensationPublications"></a> GetCompensationPublications\(\)

Gets the reported publication-state entries that currently represent compensation work.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetCompensationPublications()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching compensation publication-state entries, or an empty list when none reported
compensation posture.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_GetFailedPublications"></a> GetFailedPublications\(\)

Gets the reported publication-state entries whose latest observation is failed.

```csharp
IReadOnlyList<SagaChoreographyPublicationRuntimeState> GetFailedPublications()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)\>

The matching failed publication-state entries, or an empty list when none currently report a
failed posture.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_TryGetById_System_String_Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState__"></a> TryGetById\(string, out SagaChoreographyPublicationRuntimeState?\)

Tries to get the latest reported publication state for one choreography publication path.

```csharp
bool TryGetById(string id, out SagaChoreographyPublicationRuntimeState? state)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable runtime-state identifier to resolve.

`state` [SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)?

Receives the latest reported publication state when that identifier has reported one.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a reported state exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
