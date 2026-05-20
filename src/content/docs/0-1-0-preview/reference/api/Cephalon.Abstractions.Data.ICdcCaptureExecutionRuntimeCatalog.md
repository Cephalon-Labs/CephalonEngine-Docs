---
title: Interface ICdcCaptureExecutionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureexecutionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the configured CDC capture execution runtimes visible to the current runtime.

```csharp
public interface ICdcCaptureExecutionRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_Runtimes"></a> Runtimes

Gets the configured CDC capture execution runtimes visible to the current runtime.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> Runtimes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByEdgeNodeId_System_String_"></a> GetByEdgeNodeId\(string\)

Gets the CDC capture execution runtimes whose current runtime story mentions the requested edge node.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByEdgeNodeId(string edgeNodeId)
```

#### Parameters

`edgeNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The edge-node identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when the edge node is not currently visible.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one CDC capture execution runtime by its stable identifier.

```csharp
CdcCaptureExecutionRuntimeDescriptor? GetById(string executionRuntimeId)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier to resolve.

#### Returns

 [CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)?

The matching execution-runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none exists.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorActionId_System_String_"></a> GetByManagedConnectorActionId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector action plan includes the requested action identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorActionId(string actionId)
```

#### Parameters

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector action identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that action identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorActionPlanState_System_String_"></a> GetByManagedConnectorActionPlanState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector action plan matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorActionPlanState(string actionPlanState)
```

#### Parameters

`actionPlanState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector action-plan state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that action-plan state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryCoordinationCategory_System_String_"></a> GetByManagedConnectorAutomaticRetryCoordinationCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry coordination answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryCoordinationCategory(string coordinationCategory)
```

#### Parameters

`coordinationCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector automatic background retry coordination category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that coordination category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryCoordinationOwnerId_System_String_"></a> GetByManagedConnectorAutomaticRetryCoordinationOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry coordination answer references the requested local coordination owner identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryCoordinationOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryCoordinationState_System_String_"></a> GetByManagedConnectorAutomaticRetryCoordinationState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry coordination answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryCoordinationState(string coordinationState)
```

#### Parameters

`coordinationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector automatic background retry coordination state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that coordination state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryExecutionCategory_System_String_"></a> GetByManagedConnectorAutomaticRetryExecutionCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry execution answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryExecutionCategory(string automaticRetryCategory)
```

#### Parameters

`automaticRetryCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector automatic background retry execution category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that automatic background retry execution category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryExecutionOperationId_System_String_"></a> GetByManagedConnectorAutomaticRetryExecutionOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry execution answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryExecutionOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector automatic background retry execution operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorAutomaticRetryExecutionState_System_String_"></a> GetByManagedConnectorAutomaticRetryExecutionState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector automatic background retry execution answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorAutomaticRetryExecutionState(string automaticRetryState)
```

#### Parameters

`automaticRetryState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector automatic background retry execution state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that automatic background retry execution state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandEnvelopeCategory_System_String_"></a> GetByManagedConnectorCommandEnvelopeCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command envelope includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandEnvelopeCategory(string commandCategory)
```

#### Parameters

`commandCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-envelope category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that command-envelope category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandEnvelopeOperationId_System_String_"></a> GetByManagedConnectorCommandEnvelopeOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command envelope currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandEnvelopeOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-envelope operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandEnvelopeState_System_String_"></a> GetByManagedConnectorCommandEnvelopeState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command envelope matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandEnvelopeState(string commandState)
```

#### Parameters

`commandState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-envelope state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that command-envelope state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandExecutionOperationId_System_String_"></a> GetByManagedConnectorCommandExecutionOperationId\(string\)

Gets the CDC capture execution runtimes whose latest managed-connector command-execution outcome references the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandExecutionOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandExecutionState_System_String_"></a> GetByManagedConnectorCommandExecutionState\(string\)

Gets the CDC capture execution runtimes whose latest managed-connector command-execution outcome matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandExecutionState(string executionState)
```

#### Parameters

`executionState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-execution state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandIssuanceCategory_System_String_"></a> GetByManagedConnectorCommandIssuanceCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command issuance includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandIssuanceCategory(string issuanceCategory)
```

#### Parameters

`issuanceCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-issuance category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that command-issuance category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandIssuanceOperationId_System_String_"></a> GetByManagedConnectorCommandIssuanceOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command issuance currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandIssuanceOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-issuance operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandIssuanceState_System_String_"></a> GetByManagedConnectorCommandIssuanceState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command issuance matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandIssuanceState(string issuanceState)
```

