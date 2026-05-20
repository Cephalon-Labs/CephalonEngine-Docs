---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector provider execution-orchestration posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus\(string, string?\)

Creates a new managed-connector provider execution-orchestration answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider execution-orchestration state, such as <code>not-applicable</code>, <code>operator-only</code>, <code>orchestration-ready</code>, <code>orchestration-blocked</code>, <code>orchestration-executing</code>, <code>orchestration-completed</code>, or <code>orchestration-risk</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing provider execution-orchestration summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_AdapterFingerprint"></a> AdapterFingerprint

Gets the deterministic execution-adapter fingerprint currently associated with provider execution orchestration.

```csharp
public string AdapterFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_AdapterId"></a> AdapterId

Gets the stable provider execution-adapter identifier currently associated with provider execution orchestration.

```csharp
public string AdapterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CanOrchestrateProviderExecutionOnCurrentNode"></a> CanOrchestrateProviderExecutionOnCurrentNode

Gets a value indicating whether the current node can orchestrate provider execution safely.

```csharp
public bool CanOrchestrateProviderExecutionOnCurrentNode { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CategoryCount"></a> CategoryCount

Gets the number of active provider execution-orchestration categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CategoryIds"></a> CategoryIds

Gets the stable provider execution-orchestration categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with provider execution orchestration.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint currently associated with provider execution orchestration.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed provider execution orchestration.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier currently associated with provider execution orchestration.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier currently associated with provider execution orchestration.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one is known.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_Description"></a> Description

Gets an optional operator-facing provider execution-orchestration summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_DurableSharedSchedulerOrchestrationState"></a> DurableSharedSchedulerOrchestrationState

Gets the current durable shared scheduler-orchestration state that informed provider execution orchestration.

```csharp
public string DurableSharedSchedulerOrchestrationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current managed-connector execution-adapter state that informed provider execution orchestration.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed provider execution orchestration.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with provider execution orchestration.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed provider execution orchestration.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_HasCommandJournalEvidence"></a> HasCommandJournalEvidence

Gets a value indicating whether the current command journal already exposes provider-execution evidence.

```csharp
public bool HasCommandJournalEvidence { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_HasDurableStoreConfigured"></a> HasDurableStoreConfigured

Gets a value indicating whether a durable command-journal store is currently configured.

```csharp
public bool HasDurableStoreConfigured { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_HasPersistedRecordedHistory"></a> HasPersistedRecordedHistory

Gets a value indicating whether the durable command-journal store currently exposes persisted recorded history.

```csharp
public bool HasPersistedRecordedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_HasRecoveredPersistedHistory"></a> HasRecoveredPersistedHistory

Gets a value indicating whether the current process recovered persisted command history for this runtime.

```csharp
public bool HasRecoveredPersistedHistory { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current provider execution orchestration targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether provider execution orchestration still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOrchestrationBlocked"></a> IsOrchestrationBlocked

Gets a value indicating whether provider execution orchestration currently remains blocked.

```csharp
public bool IsOrchestrationBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOrchestrationCompleted"></a> IsOrchestrationCompleted

Gets a value indicating whether provider execution orchestration no longer needs another provider-facing orchestration step.

```csharp
public bool IsOrchestrationCompleted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOrchestrationExecuting"></a> IsOrchestrationExecuting

Gets a value indicating whether provider execution orchestration is currently executing one provider-facing orchestration step.

```csharp
public bool IsOrchestrationExecuting { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOrchestrationReady"></a> IsOrchestrationReady

Gets a value indicating whether provider execution orchestration is currently ready.

```csharp
public bool IsOrchestrationReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_IsOrchestrationRisk"></a> IsOrchestrationRisk

Gets a value indicating whether provider execution orchestration currently remains risky.

```csharp
public bool IsOrchestrationRisk { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_LatestAttemptId"></a> LatestAttemptId

Gets the stable latest recorded command-execution attempt identifier when one exists.

```csharp
public string LatestAttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_LatestCommandExecutionInvocationSourceId"></a> LatestCommandExecutionInvocationSourceId

Gets the invocation-source identifier of the latest recorded command-execution outcome.

```csharp
public string LatestCommandExecutionInvocationSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_LatestCommandExecutionState"></a> LatestCommandExecutionState

Gets the latest recorded managed-connector command-execution state visible to provider execution orchestration.

```csharp
public string LatestCommandExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_LatestExecutionFingerprint"></a> LatestExecutionFingerprint

Gets the deterministic latest recorded execution fingerprint currently visible to provider execution orchestration.

```csharp
public string LatestExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the timestamp when Cephalon recorded the latest command-execution outcome that informed provider execution orchestration.

```csharp
public DateTimeOffset? LatestRecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with provider execution orchestration.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets the bounded retry scheduler polling interval, in seconds, when one is configured.

```csharp
public int PollingIntervalSeconds { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared provider-execution changes currently associated with provider execution orchestration.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ProviderId"></a> ProviderId

Gets the best available provider identifier currently associated with provider execution orchestration.

```csharp
public string? ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_ProviderOwnedWritePathExecutionState"></a> ProviderOwnedWritePathExecutionState

Gets the current provider-owned write-path execution state that informed provider execution orchestration.

```csharp
public string ProviderOwnedWritePathExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current provider execution orchestration still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed provider execution orchestration.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_RetryFingerprint"></a> RetryFingerprint

Gets the deterministic retry fingerprint currently associated with provider execution orchestration.

```csharp
public string RetryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_SchedulerId"></a> SchedulerId

Gets the stable shared scheduler identifier currently associated with provider execution orchestration.

```csharp
public string SchedulerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_SchedulerKind"></a> SchedulerKind

Gets the stable shared scheduler kind currently associated with provider execution orchestration.

```csharp
public string SchedulerKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_SchedulerRecoveryExecutionHardeningState"></a> SchedulerRecoveryExecutionHardeningState

Gets the current scheduler recovery and execution-hardening state that informed provider execution orchestration.

```csharp
public string SchedulerRecoveryExecutionHardeningState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive provider execution orchestration.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier currently associated with provider execution orchestration.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_State"></a> State

Gets the stable managed-connector provider execution-orchestration state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current provider execution orchestration would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
