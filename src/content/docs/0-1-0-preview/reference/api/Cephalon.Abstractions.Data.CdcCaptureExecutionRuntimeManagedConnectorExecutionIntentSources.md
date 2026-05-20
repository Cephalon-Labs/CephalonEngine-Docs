---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable confidence-source identifiers used by managed-connector execution-intent answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources_ActionPlan"></a> ActionPlan

The execution intent is primarily grounded in the shared managed-connector action plan.

```csharp
public const string ActionPlan = "action-plan"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources_DryRun"></a> DryRun

The execution intent is primarily grounded in the shared managed-connector dry-run answer.

```csharp
public const string DryRun = "dry-run"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources_Preflight"></a> Preflight

The execution intent is primarily grounded in the shared managed-connector preflight answer.

```csharp
public const string Preflight = "preflight"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources_Unknown"></a> Unknown

The execution intent does not currently have a more specific confidence source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentSources_WritePathReadiness"></a> WritePathReadiness

The execution intent is primarily grounded in the shared managed-connector write-path readiness answer.

```csharp
public const string WritePathReadiness = "write-path-readiness"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
