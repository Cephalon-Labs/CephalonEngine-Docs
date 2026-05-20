---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitystatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector command-journal durability posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitystatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus\(string, string?\)

Creates a new managed-connector command-journal durability answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-journal durability state, such as <code>not-applicable</code>, <code>in-memory-only</code>, <code>persisted</code>, <code>recovered</code>, <code>recovery-failed</code>, or <code>persistence-failed</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-journal durability summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the current runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_AutomaticRetryCoordinationState"></a> AutomaticRetryCoordinationState

Gets the current managed-connector automatic background retry coordination state that informed durability.

```csharp
public string AutomaticRetryCoordinationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_AutomaticRetryExecutionState"></a> AutomaticRetryExecutionState

Gets the current managed-connector automatic background retry execution state that informed durability.

```csharp
public string AutomaticRetryExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_CategoryIds"></a> CategoryIds

Gets the stable command-journal durability categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with command-journal durability.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_CommandJournalState"></a> CommandJournalState

Gets the current bounded managed-connector command-journal state that informed durability.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_Description"></a> Description

Gets an optional operator-facing command-journal durability summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with command-journal durability.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed command-journal durability.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the current runtime has recorded command history in the persisted snapshot.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasPersistedSnapshot"></a> HasPersistedSnapshot

Gets a value indicating whether the durable journal store currently has a persisted snapshot.

```csharp
public bool HasPersistedSnapshot { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasPersistenceError"></a> HasPersistenceError

Gets a value indicating whether the durable journal store currently reports a persistence error.

```csharp
public bool HasPersistenceError { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasRecordedCommandHistory"></a> HasRecordedCommandHistory

Gets a value indicating whether the current runtime currently retains recorded command history.

```csharp
public bool HasRecordedCommandHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered command history for this runtime from durable storage.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasRecoveryError"></a> HasRecoveryError

Gets a value indicating whether the durable journal store currently reports a recovery error.

```csharp
public bool HasRecoveryError { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_HasTruncatedHistory"></a> HasTruncatedHistory

Gets a value indicating whether the retained history currently represents bounded truncation.

```csharp
public bool HasTruncatedHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsDurable"></a> IsDurable

Gets a value indicating whether the current durability answer already provides restart-safe retained history.

```csharp
public bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsInMemoryOnly"></a> IsInMemoryOnly

Gets a value indicating whether the current durability answer remains in memory only.

```csharp
public bool IsInMemoryOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsPersisted"></a> IsPersisted

Gets a value indicating whether the current durability answer reports healthy persisted storage.

```csharp
public bool IsPersisted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsPersistenceFailed"></a> IsPersistenceFailed

Gets a value indicating whether the durable journal store currently failed while persisting the latest snapshot.

```csharp
public bool IsPersistenceFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsRecovered"></a> IsRecovered

Gets a value indicating whether the current durability answer reports recovered persisted history.

```csharp
public bool IsRecovered { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_IsRecoveryFailed"></a> IsRecoveryFailed

Gets a value indicating whether the durable journal store currently failed while recovering persisted history.

```csharp
public bool IsRecoveryFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_LastPersistedAtUtc"></a> LastPersistedAtUtc

Gets the UTC timestamp when the durable journal snapshot was last persisted successfully.

```csharp
public DateTimeOffset? LastPersistedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_LastPersistenceError"></a> LastPersistenceError

Gets the latest durable journal persistence error when one exists.

```csharp
public string? LastPersistenceError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_LastRecoveredAtUtc"></a> LastRecoveredAtUtc

Gets the UTC timestamp when the current process last recovered the durable journal snapshot, when recovery happened.

```csharp
public DateTimeOffset? LastRecoveredAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_LastRecoveryError"></a> LastRecoveryError

Gets the latest durable journal recovery error when one exists.

```csharp
public string? LastRecoveryError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_MaximumRetainedEntryCount"></a> MaximumRetainedEntryCount

Gets the maximum number of bounded journal entries retained for one execution runtime.

```csharp
public int MaximumRetainedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_PersistencePath"></a> PersistencePath

Gets the configured durable persistence path when one exists.

```csharp
public string? PersistencePath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_RetainedEntryCount"></a> RetainedEntryCount

Gets the number of bounded journal entries currently retained for the execution runtime.

```csharp
public int RetainedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive command-journal durability.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_State"></a> State

Gets the stable managed-connector command-journal durability state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus_TotalRecordedEntryCount"></a> TotalRecordedEntryCount

Gets the total number of command-execution outcomes currently visible to the durability answer.

```csharp
public int TotalRecordedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
