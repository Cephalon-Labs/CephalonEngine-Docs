---
title: Class CdcCaptureExecutionRuntimeReportingCoverageStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportingcoveragestatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the declared-versus-reported coverage currently visible for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeReportingCoverageStatus : IEquatable<CdcCaptureExecutionRuntimeReportingCoverageStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeReportingCoverageStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportingcoveragestatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeReportingCoverageStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeReportingCoverageStatus\(string, string?\)

Creates a new execution-runtime reporting-coverage answer.

```csharp
public CdcCaptureExecutionRuntimeReportingCoverageStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable reporting-coverage state, such as <code>unreported</code>, <code>partially-reported</code>, or <code>fully-reported</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing reporting-coverage summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_DeclaredCaptureCount"></a> DeclaredCaptureCount

Gets the number of declared CDC captures currently owned by the execution runtime.

```csharp
public int DeclaredCaptureCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_Description"></a> Description

Gets an optional operator-facing reporting-coverage summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_HasFullCoverage"></a> HasFullCoverage

Gets a value indicating whether the execution runtime has reported every declared CDC capture.

```csharp
public bool HasFullCoverage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_HasUnreportedCdcCaptures"></a> HasUnreportedCdcCaptures

Gets a value indicating whether any declared CDC captures still have not reported runtime state.

```csharp
public bool HasUnreportedCdcCaptures { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_ReportedCaptureCount"></a> ReportedCaptureCount

Gets the number of declared CDC captures that have reported runtime state.

```csharp
public int ReportedCaptureCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_State"></a> State

Gets the stable reporting-coverage state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_UnreportedCaptureCount"></a> UnreportedCaptureCount

Gets the number of declared CDC captures that have not reported runtime state yet.

```csharp
public int UnreportedCaptureCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReportingCoverageStatus_UnreportedCdcCaptureIds"></a> UnreportedCdcCaptureIds

Gets the declared CDC capture identifiers that have not reported runtime state yet.

```csharp
public IReadOnlyList<string> UnreportedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
