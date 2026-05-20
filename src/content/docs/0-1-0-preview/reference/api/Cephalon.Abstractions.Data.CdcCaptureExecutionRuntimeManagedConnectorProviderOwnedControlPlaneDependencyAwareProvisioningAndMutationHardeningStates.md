---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareprovisioningandmutationhardeningstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned control-plane dependency-aware provisioning and mutation hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareprovisioningandmutationhardeningstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_DependencyDegraded"></a> DependencyDegraded

Provider-owned control-plane dependency-aware provisioning and mutation hardening is currently degraded by mismatched, stale, or incomplete dependency observations.

```csharp
public const string DependencyDegraded = "dependency-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_DependencyReady"></a> DependencyReady

Provider-owned control-plane dependency-aware provisioning and mutation hardening is currently ready on the shared runtime surface.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_DependencyRisk"></a> DependencyRisk

Provider-owned control-plane dependency-aware provisioning and mutation hardening currently remains risky because broader provider or runtime truth is not safe enough yet.

```csharp
public const string DependencyRisk = "dependency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_MutationBlocked"></a> MutationBlocked

Provider-owned control-plane dependency-aware mutation currently remains blocked by missing dependency truth, task topology, or execution targeting.

```csharp
public const string MutationBlocked = "mutation-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_MutationHardened"></a> MutationHardened

Provider-owned control-plane dependency-aware mutation hardening is fully hardened on the shared runtime surface.

```csharp
public const string MutationHardened = "mutation-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_NotApplicable"></a> NotApplicable

Provider-owned control-plane dependency-aware provisioning and mutation hardening does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane dependency-aware provisioning and mutation hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_ProvisioningBlocked"></a> ProvisioningBlocked

Provider-owned control-plane dependency-aware provisioning currently remains blocked by missing dependency truth, task topology, or provisioning posture.

```csharp
public const string ProvisioningBlocked = "provisioning-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStates_ProvisioningHardened"></a> ProvisioningHardened

Provider-owned control-plane dependency-aware provisioning hardening is fully hardened on the shared runtime surface.

```csharp
public const string ProvisioningHardened = "provisioning-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