#### Parameters

`issuanceState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-issuance state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that command-issuance state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandJournalCategory_System_String_"></a> GetByManagedConnectorCommandJournalCategory\(string\)

Gets the CDC capture execution runtimes whose current bounded managed-connector command-journal answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandJournalCategory(string journalCategory)
```

#### Parameters

`journalCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-journal category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that journal category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandJournalDurabilityCategory_System_String_"></a> GetByManagedConnectorCommandJournalDurabilityCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command-journal durability answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandJournalDurabilityCategory(string durabilityCategory)
```

#### Parameters

`durabilityCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-journal durability category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that durability category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandJournalDurabilityState_System_String_"></a> GetByManagedConnectorCommandJournalDurabilityState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command-journal durability answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandJournalDurabilityState(string durabilityState)
```

#### Parameters

`durabilityState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-journal durability state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that durability state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandJournalState_System_String_"></a> GetByManagedConnectorCommandJournalState\(string\)

Gets the CDC capture execution runtimes whose current bounded managed-connector command-journal answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandJournalState(string journalState)
```

#### Parameters

`journalState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-journal state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that journal state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandRetryCategory_System_String_"></a> GetByManagedConnectorCommandRetryCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command-retry answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandRetryCategory(string retryCategory)
```

#### Parameters

`retryCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-retry category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that retry category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandRetryOperationId_System_String_"></a> GetByManagedConnectorCommandRetryOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command-retry answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandRetryOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-retry operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCommandRetryState_System_String_"></a> GetByManagedConnectorCommandRetryState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector command-retry answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCommandRetryState(string retryState)
```

#### Parameters

`retryState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector command-retry state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that retry state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCrossNodeIdempotencyHardeningCategory_System_String_"></a> GetByManagedConnectorCrossNodeIdempotencyHardeningCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector cross-node idempotency-hardening answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCrossNodeIdempotencyHardeningCategory(string hardeningCategory)
```

#### Parameters

`hardeningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable cross-node idempotency-hardening category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCrossNodeIdempotencyHardeningOwnerId_System_String_"></a> GetByManagedConnectorCrossNodeIdempotencyHardeningOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector cross-node idempotency-hardening answer references the requested coordination owner.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCrossNodeIdempotencyHardeningOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable coordination-owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCrossNodeIdempotencyHardeningRetryFingerprint_System_String_"></a> GetByManagedConnectorCrossNodeIdempotencyHardeningRetryFingerprint\(string\)

Gets the CDC capture execution runtimes whose current managed-connector cross-node idempotency-hardening answer references the requested retry fingerprint.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCrossNodeIdempotencyHardeningRetryFingerprint(string retryFingerprint)
```

#### Parameters

`retryFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable retry fingerprint to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that retry fingerprint.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorCrossNodeIdempotencyHardeningState_System_String_"></a> GetByManagedConnectorCrossNodeIdempotencyHardeningState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector cross-node idempotency-hardening answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorCrossNodeIdempotencyHardeningState(string hardeningState)
```

#### Parameters

`hardeningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable cross-node idempotency-hardening state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryLeaseCategory_System_String_"></a> GetByManagedConnectorDistributedRetryLeaseCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry lease answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryLeaseCategory(string leaseCategory)
```

#### Parameters

`leaseCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector distributed retry lease category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that distributed retry lease category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryLeaseOwnerId_System_String_"></a> GetByManagedConnectorDistributedRetryLeaseOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry lease answer references the requested local coordination owner identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryLeaseOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryLeaseState_System_String_"></a> GetByManagedConnectorDistributedRetryLeaseState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry lease answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryLeaseState(string leaseState)
```

#### Parameters

`leaseState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector distributed retry lease state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that distributed retry lease state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryOrchestrationCategory_System_String_"></a> GetByManagedConnectorDistributedRetryOrchestrationCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry orchestration answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryOrchestrationCategory(string orchestrationCategory)
```

#### Parameters

`orchestrationCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector distributed retry orchestration category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that orchestration category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryOrchestrationOwnerId_System_String_"></a> GetByManagedConnectorDistributedRetryOrchestrationOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry orchestration answer references the requested local coordination owner identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryOrchestrationOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDistributedRetryOrchestrationState_System_String_"></a> GetByManagedConnectorDistributedRetryOrchestrationState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector distributed retry orchestration answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDistributedRetryOrchestrationState(string orchestrationState)
```

