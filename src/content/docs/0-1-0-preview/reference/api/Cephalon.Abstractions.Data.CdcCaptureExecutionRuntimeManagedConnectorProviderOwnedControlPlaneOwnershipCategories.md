---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-owned control-plane ownership answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ApprovalRequired"></a> ApprovalRequired

The current provider control-plane lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_CommandJournalEvidence"></a> CommandJournalEvidence

The command journal currently exposes retained evidence for provider-owned control-plane ownership.

```csharp
public const string CommandJournalEvidence = "command-journal-evidence"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet exercise bounded provider-owned control-plane ownership safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can exercise bounded provider-owned control-plane ownership safely.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_DestructiveOperation"></a> DestructiveOperation

The current provider control-plane lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ExecutionHardened"></a> ExecutionHardened

Scheduler execution truth currently looks hardened enough for control-plane ownership.

```csharp
public const string ExecutionHardened = "execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ExecutionRisk"></a> ExecutionRisk

Scheduler execution truth currently remains risky.

```csharp
public const string ExecutionRisk = "execution-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Provider-owned control-plane ownership currently depends on in-memory history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_NoRecordedCommand"></a> NoRecordedCommand

No command-journal evidence has been recorded yet.

```csharp
public const string NoRecordedCommand = "no-recorded-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane ownership still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OwnershipActive"></a> OwnershipActive

Provider-owned control-plane ownership is currently active on one bounded provider-facing step.

```csharp
public const string OwnershipActive = "ownership-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OwnershipBlocked"></a> OwnershipBlocked

Provider-owned control-plane ownership remains blocked.

```csharp
public const string OwnershipBlocked = "ownership-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OwnershipPartial"></a> OwnershipPartial

Provider-owned control-plane ownership is currently partial on the shared lane.

```csharp
public const string OwnershipPartial = "ownership-partial"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OwnershipReady"></a> OwnershipReady

Provider-owned control-plane ownership is currently ready on the shared lane.

```csharp
public const string OwnershipReady = "ownership-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_OwnershipRisk"></a> OwnershipRisk

Provider-owned control-plane ownership currently remains risky.

```csharp
public const string OwnershipRisk = "ownership-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderBlocked"></a> ProviderBlocked

Provider-owned write-path execution remains blocked.

```csharp
public const string ProviderBlocked = "provider-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider execution translated into a provider-facing command shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider execution remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider execution failed while Cephalon translated provider command shape.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider execution determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandOperatorOnly"></a> ProviderCommandOperatorOnly

The latest provider execution remained operator-owned.

```csharp
public const string ProviderCommandOperatorOnly = "provider-command-operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderCommandUnavailable"></a> ProviderCommandUnavailable

The latest provider execution could not resolve a provider adapter.

```csharp
public const string ProviderCommandUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutable"></a> ProviderExecutable

Provider-owned write-path execution is currently ready.

```csharp
public const string ProviderExecutable = "provider-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutionBlocked"></a> ProviderExecutionBlocked

Broader provider execution orchestration remains blocked.

```csharp
public const string ProviderExecutionBlocked = "orchestration-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutionCompleted"></a> ProviderExecutionCompleted

Broader provider execution orchestration no longer needs another shared step.

```csharp
public const string ProviderExecutionCompleted = "orchestration-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutionExecuting"></a> ProviderExecutionExecuting

Broader provider execution orchestration is currently executing.

```csharp
public const string ProviderExecutionExecuting = "orchestration-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutionReady"></a> ProviderExecutionReady

Broader provider execution orchestration is currently ready.

```csharp
public const string ProviderExecutionReady = "orchestration-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderExecutionRisk"></a> ProviderExecutionRisk

Broader provider execution orchestration currently remains risky.

```csharp
public const string ProviderExecutionRisk = "orchestration-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderOwnedCompleted"></a> ProviderOwnedCompleted

Provider-owned write-path execution no longer needs another provider command.

```csharp
public const string ProviderOwnedCompleted = "provider-owned-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderOwnedControlPlaneOwnership"></a> ProviderOwnedControlPlaneOwnership

The runtime participates in the provider-owned control-plane ownership lane.

```csharp
public const string ProviderOwnedControlPlaneOwnership = "provider-owned-control-plane-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderOwnedExecuting"></a> ProviderOwnedExecuting

Provider-owned write-path execution is currently active.

```csharp
public const string ProviderOwnedExecuting = "provider-owned-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_ProviderOwnedRisk"></a> ProviderOwnedRisk

Provider-owned write-path execution currently remains risky.

```csharp
public const string ProviderOwnedRisk = "provider-owned-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_RecoveryBlocked"></a> RecoveryBlocked

Scheduler recovery remains blocked by missing durable evidence.

```csharp
public const string RecoveryBlocked = "recovery-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_RecoveryNeeded"></a> RecoveryNeeded

The durable shared scheduler currently still needs durable recovery hardening.

```csharp
public const string RecoveryNeeded = "recovery-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_RecoveryReady"></a> RecoveryReady

Scheduler recovery is ready for safe control-plane ownership.

```csharp
public const string RecoveryReady = "recovery-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_SchedulerConflicted"></a> SchedulerConflicted

The durable shared scheduler currently remains conflicted.

```csharp
public const string SchedulerConflicted = "scheduler-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_SchedulerScheduled"></a> SchedulerScheduled

The durable shared scheduler currently keeps one bounded retry scheduled.

```csharp
public const string SchedulerScheduled = "scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipCategories_SchedulerUnscheduled"></a> SchedulerUnscheduled

The durable shared scheduler currently does not need another scheduled step.

```csharp
public const string SchedulerUnscheduled = "unscheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
