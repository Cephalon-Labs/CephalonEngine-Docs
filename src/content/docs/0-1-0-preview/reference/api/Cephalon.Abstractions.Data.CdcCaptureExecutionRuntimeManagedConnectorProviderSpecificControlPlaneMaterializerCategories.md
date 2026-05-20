---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializercategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-specific control-plane materializer answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializercategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ApplyAndReconcileExecuting"></a> ApplyAndReconcileExecuting

The broader provider-owned apply-and-reconcile lane is currently executing.

```csharp
public const string ApplyAndReconcileExecuting = "apply-and-reconcile-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ApplyAndReconcileHardened"></a> ApplyAndReconcileHardened

The broader provider-owned apply-and-reconcile lane is fully hardened.

```csharp
public const string ApplyAndReconcileHardened = "apply-and-reconcile-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ApplyAndReconcileRisk"></a> ApplyAndReconcileRisk

The broader provider-owned apply-and-reconcile lane currently remains risky.

```csharp
public const string ApplyAndReconcileRisk = "apply-and-reconcile-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ApprovalRequired"></a> ApprovalRequired

The current provider lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ConnectorIdentityReady"></a> ConnectorIdentityReady

The runtime currently exposes one connector identity for provider-specific materialization.

```csharp
public const string ConnectorIdentityReady = "connector-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet use the selected provider-specific control-plane materializer safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can use the selected provider-specific control-plane materializer safely.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_DeclaredDependencyIdentityReady"></a> DeclaredDependencyIdentityReady

The runtime currently declares complete dependency identity metadata.

```csharp
public const string DeclaredDependencyIdentityReady = "dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_DependencyReady"></a> DependencyReady

Broader dependency-aware provisioning and mutation hardening is currently ready.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_DestructiveOperation"></a> DestructiveOperation

The current provider lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerExecuting"></a> MaterializerExecuting

The selected provider-specific control-plane materializer is currently executing or driving the provider lane.

```csharp
public const string MaterializerExecuting = "materializer-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerIdentityReady"></a> MaterializerIdentityReady

The runtime currently exposes one materializer identifier for provider-specific materialization.

```csharp
public const string MaterializerIdentityReady = "materializer-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerReady"></a> MaterializerReady

The shared runtime currently has enough truth to select a provider-specific control-plane materializer.

```csharp
public const string MaterializerReady = "materializer-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerRisk"></a> MaterializerRisk

Provider-specific control-plane materializer follow-through currently remains risky.

```csharp
public const string MaterializerRisk = "materializer-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerSelected"></a> MaterializerSelected

One provider-specific control-plane materializer is currently selected.

```csharp
public const string MaterializerSelected = "materializer-selected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MaterializerUnavailable"></a> MaterializerUnavailable

No active provider-specific control-plane materializer is currently available.

```csharp
public const string MaterializerUnavailable = "materializer-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MissingConnectorId"></a> MissingConnectorId

The runtime does not currently expose one connector identity for provider-specific materialization.

```csharp
public const string MissingConnectorId = "missing-connector-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MissingMaterializerId"></a> MissingMaterializerId

The runtime does not currently expose one materializer identifier for provider-specific materialization.

```csharp
public const string MissingMaterializerId = "missing-materializer-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MissingProviderId"></a> MissingProviderId

The runtime does not currently expose one provider identifier for provider-specific materialization.

```csharp
public const string MissingProviderId = "missing-provider-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MissingProviderSurface"></a> MissingProviderSurface

The runtime does not currently expose one provider-facing surface identifier for provider-specific materialization.

```csharp
public const string MissingProviderSurface = "missing-provider-surface"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MissingTransportKind"></a> MissingTransportKind

The runtime does not currently expose one transport kind for provider-specific materialization.

```csharp
public const string MissingTransportKind = "missing-transport-kind"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MutationBlocked"></a> MutationBlocked

Broader provider-owned control-plane mutation currently remains blocked.

```csharp
public const string MutationBlocked = "mutation-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MutationExecuting"></a> MutationExecuting

Broader provider-owned control-plane mutation or reconcile is currently executing.

```csharp
public const string MutationExecuting = "mutation-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MutationOperation"></a> MutationOperation