#### Parameters

`orchestrationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector distributed retry orchestration state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that orchestration state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDriftCategory_System_String_"></a> GetByManagedConnectorDriftCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector drift answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDriftCategory(string driftCategory)
```

#### Parameters

`driftCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable drift-category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that drift category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDriftState_System_String_"></a> GetByManagedConnectorDriftState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector drift answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDriftState(string driftState)
```

#### Parameters

`driftState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable drift-state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that drift state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDryRunCategory_System_String_"></a> GetByManagedConnectorDryRunCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector dry-run answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDryRunCategory(string dryRunCategory)
```

#### Parameters

`dryRunCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector dry-run category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dry-run category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDryRunOperationId_System_String_"></a> GetByManagedConnectorDryRunOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector dry-run answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDryRunOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector dry-run operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDryRunState_System_String_"></a> GetByManagedConnectorDryRunState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector dry-run answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDryRunState(string dryRunState)
```

#### Parameters

`dryRunState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector dry-run state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dry-run state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDurableSharedSchedulerOrchestrationCategory_System_String_"></a> GetByManagedConnectorDurableSharedSchedulerOrchestrationCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector durable shared scheduler-orchestration answer reports the requested category identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDurableSharedSchedulerOrchestrationCategory(string schedulerCategory)
```

#### Parameters

`schedulerCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable shared scheduler-orchestration category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that durable shared scheduler-orchestration category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDurableSharedSchedulerOrchestrationOwnerId_System_String_"></a> GetByManagedConnectorDurableSharedSchedulerOrchestrationOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector durable shared scheduler-orchestration answer references the requested local coordination owner identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDurableSharedSchedulerOrchestrationOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorDurableSharedSchedulerOrchestrationState_System_String_"></a> GetByManagedConnectorDurableSharedSchedulerOrchestrationState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector durable shared scheduler-orchestration answer matches the requested state identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorDurableSharedSchedulerOrchestrationState(string schedulerState)
```

#### Parameters

`schedulerState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable shared scheduler-orchestration state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that durable shared scheduler-orchestration state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionAdapterCategory_System_String_"></a> GetByManagedConnectorExecutionAdapterCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution adapter includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionAdapterCategory(string executionAdapterCategory)
```

#### Parameters

`executionAdapterCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-adapter category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-adapter category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionAdapterOperationId_System_String_"></a> GetByManagedConnectorExecutionAdapterOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution adapter currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionAdapterOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-adapter operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionAdapterState_System_String_"></a> GetByManagedConnectorExecutionAdapterState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution adapter matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionAdapterState(string executionAdapterState)
```

#### Parameters

`executionAdapterState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-adapter state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-adapter state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionApprovalCategory_System_String_"></a> GetByManagedConnectorExecutionApprovalCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution-approval answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionApprovalCategory(string executionApprovalCategory)
```

#### Parameters

`executionApprovalCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-approval category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-approval category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionApprovalOperationId_System_String_"></a> GetByManagedConnectorExecutionApprovalOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution-approval answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionApprovalOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-approval operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionApprovalState_System_String_"></a> GetByManagedConnectorExecutionApprovalState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution-approval answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionApprovalState(string executionApprovalState)
```

#### Parameters

`executionApprovalState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-approval state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-approval state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionIntentCategory_System_String_"></a> GetByManagedConnectorExecutionIntentCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution intent includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionIntentCategory(string executionIntentCategory)
```

#### Parameters

`executionIntentCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-intent category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-intent category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionIntentOperationId_System_String_"></a> GetByManagedConnectorExecutionIntentOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution intent currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionIntentOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-intent operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorExecutionIntentState_System_String_"></a> GetByManagedConnectorExecutionIntentState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector execution intent matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorExecutionIntentState(string executionIntentState)
```

#### Parameters

`executionIntentState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector execution-intent state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that execution-intent state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorGovernanceCategory_System_String_"></a> GetByManagedConnectorGovernanceCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector governance answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorGovernanceCategory(string governanceCategory)
```

#### Parameters

`governanceCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governance-category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that governance category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorGovernanceState_System_String_"></a> GetByManagedConnectorGovernanceState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector governance answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorGovernanceState(string governanceState)
```

