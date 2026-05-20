---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider execution-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_CommandExecution"></a> CommandExecution

The provider execution-orchestration answer was derived primarily from the latest command-execution outcome.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_CommandJournal"></a> CommandJournal

The provider execution-orchestration answer was derived primarily from command-journal truth.

```csharp
public const string CommandJournal = "command-journal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_DurableSharedSchedulerOrchestration"></a> DurableSharedSchedulerOrchestration

The provider execution-orchestration answer was derived primarily from durable shared scheduler-orchestration truth.

```csharp
public const string DurableSharedSchedulerOrchestration = "durable-shared-scheduler-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_ExecutionAdapter"></a> ExecutionAdapter

The provider execution-orchestration answer was derived primarily from execution-adapter truth.

```csharp
public const string ExecutionAdapter = "execution-adapter"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_ProviderOwnedWritePathExecution"></a> ProviderOwnedWritePathExecution

The provider execution-orchestration answer was derived primarily from provider-owned write-path execution truth.

```csharp
public const string ProviderOwnedWritePathExecution = "provider-owned-write-path-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_SchedulerRecoveryExecutionHardening"></a> SchedulerRecoveryExecutionHardening

The provider execution-orchestration answer was derived primarily from scheduler recovery and execution-hardening truth.

```csharp
public const string SchedulerRecoveryExecutionHardening = "scheduler-recovery-execution-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationSources_Unknown"></a> Unknown

The provider execution-orchestration answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
