---
title: Class CdcCaptureExecutionRuntimeRemediationCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimeremediationcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable remediation-category identifiers used by CDC execution-runtime summaries.

```csharp
public static class CdcCaptureExecutionRuntimeRemediationCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeRemediationCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimeremediationcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationCategories_FailedCdcCaptures"></a> FailedCdcCaptures

One or more reported CDC captures currently publish failed runtime outcomes.

```csharp
public const string FailedCdcCaptures = "failed-cdc-captures"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationCategories_ReporterCoordinationIssues"></a> ReporterCoordinationIssues

One or more reported CDC captures currently publish degraded reporter-coordination posture.

```csharp
public const string ReporterCoordinationIssues = "reporter-coordination-issues"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationCategories_StaleObservations"></a> StaleObservations

Reported CDC captures currently publish stale runtime observations.

```csharp
public const string StaleObservations = "stale-observations"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationCategories_UnreportedCdcCaptures"></a> UnreportedCdcCaptures

Declared CDC captures have not reported runtime state yet.

```csharp
public const string UnreportedCdcCaptures = "unreported-cdc-captures"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
