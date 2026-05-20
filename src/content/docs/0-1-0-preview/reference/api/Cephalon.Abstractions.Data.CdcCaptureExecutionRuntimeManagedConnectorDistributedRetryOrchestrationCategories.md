---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryorchestrationcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector distributed retry orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryorchestrationcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_AutomaticRetryAttemptRecorded"></a> AutomaticRetryAttemptRecorded

The bounded command history already records one automatic retry attempt.

```csharp
public const string AutomaticRetryAttemptRecorded = "automatic-retry-attempt-recorded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_BoundedSharedScheduler"></a> BoundedSharedScheduler

The runtime participates in the shared bounded distributed retry scheduler.

```csharp
public const string BoundedSharedScheduler = "bounded-shared-scheduler"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_CooldownWindow"></a> CooldownWindow

The current retry policy is still waiting for a cooldown window to elapse.

```csharp
public const string CooldownWindow = "cooldown-window"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_CrossNodeIdempotencyRisk"></a> CrossNodeIdempotencyRisk

Cross-node idempotency currently remains risky for automatic retry.

```csharp
public const string CrossNodeIdempotencyRisk = "cross-node-idempotency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_CrossNodeIdempotentSafe"></a> CrossNodeIdempotentSafe

Cross-node idempotency currently looks safe for automatic retry.

```csharp
public const string CrossNodeIdempotentSafe = "cross-node-idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_CurrentNodeSchedulable"></a> CurrentNodeSchedulable

The current runtime can schedule automatic retry on the current node.

```csharp
public const string CurrentNodeSchedulable = "current-node-schedulable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_DurableJournalHealthy"></a> DurableJournalHealthy

The durable command journal currently looks healthy for cross-node retry decisions.

```csharp
public const string DurableJournalHealthy = "durable-journal-healthy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Automatic retry currently depends on in-memory command history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on cross-node lease coordination before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_NoFurtherRetryNeeded"></a> NoFurtherRetryNeeded

No further automatic retry scheduling is currently needed for the runtime.

```csharp
public const string NoFurtherRetryNeeded = "no-further-retry-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_OperatorOnly"></a> OperatorOnly

Distributed retry orchestration still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_SchedulerDisabled"></a> SchedulerDisabled

The shared bounded distributed retry scheduler is disabled for the current runtime.

```csharp
public const string SchedulerDisabled = "scheduler-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_SchedulerEnabled"></a> SchedulerEnabled

The shared bounded distributed retry scheduler is enabled for the current runtime.

```csharp
public const string SchedulerEnabled = "scheduler-enabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime can evaluate automatic retry on a single node without lease coordination.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
