---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrystatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector command-retry and idempotency posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrystatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus\(string, string?\)

Creates a new managed-connector command-retry answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-retry state, such as <code>not-needed</code>, <code>duplicate</code>, <code>cooldown</code>, <code>retry-blocked</code>, <code>retry-eligible</code>, <code>operator-only</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-retry summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed command retry.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_AdapterFingerprint"></a> AdapterFingerprint

Gets the deterministic execution-adapter fingerprint currently associated with the retry posture.

```csharp
public string AdapterFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CanRetry"></a> CanRetry

Gets a value indicating whether the current retry posture can safely retry through the shared command lane.

```csharp
public bool CanRetry { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CanReuseApprovalFromMatchingHistory"></a> CanReuseApprovalFromMatchingHistory

Gets a value indicating whether Cephalon can reuse approval context from matching command history for the current retry posture.

```csharp
public bool CanReuseApprovalFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CanReuseDestructiveAllowanceFromMatchingHistory"></a> CanReuseDestructiveAllowanceFromMatchingHistory

Gets a value indicating whether Cephalon can reuse destructive-operation allowance from matching command history for the current retry posture.

```csharp
public bool CanReuseDestructiveAllowanceFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CanReuseMatchingSafetyContext"></a> CanReuseMatchingSafetyContext

Gets a value indicating whether Cephalon can reuse the full matching safety context for the current retry posture.

```csharp
public bool CanReuseMatchingSafetyContext { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CategoryCount"></a> CategoryCount

Gets the number of active command-retry categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CategoryIds"></a> CategoryIds

Gets the stable command-retry categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with command retry.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed command retry.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with the retry posture.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CommandIssuanceState"></a> CommandIssuanceState

Gets the current managed-connector command-issuance state that informed command retry.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier Cephalon would target for the current retry posture.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier Cephalon would target for the current retry posture.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_Description"></a> Description

Gets an optional operator-facing command-retry summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed command retry.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed command retry.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ExecutionAdapterSourceId"></a> ExecutionAdapterSourceId

Gets the primary source identifier already associated with the execution-adapter lane.

```csharp
public string ExecutionAdapterSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current managed-connector execution-adapter state that informed command retry.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed command retry.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed command retry.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with command retry.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed command retry.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasCooldownWindow"></a> HasCooldownWindow

Gets a value indicating whether the retry posture currently exposes an active cooldown window.

```csharp
public bool HasCooldownWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasMatchingAdapterFingerprint"></a> HasMatchingAdapterFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived execution-adapter fingerprint.

```csharp
public bool HasMatchingAdapterFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasMatchingCommandFingerprint"></a> HasMatchingCommandFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived command fingerprint.

```csharp
public bool HasMatchingCommandFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasMatchingIssuanceFingerprint"></a> HasMatchingIssuanceFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived issuance fingerprint.

```csharp
public bool HasMatchingIssuanceFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasMatchingRetryFingerprint"></a> HasMatchingRetryFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived retry fingerprint.

```csharp
public bool HasMatchingRetryFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_HasRecordedCommandHistory"></a> HasRecordedCommandHistory

Gets a value indicating whether Cephalon has recorded one concrete command-execution outcome for the retry posture.

```csharp
public bool HasRecordedCommandHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsCooldown"></a> IsCooldown

Gets a value indicating whether the current retry posture is waiting for a cooldown window to elapse.

```csharp
public bool IsCooldown { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current retry posture targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsDuplicate"></a> IsDuplicate

Gets a value indicating whether replaying the current command would be duplicative.

```csharp
public bool IsDuplicate { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsNotNeeded"></a> IsNotNeeded

Gets a value indicating whether retry is not currently needed.

```csharp
public bool IsNotNeeded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether the current retry posture remains operator-owned.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsRetryBlocked"></a> IsRetryBlocked

Gets a value indicating whether the current retry posture remains blocked.

```csharp
public bool IsRetryBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IsRetryEligible"></a> IsRetryEligible

Gets a value indicating whether the current retry posture allows one safe retry.

```csharp
public bool IsRetryEligible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_IssuanceFingerprint"></a> IssuanceFingerprint

Gets the deterministic issuance fingerprint currently associated with the retry posture.

```csharp
public string IssuanceFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestCommandExecutionSourceId"></a> LatestCommandExecutionSourceId

Gets the primary source identifier already associated with the latest command-execution lane.

```csharp
public string LatestCommandExecutionSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state Cephalon considered for the retry posture.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the latest recorded command-execution fingerprint Cephalon considered for the retry posture.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestMatchingApprovalApplied"></a> LatestMatchingApprovalApplied

Gets a value indicating whether the latest matching command-execution history already recorded an explicit approval.

```csharp
public bool LatestMatchingApprovalApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestMatchingDestructiveAllowanceApplied"></a> LatestMatchingDestructiveAllowanceApplied

Gets a value indicating whether the latest matching command-execution history already recorded an explicit destructive-operation allowance.

```csharp
public bool LatestMatchingDestructiveAllowanceApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed the retry posture.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with command retry.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with command retry.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed command retry.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed command retry.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed command retry.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current retry posture still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint Cephalon currently derives for duplicate and retry checks.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive command retry.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier Cephalon would target for the current retry posture.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_State"></a> State

Gets the stable managed-connector command-retry state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current retry posture would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed command retry.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
