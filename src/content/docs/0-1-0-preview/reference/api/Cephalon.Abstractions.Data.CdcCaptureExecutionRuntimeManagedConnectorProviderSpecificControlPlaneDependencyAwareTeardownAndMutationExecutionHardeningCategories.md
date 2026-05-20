---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-specific control-plane dependency-aware teardown and mutation-execution hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ActiveTaskTopologyReady"></a> ActiveTaskTopologyReady

The runtime currently exposes one active task topology.

```csharp
public const string ActiveTaskTopologyReady = "active-task-topology"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ApprovalRequired"></a> ApprovalRequired

The current provider lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ConnectorIdentityReady"></a> ConnectorIdentityReady

The runtime currently exposes one connector identity.

```csharp
public const string ConnectorIdentityReady = "connector-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet execute the broader provider-specific teardown or mutation-execution lane.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute the broader provider-specific teardown or mutation-execution lane.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeMutationExecutionBlocked"></a> CurrentNodeMutationExecutionBlocked

The current node cannot yet execute dependency-aware mutation execution.

```csharp
public const string CurrentNodeMutationExecutionBlocked = "current-node-mutation-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeMutationExecutionExecutable"></a> CurrentNodeMutationExecutionExecutable

The current node can execute dependency-aware mutation execution.

```csharp
public const string CurrentNodeMutationExecutionExecutable = "current-node-mutation-execution-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeTeardownBlocked"></a> CurrentNodeTeardownBlocked

The current node cannot yet execute dependency-aware teardown.

```csharp
public const string CurrentNodeTeardownBlocked = "current-node-teardown-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_CurrentNodeTeardownExecutable"></a> CurrentNodeTeardownExecutable

The current node can execute dependency-aware teardown.

```csharp
public const string CurrentNodeTeardownExecutable = "current-node-teardown-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DeclaredDependencyIdentityReady"></a> DeclaredDependencyIdentityReady

The runtime currently declares complete dependency identity metadata.

```csharp
public const string DeclaredDependencyIdentityReady = "dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DependencyDegraded"></a> DependencyDegraded

Provider-specific dependency-aware teardown and mutation execution currently remains degraded.

```csharp
public const string DependencyDegraded = "dependency-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DependencyIdentityMismatch"></a> DependencyIdentityMismatch

The runtime currently reports one dependency identity mismatch.

```csharp
public const string DependencyIdentityMismatch = "dependency-identity-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DependencyReady"></a> DependencyReady

Provider-specific dependency-aware teardown and mutation-execution hardening is currently ready.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DependencyRisk"></a> DependencyRisk

Provider-specific dependency-aware teardown and mutation execution currently remains risky.

```csharp
public const string DependencyRisk = "dependency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DestructiveOperation"></a> DestructiveOperation

The current provider lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_DurableStoreConfigured"></a> DurableStoreConfigured

The runtime currently has one durable store configured.

```csharp
public const string DurableStoreConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerExecuting"></a> MaterializerExecuting

The selected provider-specific control-plane materializer is currently executing.

```csharp
public const string MaterializerExecuting = "materializer-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerIdentityReady"></a> MaterializerIdentityReady

The runtime currently exposes one materializer identifier.

```csharp
public const string MaterializerIdentityReady = "materializer-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerReady"></a> MaterializerReady

One provider-specific control-plane materializer is currently ready.

```csharp
public const string MaterializerReady = "materializer-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerRisk"></a> MaterializerRisk

The selected provider-specific control-plane materializer currently remains risky.

```csharp
public const string MaterializerRisk = "materializer-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerSelected"></a> MaterializerSelected

One provider-specific control-plane materializer is currently selected.

```csharp
public const string MaterializerSelected = "materializer-selected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MaterializerUnavailable"></a> MaterializerUnavailable

One provider-specific control-plane materializer is currently unavailable.

```csharp
public const string MaterializerUnavailable = "materializer-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MissingConnectorId"></a> MissingConnectorId

The runtime does not currently expose one connector identity.

```csharp
public const string MissingConnectorId = "missing-connector-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MissingMaterializerId"></a> MissingMaterializerId

The runtime does not currently expose one materializer identifier.

```csharp
public const string MissingMaterializerId = "missing-materializer-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MissingProviderId"></a> MissingProviderId

The runtime does not currently expose one provider identifier.

```csharp
public const string MissingProviderId = "missing-provider-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MissingProviderSurface"></a> MissingProviderSurface

The runtime does not currently expose one provider-facing surface identifier.

```csharp
public const string MissingProviderSurface = "missing-provider-surface"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MissingTransportKind"></a> MissingTransportKind

The runtime does not currently expose one transport kind.

```csharp
public const string MissingTransportKind = "missing-transport-kind"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MutationExecutionBlocked"></a> MutationExecutionBlocked

