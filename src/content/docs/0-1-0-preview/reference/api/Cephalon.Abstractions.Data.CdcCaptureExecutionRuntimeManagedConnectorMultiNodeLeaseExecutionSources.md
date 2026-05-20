---
title: Class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector broader multi-node lease-execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources_AutomaticRetryCoordination"></a> AutomaticRetryCoordination

The multi-node lease-execution answer was derived primarily from automatic-retry coordination truth.

```csharp
public const string AutomaticRetryCoordination = "automatic-retry-coordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources_CrossNodeIdempotencyHardening"></a> CrossNodeIdempotencyHardening

The multi-node lease-execution answer was derived primarily from cross-node idempotency-hardening truth.

```csharp
public const string CrossNodeIdempotencyHardening = "cross-node-idempotency-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources_DistributedRetryLease"></a> DistributedRetryLease

The multi-node lease-execution answer was derived primarily from distributed retry lease truth.

```csharp
public const string DistributedRetryLease = "distributed-retry-lease"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources_DistributedRetryOrchestration"></a> DistributedRetryOrchestration

The multi-node lease-execution answer was derived primarily from distributed retry orchestration truth.

```csharp
public const string DistributedRetryOrchestration = "distributed-retry-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionSources_Unknown"></a> Unknown

The multi-node lease-execution answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
