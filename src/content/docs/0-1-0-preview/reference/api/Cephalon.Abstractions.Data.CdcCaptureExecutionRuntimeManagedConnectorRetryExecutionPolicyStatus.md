---
title: Class CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicystatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector retry-execution policy posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicystatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus\(string, string?\)

Creates a new managed-connector retry-execution policy answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable retry-execution policy state, such as <code>not-needed</code>, <code>cooldown</code>, <code>manual-approval</code>, <code>policy-blocked</code>, <code>background-retry-disabled</code>, <code>retry-ready</code>, <code>operator-only</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing retry-execution policy summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed retry-execution policy.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_AdapterFingerprint"></a> AdapterFingerprint

Gets the deterministic execution-adapter fingerprint currently associated with the retry-execution policy.

```csharp
public string AdapterFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CanExecuteRetryThroughPolicy"></a> CanExecuteRetryThroughPolicy

Gets a value indicating whether the retry-execution policy currently allows Cephalon to execute one automatic retry.

```csharp
public bool CanExecuteRetryThroughPolicy { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CanReuseApprovalFromMatchingHistory"></a> CanReuseApprovalFromMatchingHistory

Gets a value indicating whether Cephalon can reuse approval context from matching command history for retry execution.

```csharp
public bool CanReuseApprovalFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CanReuseDestructiveAllowanceFromMatchingHistory"></a> CanReuseDestructiveAllowanceFromMatchingHistory

Gets a value indicating whether Cephalon can reuse destructive-operation allowance from matching command history for retry execution.

```csharp
public bool CanReuseDestructiveAllowanceFromMatchingHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CanReuseMatchingSafetyContext"></a> CanReuseMatchingSafetyContext

Gets a value indicating whether Cephalon can reuse the full matching safety context for retry execution.

```csharp
public bool CanReuseMatchingSafetyContext { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CategoryCount"></a> CategoryCount

Gets the number of active retry-execution policy categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CategoryIds"></a> CategoryIds

Gets the stable retry-execution policy categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with retry-execution policy.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed retry-execution policy.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with the retry-execution policy.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CommandIssuanceState"></a> CommandIssuanceState

Gets the current managed-connector command-issuance state that informed retry-execution policy.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CommandRetrySourceId"></a> CommandRetrySourceId

Gets the primary source identifier already associated with the command-retry lane.

```csharp
public string CommandRetrySourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed retry-execution policy.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier Cephalon would target for the current retry-execution policy.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier Cephalon would target for the current retry-execution policy.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_Description"></a> Description

Gets an optional operator-facing retry-execution policy summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed retry-execution policy.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed retry-execution policy.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionAdapterSourceId"></a> ExecutionAdapterSourceId

Gets the primary source identifier already associated with the execution-adapter lane.

```csharp
public string ExecutionAdapterSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current managed-connector execution-adapter state that informed retry-execution policy.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionApprovalSourceId"></a> ExecutionApprovalSourceId

Gets the primary source identifier already associated with the execution-approval lane.

```csharp
public string ExecutionApprovalSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed retry-execution policy.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed retry-execution policy.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with retry-execution policy.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed retry-execution policy.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasCooldownWindow"></a> HasCooldownWindow

Gets a value indicating whether the retry-execution policy currently exposes an active cooldown window.

```csharp
public bool HasCooldownWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasMatchingAdapterFingerprint"></a> HasMatchingAdapterFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived execution-adapter fingerprint.

```csharp
public bool HasMatchingAdapterFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasMatchingCommandFingerprint"></a> HasMatchingCommandFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived command fingerprint.

```csharp
public bool HasMatchingCommandFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasMatchingIssuanceFingerprint"></a> HasMatchingIssuanceFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived issuance fingerprint.

```csharp
public bool HasMatchingIssuanceFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasMatchingRetryFingerprint"></a> HasMatchingRetryFingerprint

Gets a value indicating whether the latest recorded command currently matches the derived retry fingerprint.

```csharp
public bool HasMatchingRetryFingerprint { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_HasRecordedCommandHistory"></a> HasRecordedCommandHistory

Gets a value indicating whether Cephalon has recorded one concrete command-execution outcome for the retry-execution policy.

```csharp
public bool HasRecordedCommandHistory { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsAutomaticRetryEnabled"></a> IsAutomaticRetryEnabled

Gets a value indicating whether automatic background retry execution is enabled for the current policy answer.

```csharp
public bool IsAutomaticRetryEnabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsBackgroundRetryDisabled"></a> IsBackgroundRetryDisabled

Gets a value indicating whether one safe retry candidate exists but automatic retry is still disabled.

```csharp
public bool IsBackgroundRetryDisabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsCooldown"></a> IsCooldown

Gets a value indicating whether the retry-execution policy is waiting for a cooldown window to elapse.

```csharp
public bool IsCooldown { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current retry-execution policy targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsNotNeeded"></a> IsNotNeeded

Gets a value indicating whether no retry action is currently needed.

```csharp
public bool IsNotNeeded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether retry remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsPolicyBlocked"></a> IsPolicyBlocked

Gets a value indicating whether the retry-execution policy remains blocked by shared runtime truth or safety guardrails.

```csharp
public bool IsPolicyBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IsRetryReady"></a> IsRetryReady

Gets a value indicating whether the retry-execution policy allows one automatic retry.

```csharp
public bool IsRetryReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_IssuanceFingerprint"></a> IssuanceFingerprint

Gets the deterministic issuance fingerprint currently associated with the retry-execution policy.

```csharp
public string IssuanceFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state Cephalon considered for retry-execution policy.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the latest recorded command-execution fingerprint Cephalon considered for the retry-execution policy.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestMatchingApprovalApplied"></a> LatestMatchingApprovalApplied

Gets a value indicating whether matching command history already recorded an explicit approval Cephalon can reuse for retry execution.

```csharp
public bool LatestMatchingApprovalApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestMatchingDestructiveAllowanceApplied"></a> LatestMatchingDestructiveAllowanceApplied

Gets a value indicating whether matching command history already recorded an explicit destructive-operation allowance Cephalon can reuse for retry execution.

```csharp
public bool LatestMatchingDestructiveAllowanceApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed the retry-execution policy.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with retry-execution policy.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with retry-execution policy.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed retry-execution policy.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed retry-execution policy.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed retry-execution policy.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current retry-execution policy still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_RequiresManualApproval"></a> RequiresManualApproval

Gets a value indicating whether the retry-execution policy still needs a manual approval gate.

```csharp
public bool RequiresManualApproval { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with the retry-execution policy.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive retry-execution policy.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier Cephalon would target for the current retry-execution policy.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_State"></a> State

Gets the stable managed-connector retry-execution policy state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current retry-execution policy would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed retry-execution policy.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
