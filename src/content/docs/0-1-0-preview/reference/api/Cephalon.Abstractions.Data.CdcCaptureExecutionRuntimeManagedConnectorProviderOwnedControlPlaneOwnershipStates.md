---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned control-plane ownership answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_NotApplicable"></a> NotApplicable

Provider-owned control-plane ownership does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane ownership still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OwnershipActive"></a> OwnershipActive

Provider-owned control-plane ownership is currently active on one bounded provider-facing step.

```csharp
public const string OwnershipActive = "ownership-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OwnershipBlocked"></a> OwnershipBlocked

Provider-owned control-plane ownership remains blocked by shared runtime policy, scheduler, or broader ownership truth.

```csharp
public const string OwnershipBlocked = "ownership-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OwnershipPartial"></a> OwnershipPartial

Provider-owned control-plane ownership is partially available but still depends on bounded operator or shared runtime conditions.

```csharp
public const string OwnershipPartial = "ownership-partial"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OwnershipReady"></a> OwnershipReady

Provider-owned control-plane ownership is currently ready on the shared runtime surface.

```csharp
public const string OwnershipReady = "ownership-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStates_OwnershipRisk"></a> OwnershipRisk

Provider-owned control-plane ownership currently remains risky because broader shared runtime truth is not safe enough yet.

```csharp
public const string OwnershipRisk = "ownership-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