Provider-specific dependency-aware mutation execution currently remains blocked.

```csharp
public const string MutationExecutionBlocked = "mutation-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MutationExecutionHardened"></a> MutationExecutionHardened

Provider-specific dependency-aware mutation execution is fully hardened.

```csharp
public const string MutationExecutionHardened = "mutation-execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MutationExecutionOperation"></a> MutationExecutionOperation

The current target operation is one mutation-execution operation.

```csharp
public const string MutationExecutionOperation = "mutation-execution-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_MutationOperation"></a> MutationOperation

The current target operation is one provider-owned mutation.

```csharp
public const string MutationOperation = "mutation-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_NoChangesRequired"></a> NoChangesRequired

The current provider lane would not apply another shared write-path change.

```csharp
public const string NoChangesRequired = "no-changes-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_NoTargetOperation"></a> NoTargetOperation

No provider-owned operation is currently targeted.

```csharp
public const string NoTargetOperation = "no-target-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_OperatorOnly"></a> OperatorOnly

Provider-specific dependency-aware teardown and mutation-execution hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_PersistedHistoryVisible"></a> PersistedHistoryVisible

The runtime currently exposes persisted history.

```csharp
public const string PersistedHistoryVisible = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider command translated into a provider-facing shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider command remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider command failed while Cephalon translated it.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider command determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderIdentityReady"></a> ProviderIdentityReady

The runtime currently exposes one provider identifier.

```csharp
public const string ProviderIdentityReady = "provider-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening"></a> ProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening

The runtime participates in the provider-specific dependency-aware teardown and mutation-execution hardening lane.

```csharp
public const string ProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening = "provider-specific-control-plane-dependency-aware-teardown-and-mutation-execution-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ProviderSurfaceReady"></a> ProviderSurfaceReady

The runtime currently exposes one provider-facing surface identifier.

```csharp
public const string ProviderSurfaceReady = "provider-surface-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ReconcileOperation"></a> ReconcileOperation

The current target operation is one provider-owned reconcile.

```csharp
public const string ReconcileOperation = "reconcile-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_RecoveredPersistedHistory"></a> RecoveredPersistedHistory

The runtime recovered persisted history in the current process.

```csharp
public const string RecoveredPersistedHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ReportedDependencyIdentityReady"></a> ReportedDependencyIdentityReady

The runtime currently reports complete dependency identity metadata.

```csharp
public const string ReportedDependencyIdentityReady = "reported-dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ReportedTaskTopologyReady"></a> ReportedTaskTopologyReady

The runtime currently exposes one reported task topology.

```csharp
public const string ReportedTaskTopologyReady = "reported-task-topology-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ReporterLeaseActive"></a> ReporterLeaseActive

The runtime currently exposes an active reporter lease.

```csharp
public const string ReporterLeaseActive = "reporter-lease-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_ReporterLeaseMissingOrStale"></a> ReporterLeaseMissingOrStale

The runtime is missing one active reporter lease or currently reports degraded reporter ownership.

```csharp
public const string ReporterLeaseMissingOrStale = "reporter-lease-missing-or-stale"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TaskBaselineReady"></a> TaskBaselineReady

The runtime currently exposes one declared task baseline.

```csharp
public const string TaskBaselineReady = "task-baseline-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TaskTopologyMismatch"></a> TaskTopologyMismatch

The runtime currently reports one task-topology mismatch.

```csharp
public const string TaskTopologyMismatch = "task-topology-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TeardownBlocked"></a> TeardownBlocked

Provider-specific dependency-aware teardown currently remains blocked.

```csharp
public const string TeardownBlocked = "teardown-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TeardownHardened"></a> TeardownHardened

Provider-specific dependency-aware teardown is fully hardened.

```csharp
public const string TeardownHardened = "teardown-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TeardownOperation"></a> TeardownOperation

The current target operation is one teardown operation.

```csharp
public const string TeardownOperation = "teardown-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_TransportIdentityReady"></a> TransportIdentityReady

The runtime currently exposes one transport kind.

```csharp
public const string TransportIdentityReady = "transport-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_WorkerIdentityUnavailable"></a> WorkerIdentityUnavailable

The runtime does not currently expose one provider worker identity.

```csharp
public const string WorkerIdentityUnavailable = "worker-identity-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_WorkerIdentityVisible"></a> WorkerIdentityVisible

The runtime currently exposes one provider worker identity.

```csharp
public const string WorkerIdentityVisible = "worker-identity-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningCategories_WouldApplyChanges"></a> WouldApplyChanges

The current provider lane would still apply one or more shared write-path changes.

```csharp
public const string WouldApplyChanges = "would-apply-changes"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
