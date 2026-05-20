---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializerstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector provider-specific control-plane materializer answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializerstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_MaterializerExecuting"></a> MaterializerExecuting

The selected provider-specific control-plane materializer is currently executing or actively driving one provider-owned lane.

```csharp
public const string MaterializerExecuting = "materializer-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_MaterializerReady"></a> MaterializerReady

Provider-specific control-plane materializer follow-through is currently ready to select one concrete materializer on the shared runtime surface.

```csharp
public const string MaterializerReady = "materializer-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_MaterializerRisk"></a> MaterializerRisk

Provider-specific control-plane materializer follow-through currently remains risky because broader provider or runtime truth is not safe enough yet.

```csharp
public const string MaterializerRisk = "materializer-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_MaterializerSelected"></a> MaterializerSelected

Provider-specific control-plane materializer follow-through has selected one concrete materializer on the shared runtime surface.

```csharp
public const string MaterializerSelected = "materializer-selected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_MaterializerUnavailable"></a> MaterializerUnavailable

Provider-specific control-plane materializer follow-through does not currently expose enough provider identity or adapter truth to select one concrete materializer.

```csharp
public const string MaterializerUnavailable = "materializer-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_NotApplicable"></a> NotApplicable

Provider-specific control-plane materializer follow-through does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStates_OperatorOnly"></a> OperatorOnly

Provider-specific control-plane materializer follow-through still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
