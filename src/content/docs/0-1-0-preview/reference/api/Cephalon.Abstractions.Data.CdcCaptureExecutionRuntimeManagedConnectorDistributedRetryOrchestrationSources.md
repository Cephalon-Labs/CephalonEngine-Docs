---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryorchestrationsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector distributed retry orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryorchestrationsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_AutomaticRetryExecution"></a> AutomaticRetryExecution

The distributed retry orchestration answer was derived primarily from automatic background retry execution truth.

```csharp
public const string AutomaticRetryExecution = "automatic-retry-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_CommandJournalDurability"></a> CommandJournalDurability

The distributed retry orchestration answer was derived primarily from durable command-journal truth.

```csharp
public const string CommandJournalDurability = "command-journal-durability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_CrossNodeIdempotencyHardening"></a> CrossNodeIdempotencyHardening

The distributed retry orchestration answer was derived primarily from cross-node idempotency-hardening truth.

```csharp
public const string CrossNodeIdempotencyHardening = "cross-node-idempotency-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_DistributedRetryLease"></a> DistributedRetryLease

The distributed retry orchestration answer was derived primarily from distributed retry lease truth.

```csharp
public const string DistributedRetryLease = "distributed-retry-lease"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_RetryExecutionPolicy"></a> RetryExecutionPolicy

The distributed retry orchestration answer was derived primarily from retry-execution policy truth.

```csharp
public const string RetryExecutionPolicy = "retry-execution-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationSources_Unknown"></a> Unknown

The distributed retry orchestration answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
