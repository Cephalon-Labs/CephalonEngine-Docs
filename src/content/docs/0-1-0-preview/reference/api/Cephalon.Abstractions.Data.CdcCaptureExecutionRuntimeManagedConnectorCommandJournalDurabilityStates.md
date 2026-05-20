---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitystates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector command-journal durability answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitystates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_InMemoryOnly"></a> InMemoryOnly

The command journal currently remains in memory only and would not survive process restart.

```csharp
public const string InMemoryOnly = "in-memory-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_NotApplicable"></a> NotApplicable

Command-journal durability does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_Persisted"></a> Persisted

The command journal currently has a healthy durable persistence store.

```csharp
public const string Persisted = "persisted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_PersistenceFailed"></a> PersistenceFailed

The durable command-journal store could not persist the latest snapshot.

```csharp
public const string PersistenceFailed = "persistence-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_Recovered"></a> Recovered

The command journal was recovered from a durable persistence store after startup.

```csharp
public const string Recovered = "recovered"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStates_RecoveryFailed"></a> RecoveryFailed

The durable command-journal store could not recover the persisted snapshot.

```csharp
public const string RecoveryFailed = "recovery-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
