---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-specific control-plane dependency-aware teardown and mutation-execution hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_DependencyDegraded"></a> DependencyDegraded

Provider-specific dependency-aware teardown and mutation execution currently remains degraded.

```csharp
public const string DependencyDegraded = "dependency-degraded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_DependencyReady"></a> DependencyReady

Provider-specific dependency-aware teardown and mutation-execution hardening is currently ready on the shared runtime surface.

```csharp
public const string DependencyReady = "dependency-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_DependencyRisk"></a> DependencyRisk

Provider-specific dependency-aware teardown and mutation execution currently remains risky.

```csharp
public const string DependencyRisk = "dependency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_MutationExecutionBlocked"></a> MutationExecutionBlocked

Provider-specific dependency-aware mutation execution currently remains blocked.

```csharp
public const string MutationExecutionBlocked = "mutation-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_MutationExecutionHardened"></a> MutationExecutionHardened

Provider-specific dependency-aware mutation execution hardening is fully hardened.

```csharp
public const string MutationExecutionHardened = "mutation-execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_NotApplicable"></a> NotApplicable

Provider-specific dependency-aware teardown and mutation-execution hardening does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_OperatorOnly"></a> OperatorOnly

Provider-specific dependency-aware teardown and mutation-execution hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_TeardownBlocked"></a> TeardownBlocked

Provider-specific dependency-aware teardown currently remains blocked.

```csharp
public const string TeardownBlocked = "teardown-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStates_TeardownHardened"></a> TeardownHardened

Provider-specific dependency-aware teardown hardening is fully hardened.

```csharp
public const string TeardownHardened = "teardown-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
