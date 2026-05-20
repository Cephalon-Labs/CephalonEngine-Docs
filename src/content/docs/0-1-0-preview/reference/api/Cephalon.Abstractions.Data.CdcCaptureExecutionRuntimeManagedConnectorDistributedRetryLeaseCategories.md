---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasecategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector distributed retry lease answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasecategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_CoordinationOwnerConfigured"></a> CoordinationOwnerConfigured

The current host declared a local coordination owner identifier for distributed retry.

```csharp
public const string CoordinationOwnerConfigured = "coordination-owner-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_CoordinationOwnerMissing"></a> CoordinationOwnerMissing

The current host did not declare a local coordination owner identifier for distributed retry.

```csharp
public const string CoordinationOwnerMissing = "coordination-owner-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_CrossNodeIdempotencyRisk"></a> CrossNodeIdempotencyRisk

Cross-node idempotency currently remains risky for automatic retry.

```csharp
public const string CrossNodeIdempotencyRisk = "cross-node-idempotency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_CrossNodeIdempotentSafe"></a> CrossNodeIdempotentSafe

Cross-node idempotency currently looks safe for automatic retry.

```csharp
public const string CrossNodeIdempotentSafe = "cross-node-idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current host can execute automatic retry safely on this node.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_DuplicateAutomaticRetryAttempts"></a> DuplicateAutomaticRetryAttempts

The bounded command journal currently retains multiple automatic retry attempts for the same retry fingerprint.

```csharp
public const string DuplicateAutomaticRetryAttempts = "duplicate-automatic-retry-attempts"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_DurableJournalHealthy"></a> DurableJournalHealthy

The durable command journal currently looks healthy for cross-node retry decisions.

```csharp
public const string DurableJournalHealthy = "durable-journal-healthy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Automatic retry currently depends on in-memory command history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_JournalFailure"></a> JournalFailure

The durable command journal currently reports a recovery or persistence failure.

```csharp
public const string JournalFailure = "journal-failure"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_LeaseConflict"></a> LeaseConflict

Cross-node lease coordination remains conflicted.

```csharp
public const string LeaseConflict = "lease-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on cross-node lease coordination before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_LeaseHeld"></a> LeaseHeld

The current host currently holds the active retry lease.

```csharp
public const string LeaseHeld = "lease-held"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_LeaseMissing"></a> LeaseMissing

No active retry lease is currently visible for automatic retry.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_MatchingAutomaticRetryAttempt"></a> MatchingAutomaticRetryAttempt

The bounded command journal currently retains one matching automatic retry attempt.

```csharp
public const string MatchingAutomaticRetryAttempt = "matching-automatic-retry-attempt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_OperatorOnly"></a> OperatorOnly

Distributed retry lease posture still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_RetryHistoryPresent"></a> RetryHistoryPresent

The bounded command journal currently retains matching retry history.

```csharp
public const string RetryHistoryPresent = "retry-history-present"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime can evaluate automatic retry on a single node without lease coordination.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
