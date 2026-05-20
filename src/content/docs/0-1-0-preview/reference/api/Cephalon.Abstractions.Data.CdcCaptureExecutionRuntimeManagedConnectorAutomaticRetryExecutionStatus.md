---
title: Class CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretryexecutionstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector automatic background retry execution posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretryexecutionstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus\(string, string?\)

Creates a new managed-connector automatic background retry execution answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable automatic background retry execution state, such as <code>not-applicable</code>, <code>disabled</code>, <code>blocked</code>, <code>eligible</code>, or <code>completed</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing automatic background retry execution summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed automatic background retry execution.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CanReuseApprovalFromMatchingHistory"></a> CanReuseApprovalFromMatchingHistory

Gets a value indicating whether Cephalon can reuse approval context from matching command history for automatic background retry execution.

```csharp
public bool CanReuseApprovalFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CanReuseDestructiveAllowanceFromMatchingHistory"></a> CanReuseDestructiveAllowanceFromMatchingHistory

Gets a value indicating whether Cephalon can reuse destructive-operation allowance from matching command history for automatic background retry execution.

```csharp
public bool CanReuseDestructiveAllowanceFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CanReuseMatchingSafetyContext"></a> CanReuseMatchingSafetyContext

Gets a value indicating whether Cephalon can reuse the full matching safety context for automatic background retry execution.

```csharp
public bool CanReuseMatchingSafetyContext { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CategoryCount"></a> CategoryCount

Gets the number of active automatic background retry execution categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CategoryIds"></a> CategoryIds

Gets the stable automatic background retry execution categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with automatic background retry execution.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed automatic background retry execution.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with automatic background retry execution.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandIssuanceState"></a> CommandIssuanceState

Gets the current managed-connector command-issuance state that informed automatic background retry execution.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandJournalSourceId"></a> CommandJournalSourceId

Gets the primary source identifier already associated with the command journal.

```csharp
public string CommandJournalSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed automatic background retry execution.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed automatic background retry execution.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with automatic background retry execution.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with automatic background retry execution.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_Description"></a> Description

Gets an optional operator-facing automatic background retry execution summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed automatic background retry execution.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed automatic background retry execution.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current managed-connector execution-adapter state that informed automatic background retry execution.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed automatic background retry execution.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed automatic background retry execution.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with automatic background retry execution.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed automatic background retry execution.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_HasAutomaticRetryAttempt"></a> HasAutomaticRetryAttempt

Gets a value indicating whether Cephalon has already recorded one automatic background retry attempt.

```csharp
public bool HasAutomaticRetryAttempt { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_HasMatchingAutomaticRetryAttempt"></a> HasMatchingAutomaticRetryAttempt

Gets a value indicating whether Cephalon has already recorded one automatic background retry attempt matching the current retry fingerprint.

```csharp
public bool HasMatchingAutomaticRetryAttempt { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsAutomaticRetryEnabled"></a> IsAutomaticRetryEnabled

Gets a value indicating whether automatic background retry execution is enabled for the current runtime.

```csharp
public bool IsAutomaticRetryEnabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsBlocked"></a> IsBlocked

Gets a value indicating whether automatic background retry execution is currently blocked.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsCompleted"></a> IsCompleted

Gets a value indicating whether automatic background retry execution already recorded one matching shared retry attempt.

```csharp
public bool IsCompleted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current automatic background retry execution answer targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsDisabled"></a> IsDisabled

Gets a value indicating whether automatic background retry execution is currently disabled.

```csharp
public bool IsDisabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_IsEligible"></a> IsEligible

Gets a value indicating whether automatic background retry execution is currently eligible to run one shared retry attempt.

```csharp
public bool IsEligible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestAutomaticRetryAttemptId"></a> LatestAutomaticRetryAttemptId

Gets the stable attempt identifier of the latest recorded automatic background retry attempt when one exists.

```csharp
public string LatestAutomaticRetryAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestAutomaticRetryExecutionFingerprint"></a> LatestAutomaticRetryExecutionFingerprint

Gets the deterministic execution fingerprint of the latest recorded automatic background retry attempt when one exists.

```csharp
public string LatestAutomaticRetryExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestAutomaticRetryRecordedAtUtc"></a> LatestAutomaticRetryRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest automatic background retry attempt when one exists.

```csharp
public DateTimeOffset? LatestAutomaticRetryRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestAutomaticRetryState"></a> LatestAutomaticRetryState

Gets the state of the latest recorded automatic background retry attempt when one exists.

```csharp
public string LatestAutomaticRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestCommandExecutionInvocationSourceId"></a> LatestCommandExecutionInvocationSourceId

Gets the invocation source identifier of the latest recorded command-execution outcome.

```csharp
public string LatestCommandExecutionInvocationSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to automatic background retry execution.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the deterministic latest recorded execution fingerprint currently visible to automatic background retry execution.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestMatchingApprovalApplied"></a> LatestMatchingApprovalApplied

Gets a value indicating whether matching command history already recorded an explicit approval Cephalon can reuse for automatic background retry execution.

```csharp
public bool LatestMatchingApprovalApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestMatchingDestructiveAllowanceApplied"></a> LatestMatchingDestructiveAllowanceApplied

Gets a value indicating whether matching command history already recorded an explicit destructive-operation allowance Cephalon can reuse for automatic background retry execution.

```csharp
public bool LatestMatchingDestructiveAllowanceApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed automatic background retry execution.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with automatic background retry execution.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with automatic background retry execution.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed automatic background retry execution.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed automatic background retry execution.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed automatic background retry execution.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current automatic background retry execution answer still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_RetryExecutionPolicySourceId"></a> RetryExecutionPolicySourceId

Gets the primary source identifier already associated with retry-execution policy.

```csharp
public string RetryExecutionPolicySourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed automatic background retry execution.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with automatic background retry execution.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive automatic background retry execution.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with automatic background retry execution.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_State"></a> State

Gets the stable managed-connector automatic background retry execution state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current automatic background retry execution answer would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed automatic background retry execution.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
