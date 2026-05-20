---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus\(string, string?\)

Creates a new managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-owned control-plane dependency-aware apply-and-reconcile hardening state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>dependency-ready</code>, <code>dependency-blocked</code>, <code>dependency-degraded</code>, <code>apply-and-reconcile-hardened</code>, or <code>dependency-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing dependency-aware apply-and-reconcile hardening summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ActiveTaskIds"></a> ActiveTaskIds

Gets the currently active connector task identifiers when one report exists.

```csharp
public IReadOnlyList<string> ActiveTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CanExecuteDependencyAwareApplyAndReconcileOnCurrentNode"></a> CanExecuteDependencyAwareApplyAndReconcileOnCurrentNode

Gets a value indicating whether the current node can execute dependency-aware apply-and-reconcile safely.

```csharp
public bool CanExecuteDependencyAwareApplyAndReconcileOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CategoryCount"></a> CategoryCount

Gets the number of active dependency-aware hardening categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CategoryIds"></a> CategoryIds

Gets the stable provider-owned control-plane dependency-aware apply-and-reconcile hardening categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with dependency-aware apply-and-reconcile hardening.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed dependency-aware hardening.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed dependency-aware hardening.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with dependency-aware hardening.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with dependency-aware hardening.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_DeclaredConnectClusterId"></a> DeclaredConnectClusterId

Gets the declared connector-cluster identifier when one is known.

```csharp
public string? DeclaredConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_DeclaredConnectorClass"></a> DeclaredConnectorClass

Gets the declared connector-class identifier when one is known.

```csharp
public string? DeclaredConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_DeclaredSourceProviderId"></a> DeclaredSourceProviderId

Gets the declared source-provider identifier when one is known.

```csharp
public string? DeclaredSourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_DeclaredTaskIds"></a> DeclaredTaskIds

Gets the declared connector task identifiers when one baseline exists.

```csharp
public IReadOnlyList<string> DeclaredTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_Description"></a> Description

Gets an optional operator-facing dependency-aware apply-and-reconcile hardening summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_DriftState"></a> DriftState

Gets the current broader managed-connector drift state that informed dependency-aware apply-and-reconcile hardening.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed dependency-aware apply-and-reconcile hardening.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with dependency-aware apply-and-reconcile hardening.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed dependency-aware apply-and-reconcile hardening.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ExpectedTaskCount"></a> ExpectedTaskCount

Gets the declared task count when one is known.

