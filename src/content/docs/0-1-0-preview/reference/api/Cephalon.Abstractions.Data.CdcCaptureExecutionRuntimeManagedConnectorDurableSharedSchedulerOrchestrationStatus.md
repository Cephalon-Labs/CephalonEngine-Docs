---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector durable shared scheduler-orchestration posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus\(string, string?\)

Creates a new managed-connector durable shared scheduler-orchestration answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable shared scheduler-orchestration state, such as <code>not-applicable</code>, <code>disabled</code>, <code>operator-only</code>, <code>unscheduled</code>, <code>scheduled</code>, <code>lease-blocked</code>, <code>recovery-needed</code>, or <code>scheduler-conflicted</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing durable shared scheduler-orchestration summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_AutomaticRetryCoordinationState"></a> AutomaticRetryCoordinationState

Gets the current managed-connector automatic background retry coordination state that informed durable shared scheduler orchestration.

```csharp
public string AutomaticRetryCoordinationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CanScheduleAutomaticRetryOnCurrentNode"></a> CanScheduleAutomaticRetryOnCurrentNode

Gets a value indicating whether the current node can currently keep one bounded automatic retry scheduled.

```csharp
public bool CanScheduleAutomaticRetryOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CategoryCount"></a> CategoryCount

Gets the number of active durable shared scheduler-orchestration categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CategoryIds"></a> CategoryIds

Gets the stable durable shared scheduler-orchestration categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with durable shared scheduler orchestration.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CommandJournalDurabilityState"></a> CommandJournalDurabilityState

Gets the current managed-connector command-journal durability state that informed durable shared scheduler orchestration.

```csharp
public string CommandJournalDurabilityState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one was configured for automatic retry.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_Description"></a> Description

Gets an optional operator-facing durable shared scheduler-orchestration summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_DistributedRetryOrchestrationState"></a> DistributedRetryOrchestrationState

Gets the current managed-connector distributed retry orchestration state that informed durable shared scheduler orchestration.

```csharp
public string DistributedRetryOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed durable shared scheduler orchestration.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with durable shared scheduler orchestration.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed durable shared scheduler orchestration.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsDisabled"></a> IsDisabled

Gets a value indicating whether durable shared scheduler orchestration is currently disabled.

```csharp
public bool IsDisabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsLeaseBlocked"></a> IsLeaseBlocked

Gets a value indicating whether durable shared scheduler orchestration remains blocked by broader lease-execution truth.

```csharp
public bool IsLeaseBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether durable shared scheduler orchestration still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsRecoveryNeeded"></a> IsRecoveryNeeded

Gets a value indicating whether durable shared scheduler orchestration still needs durable journal recovery or persistence hardening.

```csharp
public bool IsRecoveryNeeded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsScheduled"></a> IsScheduled

Gets a value indicating whether durable shared scheduler orchestration can currently keep one bounded retry scheduled on the current node.

```csharp
public bool IsScheduled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsSchedulerConflicted"></a> IsSchedulerConflicted

Gets a value indicating whether durable shared scheduler orchestration remains conflicted across coordination or lease ownership truth.

```csharp
public bool IsSchedulerConflicted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_IsUnscheduled"></a> IsUnscheduled

Gets a value indicating whether durable shared scheduler orchestration currently does not need to keep the runtime scheduled.

```csharp
public bool IsUnscheduled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_LatestAutomaticRetryAttemptId"></a> LatestAutomaticRetryAttemptId

Gets the latest automatic retry attempt identifier currently associated with durable shared scheduler orchestration.

```csharp
public string LatestAutomaticRetryAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_LatestAutomaticRetryRecordedAtUtc"></a> LatestAutomaticRetryRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest automatic retry attempt when one exists.

```csharp
public DateTimeOffset? LatestAutomaticRetryRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_MultiNodeLeaseExecutionState"></a> MultiNodeLeaseExecutionState

Gets the current managed-connector broader multi-node lease-execution state that informed durable shared scheduler orchestration.

```csharp
public string MultiNodeLeaseExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with durable shared scheduler orchestration.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets the bounded retry scheduler polling interval, in seconds, when one is configured.

```csharp
public int PollingIntervalSeconds { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with durable shared scheduler orchestration.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_SchedulerId"></a> SchedulerId

Gets the stable shared scheduler identifier currently associated with durable shared scheduler orchestration.

```csharp
public string SchedulerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_SchedulerKind"></a> SchedulerKind

Gets the stable shared scheduler kind currently associated with durable shared scheduler orchestration.

```csharp
public string SchedulerKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive durable shared scheduler orchestration.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus_State"></a> State

Gets the stable managed-connector durable shared scheduler-orchestration state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
