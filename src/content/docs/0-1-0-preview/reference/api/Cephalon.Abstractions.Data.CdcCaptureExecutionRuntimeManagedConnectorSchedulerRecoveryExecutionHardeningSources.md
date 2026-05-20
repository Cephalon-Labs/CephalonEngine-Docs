---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector scheduler recovery and execution-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_CommandExecution"></a> CommandExecution

The scheduler recovery and execution-hardening answer was derived primarily from the latest command-execution outcome.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_CommandJournalDurability"></a> CommandJournalDurability

The scheduler recovery and execution-hardening answer was derived primarily from durable command-journal truth.

```csharp
public const string CommandJournalDurability = "command-journal-durability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_DistributedRetryOrchestration"></a> DistributedRetryOrchestration

The scheduler recovery and execution-hardening answer was derived primarily from distributed retry orchestration truth.

```csharp
public const string DistributedRetryOrchestration = "distributed-retry-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_DurableSharedSchedulerOrchestration"></a> DurableSharedSchedulerOrchestration

The scheduler recovery and execution-hardening answer was derived primarily from durable shared scheduler orchestration truth.

```csharp
public const string DurableSharedSchedulerOrchestration = "durable-shared-scheduler-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_MultiNodeLeaseExecution"></a> MultiNodeLeaseExecution

The scheduler recovery and execution-hardening answer was derived primarily from broader multi-node lease-execution truth.

```csharp
public const string MultiNodeLeaseExecution = "multi-node-lease-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningSources_Unknown"></a> Unknown

The scheduler recovery and execution-hardening answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
