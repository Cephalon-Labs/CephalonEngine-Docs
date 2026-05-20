---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneapplyandreconcileexecutionstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned control-plane apply-and-reconcile execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneapplyandreconcileexecutionstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_ApplyAndReconcileBlocked"></a> ApplyAndReconcileBlocked

Provider-owned control-plane apply-and-reconcile execution remains blocked by shared runtime policy, control-plane truth, or missing execution intent.

```csharp
public const string ApplyAndReconcileBlocked = "apply-and-reconcile-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_ApplyAndReconcileCompleted"></a> ApplyAndReconcileCompleted

Provider-owned control-plane apply-and-reconcile execution no longer needs another shared execution step for the current operation.

```csharp
public const string ApplyAndReconcileCompleted = "apply-and-reconcile-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_ApplyAndReconcileExecuting"></a> ApplyAndReconcileExecuting

Provider-owned control-plane apply-and-reconcile execution is currently exercising one bounded provider-facing step.

```csharp
public const string ApplyAndReconcileExecuting = "apply-and-reconcile-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_ApplyAndReconcileReady"></a> ApplyAndReconcileReady

Provider-owned control-plane apply-and-reconcile execution is currently ready on the shared runtime surface.

```csharp
public const string ApplyAndReconcileReady = "apply-and-reconcile-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_ApplyAndReconcileRisk"></a> ApplyAndReconcileRisk

Provider-owned control-plane apply-and-reconcile execution currently remains risky because broader shared runtime truth is not safe enough yet.

```csharp
public const string ApplyAndReconcileRisk = "apply-and-reconcile-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_NotApplicable"></a> NotApplicable

Provider-owned control-plane apply-and-reconcile execution does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStates_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane apply-and-reconcile execution still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