#### Parameters

`governanceState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governance-state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that governance state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorMultiNodeLeaseExecutionCategory_System_String_"></a> GetByManagedConnectorMultiNodeLeaseExecutionCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector broader multi-node lease-execution answer reports the requested category identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorMultiNodeLeaseExecutionCategory(string leaseExecutionCategory)
```

#### Parameters

`leaseExecutionCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable broader multi-node lease-execution category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that broader multi-node lease-execution category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorMultiNodeLeaseExecutionOwnerId_System_String_"></a> GetByManagedConnectorMultiNodeLeaseExecutionOwnerId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector broader multi-node lease-execution answer references the requested local coordination owner identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorMultiNodeLeaseExecutionOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorMultiNodeLeaseExecutionState_System_String_"></a> GetByManagedConnectorMultiNodeLeaseExecutionState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector broader multi-node lease-execution answer matches the requested state identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorMultiNodeLeaseExecutionState(string leaseExecutionState)
```

#### Parameters

`leaseExecutionState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable broader multi-node lease-execution state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that broader multi-node lease-execution state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorPreflightCategory_System_String_"></a> GetByManagedConnectorPreflightCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector preflight answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorPreflightCategory(string preflightCategory)
```

#### Parameters

`preflightCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector preflight category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that preflight category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorPreflightOperationId_System_String_"></a> GetByManagedConnectorPreflightOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector preflight answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorPreflightOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorPreflightState_System_String_"></a> GetByManagedConnectorPreflightState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector preflight answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorPreflightState(string preflightState)
```

#### Parameters

`preflightState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector preflight state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that preflight state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderExecutionOrchestrationCategory_System_String_"></a> GetByManagedConnectorProviderExecutionOrchestrationCategory\(string\)

Gets the CDC capture execution runtimes whose current provider execution-orchestration answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderExecutionOrchestrationCategory(string providerExecutionOrchestrationCategory)
```

#### Parameters

`providerExecutionOrchestrationCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider execution-orchestration category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider execution-orchestration category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderExecutionOrchestrationOperationId_System_String_"></a> GetByManagedConnectorProviderExecutionOrchestrationOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider execution-orchestration answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderExecutionOrchestrationOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider execution-orchestration operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderExecutionOrchestrationState_System_String_"></a> GetByManagedConnectorProviderExecutionOrchestrationState\(string\)

Gets the CDC capture execution runtimes whose current provider execution-orchestration answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderExecutionOrchestrationState(string providerExecutionOrchestrationState)
```

#### Parameters

`providerExecutionOrchestrationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider execution-orchestration state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider execution-orchestration state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane apply-and-reconcile execution answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionCategory(string applyAndReconcileExecutionCategory)
```

#### Parameters

`applyAndReconcileExecutionCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane apply-and-reconcile execution category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that apply-and-reconcile execution category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane apply-and-reconcile execution answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane apply-and-reconcile execution operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane apply-and-reconcile execution answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionState(string applyAndReconcileExecutionState)
```

#### Parameters

`applyAndReconcileExecutionState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane apply-and-reconcile execution state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that apply-and-reconcile execution state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware apply-and-reconcile hardening answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategory(string hardeningCategory)
```

#### Parameters

`hardeningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane dependency-aware apply-and-reconcile hardening category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dependency-aware hardening category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware apply-and-reconcile hardening answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dependency-aware apply-and-reconcile hardening operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware apply-and-reconcile hardening answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningState(string hardeningState)
```

#### Parameters

`hardeningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane dependency-aware apply-and-reconcile hardening state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dependency-aware hardening state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware provisioning and mutation hardening answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningCategory(string hardeningCategory)
```

#### Parameters

`hardeningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane dependency-aware provisioning and mutation hardening category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dependency-aware hardening category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware provisioning and mutation hardening answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dependency-aware provisioning and mutation hardening operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane dependency-aware provisioning and mutation hardening answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState(string hardeningState)
```

#### Parameters

`hardeningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane dependency-aware provisioning and mutation hardening state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that dependency-aware hardening state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane mutation and reconcile answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileCategory(string providerOwnedControlPlaneMutationReconcileCategory)
```

#### Parameters

`providerOwnedControlPlaneMutationReconcileCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane mutation and reconcile category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane mutation and reconcile category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane mutation and reconcile answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane mutation and reconcile operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane mutation and reconcile answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneMutationReconcileState(string providerOwnedControlPlaneMutationReconcileState)
```

