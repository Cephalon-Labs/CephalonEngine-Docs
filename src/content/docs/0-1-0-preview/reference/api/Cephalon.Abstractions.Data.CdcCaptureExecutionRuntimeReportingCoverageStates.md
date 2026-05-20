---
title: Class CdcCaptureExecutionRuntimeReportingCoverageStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportingcoveragestates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable reporting-coverage state identifiers used by CDC execution-runtime summaries.

```csharp
public static class CdcCaptureExecutionRuntimeReportingCoverageStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeReportingCoverageStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportingcoveragestates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStates_FullyReported"></a> FullyReported

Every declared CDC capture owned by the execution runtime has reported runtime state.

```csharp
public const string FullyReported = "fully-reported"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStates_NotBound"></a> NotBound

The execution runtime does not currently own any declared CDC captures.

```csharp
public const string NotBound = "not-bound"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStates_PartiallyReported"></a> PartiallyReported

The execution runtime owns declared CDC captures and only part of that declared set has reported runtime state.

```csharp
public const string PartiallyReported = "partially-reported"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStates_Unknown"></a> Unknown

The execution runtime cannot currently determine reporting coverage.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStates_Unreported"></a> Unreported

The execution runtime owns declared CDC captures, but none of them have reported runtime state yet.

```csharp
public const string Unreported = "unreported"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
