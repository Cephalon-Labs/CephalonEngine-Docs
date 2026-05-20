---
title: Class CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectoractionplanactionids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable operator-facing action identifiers used by managed-connector action plans.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectoractionplanactionids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_CompleteGovernanceDeclaration"></a> CompleteGovernanceDeclaration

Complete the connector declaration so shared governance truth has the minimum required metadata.

```csharp
public const string CompleteGovernanceDeclaration = "complete-governance-declaration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_CompleteTaskBaseline"></a> CompleteTaskBaseline

Complete the declared task baseline before relying on desired-versus-observed drift posture.

```csharp
public const string CompleteTaskBaseline = "complete-task-baseline"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_DeferControlPlane"></a> DeferControlPlane

Defer control-plane ownership until Cephalon ships write-path connector management for the declared mode.

```csharp
public const string DeferControlPlane = "defer-control-plane"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_InvestigateDrift"></a> InvestigateDrift

Investigate the reported desired-versus-observed managed-connector drift.

```csharp
public const string InvestigateDrift = "investigate-drift"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_KeepObserveOnly"></a> KeepObserveOnly

Keep the connector in observe-only mode and continue using shared runtime reporting truth.

```csharp
public const string KeepObserveOnly = "keep-observe-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_None"></a> None

No operator action is currently required for the execution runtime.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_ResolveRuntimeRemediation"></a> ResolveRuntimeRemediation

Resolve runtime remediation work before relying on deeper managed-connector follow-through.

```csharp
public const string ResolveRuntimeRemediation = "resolve-runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanActionIds_WaitForRuntimeReport"></a> WaitForRuntimeReport

Wait for the managed connector to report task topology before evaluating desired-versus-observed drift.

```csharp
public const string WaitForRuntimeReport = "wait-for-runtime-report"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