#### Parameters

`providerOwnedControlPlaneMutationReconcileState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane mutation and reconcile state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane mutation and reconcile state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneOwnershipCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneOwnershipCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane ownership answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneOwnershipCategory(string providerOwnedControlPlaneOwnershipCategory)
```

#### Parameters

`providerOwnedControlPlaneOwnershipCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane ownership category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane ownership category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneOwnershipOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneOwnershipOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane ownership answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneOwnershipOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane ownership operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneOwnershipState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneOwnershipState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane ownership answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneOwnershipState(string providerOwnedControlPlaneOwnershipState)
```

#### Parameters

`providerOwnedControlPlaneOwnershipState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane ownership state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane ownership state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneProvisioningCategory_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneProvisioningCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane provisioning answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneProvisioningCategory(string providerOwnedControlPlaneProvisioningCategory)
```

#### Parameters

`providerOwnedControlPlaneProvisioningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane provisioning category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane provisioning category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneProvisioningOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneProvisioningOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane provisioning answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneProvisioningOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane provisioning operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedControlPlaneProvisioningState_System_String_"></a> GetByManagedConnectorProviderOwnedControlPlaneProvisioningState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned control-plane provisioning answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedControlPlaneProvisioningState(string providerOwnedControlPlaneProvisioningState)
```

#### Parameters

`providerOwnedControlPlaneProvisioningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane provisioning state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned control-plane provisioning state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedWritePathExecutionCategory_System_String_"></a> GetByManagedConnectorProviderOwnedWritePathExecutionCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-owned write-path execution answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedWritePathExecutionCategory(string providerExecutionCategory)
```

#### Parameters

`providerExecutionCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned write-path execution category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned write-path execution category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedWritePathExecutionOperationId_System_String_"></a> GetByManagedConnectorProviderOwnedWritePathExecutionOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-owned write-path execution answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedWritePathExecutionOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned write-path execution operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderOwnedWritePathExecutionState_System_String_"></a> GetByManagedConnectorProviderOwnedWritePathExecutionState\(string\)

Gets the CDC capture execution runtimes whose current provider-owned write-path execution answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderOwnedWritePathExecutionState(string providerExecutionState)
```

#### Parameters

`providerExecutionState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned write-path execution state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-owned write-path execution state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteMutationExecutionOnCurrentNode_System_Boolean_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteMutationExecutionOnCurrentNode\(bool\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports whether the current node can execute provider-specific mutation execution.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteMutationExecutionOnCurrentNode(bool canExecuteMutationExecutionOnCurrentNode)
```

#### Parameters

`canExecuteMutationExecutionOnCurrentNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to return runtimes whose current node can execute mutation execution; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that mutation-execution current-node posture.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteOnCurrentNode_System_Boolean_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteOnCurrentNode\(bool\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports whether the current node can execute that broader provider-specific lane.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteOnCurrentNode(bool canExecuteOnCurrentNode)
```

#### Parameters

`canExecuteOnCurrentNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to return runtimes executable on the current node; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that current-node posture.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteTeardownOnCurrentNode_System_Boolean_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteTeardownOnCurrentNode\(bool\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports whether the current node can execute provider-specific teardown.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCanExecuteTeardownOnCurrentNode(bool canExecuteTeardownOnCurrentNode)
```

#### Parameters

`canExecuteTeardownOnCurrentNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to return runtimes whose current node can execute teardown; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that teardown current-node posture.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategory_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategory\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategory(string hardeningCategory)
```

#### Parameters

`hardeningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific teardown and mutation-execution hardening category to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectClusterId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectClusterId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested Kafka Connect cluster identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectClusterId(string connectClusterId)
```

#### Parameters

`connectClusterId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable Kafka Connect cluster identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that cluster identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorClass_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorClass\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested connector-class identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorClass(string connectorClass)
```

#### Parameters

`connectorClass` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable connector-class identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that connector-class identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested connector identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningConnectorId(string connectorId)
```

#### Parameters

`connectorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable connector identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that connector identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningMaterializerId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningMaterializerId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested materializer identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningMaterializerId(string materializerId)
```

#### Parameters

`materializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable materializer identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that materializer identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningOperationId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningOperationId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested operation identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable operation identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested provider identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderId(string providerId)
```

#### Parameters

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderSurfaceId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderSurfaceId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested provider-surface identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningProviderSurfaceId(string providerSurfaceId)
```

