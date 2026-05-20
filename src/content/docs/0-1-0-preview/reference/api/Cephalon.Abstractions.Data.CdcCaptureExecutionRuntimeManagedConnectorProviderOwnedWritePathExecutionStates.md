---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutionstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-owned write-path execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutionstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_NotApplicable"></a> NotApplicable

Provider-owned write-path execution does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_OperatorOnly"></a> OperatorOnly

Provider-owned write-path execution still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_ProviderBlocked"></a> ProviderBlocked

Provider-owned write-path execution remains blocked by shared runtime policy, approval, or adapter posture.

```csharp
public const string ProviderBlocked = "provider-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_ProviderExecutable"></a> ProviderExecutable

Provider-owned write-path execution is currently ready on the shared runtime surface.

```csharp
public const string ProviderExecutable = "provider-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_ProviderOwnedCompleted"></a> ProviderOwnedCompleted

Provider-owned write-path execution no longer needs an additional provider command on the shared lane.

```csharp
public const string ProviderOwnedCompleted = "provider-owned-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_ProviderOwnedExecuting"></a> ProviderOwnedExecuting

Provider-owned write-path execution already translated one provider-facing command shape.

```csharp
public const string ProviderOwnedExecuting = "provider-owned-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStates_ProviderOwnedRisk"></a> ProviderOwnedRisk

Provider-owned write-path execution currently remains risky because broader shared runtime truth is not safe enough yet.

```csharp
public const string ProviderOwnedRisk = "provider-owned-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
