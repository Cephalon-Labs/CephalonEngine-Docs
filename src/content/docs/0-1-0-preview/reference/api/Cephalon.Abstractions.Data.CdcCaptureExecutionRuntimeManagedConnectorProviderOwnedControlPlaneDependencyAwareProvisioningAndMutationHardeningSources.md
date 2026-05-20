---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareprovisioningandmutationhardeningsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider-owned control-plane dependency-aware provisioning and mutation hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareprovisioningandmutationhardeningsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_CommandExecution"></a> CommandExecution

The latest command-execution outcome supplied the decisive input.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_CommandJournal"></a> CommandJournal

The retained command-journal evidence supplied the decisive input.

```csharp
public const string CommandJournal = "command-journal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ManagedConnectorDrift"></a> ManagedConnectorDrift

Managed-connector desired-versus-observed drift truth supplied the decisive input.

```csharp
public const string ManagedConnectorDrift = "managed-connector-drift"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ManagedConnectorGovernance"></a> ManagedConnectorGovernance

Managed-connector governance truth supplied the decisive input.

```csharp
public const string ManagedConnectorGovernance = "managed-connector-governance"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderExecutionOrchestration"></a> ProviderExecutionOrchestration

The broader provider execution-orchestration answer supplied the decisive input.

```csharp
public const string ProviderExecutionOrchestration = "provider-execution-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedControlPlaneApplyAndReconcileExecution"></a> ProviderOwnedControlPlaneApplyAndReconcileExecution

The broader provider-owned control-plane apply-and-reconcile execution answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneApplyAndReconcileExecution = "provider-owned-control-plane-apply-and-reconcile-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening"></a> ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening

The broader provider-owned control-plane dependency-aware apply-and-reconcile hardening answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening = "provider-owned-control-plane-dependency-aware-apply-and-reconcile-hardening"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedControlPlaneMutationReconcile"></a> ProviderOwnedControlPlaneMutationReconcile

The broader provider-owned control-plane mutation and reconcile answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneMutationReconcile = "provider-owned-control-plane-mutation-reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedControlPlaneOwnership"></a> ProviderOwnedControlPlaneOwnership

The broader provider-owned control-plane ownership answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneOwnership = "provider-owned-control-plane-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedControlPlaneProvisioning"></a> ProviderOwnedControlPlaneProvisioning

The broader provider-owned control-plane provisioning answer supplied the decisive input.

```csharp
public const string ProviderOwnedControlPlaneProvisioning = "provider-owned-control-plane-provisioning"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_ProviderOwnedWritePathExecution"></a> ProviderOwnedWritePathExecution

The broader provider-owned write-path execution answer supplied the decisive input.

```csharp
public const string ProviderOwnedWritePathExecution = "provider-owned-write-path-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningSources_Unknown"></a> Unknown

The dependency-aware provisioning and mutation hardening answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