#### Parameters

`providerSurfaceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-surface identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-surface identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningSourceProviderId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningSourceProviderId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested source-provider identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningSourceProviderId(string sourceProviderId)
```

#### Parameters

`sourceProviderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-provider identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that source-provider identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningState_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningState\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningState(string hardeningState)
```

#### Parameters

`hardeningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific teardown and mutation-execution hardening state to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningTransportKind_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningTransportKind\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested transport kind.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningTransportKind(string transportKind)
```

#### Parameters

`transportKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport kind to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that transport kind.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningWorkerId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningWorkerId\(string\)

Gets the CDC execution runtimes whose provider-specific dependency-aware teardown and mutation-execution hardening answer currently reports the requested worker identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningWorkerId(string workerId)
```

#### Parameters

`workerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable worker identifier to filter on.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that worker identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerCanUseOnCurrentNode_System_Boolean_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerCanUseOnCurrentNode\(bool\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports whether the current node can use that materializer.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerCanUseOnCurrentNode(bool canUseOnCurrentNode)
```

#### Parameters

`canUseOnCurrentNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to return runtimes that can use the materializer on the current node; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that current-node posture.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerCategory_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerCategory\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerCategory(string materializerCategory)
```

#### Parameters

`materializerCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific control-plane materializer category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that materializer category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectClusterId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectClusterId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports the requested Kafka Connect cluster identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectClusterId(string connectClusterId)
```

#### Parameters

`connectClusterId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable Kafka Connect cluster identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that cluster identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorClass_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorClass\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports the requested connector-class identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorClass(string connectorClass)
```

#### Parameters

`connectorClass` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable connector-class identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that connector-class identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently targets the requested connector identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerConnectorId(string connectorId)
```

#### Parameters

`connectorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable connector identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that connector identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently targets the requested materializer identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerId(string materializerId)
```

#### Parameters

`materializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable materializer identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that materializer identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerOperationId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerOperationId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific control-plane materializer operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently targets the requested provider identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderId(string providerId)
```

#### Parameters

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderSurfaceId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderSurfaceId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently targets the requested provider-surface identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerProviderSurfaceId(string providerSurfaceId)
```

#### Parameters

`providerSurfaceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-surface identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that provider-surface identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerSourceProviderId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerSourceProviderId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports the requested source-provider identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerSourceProviderId(string sourceProviderId)
```

#### Parameters

`sourceProviderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that source-provider identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerState_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerState\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerState(string materializerState)
```

#### Parameters

`materializerState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific control-plane materializer state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that materializer state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerTransportKind_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerTransportKind\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports the requested transport kind.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerTransportKind(string transportKind)
```

#### Parameters

`transportKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport kind to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that transport kind.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorProviderSpecificControlPlaneMaterializerWorkerId_System_String_"></a> GetByManagedConnectorProviderSpecificControlPlaneMaterializerWorkerId\(string\)

Gets the CDC capture execution runtimes whose current provider-specific control-plane materializer answer currently reports the requested worker identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorProviderSpecificControlPlaneMaterializerWorkerId(string workerId)
```

#### Parameters

`workerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable worker identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that worker identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorRetryExecutionPolicyCategory_System_String_"></a> GetByManagedConnectorRetryExecutionPolicyCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector retry-execution policy answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorRetryExecutionPolicyCategory(string policyCategory)
```

#### Parameters

`policyCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector retry-execution policy category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that policy category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorRetryExecutionPolicyOperationId_System_String_"></a> GetByManagedConnectorRetryExecutionPolicyOperationId\(string\)

Gets the CDC capture execution runtimes whose current managed-connector retry-execution policy answer currently targets the requested operation.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorRetryExecutionPolicyOperationId(string operationId)
```

#### Parameters

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector retry-execution policy operation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that operation identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorRetryExecutionPolicyState_System_String_"></a> GetByManagedConnectorRetryExecutionPolicyState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector retry-execution policy answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorRetryExecutionPolicyState(string policyState)
```

#### Parameters

`policyState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector retry-execution policy state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that policy state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorSchedulerRecoveryExecutionHardeningCategory_System_String_"></a> GetByManagedConnectorSchedulerRecoveryExecutionHardeningCategory\(string\)

