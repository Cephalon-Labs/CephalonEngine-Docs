---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitysources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector command-journal durability answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitysources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_DurableJournalStore"></a> DurableJournalStore

The durability answer was derived primarily from a healthy durable journal store.

```csharp
public const string DurableJournalStore = "durable-journal-store"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_InMemoryHistoryStore"></a> InMemoryHistoryStore

The durability answer was derived primarily from the in-memory shared command history store.

```csharp
public const string InMemoryHistoryStore = "in-memory-history-store"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_PersistenceError"></a> PersistenceError

The durability answer was derived primarily from a durable journal persistence failure.

```csharp
public const string PersistenceError = "persistence-error"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_RecoveredDurableJournalStore"></a> RecoveredDurableJournalStore

The durability answer was derived primarily from recovered durable journal history.

```csharp
public const string RecoveredDurableJournalStore = "recovered-durable-journal-store"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_RecoveryError"></a> RecoveryError

The durability answer was derived primarily from a durable journal recovery failure.

```csharp
public const string RecoveryError = "recovery-error"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilitySources_Unknown"></a> Unknown

The durability answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
