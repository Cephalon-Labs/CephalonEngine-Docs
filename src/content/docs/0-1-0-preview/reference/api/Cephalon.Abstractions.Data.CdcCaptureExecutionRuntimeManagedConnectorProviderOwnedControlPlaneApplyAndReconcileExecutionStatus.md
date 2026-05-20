---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneapplyandreconcileexecutionstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector provider-owned control-plane apply-and-reconcile execution posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneapplyandreconcileexecutionstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus\(string, string?\)

Creates a new managed-connector provider-owned control-plane apply-and-reconcile execution answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane apply-and-reconcile execution state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>apply-and-reconcile-ready</code>, <code>apply-and-reconcile-blocked</code>, <code>apply-and-reconcile-executing</code>, <code>apply-and-reconcile-completed</code>, or <code>apply-and-reconcile-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing provider-owned control-plane apply-and-reconcile execution summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_AdapterId"></a> AdapterId

Gets the stable provider execution-adapter identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string AdapterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CanExecuteProviderOwnedControlPlaneApplyAndReconcileOnCurrentNode"></a> CanExecuteProviderOwnedControlPlaneApplyAndReconcileOnCurrentNode

Gets a value indicating whether the current node can execute the current provider-owned control-plane apply-and-reconcile answer safely.

```csharp
public bool CanExecuteProviderOwnedControlPlaneApplyAndReconcileOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CanExerciseProviderOwnedControlPlaneOnCurrentNode"></a> CanExerciseProviderOwnedControlPlaneOnCurrentNode

Gets a value indicating whether the current node can exercise bounded provider-owned control-plane ownership safely.

```csharp
public bool CanExerciseProviderOwnedControlPlaneOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CanMutateOrReconcileOnCurrentNode"></a> CanMutateOrReconcileOnCurrentNode

Gets a value indicating whether the current node can exercise the current provider-owned control-plane mutation or reconcile answer safely.

```csharp
public bool CanMutateOrReconcileOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CanProvisionProviderOwnedControlPlaneOnCurrentNode"></a> CanProvisionProviderOwnedControlPlaneOnCurrentNode

Gets a value indicating whether the current node can exercise the current provider-owned control-plane provisioning answer safely.

```csharp
public bool CanProvisionProviderOwnedControlPlaneOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CategoryCount"></a> CategoryCount

Gets the number of active provider-owned control-plane apply-and-reconcile execution categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CategoryIds"></a> CategoryIds

Gets the stable provider-owned control-plane apply-and-reconcile execution categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CommandIssuanceState"></a> CommandIssuanceState

Gets the current managed-connector command-issuance state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one is known.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_Description"></a> Description

Gets an optional operator-facing provider-owned control-plane apply-and-reconcile execution summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasCommandJournalEvidence"></a> HasCommandJournalEvidence

Gets a value indicating whether the current command journal already exposes provider-owned control-plane apply-and-reconcile execution evidence.

```csharp
public bool HasCommandJournalEvidence { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_HasTargetOperation"></a> HasTargetOperation

Gets a value indicating whether the current answer exposes one concrete target operation.

```csharp
public bool HasTargetOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsApplyAndReconcileBlocked"></a> IsApplyAndReconcileBlocked

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution currently remains blocked.

```csharp
public bool IsApplyAndReconcileBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsApplyAndReconcileCompleted"></a> IsApplyAndReconcileCompleted

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution no longer needs another shared execution step.

```csharp
public bool IsApplyAndReconcileCompleted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsApplyAndReconcileExecuting"></a> IsApplyAndReconcileExecuting

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution is currently executing one bounded provider-facing step.

```csharp
public bool IsApplyAndReconcileExecuting { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsApplyAndReconcileReady"></a> IsApplyAndReconcileReady

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution is currently ready.

```csharp
public bool IsApplyAndReconcileReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsApplyAndReconcileRisk"></a> IsApplyAndReconcileRisk

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution currently remains risky.

```csharp
public bool IsApplyAndReconcileRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current provider-owned control-plane apply-and-reconcile lane targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsMutationOperation"></a> IsMutationOperation

Gets a value indicating whether the current target operation is a provider-owned mutation rather than reconcile.

```csharp
public bool IsMutationOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether provider-owned control-plane apply-and-reconcile execution still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IsReconcileOperation"></a> IsReconcileOperation

Gets a value indicating whether the current target operation is a provider-owned reconcile.

```csharp
public bool IsReconcileOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_IssuanceFingerprint"></a> IssuanceFingerprint

Gets the deterministic issuance fingerprint currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string IssuanceFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_LatestCommandExecutionInvocationSourceId"></a> LatestCommandExecutionInvocationSourceId

Gets the invocation-source identifier of the latest recorded command-execution outcome.

```csharp
public string LatestCommandExecutionInvocationSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to provider-owned control-plane apply-and-reconcile execution.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the deterministic latest recorded execution fingerprint currently visible to provider-owned control-plane apply-and-reconcile execution.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets the bounded retry scheduler polling interval, in seconds, when one is configured.

```csharp
public int PollingIntervalSeconds { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderExecutionOrchestrationState"></a> ProviderExecutionOrchestrationState

Gets the current broader provider execution-orchestration state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ProviderExecutionOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderId"></a> ProviderId

Gets the best available provider identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string? ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderOwnedControlPlaneMutationReconcileState"></a> ProviderOwnedControlPlaneMutationReconcileState

Gets the current provider-owned control-plane mutation and reconcile state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ProviderOwnedControlPlaneMutationReconcileState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderOwnedControlPlaneOwnershipState"></a> ProviderOwnedControlPlaneOwnershipState

Gets the current provider-owned control-plane ownership state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ProviderOwnedControlPlaneOwnershipState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderOwnedControlPlaneProvisioningState"></a> ProviderOwnedControlPlaneProvisioningState

Gets the current provider-owned control-plane provisioning state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ProviderOwnedControlPlaneProvisioningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_ProviderOwnedWritePathExecutionState"></a> ProviderOwnedWritePathExecutionState

Gets the current provider-owned write-path execution state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string ProviderOwnedWritePathExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current provider-owned control-plane apply-and-reconcile lane still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed provider-owned control-plane apply-and-reconcile execution.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_SchedulerId"></a> SchedulerId

Gets the stable shared scheduler identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string SchedulerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_SchedulerKind"></a> SchedulerKind

Gets the stable shared scheduler kind currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string SchedulerKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive provider-owned control-plane apply-and-reconcile execution.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with provider-owned control-plane apply-and-reconcile execution.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_State"></a> State

Gets the stable managed-connector provider-owned control-plane apply-and-reconcile execution state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current provider-owned control-plane apply-and-reconcile lane would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
