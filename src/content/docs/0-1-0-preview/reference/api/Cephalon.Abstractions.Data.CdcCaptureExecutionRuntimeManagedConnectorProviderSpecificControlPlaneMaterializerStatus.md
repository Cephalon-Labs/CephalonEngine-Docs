---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializerstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector provider-specific control-plane materializer posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializerstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus\(string, string?\)

Creates a new provider-specific control-plane materializer answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific control-plane materializer state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>materializer-unavailable</code>, <code>materializer-ready</code>, <code>materializer-selected</code>, <code>materializer-executing</code>, or <code>materializer-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing provider-specific materializer summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CanUseProviderSpecificControlPlaneMaterializerOnCurrentNode"></a> CanUseProviderSpecificControlPlaneMaterializerOnCurrentNode

Gets a value indicating whether the current node can use the selected provider-specific control-plane materializer safely.

```csharp
public bool CanUseProviderSpecificControlPlaneMaterializerOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CategoryCount"></a> CategoryCount

Gets the number of active provider-specific materializer categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CategoryIds"></a> CategoryIds

Gets the stable provider-specific control-plane materializer categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with provider-specific control-plane materialization.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed provider-specific materialization.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed provider-specific materialization.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with provider-specific materialization.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with provider-specific materialization.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ConnectorId"></a> ConnectorId

Gets the best available connector identifier currently associated with provider-specific materialization.

```csharp
public string? ConnectorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_Description"></a> Description

Gets an optional operator-facing provider-specific materializer summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current shared execution-adapter state that informed provider-specific materialization.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed provider-specific materialization.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with provider-specific control-plane materialization.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed provider-specific materialization.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasConnectorIdentity"></a> HasConnectorIdentity

Gets a value indicating whether the runtime currently exposes one connector identity for provider-specific materialization.

```csharp
public bool HasConnectorIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasDeclaredDependencyIdentity"></a> HasDeclaredDependencyIdentity

Gets a value indicating whether declared dependency identity is complete.

```csharp
public bool HasDeclaredDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasMaterializerIdentity"></a> HasMaterializerIdentity

Gets a value indicating whether the runtime currently exposes one selected materializer identifier.

```csharp
public bool HasMaterializerIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasProviderIdentity"></a> HasProviderIdentity

Gets a value indicating whether the runtime currently exposes one provider identity for provider-specific materialization.

```csharp
public bool HasProviderIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasProviderSurfaceIdentity"></a> HasProviderSurfaceIdentity

Gets a value indicating whether the runtime currently exposes one provider-facing surface identifier.

```csharp
public bool HasProviderSurfaceIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasReportedDependencyIdentity"></a> HasReportedDependencyIdentity

Gets a value indicating whether reported dependency identity is complete.

```csharp
public bool HasReportedDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasSelectedMaterializer"></a> HasSelectedMaterializer

Gets a value indicating whether the runtime currently exposes one selected provider-specific materializer.

```csharp
public bool HasSelectedMaterializer { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasTargetOperation"></a> HasTargetOperation

Gets a value indicating whether the current answer exposes one concrete target operation.

```csharp
public bool HasTargetOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasTransportIdentity"></a> HasTransportIdentity

Gets a value indicating whether the runtime currently exposes one provider transport kind.

```csharp
public bool HasTransportIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_HasWorkerIdentity"></a> HasWorkerIdentity

Gets a value indicating whether the runtime currently exposes one provider worker identity.

```csharp
public bool HasWorkerIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current provider lane targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMaterializerExecuting"></a> IsMaterializerExecuting

Gets a value indicating whether the selected provider-specific control-plane materializer is currently executing.

```csharp
public bool IsMaterializerExecuting { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMaterializerReady"></a> IsMaterializerReady

Gets a value indicating whether one provider-specific control-plane materializer is currently ready.

```csharp
public bool IsMaterializerReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMaterializerRisk"></a> IsMaterializerRisk

Gets a value indicating whether provider-specific control-plane materialization currently remains risky.

