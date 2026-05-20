---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector provider-specific control-plane dependency-aware teardown and mutation-execution hardening posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus\(string, string?\)

Creates a new managed-connector provider-specific control-plane dependency-aware teardown and mutation-execution hardening answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-specific dependency-aware teardown and mutation-execution hardening state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>dependency-ready</code>, <code>teardown-blocked</code>, <code>mutation-execution-blocked</code>, <code>dependency-degraded</code>, <code>teardown-hardened</code>, <code>mutation-execution-hardened</code>, or <code>dependency-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing teardown and mutation-execution hardening summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CanExecuteDependencyAwareMutationExecutionOnCurrentNode"></a> CanExecuteDependencyAwareMutationExecutionOnCurrentNode

Gets a value indicating whether the current node can execute dependency-aware mutation execution safely.

```csharp
public bool CanExecuteDependencyAwareMutationExecutionOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CanExecuteDependencyAwareTeardownAndMutationExecutionOnCurrentNode"></a> CanExecuteDependencyAwareTeardownAndMutationExecutionOnCurrentNode

Gets a value indicating whether the current node can execute dependency-aware teardown or mutation execution safely.

```csharp
public bool CanExecuteDependencyAwareTeardownAndMutationExecutionOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CanExecuteDependencyAwareTeardownOnCurrentNode"></a> CanExecuteDependencyAwareTeardownOnCurrentNode

Gets a value indicating whether the current node can execute dependency-aware teardown safely.

```csharp
public bool CanExecuteDependencyAwareTeardownOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CategoryCount"></a> CategoryCount

Gets the number of active provider-specific teardown and mutation-execution hardening categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CategoryIds"></a> CategoryIds

Gets the stable provider-specific dependency-aware teardown and mutation-execution hardening categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with provider-specific teardown and mutation-execution hardening.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed this hardening answer.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_CommandRetryState"></a> CommandRetryState

Gets the current managed-connector command-retry state that informed this hardening answer.

```csharp
public string CommandRetryState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with provider-specific teardown and mutation execution.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with provider-specific teardown and mutation execution.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ConnectorId"></a> ConnectorId

Gets the best available connector identifier currently associated with provider-specific teardown and mutation execution.

