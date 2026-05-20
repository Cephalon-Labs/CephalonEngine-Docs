---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider-owned control-plane dependency-aware apply-and-reconcile hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_CommandExecution"></a> CommandExecution

The latest recorded command-execution answer supplied the decisive input.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_CommandJournal"></a> CommandJournal

The shared command-journal answer supplied the decisive input.

```csharp
public const string CommandJournal = "command-journal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ManagedConnectorDrift"></a> ManagedConnectorDrift

The broader managed-connector drift answer supplied the decisive input.

```csharp
public const string ManagedConnectorDrift = "managed-connector-drift"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ManagedConnectorGovernance"></a> ManagedConnectorGovernance

The broader managed-connector governance answer supplied the decisive input.

```csharp
public const string ManagedConnectorGovernance = "managed-connector-governance"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ProviderOwnedControlPlaneApplyAndReconcileExecution"></a> ProviderOwnedControlPlaneApplyAndReconcileExecution

The broader provider-owned control-plane apply-and-reconcile execution answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneApplyAndReconcileExecution = "provider-owned-control-plane-apply-and-reconcile-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ProviderOwnedControlPlaneMutationReconcile"></a> ProviderOwnedControlPlaneMutationReconcile

The broader provider-owned control-plane mutation and reconcile answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneMutationReconcile = "provider-owned-control-plane-mutation-reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ProviderOwnedControlPlaneOwnership"></a> ProviderOwnedControlPlaneOwnership

The broader provider-owned control-plane ownership answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneOwnership = "provider-owned-control-plane-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_ProviderOwnedControlPlaneProvisioning"></a> ProviderOwnedControlPlaneProvisioning

The broader provider-owned control-plane provisioning answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneProvisioning = "provider-owned-control-plane-provisioning"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningSources_Unknown"></a> Unknown

No decisive source answer was available.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
