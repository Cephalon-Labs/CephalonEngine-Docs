---
title: Class CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernanceactionids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable operator-facing action identifiers used by managed-connector governance answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernanceactionids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds_CompleteGovernanceDeclaration"></a> CompleteGovernanceDeclaration

Complete the connector declaration so shared governance truth has the minimum required metadata.

```csharp
public const string CompleteGovernanceDeclaration = "complete-governance-declaration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds_DeferControlPlane"></a> DeferControlPlane

Defer control-plane ownership until Cephalon ships write-path connector management for the declared mode.

```csharp
public const string DeferControlPlane = "defer-control-plane"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds_KeepObserveOnly"></a> KeepObserveOnly

Keep the connector in observe-only mode and continue using shared runtime reporting truth.

```csharp
public const string KeepObserveOnly = "keep-observe-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceActionIds_None"></a> None

No operator action is currently required for the execution runtime.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
