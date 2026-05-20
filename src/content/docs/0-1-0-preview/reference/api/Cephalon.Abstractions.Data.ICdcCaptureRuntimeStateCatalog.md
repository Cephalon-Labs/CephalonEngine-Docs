---
title: Interface ICdcCaptureRuntimeStateCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureruntimestatecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the operator-facing CDC runtime state currently visible for the active runtime.

```csharp
public interface ICdcCaptureRuntimeStateCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_States"></a> States

Gets the CDC runtime-state entries visible to the current runtime.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByEdgeNodeId_System_String_"></a> GetByEdgeNodeId\(string\)

Gets the CDC runtime-state entries whose latest runtime story mentions the requested edge node.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByEdgeNodeId(string edgeNodeId)
```

#### Parameters

`edgeNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The edge-node identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when the edge node is not currently visible.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByExecutionRuntimeId_System_String_"></a> GetByExecutionRuntimeId\(string\)

Gets the CDC runtime-state entries currently owned by the requested execution runtime.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByExecutionRuntimeId(string executionRuntimeId)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution-runtime identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when the runtime owns none.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one CDC runtime-state entry by its stable capture identifier.

```csharp
CdcCaptureRuntimeState? GetById(string cdcCaptureId)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The CDC capture identifier to resolve.

#### Returns

 [CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)?

The matching runtime state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when that capture is not active.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByOutboxId_System_String_"></a> GetByOutboxId\(string\)

Gets the CDC runtime-state entries that publish through the requested outbox.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByOutboxId(string outboxId)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when no capture uses that outbox.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets the CDC runtime-state entries backed by the requested provider identifier.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when the provider contributes none.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByReporterCoordinationIssueReason_System_String_"></a> GetByReporterCoordinationIssueReason\(string\)

Gets the CDC runtime-state entries whose current reporter-coordination answer matches the requested degraded-reason identifier.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByReporterCoordinationIssueReason(string degradedReason)
```

#### Parameters

`degradedReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable degraded-reason identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when no capture currently reports that degraded reason.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByReporterCoordinationState_System_String_"></a> GetByReporterCoordinationState\(string\)

Gets the CDC runtime-state entries whose current reporter-coordination answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByReporterCoordinationState(string coordinationState)
```

#### Parameters

`coordinationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable coordination-state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when no capture currently reports that state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByReporterId_System_String_"></a> GetByReporterId\(string\)

Gets the CDC runtime-state entries whose current reporter-coordination story mentions the requested reporter.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByReporterId(string reporterId)
```

#### Parameters

`reporterId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reporter identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when the reporter is not currently visible.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetByResourceId_System_String_"></a> GetByResourceId\(string\)

Gets the CDC runtime-state entries that explicitly observe the requested resource identifier.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetByResourceId(string resourceId)
```

#### Parameters

`resourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when no capture declares that resource.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetBySourceId_System_String_"></a> GetBySourceId\(string\)

Gets the CDC runtime-state entries that observe the requested logical source identifier.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetBySourceId(string sourceId)
```

#### Parameters

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when no capture uses that source.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRuntimeStateCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets the CDC runtime-state entries contributed by the requested module.

```csharp
IReadOnlyList<CdcCaptureRuntimeState> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)\>

The matching runtime states, or an empty list when the module contributed none.
