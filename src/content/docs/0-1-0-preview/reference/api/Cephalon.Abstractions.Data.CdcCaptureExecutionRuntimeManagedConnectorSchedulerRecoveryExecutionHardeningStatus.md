---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector scheduler recovery and execution-hardening posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus\(string, string?\)

Creates a new managed-connector scheduler recovery and execution-hardening answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scheduler recovery and execution-hardening state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>recovery-ready</code>, <code>recovery-blocked</code>, <code>replaying</code>, <code>execution-hardened</code>, or <code>execution-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing scheduler recovery and execution-hardening summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CanExecuteAutomaticRetryOnCurrentNode"></a> CanExecuteAutomaticRetryOnCurrentNode

Gets a value indicating whether the current node can safely execute the next bounded automatic retry step.

```csharp
public bool CanExecuteAutomaticRetryOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CategoryCount"></a> CategoryCount

Gets the number of active scheduler recovery and execution-hardening categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CategoryIds"></a> CategoryIds

Gets the stable scheduler recovery and execution-hardening categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with scheduler recovery and execution hardening.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CommandJournalDurabilityState"></a> CommandJournalDurabilityState

Gets the current managed-connector command-journal durability state that informed scheduler recovery and execution hardening.

```csharp
public string CommandJournalDurabilityState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one was configured for automatic retry.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_Description"></a> Description

Gets an optional operator-facing scheduler recovery and execution-hardening summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_DistributedRetryOrchestrationState"></a> DistributedRetryOrchestrationState

Gets the current managed-connector distributed retry orchestration state that informed scheduler recovery and execution hardening.

```csharp
public string DistributedRetryOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_DurableSharedSchedulerOrchestrationState"></a> DurableSharedSchedulerOrchestrationState

Gets the current managed-connector durable shared scheduler-orchestration state that informed scheduler recovery and execution hardening.

```csharp
public string DurableSharedSchedulerOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed scheduler recovery and execution hardening.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with scheduler recovery and execution hardening.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed scheduler recovery and execution hardening.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_HasMatchingAutomaticRetryAttempt"></a> HasMatchingAutomaticRetryAttempt

Gets a value indicating whether retained history currently contains one automatic retry attempt for the current retry fingerprint.

```csharp
public bool HasMatchingAutomaticRetryAttempt { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsExecutionHardened"></a> IsExecutionHardened

Gets a value indicating whether scheduler execution truth currently looks hardened enough for bounded execution.

```csharp
public bool IsExecutionHardened { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsExecutionRisk"></a> IsExecutionRisk

Gets a value indicating whether scheduler execution truth currently remains risky.

```csharp
public bool IsExecutionRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether scheduler recovery and execution hardening still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsRecoveryBlocked"></a> IsRecoveryBlocked

Gets a value indicating whether scheduler recovery still remains blocked by missing or unhealthy durable evidence.

```csharp
public bool IsRecoveryBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsRecoveryReady"></a> IsRecoveryReady

Gets a value indicating whether scheduler recovery is ready for safe bounded execution on the current node.

```csharp
public bool IsRecoveryReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_IsReplaying"></a> IsReplaying

Gets a value indicating whether scheduler recovery is replaying retained execution evidence.

```csharp
public bool IsReplaying { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestAutomaticRetryAttemptId"></a> LatestAutomaticRetryAttemptId

Gets the stable latest automatic retry attempt identifier when one exists.

```csharp
public string LatestAutomaticRetryAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestAutomaticRetryExecutionFingerprint"></a> LatestAutomaticRetryExecutionFingerprint

Gets the deterministic execution fingerprint of the latest automatic retry attempt when one exists.

```csharp
public string LatestAutomaticRetryExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestAutomaticRetryRecordedAtUtc"></a> LatestAutomaticRetryRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest automatic retry attempt when one exists.

```csharp
public DateTimeOffset? LatestAutomaticRetryRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestCommandExecutionFingerprint"></a> LatestCommandExecutionFingerprint

Gets the deterministic execution fingerprint of the latest recorded command-execution outcome when one exists.

```csharp
public string LatestCommandExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestCommandExecutionInvocationSourceId"></a> LatestCommandExecutionInvocationSourceId

Gets the invocation-source identifier of the latest recorded command-execution outcome.

```csharp
public string LatestCommandExecutionInvocationSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to scheduler recovery and execution hardening.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_MultiNodeLeaseExecutionState"></a> MultiNodeLeaseExecutionState

Gets the current managed-connector broader multi-node lease-execution state that informed scheduler recovery and execution hardening.

```csharp
public string MultiNodeLeaseExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with scheduler recovery and execution hardening.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets the bounded retry scheduler polling interval, in seconds, when one is configured.

```csharp
public int PollingIntervalSeconds { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with scheduler recovery and execution hardening.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_SchedulerId"></a> SchedulerId

Gets the stable shared scheduler identifier currently associated with scheduler recovery and execution hardening.

```csharp
public string SchedulerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_SchedulerKind"></a> SchedulerKind

Gets the stable shared scheduler kind currently associated with scheduler recovery and execution hardening.

```csharp
public string SchedulerKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive scheduler recovery and execution hardening.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus_State"></a> State

Gets the stable managed-connector scheduler recovery and execution-hardening state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