Gets the CDC capture execution runtimes whose current scheduler recovery and execution-hardening answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorSchedulerRecoveryExecutionHardeningCategory(string hardeningCategory)
```

#### Parameters

`hardeningCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scheduler recovery and execution-hardening category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorSchedulerRecoveryExecutionHardeningOwnerId_System_String_"></a> GetByManagedConnectorSchedulerRecoveryExecutionHardeningOwnerId\(string\)

Gets the CDC capture execution runtimes whose current scheduler recovery and execution-hardening answer currently reports the requested local coordination owner.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorSchedulerRecoveryExecutionHardeningOwnerId(string ownerId)
```

#### Parameters

`ownerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable local coordination owner identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that owner identifier.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorSchedulerRecoveryExecutionHardeningRetryFingerprint_System_String_"></a> GetByManagedConnectorSchedulerRecoveryExecutionHardeningRetryFingerprint\(string\)

Gets the CDC capture execution runtimes whose current scheduler recovery and execution-hardening answer currently reports the requested retry fingerprint.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorSchedulerRecoveryExecutionHardeningRetryFingerprint(string retryFingerprint)
```

#### Parameters

`retryFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic retry fingerprint to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that retry fingerprint.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorSchedulerRecoveryExecutionHardeningState_System_String_"></a> GetByManagedConnectorSchedulerRecoveryExecutionHardeningState\(string\)

Gets the CDC capture execution runtimes whose current scheduler recovery and execution-hardening answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorSchedulerRecoveryExecutionHardeningState(string hardeningState)
```

#### Parameters

`hardeningState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scheduler recovery and execution-hardening state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that hardening state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorWritePathReadinessCategory_System_String_"></a> GetByManagedConnectorWritePathReadinessCategory\(string\)

Gets the CDC capture execution runtimes whose current managed-connector write-path readiness answer includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorWritePathReadinessCategory(string readinessCategory)
```

#### Parameters

`readinessCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector write-path readiness category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that readiness category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByManagedConnectorWritePathReadinessState_System_String_"></a> GetByManagedConnectorWritePathReadinessState\(string\)

Gets the CDC capture execution runtimes whose current managed-connector write-path readiness answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByManagedConnectorWritePathReadinessState(string readinessState)
```

#### Parameters

`readinessState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector write-path readiness state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that readiness state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByRemediationCategory_System_String_"></a> GetByRemediationCategory\(string\)

Gets the CDC capture execution runtimes whose current remediation posture includes the requested category.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByRemediationCategory(string remediationCategory)
```

#### Parameters

`remediationCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable remediation-category identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that remediation category.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByRemediationState_System_String_"></a> GetByRemediationState\(string\)

Gets the CDC capture execution runtimes whose current remediation posture matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByRemediationState(string remediationState)
```

#### Parameters

`remediationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable remediation-state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that remediation state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByReporterCoordinationIssueReason_System_String_"></a> GetByReporterCoordinationIssueReason\(string\)

Gets the CDC capture execution runtimes whose current reporter-coordination answer matches the requested degraded-reason identifier.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByReporterCoordinationIssueReason(string degradedReason)
```

#### Parameters

`degradedReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable degraded-reason identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that degraded reason.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByReporterCoordinationState_System_String_"></a> GetByReporterCoordinationState\(string\)

Gets the CDC capture execution runtimes whose current reporter-coordination answer matches the requested state.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByReporterCoordinationState(string coordinationState)
```

#### Parameters

`coordinationState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable coordination-state identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when no runtime currently reports that state.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetByReporterId_System_String_"></a> GetByReporterId\(string\)

Gets the CDC capture execution runtimes whose current reporter-coordination story mentions the requested reporter.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> GetByReporterId(string reporterId)
```

#### Parameters

`reporterId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reporter identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)\>

The matching execution-runtime descriptors, or an empty list when the reporter is not currently visible.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeCatalog_GetManagedConnectorCommandExecutionHistory_System_String_"></a> GetManagedConnectorCommandExecutionHistory\(string\)

Gets the bounded managed-connector command-execution history currently recorded for one execution runtime.

```csharp
IReadOnlyList<CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult> GetManagedConnectorCommandExecutionHistory(string executionRuntimeId)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult/)\>

The latest-first bounded command-execution history for the runtime, or an empty list when no outcome has been recorded yet.
