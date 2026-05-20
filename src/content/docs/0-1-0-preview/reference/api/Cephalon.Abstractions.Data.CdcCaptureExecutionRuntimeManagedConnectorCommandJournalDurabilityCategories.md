---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitycategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector command-journal durability answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitycategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_AutomaticRetryEligible"></a> AutomaticRetryEligible

Automatic background retry is currently eligible on the shared runtime surface.

```csharp
public const string AutomaticRetryEligible = "automatic-retry-eligible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_CoordinationReady"></a> CoordinationReady

Automatic background retry can currently execute on the active node.

```csharp
public const string CoordinationReady = "coordination-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_DurableStoreConfigured"></a> DurableStoreConfigured

A durable journal store is configured for the current host.

```csharp
public const string DurableStoreConfigured = "durable-store-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_InMemoryOnly"></a> InMemoryOnly

The command journal currently remains in memory only.

```csharp
public const string InMemoryOnly = "in-memory-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_PersistedRecordedHistory"></a> PersistedRecordedHistory

The current runtime has recorded command history inside the durable journal store.

```csharp
public const string PersistedRecordedHistory = "persisted-recorded-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_PersistedSnapshotAvailable"></a> PersistedSnapshotAvailable

The durable journal store currently has a healthy persisted snapshot.

```csharp
public const string PersistedSnapshotAvailable = "persisted-snapshot-available"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_PersistenceError"></a> PersistenceError

The durable journal store currently reports a persistence error.

```csharp
public const string PersistenceError = "persistence-error"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_PersistenceHealthy"></a> PersistenceHealthy

The durable journal store currently reports healthy persistence posture.

```csharp
public const string PersistenceHealthy = "persistence-healthy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_RecordedCommandHistory"></a> RecordedCommandHistory

The command journal currently exposes recorded command history for the runtime.

```csharp
public const string RecordedCommandHistory = "recorded-command-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_RecoveredHistory"></a> RecoveredHistory

The current runtime recovered command history from the durable journal store after startup.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_RecoveryError"></a> RecoveryError

The durable journal store currently reports a recovery error.

```csharp
public const string RecoveryError = "recovery-error"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityCategories_TruncatedHistory"></a> TruncatedHistory

The command journal currently exposes truncated retained history.

```csharp
public const string TruncatedHistory = "truncated-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
