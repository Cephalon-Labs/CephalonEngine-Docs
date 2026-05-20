---
title: Class CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectoractionplancategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable action-plan category identifiers used by managed-connector execution-runtime answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectoractionplancategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_BlockingRemediation"></a> BlockingRemediation

The managed connector is currently blocked by active runtime remediation work.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_DriftBaselineIncomplete"></a> DriftBaselineIncomplete

The managed connector does not yet declare the task baseline required for drift evaluation.

```csharp
public const string DriftBaselineIncomplete = "drift-baseline-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_DriftDetected"></a> DriftDetected

The managed connector currently reports declared-versus-observed drift that needs investigation.

```csharp
public const string DriftDetected = "drift-detected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_FutureControlPlaneDeferred"></a> FutureControlPlaneDeferred

The managed connector declares a future write-path management mode that Cephalon does not own yet.

```csharp
public const string FutureControlPlaneDeferred = "future-control-plane-deferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The managed connector declaration is currently out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_ObserveOnlySteadyState"></a> ObserveOnlySteadyState

The managed connector can continue in steady-state observe-only posture.

```csharp
public const string ObserveOnlySteadyState = "observe-only-steady-state"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_RuntimeRemediation"></a> RuntimeRemediation

The managed connector currently needs non-blocking runtime remediation work.

```csharp
public const string RuntimeRemediation = "runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorActionPlanCategories_WaitingForRuntimeTruth"></a> WaitingForRuntimeTruth

The managed connector is waiting for additional runtime truth before drift can be evaluated.

```csharp
public const string WaitingForRuntimeTruth = "waiting-for-runtime-truth"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