```csharp
public int? ExpectedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_GovernanceState"></a> GovernanceState

Gets the current broader managed-connector governance state that informed dependency-aware apply-and-reconcile hardening.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasActiveTaskTopology"></a> HasActiveTaskTopology

Gets a value indicating whether one active task topology is currently available.

```csharp
public bool HasActiveTaskTopology { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasDeclaredDependencyIdentity"></a> HasDeclaredDependencyIdentity

Gets a value indicating whether declared dependency identity is complete.

```csharp
public bool HasDeclaredDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasDependencyIdentityMismatch"></a> HasDependencyIdentityMismatch

Gets a value indicating whether dependency identity currently reports one declared-versus-observed mismatch.

```csharp
public bool HasDependencyIdentityMismatch { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasReportedDependencyIdentity"></a> HasReportedDependencyIdentity

Gets a value indicating whether reported dependency identity is complete.

```csharp
public bool HasReportedDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasReportedTaskTopology"></a> HasReportedTaskTopology

Gets a value indicating whether one reported task topology is currently available.

```csharp
public bool HasReportedTaskTopology { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasTargetOperation"></a> HasTargetOperation

Gets a value indicating whether the current answer exposes one concrete target operation.

```csharp
public bool HasTargetOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasTaskBaseline"></a> HasTaskBaseline

Gets a value indicating whether one declared task baseline is currently available.

```csharp
public bool HasTaskBaseline { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_HasTaskTopologyMismatch"></a> HasTaskTopologyMismatch

Gets a value indicating whether task topology currently reports one declared-versus-observed mismatch.

```csharp
public bool HasTaskTopologyMismatch { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsApplyAndReconcileHardened"></a> IsApplyAndReconcileHardened

Gets a value indicating whether dependency-aware apply-and-reconcile hardening is fully hardened.

```csharp
public bool IsApplyAndReconcileHardened { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsDependencyBlocked"></a> IsDependencyBlocked

Gets a value indicating whether dependency-aware apply-and-reconcile hardening currently remains blocked.

```csharp
public bool IsDependencyBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsDependencyDegraded"></a> IsDependencyDegraded

Gets a value indicating whether dependency-aware apply-and-reconcile hardening currently remains degraded.

```csharp
public bool IsDependencyDegraded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsDependencyReady"></a> IsDependencyReady

Gets a value indicating whether dependency-aware apply-and-reconcile hardening is currently ready.

```csharp
public bool IsDependencyReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsDependencyRisk"></a> IsDependencyRisk

Gets a value indicating whether dependency-aware apply-and-reconcile hardening currently remains risky.

```csharp
public bool IsDependencyRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current provider lane targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether dependency-aware apply-and-reconcile hardening still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to dependency-aware hardening.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed dependency-aware hardening.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with dependency-aware apply-and-reconcile hardening.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with dependency-aware hardening.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderExecutionOrchestrationState"></a> ProviderExecutionOrchestrationState

Gets the current broader provider execution-orchestration state that informed dependency-aware hardening.

```csharp
public string ProviderExecutionOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderOwnedControlPlaneApplyAndReconcileExecutionState"></a> ProviderOwnedControlPlaneApplyAndReconcileExecutionState

Gets the current provider-owned control-plane apply-and-reconcile execution state that informed dependency-aware hardening.

```csharp
public string ProviderOwnedControlPlaneApplyAndReconcileExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderOwnedControlPlaneMutationReconcileState"></a> ProviderOwnedControlPlaneMutationReconcileState

Gets the current provider-owned control-plane mutation and reconcile state that informed dependency-aware hardening.

```csharp
public string ProviderOwnedControlPlaneMutationReconcileState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderOwnedControlPlaneOwnershipState"></a> ProviderOwnedControlPlaneOwnershipState

Gets the current provider-owned control-plane ownership state that informed dependency-aware hardening.

```csharp
public string ProviderOwnedControlPlaneOwnershipState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderOwnedControlPlaneProvisioningState"></a> ProviderOwnedControlPlaneProvisioningState

Gets the current provider-owned control-plane provisioning state that informed dependency-aware hardening.

```csharp
public string ProviderOwnedControlPlaneProvisioningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ProviderOwnedWritePathExecutionState"></a> ProviderOwnedWritePathExecutionState

Gets the current provider-owned write-path execution state that informed dependency-aware hardening.

```csharp
public string ProviderOwnedWritePathExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReconciliationReason"></a> ReconciliationReason

Gets the latest operator-facing reconciliation summary currently visible for the managed connector.

```csharp
public string? ReconciliationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReconciliationState"></a> ReconciliationState

Gets the latest reconciliation state currently visible for the managed connector.

```csharp
public string? ReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReportedConnectClusterId"></a> ReportedConnectClusterId

Gets the last reported connector-cluster identifier when one is known.

```csharp
public string? ReportedConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReportedConnectorClass"></a> ReportedConnectorClass

Gets the last reported connector-class identifier when one is known.

```csharp
public string? ReportedConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReportedSourceProviderId"></a> ReportedSourceProviderId

Gets the last reported source-provider identifier when one is known.

```csharp
public string? ReportedSourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReportedTaskCount"></a> ReportedTaskCount

Gets the last reported task count when one is known.

```csharp
public int? ReportedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_ReportedTaskIds"></a> ReportedTaskIds

Gets the last reported connector task identifiers when one report exists.

```csharp
public IReadOnlyList<string> ReportedTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current provider lane still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed dependency-aware hardening.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive dependency-aware apply-and-reconcile hardening.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with dependency-aware hardening.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_State"></a> State

Gets the stable managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current provider lane would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
