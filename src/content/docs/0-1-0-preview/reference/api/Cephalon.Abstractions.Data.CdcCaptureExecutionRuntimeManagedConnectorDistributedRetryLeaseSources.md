---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasesources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector distributed retry lease answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasesources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources_AutomaticRetryCoordination"></a> AutomaticRetryCoordination

The distributed retry lease answer was derived primarily from automatic-retry coordination truth.

```csharp
public const string AutomaticRetryCoordination = "automatic-retry-coordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources_CommandExecutionHistory"></a> CommandExecutionHistory

The distributed retry lease answer was derived primarily from retained command-execution history.

```csharp
public const string CommandExecutionHistory = "command-execution-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources_CommandJournalDurability"></a> CommandJournalDurability

The distributed retry lease answer was derived primarily from durable command-journal truth.

```csharp
public const string CommandJournalDurability = "command-journal-durability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources_RetryExecutionPolicy"></a> RetryExecutionPolicy

The distributed retry lease answer was derived primarily from retry-execution policy truth.

```csharp
public const string RetryExecutionPolicy = "retry-execution-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseSources_Unknown"></a> Unknown

The distributed retry lease answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
