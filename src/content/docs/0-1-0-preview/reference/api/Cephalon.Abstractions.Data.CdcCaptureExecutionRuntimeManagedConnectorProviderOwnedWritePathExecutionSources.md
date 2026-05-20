---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutionsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider-owned write-path execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutionsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_AutomaticRetryExecution"></a> AutomaticRetryExecution

The provider-owned write-path execution answer was derived primarily from automatic background retry execution truth.

```csharp
public const string AutomaticRetryExecution = "automatic-retry-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_CommandExecution"></a> CommandExecution

The provider-owned write-path execution answer was derived primarily from the latest command-execution outcome.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_ExecutionAdapter"></a> ExecutionAdapter

The provider-owned write-path execution answer was derived primarily from execution-adapter truth.

```csharp
public const string ExecutionAdapter = "execution-adapter"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_RetryExecutionPolicy"></a> RetryExecutionPolicy

The provider-owned write-path execution answer was derived primarily from retry-execution policy truth.

```csharp
public const string RetryExecutionPolicy = "retry-execution-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_SchedulerRecoveryExecutionHardening"></a> SchedulerRecoveryExecutionHardening

The provider-owned write-path execution answer was derived primarily from scheduler recovery and execution-hardening truth.

```csharp
public const string SchedulerRecoveryExecutionHardening = "scheduler-recovery-execution-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionSources_Unknown"></a> Unknown

The provider-owned write-path execution answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
