---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider-owned control-plane ownership answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_CommandExecution"></a> CommandExecution

The provider-owned control-plane ownership answer was derived primarily from the latest command-execution outcome.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_CommandJournal"></a> CommandJournal

The provider-owned control-plane ownership answer was derived primarily from command-journal truth.

```csharp
public const string CommandJournal = "command-journal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_DurableSharedSchedulerOrchestration"></a> DurableSharedSchedulerOrchestration

The provider-owned control-plane ownership answer was derived primarily from durable shared scheduler-orchestration truth.

```csharp
public const string DurableSharedSchedulerOrchestration = "durable-shared-scheduler-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_ExecutionAdapter"></a> ExecutionAdapter

The provider-owned control-plane ownership answer was derived primarily from execution-adapter truth.

```csharp
public const string ExecutionAdapter = "execution-adapter"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_ProviderExecutionOrchestration"></a> ProviderExecutionOrchestration

The provider-owned control-plane ownership answer was derived primarily from provider execution-orchestration truth.

```csharp
public const string ProviderExecutionOrchestration = "provider-execution-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_ProviderOwnedWritePathExecution"></a> ProviderOwnedWritePathExecution

The provider-owned control-plane ownership answer was derived primarily from provider-owned write-path execution truth.

```csharp
public const string ProviderOwnedWritePathExecution = "provider-owned-write-path-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_SchedulerRecoveryExecutionHardening"></a> SchedulerRecoveryExecutionHardening

The provider-owned control-plane ownership answer was derived primarily from scheduler recovery and execution-hardening truth.

```csharp
public const string SchedulerRecoveryExecutionHardening = "scheduler-recovery-execution-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipSources_Unknown"></a> Unknown

The provider-owned control-plane ownership answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
