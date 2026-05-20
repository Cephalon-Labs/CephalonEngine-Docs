---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector cross-node idempotency-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_ActiveLeaseVisible"></a> ActiveLeaseVisible

The current runtime still exposes one active reporter lease.

```csharp
public const string ActiveLeaseVisible = "active-lease-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_ActiveReporterVisible"></a> ActiveReporterVisible

The current runtime still exposes one active reporter identifier.

```csharp
public const string ActiveReporterVisible = "active-reporter-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_CrossNodeRuntime"></a> CrossNodeRuntime

The runtime depends on cross-node idempotency evidence before automatic retry should execute.

```csharp
public const string CrossNodeRuntime = "cross-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute automatic retry safely for the current cross-node hardening answer.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_DuplicateAutomaticRetryAttempts"></a> DuplicateAutomaticRetryAttempts

Retained history currently contains duplicated automatic retry attempts for the current retry posture.

```csharp
public const string DuplicateAutomaticRetryAttempts = "duplicate-automatic-retry-attempts"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_DuplicateCommandLineage"></a> DuplicateCommandLineage

Retained history currently contains duplicated command lineage for the current retry posture.

```csharp
public const string DuplicateCommandLineage = "duplicate-command-lineage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_DuplicateLineageRisk"></a> DuplicateLineageRisk

Cross-node idempotency currently remains risky because retained command lineage already looks duplicated.

```csharp
public const string DuplicateLineageRisk = "duplicate-lineage-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_IdempotentSafe"></a> IdempotentSafe

Cross-node idempotency currently looks safe for the current retry posture.

```csharp
public const string IdempotentSafe = "idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Automatic retry still depends on in-memory command history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_LeaseConflict"></a> LeaseConflict

Cross-node retry lease ownership remains conflicted.

```csharp
public const string LeaseConflict = "lease-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_LeaseMissing"></a> LeaseMissing

Cross-node retry lease ownership remains missing.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_MatchingAutomaticRetryAttempt"></a> MatchingAutomaticRetryAttempt

Retained history currently contains one automatic retry attempt for the current retry fingerprint.

```csharp
public const string MatchingAutomaticRetryAttempt = "matching-automatic-retry-attempt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_MatchingRetryHistory"></a> MatchingRetryHistory

Retained history currently contains evidence for the current retry fingerprint.

```csharp
public const string MatchingRetryHistory = "matching-retry-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_OperatorOnly"></a> OperatorOnly

Cross-node idempotency hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_ReplayWindowRisk"></a> ReplayWindowRisk

Cross-node idempotency currently remains risky because the durable replay window still lacks enough retained evidence.

```csharp
public const string ReplayWindowRisk = "replay-window-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime can evaluate automatic retry on a single node without cross-node hardening.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningCategories_StaleOwnerRisk"></a> StaleOwnerRisk

Cross-node idempotency currently remains risky because ownership truth still looks stale.

```csharp
public const string StaleOwnerRisk = "stale-owner-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
