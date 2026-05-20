---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftactionids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable operator-facing action identifiers used by managed-connector drift answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftactionids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds_CompleteTaskBaseline"></a> CompleteTaskBaseline

Complete the declared task baseline before relying on desired-versus-observed drift posture.

```csharp
public const string CompleteTaskBaseline = "complete-task-baseline"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds_InvestigateDrift"></a> InvestigateDrift

Investigate the reported desired-versus-observed managed-connector drift.

```csharp
public const string InvestigateDrift = "investigate-drift"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds_None"></a> None

No operator action is currently required for the execution runtime.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftActionIds_WaitForRuntimeReport"></a> WaitForRuntimeReport

Wait for the managed connector to report task topology before evaluating desired-versus-observed drift.

```csharp
public const string WaitForRuntimeReport = "wait-for-runtime-report"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