```csharp
public string? ConnectorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_Description"></a> Description

Gets an optional operator-facing teardown and mutation-execution hardening summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current shared execution-adapter state that informed this hardening answer.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed provider-specific teardown and mutation-execution hardening.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with provider-specific teardown and mutation-execution hardening.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed provider-specific teardown and mutation-execution hardening.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasActiveTaskTopology"></a> HasActiveTaskTopology

Gets a value indicating whether one active task topology is currently available.

```csharp
public bool HasActiveTaskTopology { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasConnectorIdentity"></a> HasConnectorIdentity

Gets a value indicating whether the runtime currently exposes one connector identity.

```csharp
public bool HasConnectorIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasDeclaredDependencyIdentity"></a> HasDeclaredDependencyIdentity

Gets a value indicating whether declared dependency identity is complete.

```csharp
public bool HasDeclaredDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasDependencyIdentityMismatch"></a> HasDependencyIdentityMismatch

Gets a value indicating whether dependency identity currently reports one declared-versus-observed mismatch.

```csharp
public bool HasDependencyIdentityMismatch { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasMaterializerIdentity"></a> HasMaterializerIdentity

Gets a value indicating whether the runtime currently exposes one selected materializer identifier.

```csharp
public bool HasMaterializerIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasProviderIdentity"></a> HasProviderIdentity

Gets a value indicating whether the runtime currently exposes one provider identity.

```csharp
public bool HasProviderIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasProviderSurfaceIdentity"></a> HasProviderSurfaceIdentity

Gets a value indicating whether the runtime currently exposes one provider-facing surface identifier.

```csharp
public bool HasProviderSurfaceIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasReportedDependencyIdentity"></a> HasReportedDependencyIdentity

Gets a value indicating whether reported dependency identity is complete.

```csharp
public bool HasReportedDependencyIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasReportedTaskTopology"></a> HasReportedTaskTopology

Gets a value indicating whether one reported task topology is currently available.

```csharp
public bool HasReportedTaskTopology { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasTargetOperation"></a> HasTargetOperation

Gets a value indicating whether the current answer exposes one concrete target operation.

```csharp
public bool HasTargetOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasTaskBaseline"></a> HasTaskBaseline

Gets a value indicating whether one declared task baseline is currently available.

```csharp
public bool HasTaskBaseline { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasTaskTopologyMismatch"></a> HasTaskTopologyMismatch

Gets a value indicating whether task topology currently reports one declared-versus-observed mismatch.

```csharp
public bool HasTaskTopologyMismatch { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasTransportIdentity"></a> HasTransportIdentity

Gets a value indicating whether the runtime currently exposes one provider transport kind.

```csharp
public bool HasTransportIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_HasWorkerIdentity"></a> HasWorkerIdentity

Gets a value indicating whether the runtime currently exposes one provider worker identity.

```csharp
public bool HasWorkerIdentity { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsDependencyDegraded"></a> IsDependencyDegraded

Gets a value indicating whether provider-specific dependency-aware teardown and mutation execution currently remains degraded.

```csharp
public bool IsDependencyDegraded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsDependencyReady"></a> IsDependencyReady

Gets a value indicating whether provider-specific dependency-aware teardown and mutation execution is currently ready.

```csharp
public bool IsDependencyReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsDependencyRisk"></a> IsDependencyRisk

Gets a value indicating whether provider-specific dependency-aware teardown and mutation execution currently remains risky.

```csharp
public bool IsDependencyRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current provider lane targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsMutationExecutionBlocked"></a> IsMutationExecutionBlocked

Gets a value indicating whether provider-specific dependency-aware mutation execution currently remains blocked.

```csharp
public bool IsMutationExecutionBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsMutationExecutionHardened"></a> IsMutationExecutionHardened

Gets a value indicating whether provider-specific dependency-aware mutation execution is fully hardened.

```csharp
public bool IsMutationExecutionHardened { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsMutationExecutionOperation"></a> IsMutationExecutionOperation

Gets a value indicating whether the current answer currently represents one mutation-execution operation.

```csharp
public bool IsMutationExecutionOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsMutationOperation"></a> IsMutationOperation

Gets a value indicating whether the current answer currently represents one provider-owned mutation operation.

```csharp
public bool IsMutationOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether provider-specific dependency-aware teardown and mutation-execution hardening still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsReconcileOperation"></a> IsReconcileOperation

Gets a value indicating whether the current answer currently represents one provider-owned reconcile operation.

```csharp
public bool IsReconcileOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsTeardownBlocked"></a> IsTeardownBlocked

Gets a value indicating whether provider-specific dependency-aware teardown currently remains blocked.

```csharp
public bool IsTeardownBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsTeardownHardened"></a> IsTeardownHardened

Gets a value indicating whether provider-specific dependency-aware teardown is fully hardened.

```csharp
public bool IsTeardownHardened { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_IsTeardownOperation"></a> IsTeardownOperation

Gets a value indicating whether the current answer currently represents one teardown operation.

```csharp
public bool IsTeardownOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to this hardening answer.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed this hardening answer.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_MaterializerId"></a> MaterializerId

Gets the materializer identifier currently associated with provider-specific teardown and mutation execution when one is known.

```csharp
public string? MaterializerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with provider-specific teardown and mutation-execution hardening.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with this hardening answer.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderExecutionOrchestrationState"></a> ProviderExecutionOrchestrationState

Gets the current broader provider execution-orchestration state that informed this hardening answer.

```csharp
public string ProviderExecutionOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderId"></a> ProviderId

Gets the provider identifier currently associated with provider-specific teardown and mutation execution when one is known.

```csharp
public string? ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedControlPlaneApplyAndReconcileExecutionState"></a> ProviderOwnedControlPlaneApplyAndReconcileExecutionState

Gets the current provider-owned control-plane apply-and-reconcile execution state that informed this hardening answer.

```csharp
public string ProviderOwnedControlPlaneApplyAndReconcileExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState"></a> ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState

Gets the current provider-owned control-plane dependency-aware provisioning and mutation hardening state that informed this hardening answer.

```csharp
public string ProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedControlPlaneMutationReconcileState"></a> ProviderOwnedControlPlaneMutationReconcileState

Gets the current provider-owned control-plane mutation and reconcile state that informed this hardening answer.

```csharp
public string ProviderOwnedControlPlaneMutationReconcileState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedControlPlaneOwnershipState"></a> ProviderOwnedControlPlaneOwnershipState

Gets the current provider-owned control-plane ownership state that informed this hardening answer.

```csharp
public string ProviderOwnedControlPlaneOwnershipState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedControlPlaneProvisioningState"></a> ProviderOwnedControlPlaneProvisioningState

Gets the current provider-owned control-plane provisioning state that informed this hardening answer.

```csharp
public string ProviderOwnedControlPlaneProvisioningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderOwnedWritePathExecutionState"></a> ProviderOwnedWritePathExecutionState

Gets the current provider-owned write-path execution state that informed this hardening answer.

```csharp
public string ProviderOwnedWritePathExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderSpecificControlPlaneMaterializerState"></a> ProviderSpecificControlPlaneMaterializerState

Gets the current provider-specific control-plane materializer state that informed this hardening answer.

```csharp
public string ProviderSpecificControlPlaneMaterializerState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ProviderSurfaceId"></a> ProviderSurfaceId

Gets the provider-facing surface identifier currently associated with provider-specific teardown and mutation execution when one is known.

```csharp
public string? ProviderSurfaceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ReconciliationReason"></a> ReconciliationReason

Gets the latest operator-facing reconciliation summary currently visible for the managed connector.

```csharp
public string? ReconciliationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_ReconciliationState"></a> ReconciliationState

Gets the latest reconciliation state currently visible for the managed connector.

```csharp
public string? ReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current provider lane still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed this hardening answer.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive provider-specific teardown and mutation-execution hardening.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with provider-specific teardown and mutation execution.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_State"></a> State

Gets the stable managed-connector provider-specific control-plane dependency-aware teardown and mutation-execution hardening state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_TransportKind"></a> TransportKind

Gets the provider transport kind currently associated with provider-specific teardown and mutation execution when one is known.

```csharp
public string? TransportKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_WorkerId"></a> WorkerId

Gets the best available provider worker identifier currently associated with provider-specific teardown and mutation execution.

```csharp
public string? WorkerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current provider lane would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
