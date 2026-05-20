---
title: Class CdcCaptureReporterCoordinationBreakdownEntry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped reporter-coordination bucket visible on an execution-runtime rollup.

```csharp
public sealed record CdcCaptureReporterCoordinationBreakdownEntry : IEquatable<CdcCaptureReporterCoordinationBreakdownEntry>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterCoordinationBreakdownEntry](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry/)

#### Implements

[IEquatable<CdcCaptureReporterCoordinationBreakdownEntry\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationBreakdownEntry__ctor_System_String_System_Int32_"></a> CdcCaptureReporterCoordinationBreakdownEntry\(string, int\)

Creates a new grouped reporter-coordination bucket.

```csharp
public CdcCaptureReporterCoordinationBreakdownEntry(string id, int count)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable reporter-coordination identifier carried by the bucket, such as a coordination state or degraded reason.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of CDC captures currently reporting the bucket.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationBreakdownEntry_Count"></a> Count

Gets the number of CDC captures currently reporting the bucket.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationBreakdownEntry_Id"></a> Id

Gets the stable reporter-coordination identifier carried by the bucket.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
