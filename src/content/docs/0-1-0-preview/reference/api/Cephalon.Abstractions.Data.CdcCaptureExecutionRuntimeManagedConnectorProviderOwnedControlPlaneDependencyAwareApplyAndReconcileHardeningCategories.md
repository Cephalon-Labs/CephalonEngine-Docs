---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ActiveTaskTopology"></a> ActiveTaskTopology

The runtime currently reports one or more active connector tasks.

```csharp
public const string ActiveTaskTopology = "active-task-topology"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileBlocked"></a> ApplyAndReconcileBlocked

The current provider-owned apply-and-reconcile lane remains blocked.

```csharp
public const string ApplyAndReconcileBlocked = "apply-and-reconcile-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileCompleted"></a> ApplyAndReconcileCompleted

The current provider-owned apply-and-reconcile lane no longer needs another execution step.

```csharp
public const string ApplyAndReconcileCompleted = "apply-and-reconcile-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileExecuting"></a> ApplyAndReconcileExecuting

The current provider-owned apply-and-reconcile lane is currently executing.

```csharp
public const string ApplyAndReconcileExecuting = "apply-and-reconcile-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileHardened"></a> ApplyAndReconcileHardened

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is fully hardened.

```csharp
public const string ApplyAndReconcileHardened = "apply-and-reconcile-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileReady"></a> ApplyAndReconcileReady

The current provider-owned apply-and-reconcile lane is currently ready.

```csharp
public const string ApplyAndReconcileReady = "apply-and-reconcile-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApplyAndReconcileRisk"></a> ApplyAndReconcileRisk

The current provider-owned apply-and-reconcile lane currently remains risky.

```csharp
public const string ApplyAndReconcileRisk = "apply-and-reconcile-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ApprovalRequired"></a> ApprovalRequired

The current provider lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ConnectClusterMismatch"></a> ConnectClusterMismatch

The latest reported connector-cluster identifier differs from the declared baseline.

```csharp
public const string ConnectClusterMismatch = "connect-cluster-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ConnectorClassMismatch"></a> ConnectorClassMismatch

The latest reported connector class differs from the declared baseline.

```csharp
public const string ConnectorClassMismatch = "connector-class-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet execute dependency-aware apply-and-reconcile work safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute dependency-aware apply-and-reconcile work safely.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DependencyBlocked"></a> DependencyBlocked

Provider-owned control-plane dependency-aware apply-and-reconcile hardening remains blocked.

```csharp
public const string DependencyBlocked = "dependency-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DependencyDegraded"></a> DependencyDegraded

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is currently degraded.

```csharp
public const string DependencyDegraded = "dependency-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DependencyIdentityReady"></a> DependencyIdentityReady

The runtime currently declares complete dependency identity metadata.

```csharp
public const string DependencyIdentityReady = "dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DependencyReady"></a> DependencyReady

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is currently ready.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DependencyRisk"></a> DependencyRisk

Provider-owned control-plane dependency-aware apply-and-reconcile hardening currently remains risky.

```csharp
public const string DependencyRisk = "dependency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DestructiveOperation"></a> DestructiveOperation

The current provider lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Dependency-aware hardening currently depends on in-memory history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_MissingConnectClusterId"></a> MissingConnectClusterId

The runtime does not currently declare the upstream connector-cluster identifier.

```csharp
public const string MissingConnectClusterId = "missing-connect-cluster-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_MissingConnectorClass"></a> MissingConnectorClass

The runtime does not currently declare the upstream connector class.

```csharp
public const string MissingConnectorClass = "missing-connector-class"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_MissingDeclaredTaskReports"></a> MissingDeclaredTaskReports

One or more declared task ids are missing from the latest reported task ids.

```csharp
public const string MissingDeclaredTaskReports = "missing-declared-task-reports"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_MissingSourceProviderId"></a> MissingSourceProviderId

The runtime does not currently declare the upstream source-provider identifier.

```csharp
public const string MissingSourceProviderId = "missing-source-provider-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_MissingTaskBaseline"></a> MissingTaskBaseline

The managed connector does not currently declare task ids or an expected task count.

```csharp
public const string MissingTaskBaseline = "missing-task-baseline"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_NoActiveTaskTopology"></a> NoActiveTaskTopology

The runtime does not currently report any active connector task ids.

```csharp
public const string NoActiveTaskTopology = "no-active-task-topology"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_NoChangesRequired"></a> NoChangesRequired

The current provider lane would not apply another shared write-path change.

```csharp
public const string NoChangesRequired = "no-changes-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane dependency-aware apply-and-reconcile hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider command translated into a provider-facing shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider command remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider command failed while Cephalon translated it.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider command determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening"></a> ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening

The runtime participates in the provider-owned control-plane dependency-aware apply-and-reconcile hardening lane.

```csharp
public const string ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening = "provider-owned-control-plane-dependency-aware-apply-and-reconcile-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReconciliationDegraded"></a> ReconciliationDegraded

The runtime currently reports a degraded reconciliation posture.

```csharp
public const string ReconciliationDegraded = "reconciliation-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReconciliationStable"></a> ReconciliationStable

The runtime currently reports a stable reconciliation posture.

```csharp
public const string ReconciliationStable = "reconciliation-stable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReportedDependencyIdentityReady"></a> ReportedDependencyIdentityReady

The runtime currently reports complete dependency identity metadata.

```csharp
public const string ReportedDependencyIdentityReady = "reported-dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReportedTaskIdentityUnavailable"></a> ReportedTaskIdentityUnavailable

The managed connector reports task counts, but not task identities.

```csharp
public const string ReportedTaskIdentityUnavailable = "reported-task-identity-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReportedTaskTopologyUnavailable"></a> ReportedTaskTopologyUnavailable

The managed connector has not yet reported task ids or a reported task count.

```csharp
public const string ReportedTaskTopologyUnavailable = "reported-task-topology-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReporterLeaseActive"></a> ReporterLeaseActive

The runtime currently exposes an active reporter lease.

```csharp
public const string ReporterLeaseActive = "reporter-lease-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_ReporterLeaseMissingOrStale"></a> ReporterLeaseMissingOrStale

The runtime is missing one active reporter lease or currently reports degraded reporter ownership.

```csharp
public const string ReporterLeaseMissingOrStale = "reporter-lease-missing-or-stale"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_SourceProviderMismatch"></a> SourceProviderMismatch

The latest reported source-provider identifier differs from the declared baseline.

```csharp
public const string SourceProviderMismatch = "source-provider-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_TaskCountMismatch"></a> TaskCountMismatch

The managed connector reports a different task count than the declared baseline.

```csharp
public const string TaskCountMismatch = "task-count-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_UnexpectedReportedTasks"></a> UnexpectedReportedTasks

One or more reported task ids were not part of the declared task baseline.

```csharp
public const string UnexpectedReportedTasks = "unexpected-reported-tasks"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningCategories_WouldApplyChanges"></a> WouldApplyChanges

The current provider lane would still apply shared write-path changes.

```csharp
public const string WouldApplyChanges = "would-apply-changes"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