The current target operation is one provider-owned mutation.

```csharp
public const string MutationOperation = "mutation-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MutationReady"></a> MutationReady

Broader provider-owned control-plane mutation is currently ready.

```csharp
public const string MutationReady = "mutation-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_MutationRisk"></a> MutationRisk

Broader provider-owned control-plane mutation currently remains risky.

```csharp
public const string MutationRisk = "mutation-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_NoChangesRequired"></a> NoChangesRequired

The current provider lane would not apply another shared write-path change.

```csharp
public const string NoChangesRequired = "no-changes-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_NoTargetOperation"></a> NoTargetOperation

No provider-owned mutation or reconcile operation is currently targeted.

```csharp
public const string NoTargetOperation = "no-target-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_OperatorOnly"></a> OperatorOnly

Provider-specific control-plane materializer follow-through still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider command translated into a provider-facing shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider command remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider command failed while Cephalon translated it.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider command determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderIdentityReady"></a> ProviderIdentityReady

The runtime currently exposes one provider identifier for provider-specific materialization.

```csharp
public const string ProviderIdentityReady = "provider-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderSpecificControlPlaneMaterializer"></a> ProviderSpecificControlPlaneMaterializer

The runtime participates in the provider-specific control-plane materializer lane.

```csharp
public const string ProviderSpecificControlPlaneMaterializer = "provider-specific-control-plane-materializer"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProviderSurfaceReady"></a> ProviderSurfaceReady

The runtime currently exposes one provider-facing surface identifier for provider-specific materialization.

```csharp
public const string ProviderSurfaceReady = "provider-surface-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProvisioningBlocked"></a> ProvisioningBlocked

Broader provider-owned control-plane provisioning currently remains blocked.

```csharp
public const string ProvisioningBlocked = "provisioning-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProvisioningExecuting"></a> ProvisioningExecuting

Broader provider-owned control-plane provisioning is currently executing.

```csharp
public const string ProvisioningExecuting = "provisioning-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProvisioningReady"></a> ProvisioningReady

Broader provider-owned control-plane provisioning is currently ready.

```csharp
public const string ProvisioningReady = "provisioning-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ProvisioningRisk"></a> ProvisioningRisk

Broader provider-owned control-plane provisioning currently remains risky.

```csharp
public const string ProvisioningRisk = "provisioning-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ReconcileOperation"></a> ReconcileOperation

The current target operation is one provider-owned reconcile.

```csharp
public const string ReconcileOperation = "reconcile-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ReconcileReady"></a> ReconcileReady

Broader provider-owned control-plane reconcile is currently ready.

```csharp
public const string ReconcileReady = "reconcile-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ReportedDependencyIdentityReady"></a> ReportedDependencyIdentityReady

The runtime currently reports complete dependency identity metadata.

```csharp
public const string ReportedDependencyIdentityReady = "reported-dependency-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ReporterLeaseActive"></a> ReporterLeaseActive

The runtime currently exposes an active reporter lease.

```csharp
public const string ReporterLeaseActive = "reporter-lease-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_ReporterLeaseMissingOrStale"></a> ReporterLeaseMissingOrStale

The runtime is missing one active reporter lease or currently reports degraded reporter ownership.

```csharp
public const string ReporterLeaseMissingOrStale = "reporter-lease-missing-or-stale"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_TransportIdentityReady"></a> TransportIdentityReady

The runtime currently exposes one transport kind for provider-specific materialization.

```csharp
public const string TransportIdentityReady = "transport-identity-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_WorkerIdentityUnavailable"></a> WorkerIdentityUnavailable

The runtime does not currently expose one provider worker identity.

```csharp
public const string WorkerIdentityUnavailable = "worker-identity-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_WorkerIdentityVisible"></a> WorkerIdentityVisible

The runtime currently exposes one provider worker identity.

```csharp
public const string WorkerIdentityVisible = "worker-identity-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerCategories_WouldApplyChanges"></a> WouldApplyChanges

The current provider lane would still apply one or more shared write-path changes.

```csharp
public const string WouldApplyChanges = "would-apply-changes"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
