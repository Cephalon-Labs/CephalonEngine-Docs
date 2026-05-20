---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_ApplyAndReconcileHardened"></a> ApplyAndReconcileHardened

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is fully hardened on the shared runtime surface.

```csharp
public const string ApplyAndReconcileHardened = "apply-and-reconcile-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_DependencyBlocked"></a> DependencyBlocked

Provider-owned control-plane dependency-aware apply-and-reconcile hardening remains blocked by missing dependency truth, task topology, or execution targeting.

```csharp
public const string DependencyBlocked = "dependency-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_DependencyDegraded"></a> DependencyDegraded

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is currently degraded by mismatched, stale, or incomplete dependency observations.

```csharp
public const string DependencyDegraded = "dependency-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_DependencyReady"></a> DependencyReady

Provider-owned control-plane dependency-aware apply-and-reconcile hardening is currently ready on the shared runtime surface.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_DependencyRisk"></a> DependencyRisk

Provider-owned control-plane dependency-aware apply-and-reconcile hardening currently remains risky because broader provider or runtime truth is not safe enough yet.

```csharp
public const string DependencyRisk = "dependency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_NotApplicable"></a> NotApplicable

Provider-owned control-plane dependency-aware apply-and-reconcile hardening does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStates_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane dependency-aware apply-and-reconcile hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
