---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider execution-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ApprovalRequired"></a> ApprovalRequired

The current provider execution lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_CommandJournalEvidence"></a> CommandJournalEvidence

The command journal currently exposes retained evidence for provider execution orchestration.

```csharp
public const string CommandJournalEvidence = "command-journal-evidence"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet orchestrate provider execution safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_CurrentNodeOrchestratable"></a> CurrentNodeOrchestratable

The current node can orchestrate provider execution safely.

```csharp
public const string CurrentNodeOrchestratable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_DestructiveOperation"></a> DestructiveOperation

The current provider execution lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ExecutionHardened"></a> ExecutionHardened

Scheduler execution truth currently looks hardened enough for orchestration.

```csharp
public const string ExecutionHardened = "execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ExecutionRisk"></a> ExecutionRisk

Scheduler execution truth currently remains risky.

```csharp
public const string ExecutionRisk = "execution-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Provider execution orchestration currently depends on in-memory history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_NoRecordedCommand"></a> NoRecordedCommand

No command-journal evidence has been recorded yet.

```csharp
public const string NoRecordedCommand = "no-recorded-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OperatorOnly"></a> OperatorOnly

Provider execution orchestration still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OrchestrationBlocked"></a> OrchestrationBlocked

Provider execution orchestration remains blocked.

```csharp
public const string OrchestrationBlocked = "orchestration-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OrchestrationCompleted"></a> OrchestrationCompleted

Provider execution orchestration no longer needs another provider-facing orchestration step.

```csharp
public const string OrchestrationCompleted = "orchestration-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OrchestrationExecuting"></a> OrchestrationExecuting

Provider execution orchestration is currently executing one provider-facing orchestration step.

```csharp
public const string OrchestrationExecuting = "orchestration-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OrchestrationReady"></a> OrchestrationReady

Provider execution orchestration is currently ready on the shared lane.

```csharp
public const string OrchestrationReady = "orchestration-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_OrchestrationRisk"></a> OrchestrationRisk

Provider execution orchestration currently remains risky.

```csharp
public const string OrchestrationRisk = "orchestration-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderBlocked"></a> ProviderBlocked

Provider-owned write-path execution remains blocked.

```csharp
public const string ProviderBlocked = "provider-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider execution translated into a provider-facing command shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider execution remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider execution failed while Cephalon translated provider command shape.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider execution determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandOperatorOnly"></a> ProviderCommandOperatorOnly

The latest provider execution remained operator-owned.

```csharp
public const string ProviderCommandOperatorOnly = "provider-command-operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderCommandUnavailable"></a> ProviderCommandUnavailable

The latest provider execution could not resolve a provider adapter.

```csharp
public const string ProviderCommandUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderExecutable"></a> ProviderExecutable

Provider-owned write-path execution is currently ready.

```csharp
public const string ProviderExecutable = "provider-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderExecutionOrchestration"></a> ProviderExecutionOrchestration

The runtime participates in the provider execution-orchestration lane.

```csharp
public const string ProviderExecutionOrchestration = "provider-execution-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderOwnedCompleted"></a> ProviderOwnedCompleted

Provider-owned write-path execution no longer needs another provider command.

```csharp
public const string ProviderOwnedCompleted = "provider-owned-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderOwnedExecuting"></a> ProviderOwnedExecuting

Provider-owned write-path execution already translated one provider-facing command shape.

```csharp
public const string ProviderOwnedExecuting = "provider-owned-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_ProviderOwnedRisk"></a> ProviderOwnedRisk

Provider-owned write-path execution currently remains risky.

```csharp
public const string ProviderOwnedRisk = "provider-owned-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_RecoveryBlocked"></a> RecoveryBlocked

Scheduler recovery remains blocked by missing durable evidence.

```csharp
public const string RecoveryBlocked = "recovery-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_RecoveryNeeded"></a> RecoveryNeeded

The durable shared scheduler currently still needs durable recovery hardening.

```csharp
public const string RecoveryNeeded = "recovery-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_RecoveryReady"></a> RecoveryReady

Scheduler recovery is ready for safe orchestration.

```csharp
public const string RecoveryReady = "recovery-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_SchedulerConflicted"></a> SchedulerConflicted

The durable shared scheduler currently remains conflicted.

```csharp
public const string SchedulerConflicted = "scheduler-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_SchedulerScheduled"></a> SchedulerScheduled

The durable shared scheduler currently keeps one bounded retry scheduled.

```csharp
public const string SchedulerScheduled = "scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationCategories_SchedulerUnscheduled"></a> SchedulerUnscheduled

The durable shared scheduler currently does not need another scheduled step.

```csharp
public const string SchedulerUnscheduled = "unscheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
