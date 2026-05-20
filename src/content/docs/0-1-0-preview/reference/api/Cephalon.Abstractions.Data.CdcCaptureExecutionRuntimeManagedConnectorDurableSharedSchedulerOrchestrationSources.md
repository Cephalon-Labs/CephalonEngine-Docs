---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector durable shared scheduler-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources_AutomaticRetryCoordination"></a> AutomaticRetryCoordination

The durable shared scheduler-orchestration answer was derived primarily from automatic-retry coordination truth.

```csharp
public const string AutomaticRetryCoordination = "automatic-retry-coordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources_CommandJournalDurability"></a> CommandJournalDurability

The durable shared scheduler-orchestration answer was derived primarily from durable command-journal truth.

```csharp
public const string CommandJournalDurability = "command-journal-durability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources_DistributedRetryOrchestration"></a> DistributedRetryOrchestration

The durable shared scheduler-orchestration answer was derived primarily from distributed retry orchestration truth.

```csharp
public const string DistributedRetryOrchestration = "distributed-retry-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources_MultiNodeLeaseExecution"></a> MultiNodeLeaseExecution

The durable shared scheduler-orchestration answer was derived primarily from broader multi-node lease-execution truth.

```csharp
public const string MultiNodeLeaseExecution = "multi-node-lease-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationSources_Unknown"></a> Unknown

The durable shared scheduler-orchestration answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
