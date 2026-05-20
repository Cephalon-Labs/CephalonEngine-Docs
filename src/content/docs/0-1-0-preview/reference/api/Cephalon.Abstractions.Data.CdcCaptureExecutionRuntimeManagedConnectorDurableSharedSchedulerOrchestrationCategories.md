---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector durable shared scheduler-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_ActiveLeaseVisible"></a> ActiveLeaseVisible

The runtime still exposes one active reporter lease.

```csharp
public const string ActiveLeaseVisible = "active-lease-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_ActiveReporterVisible"></a> ActiveReporterVisible

The runtime still exposes one active reporter identifier.

```csharp
public const string ActiveReporterVisible = "active-reporter-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_CooldownWindow"></a> CooldownWindow

The current retry policy is still waiting for a cooldown window to elapse.

```csharp
public const string CooldownWindow = "cooldown-window"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet keep the runtime scheduled.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_CurrentNodeSchedulable"></a> CurrentNodeSchedulable

The current node can keep one bounded automatic retry scheduled.

```csharp
public const string CurrentNodeSchedulable = "current-node-schedulable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_DurableJournalHealthy"></a> DurableJournalHealthy

The durable command journal currently looks healthy for shared scheduler decisions.

```csharp
public const string DurableJournalHealthy = "durable-journal-healthy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_DurableSharedScheduler"></a> DurableSharedScheduler

The runtime participates in the durable shared scheduler-orchestration lane.

```csharp
public const string DurableSharedScheduler = "durable-shared-scheduler"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Automatic retry currently depends on in-memory command history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_LeaseBlocked"></a> LeaseBlocked

Durable shared scheduler orchestration currently remains blocked by broader lease-execution truth.

```csharp
public const string LeaseBlocked = "lease-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on cross-node lease ownership before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_NoFurtherRetryNeeded"></a> NoFurtherRetryNeeded

The current shared runtime truth does not currently need another automatic retry attempt.

```csharp
public const string NoFurtherRetryNeeded = "no-further-retry-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_OperatorOnly"></a> OperatorOnly

Durable shared scheduler orchestration still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_RecoveryNeeded"></a> RecoveryNeeded

Durable shared scheduler orchestration currently still needs durable journal recovery or persistence hardening.

```csharp
public const string RecoveryNeeded = "recovery-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_Scheduled"></a> Scheduled

Durable shared scheduler orchestration currently keeps one bounded retry scheduled on the current node.

```csharp
public const string Scheduled = "scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_SchedulerConflicted"></a> SchedulerConflicted

Durable shared scheduler orchestration currently remains conflicted across coordination or lease ownership truth.

```csharp
public const string SchedulerConflicted = "scheduler-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_SchedulerDisabled"></a> SchedulerDisabled

The shared bounded retry scheduler is currently disabled for the runtime.

```csharp
public const string SchedulerDisabled = "scheduler-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime currently executes automatic retry on a single node without cross-node lease ownership.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationCategories_Unscheduled"></a> Unscheduled

Durable shared scheduler orchestration currently does not need to keep the runtime scheduled.

```csharp
public const string Unscheduled = "unscheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
