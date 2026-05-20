---
title: Class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing broader multi-node lease-execution posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus\(string, string?\)

Creates a new managed-connector broader multi-node lease-execution answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable broader multi-node lease-execution state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>single-node</code>, <code>lease-executable</code>, <code>lease-blocked</code>, <code>lease-conflicted</code>, or <code>stale-lease-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing broader multi-node lease-execution summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_AutomaticRetryCoordinationState"></a> AutomaticRetryCoordinationState

Gets the current managed-connector automatic background retry coordination state that informed broader multi-node lease execution.

```csharp
public string AutomaticRetryCoordinationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CanExecuteAutomaticRetryOnCurrentNode"></a> CanExecuteAutomaticRetryOnCurrentNode

Gets a value indicating whether the current node can execute the next bounded automatic retry step.

```csharp
public bool CanExecuteAutomaticRetryOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CategoryCount"></a> CategoryCount

Gets the number of active broader multi-node lease-execution categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CategoryIds"></a> CategoryIds

Gets the stable broader multi-node lease-execution categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with broader multi-node lease execution.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CooldownUntilUtc"></a> CooldownUntilUtc

Gets the timestamp when the active retry cooldown window ends, when one applies.

```csharp
public DateTimeOffset? CooldownUntilUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one was configured for automatic retry.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CoordinationOwnerMatchesActiveReporter"></a> CoordinationOwnerMatchesActiveReporter

Gets a value indicating whether the current host coordination owner matches the active reporter identifier.

```csharp
public bool CoordinationOwnerMatchesActiveReporter { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_CrossNodeIdempotencyHardeningState"></a> CrossNodeIdempotencyHardeningState

Gets the current managed-connector cross-node idempotency-hardening state that informed broader multi-node lease execution.

```csharp
public string CrossNodeIdempotencyHardeningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_Description"></a> Description

Gets an optional operator-facing broader multi-node lease-execution summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_DistributedRetryLeaseState"></a> DistributedRetryLeaseState

Gets the current managed-connector distributed retry lease state that informed broader multi-node lease execution.

```csharp
public string DistributedRetryLeaseState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_DistributedRetryOrchestrationState"></a> DistributedRetryOrchestrationState

Gets the current managed-connector distributed retry orchestration state that informed broader multi-node lease execution.

```csharp
public string DistributedRetryOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed broader multi-node lease execution.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with broader multi-node lease execution.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed broader multi-node lease execution.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsLeaseBlocked"></a> IsLeaseBlocked

Gets a value indicating whether the current multi-node lease posture still blocks execution on this node.

```csharp
public bool IsLeaseBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsLeaseConflicted"></a> IsLeaseConflicted

Gets a value indicating whether the current multi-node lease posture remains conflicted across nodes.

```csharp
public bool IsLeaseConflicted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsLeaseExecutable"></a> IsLeaseExecutable

Gets a value indicating whether the current node can execute the next bounded automatic retry step under the active multi-node lease posture.

```csharp
public bool IsLeaseExecutable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether broader multi-node lease execution still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsSingleNode"></a> IsSingleNode

Gets a value indicating whether broader multi-node lease execution currently runs as a single-node posture.

```csharp
public bool IsSingleNode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_IsStaleLeaseRisk"></a> IsStaleLeaseRisk

Gets a value indicating whether the current multi-node lease posture still looks stale.

```csharp
public bool IsStaleLeaseRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_LatestAutomaticRetryAttemptId"></a> LatestAutomaticRetryAttemptId

Gets the latest automatic retry attempt identifier currently associated with broader multi-node lease execution.

```csharp
public string LatestAutomaticRetryAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_LatestAutomaticRetryRecordedAtUtc"></a> LatestAutomaticRetryRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest automatic retry attempt when one exists.

```csharp
public DateTimeOffset? LatestAutomaticRetryRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with broader multi-node lease execution.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets the bounded retry scheduler polling interval, in seconds, when one is configured.

```csharp
public int PollingIntervalSeconds { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with broader multi-node lease execution.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_SchedulerId"></a> SchedulerId

Gets the stable shared scheduler identifier currently associated with broader multi-node lease execution.

```csharp
public string SchedulerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_SchedulerKind"></a> SchedulerKind

Gets the stable shared scheduler kind currently associated with broader multi-node lease execution.

```csharp
public string SchedulerKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive broader multi-node lease execution.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus_State"></a> State

Gets the stable managed-connector broader multi-node lease-execution state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
