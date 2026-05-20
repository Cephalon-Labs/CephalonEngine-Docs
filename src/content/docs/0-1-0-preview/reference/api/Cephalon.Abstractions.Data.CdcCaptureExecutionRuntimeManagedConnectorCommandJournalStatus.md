---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector bounded command-journal posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus\(string, string?\)

Creates a new managed-connector command-journal answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-journal state, such as <code>not-applicable</code>, <code>empty</code>, <code>bounded</code>, <code>truncated</code>, <code>cooldown-active</code>, <code>duplicate-evidence-present</code>, or <code>insufficient-for-automation</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-journal summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed the command journal.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CategoryCount"></a> CategoryCount

Gets the number of active command-journal categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CategoryIds"></a> CategoryIds

Gets the stable command-journal categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with the command journal.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed the command journal.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with the command journal.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CommandIssuanceState"></a> CommandIssuanceState

Gets the current managed-connector command-issuance state that informed the command journal.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CommandRetrySourceId"></a> CommandRetrySourceId

Gets the primary source identifier already associated with the command-retry lane.

```csharp
public string CommandRetrySourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed the command journal.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with the command journal.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with the command journal.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_Description"></a> Description

Gets an optional operator-facing command-journal summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed the command journal.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed the command journal.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current managed-connector execution-adapter state that informed the command journal.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed the command journal.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed the command journal.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with the command journal.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed the command journal.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasCooldownWindow"></a> HasCooldownWindow

Gets a value indicating whether the bounded command journal currently exposes an active cooldown window.

```csharp
public bool HasCooldownWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasDuplicateEvidence"></a> HasDuplicateEvidence

Gets a value indicating whether the bounded command journal contains evidence that replaying the command would be duplicative.

```csharp
public bool HasDuplicateEvidence { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasMatchingCommandFingerprint"></a> HasMatchingCommandFingerprint

Gets a value indicating whether the latest retained command currently matches the derived command fingerprint.

```csharp
public bool HasMatchingCommandFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasMatchingRetryFingerprint"></a> HasMatchingRetryFingerprint

Gets a value indicating whether the latest retained command currently matches the derived retry fingerprint.

```csharp
public bool HasMatchingRetryFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasRecordedCommandHistory"></a> HasRecordedCommandHistory

Gets a value indicating whether Cephalon has recorded one or more managed-connector command outcomes for the journal.

```csharp
public bool HasRecordedCommandHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasRetainedCommandHistory"></a> HasRetainedCommandHistory

Gets a value indicating whether the bounded command journal currently retains one or more entries.

```csharp
public bool HasRetainedCommandHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_HasTruncatedHistory"></a> HasTruncatedHistory

Gets a value indicating whether the bounded command journal has truncated at least one older entry.

```csharp
public bool HasTruncatedHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsAutomaticRetryEnabled"></a> IsAutomaticRetryEnabled

Gets a value indicating whether automatic background retry execution is enabled for the current journal answer.

```csharp
public bool IsAutomaticRetryEnabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsBounded"></a> IsBounded

Gets a value indicating whether the bounded command journal currently retains enough evidence for operator-facing automation answers.

```csharp
public bool IsBounded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsCooldownActive"></a> IsCooldownActive

Gets a value indicating whether the bounded command journal currently exposes an active cooldown window.

```csharp
public bool IsCooldownActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current command journal targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsEmpty"></a> IsEmpty

Gets a value indicating whether the bounded command journal currently has no recorded entries.

```csharp
public bool IsEmpty { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsInsufficientForAutomation"></a> IsInsufficientForAutomation

Gets a value indicating whether the bounded command journal currently remains insufficient for automation.

```csharp
public bool IsInsufficientForAutomation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_IsTruncated"></a> IsTruncated

Gets a value indicating whether the bounded command journal has truncated older entries.

```csharp
public bool IsTruncated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest retained command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to the command journal.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the deterministic latest retained execution fingerprint currently visible to the command journal.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest retained command-execution outcome that informed the command journal.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_MaximumRetainedEntryCount"></a> MaximumRetainedEntryCount

Gets the maximum number of bounded journal entries Cephalon retains for one execution runtime.

```csharp
public int MaximumRetainedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_OldestRetainedAttemptId"></a> OldestRetainedAttemptId

Gets the stable oldest retained command-execution attempt identifier when one exists.

```csharp
public string OldestRetainedAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_OldestRetainedRecordedAtUtc"></a> OldestRetainedRecordedAtUtc

Gets the timestamp when Cephalon recorded the oldest retained command-execution outcome currently visible in the bounded journal.

```csharp
public DateTimeOffset? OldestRetainedRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with the command journal.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with the command journal.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed the command journal.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed the command journal.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed the command journal.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current command journal still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RetainedEntryCount"></a> RetainedEntryCount

Gets the number of bounded journal entries Cephalon currently retains for the execution runtime.

```csharp
public int RetainedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RetryExecutionPolicySourceId"></a> RetryExecutionPolicySourceId

Gets the primary source identifier already associated with the retry-execution policy lane.

```csharp
public string RetryExecutionPolicySourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed the command journal.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with the command journal.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive the command journal.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with the command journal.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_State"></a> State

Gets the stable managed-connector command-journal state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_TotalRecordedEntryCount"></a> TotalRecordedEntryCount

Gets the total number of command-execution outcomes Cephalon has recorded for the execution runtime.

```csharp
public int TotalRecordedEntryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current command journal still reflects one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed the command journal.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
