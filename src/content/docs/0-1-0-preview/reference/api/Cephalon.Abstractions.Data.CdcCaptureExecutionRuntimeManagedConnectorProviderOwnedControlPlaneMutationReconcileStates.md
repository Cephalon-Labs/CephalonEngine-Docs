---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanemutationreconcilestates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned control-plane mutation and reconcile answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanemutationreconcilestates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_MutationBlocked"></a> MutationBlocked

Provider-owned control-plane mutation remains blocked by shared runtime policy, control-plane truth, or missing command intent.

```csharp
public const string MutationBlocked = "mutation-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_MutationExecuting"></a> MutationExecuting

Provider-owned control-plane mutation or reconcile is currently executing one bounded provider-facing step.

```csharp
public const string MutationExecuting = "mutation-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_MutationReady"></a> MutationReady

Provider-owned control-plane mutation is currently ready on the shared runtime surface.

```csharp
public const string MutationReady = "mutation-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_MutationRisk"></a> MutationRisk

Provider-owned control-plane mutation or reconcile currently remains risky because broader shared runtime truth is not safe enough yet.

```csharp
public const string MutationRisk = "mutation-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_NotApplicable"></a> NotApplicable

Provider-owned control-plane mutation and reconcile does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane mutation and reconcile still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_ReconcileBlocked"></a> ReconcileBlocked

Provider-owned control-plane reconcile remains blocked by shared runtime policy, control-plane truth, or missing command intent.

```csharp
public const string ReconcileBlocked = "reconcile-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStates_ReconcileReady"></a> ReconcileReady

Provider-owned control-plane reconcile is currently ready on the shared runtime surface.

```csharp
public const string ReconcileReady = "reconcile-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
