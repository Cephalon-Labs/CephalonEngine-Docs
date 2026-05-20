---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider execution-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_NotApplicable"></a> NotApplicable

Provider execution orchestration does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OperatorOnly"></a> OperatorOnly

Provider execution orchestration still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OrchestrationBlocked"></a> OrchestrationBlocked

Provider execution orchestration remains blocked by shared runtime policy, scheduler, or orchestration truth.

```csharp
public const string OrchestrationBlocked = "orchestration-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OrchestrationCompleted"></a> OrchestrationCompleted

Provider execution orchestration no longer needs an additional provider-facing orchestration step on the shared lane.

```csharp
public const string OrchestrationCompleted = "orchestration-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OrchestrationExecuting"></a> OrchestrationExecuting

Provider execution orchestration is currently executing one provider-facing orchestration step.

```csharp
public const string OrchestrationExecuting = "orchestration-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OrchestrationReady"></a> OrchestrationReady

Provider execution orchestration is currently ready on the shared runtime surface.

```csharp
public const string OrchestrationReady = "orchestration-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStates_OrchestrationRisk"></a> OrchestrationRisk

Provider execution orchestration currently remains risky because broader shared runtime truth is not safe enough yet.

```csharp
public const string OrchestrationRisk = "orchestration-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
