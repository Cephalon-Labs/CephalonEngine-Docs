---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector scheduler recovery and execution-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_ActiveLeaseVisible"></a> ActiveLeaseVisible

The runtime still exposes one active reporter lease.

```csharp
public const string ActiveLeaseVisible = "active-lease-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_ActiveReporterVisible"></a> ActiveReporterVisible

The runtime still exposes one active reporter identifier.

```csharp
public const string ActiveReporterVisible = "active-reporter-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_AutomaticRetryAttemptRecorded"></a> AutomaticRetryAttemptRecorded

The bounded command history already records one automatic retry attempt.

```csharp
public const string AutomaticRetryAttemptRecorded = "automatic-retry-attempt-recorded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_CooldownWindow"></a> CooldownWindow

The current retry policy is still waiting for a cooldown window to elapse.

```csharp
public const string CooldownWindow = "cooldown-window"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot safely execute automatic retry yet.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute automatic retry safely for the current hardening answer.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_ExecutionHardened"></a> ExecutionHardened

Scheduler execution truth currently looks hardened enough for bounded execution.

```csharp
public const string ExecutionHardened = "execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_ExecutionRisk"></a> ExecutionRisk

Scheduler execution truth currently remains risky.

```csharp
public const string ExecutionRisk = "execution-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Automatic retry currently depends on in-memory command history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LatestAutomaticExecutionAdapted"></a> LatestAutomaticExecutionAdapted

The latest automatic retry execution already translated into one provider-facing command shape.

```csharp
public const string LatestAutomaticExecutionAdapted = "latest-automatic-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LatestAutomaticExecutionBlocked"></a> LatestAutomaticExecutionBlocked

The latest automatic retry execution remained blocked before provider translation.

```csharp
public const string LatestAutomaticExecutionBlocked = "latest-automatic-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LatestAutomaticExecutionFailed"></a> LatestAutomaticExecutionFailed

The latest automatic retry execution failed while Cephalon translated it.

```csharp
public const string LatestAutomaticExecutionFailed = "latest-automatic-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LatestAutomaticExecutionOperatorOnly"></a> LatestAutomaticExecutionOperatorOnly

The latest automatic retry execution remained operator-owned.

```csharp
public const string LatestAutomaticExecutionOperatorOnly = "latest-automatic-execution-operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LatestAutomaticExecutionUnavailable"></a> LatestAutomaticExecutionUnavailable

The latest automatic retry execution could not resolve one provider execution adapter.

```csharp
public const string LatestAutomaticExecutionUnavailable = "latest-automatic-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on cross-node lease ownership before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_MatchingAutomaticRetryAttempt"></a> MatchingAutomaticRetryAttempt

Retained history currently contains one automatic retry attempt for the current retry fingerprint.

```csharp
public const string MatchingAutomaticRetryAttempt = "matching-automatic-retry-attempt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_NoFurtherRetryNeeded"></a> NoFurtherRetryNeeded

The current shared runtime truth does not currently need another automatic retry attempt.

```csharp
public const string NoFurtherRetryNeeded = "no-further-retry-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_OperatorOnly"></a> OperatorOnly

Scheduler recovery and execution hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_PersistenceFailed"></a> PersistenceFailed

The durable command journal currently reports a persistence error.

```csharp
public const string PersistenceFailed = "persistence-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_RecoveryBlocked"></a> RecoveryBlocked

Scheduler recovery remains blocked by missing or unhealthy durable evidence.

```csharp
public const string RecoveryBlocked = "recovery-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_RecoveryFailed"></a> RecoveryFailed

The durable command journal currently reports a recovery error.

```csharp
public const string RecoveryFailed = "recovery-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_RecoveryReady"></a> RecoveryReady

Scheduler recovery completed enough that bounded execution can resume safely.

```csharp
public const string RecoveryReady = "recovery-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_Replaying"></a> Replaying

Scheduler recovery is replaying retained execution evidence.

```csharp
public const string Replaying = "replaying"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SchedulerConflicted"></a> SchedulerConflicted

The durable shared scheduler currently remains conflicted.

```csharp
public const string SchedulerConflicted = "scheduler-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SchedulerLeaseBlocked"></a> SchedulerLeaseBlocked

The durable shared scheduler currently remains blocked by broader lease truth.

```csharp
public const string SchedulerLeaseBlocked = "lease-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SchedulerRecoveryExecutionHardening"></a> SchedulerRecoveryExecutionHardening

The runtime participates in the scheduler recovery and execution-hardening lane.

```csharp
public const string SchedulerRecoveryExecutionHardening = "scheduler-recovery-execution-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SchedulerScheduled"></a> SchedulerScheduled

The durable shared scheduler currently keeps one bounded retry scheduled.

```csharp
public const string SchedulerScheduled = "scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SchedulerUnscheduled"></a> SchedulerUnscheduled

The durable shared scheduler currently does not need to keep the runtime scheduled.

```csharp
public const string SchedulerUnscheduled = "unscheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime currently executes automatic retry on a single node without cross-node lease ownership.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
