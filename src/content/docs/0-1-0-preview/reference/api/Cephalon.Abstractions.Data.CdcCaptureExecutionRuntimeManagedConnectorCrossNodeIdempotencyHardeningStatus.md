---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector cross-node idempotency-hardening posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus\(string, string?\)

Creates a new managed-connector cross-node idempotency-hardening answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable cross-node idempotency-hardening state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>idempotent-safe</code>, <code>stale-owner-risk</code>, <code>duplicate-lineage-risk</code>, or <code>replay-window-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing cross-node idempotency-hardening summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_AutomaticRetryAttemptCount"></a> AutomaticRetryAttemptCount

Gets the number of retained automatic retry attempts currently visible for the runtime.

```csharp
public int AutomaticRetryAttemptCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_AutomaticRetryCoordinationState"></a> AutomaticRetryCoordinationState

Gets the current managed-connector automatic background retry coordination state that informed cross-node idempotency hardening.

```csharp
public string AutomaticRetryCoordinationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_AutomaticRetryExecutionState"></a> AutomaticRetryExecutionState

Gets the current managed-connector automatic background retry execution state that informed cross-node idempotency hardening.

```csharp
public string AutomaticRetryExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CanExecuteAutomaticRetryOnCurrentNode"></a> CanExecuteAutomaticRetryOnCurrentNode

Gets a value indicating whether the current node can execute automatic retry safely for the current cross-node hardening answer.

```csharp
public bool CanExecuteAutomaticRetryOnCurrentNode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CategoryCount"></a> CategoryCount

Gets the number of active cross-node idempotency-hardening categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CategoryIds"></a> CategoryIds

Gets the stable cross-node idempotency-hardening categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with cross-node idempotency hardening.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with cross-node idempotency hardening.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CommandJournalDurabilityState"></a> CommandJournalDurabilityState

Gets the current managed-connector command-journal durability state that informed cross-node idempotency hardening.

```csharp
public string CommandJournalDurabilityState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed cross-node idempotency hardening.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one was configured for automatic retry.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_CoordinationOwnerMatchesActiveReporter"></a> CoordinationOwnerMatchesActiveReporter

Gets a value indicating whether the current host coordination owner matches the active reporter identifier.

```csharp
public bool CoordinationOwnerMatchesActiveReporter { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_Description"></a> Description

Gets an optional operator-facing cross-node idempotency-hardening summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_DistributedRetryLeaseState"></a> DistributedRetryLeaseState

Gets the current managed-connector distributed retry lease state that informed cross-node idempotency hardening.

```csharp
public string DistributedRetryLeaseState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed cross-node idempotency hardening.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with cross-node idempotency hardening.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed cross-node idempotency hardening.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasDuplicateAutomaticRetryAttempts"></a> HasDuplicateAutomaticRetryAttempts

Gets a value indicating whether retained history currently contains duplicated automatic retry attempts for the current retry posture.

```csharp
public bool HasDuplicateAutomaticRetryAttempts { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasDuplicateCommandLineage"></a> HasDuplicateCommandLineage

Gets a value indicating whether retained history currently contains duplicated command lineage for the current retry posture.

```csharp
public bool HasDuplicateCommandLineage { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasMatchingAutomaticRetryAttempt"></a> HasMatchingAutomaticRetryAttempt

Gets a value indicating whether retained history currently contains one automatic retry attempt for the current retry fingerprint.

```csharp
public bool HasMatchingAutomaticRetryAttempt { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasMatchingRetryFingerprintHistory"></a> HasMatchingRetryFingerprintHistory

Gets a value indicating whether retained history currently contains evidence for the current retry fingerprint.

```csharp
public bool HasMatchingRetryFingerprintHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command journal currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_IsDuplicateLineageRisk"></a> IsDuplicateLineageRisk

Gets a value indicating whether cross-node idempotency currently remains risky because retained command lineage already looks duplicated.

```csharp
public bool IsDuplicateLineageRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_IsIdempotentSafe"></a> IsIdempotentSafe

Gets a value indicating whether cross-node idempotency currently looks safe for the current retry posture.

```csharp
public bool IsIdempotentSafe { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether cross-node idempotency hardening still remains operator-owned.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_IsReplayWindowRisk"></a> IsReplayWindowRisk

Gets a value indicating whether cross-node idempotency currently remains risky because the durable replay window still lacks enough retained evidence.

```csharp
public bool IsReplayWindowRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_IsStaleOwnerRisk"></a> IsStaleOwnerRisk

Gets a value indicating whether cross-node idempotency currently remains risky because ownership truth still looks stale.

```csharp
public bool IsStaleOwnerRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_LatestAutomaticRetryAttemptId"></a> LatestAutomaticRetryAttemptId

Gets the stable latest automatic retry attempt identifier when one exists.

```csharp
public string LatestAutomaticRetryAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_LatestAutomaticRetryExecutionFingerprint"></a> LatestAutomaticRetryExecutionFingerprint

Gets the deterministic execution fingerprint of the latest automatic retry attempt when one exists.

```csharp
public string LatestAutomaticRetryExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to cross-node idempotency hardening.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_MatchingAutomaticRetryAttemptCount"></a> MatchingAutomaticRetryAttemptCount

Gets the number of retained automatic retry attempts that currently match the retry fingerprint.

```csharp
public int MatchingAutomaticRetryAttemptCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_MatchingCommandLineageEntryCount"></a> MatchingCommandLineageEntryCount

Gets the number of retained command-execution entries that currently match the command lineage fingerprint.

```csharp
public int MatchingCommandLineageEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with cross-node idempotency hardening.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_RetainedEntryCount"></a> RetainedEntryCount

Gets the number of retained bounded journal entries currently visible to cross-node idempotency hardening.

```csharp
public int RetainedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed cross-node idempotency hardening.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with cross-node idempotency hardening.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive cross-node idempotency hardening.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_State"></a> State

Gets the stable managed-connector cross-node idempotency-hardening state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus_TotalRecordedEntryCount"></a> TotalRecordedEntryCount

Gets the total number of command-execution outcomes currently visible to cross-node idempotency hardening.

```csharp
public int TotalRecordedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