```csharp
public bool IsMaterializerRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMaterializerSelected"></a> IsMaterializerSelected

Gets a value indicating whether one provider-specific control-plane materializer is currently selected.

```csharp
public bool IsMaterializerSelected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMaterializerUnavailable"></a> IsMaterializerUnavailable

Gets a value indicating whether one provider-specific control-plane materializer is currently unavailable.

```csharp
public bool IsMaterializerUnavailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsMutationOperation"></a> IsMutationOperation

Gets a value indicating whether the current answer currently represents one provider-owned mutation operation.

```csharp
public bool IsMutationOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether provider-specific control-plane materialization still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsProvisioningOperation"></a> IsProvisioningOperation

Gets a value indicating whether the current answer currently represents the broader provisioning lane.

```csharp
public bool IsProvisioningOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_IsReconcileOperation"></a> IsReconcileOperation

Gets a value indicating whether the current answer currently represents one provider-owned reconcile operation.

```csharp
public bool IsReconcileOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to provider-specific materialization.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed provider-specific materialization.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_MaterializerId"></a> MaterializerId

Gets the materializer identifier currently associated with provider-specific materialization when one is known.

```csharp
public string? MaterializerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with provider-specific materialization.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with provider-specific materialization.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderExecutionOrchestrationState"></a> ProviderExecutionOrchestrationState

Gets the current broader provider execution-orchestration state that informed provider-specific materialization.

```csharp
public string ProviderExecutionOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderId"></a> ProviderId

Gets the provider identifier currently associated with provider-specific materialization when one is known.

```csharp
public string? ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedControlPlaneApplyAndReconcileExecutionState"></a> ProviderOwnedControlPlaneApplyAndReconcileExecutionState

Gets the current provider-owned control-plane apply-and-reconcile execution state that informed provider-specific materialization.

```csharp
public string ProviderOwnedControlPlaneApplyAndReconcileExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState"></a> ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState

Gets the current provider-owned control-plane dependency-aware provisioning and mutation hardening state that informed provider-specific materialization.

```csharp
public string ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedControlPlaneMutationReconcileState"></a> ProviderOwnedControlPlaneMutationReconcileState

Gets the current provider-owned control-plane mutation and reconcile state that informed provider-specific materialization.

```csharp
public string ProviderOwnedControlPlaneMutationReconcileState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedControlPlaneOwnershipState"></a> ProviderOwnedControlPlaneOwnershipState

Gets the current provider-owned control-plane ownership state that informed provider-specific materialization.

```csharp
public string ProviderOwnedControlPlaneOwnershipState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedControlPlaneProvisioningState"></a> ProviderOwnedControlPlaneProvisioningState

Gets the current provider-owned control-plane provisioning state that informed provider-specific materialization.

```csharp
public string ProviderOwnedControlPlaneProvisioningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderOwnedWritePathExecutionState"></a> ProviderOwnedWritePathExecutionState

Gets the current provider-owned write-path execution state that informed provider-specific materialization.

```csharp
public string ProviderOwnedWritePathExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ProviderSurfaceId"></a> ProviderSurfaceId

Gets the provider-facing surface identifier currently associated with provider-specific materialization when one is known.

```csharp
public string? ProviderSurfaceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ReconciliationReason"></a> ReconciliationReason

Gets the latest operator-facing reconciliation summary currently visible for the managed connector.

```csharp
public string? ReconciliationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_ReconciliationState"></a> ReconciliationState

Gets the latest reconciliation state currently visible for the managed connector.

```csharp
public string? ReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current provider lane still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed provider-specific materialization.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive provider-specific materialization.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with provider-specific materialization.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_State"></a> State

Gets the stable managed-connector provider-specific control-plane materializer state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_TransportKind"></a> TransportKind

Gets the provider transport kind currently associated with provider-specific materialization when one is known.

```csharp
public string? TransportKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_WorkerId"></a> WorkerId

Gets the best available provider worker identifier currently associated with provider-specific materialization.

```csharp
public string? WorkerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current provider lane would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
