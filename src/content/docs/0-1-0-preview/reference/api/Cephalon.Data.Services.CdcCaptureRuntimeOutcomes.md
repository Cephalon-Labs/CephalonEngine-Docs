---
title: Class CdcCaptureRuntimeOutcomes
slug: 0-1-0-preview/reference/api/cephalon-data-services-cdccaptureruntimeoutcomes
editUrl: false
---

Namespace: [Cephalon.Data.Services](/0-1-0-preview/reference/api/cephalon-data-services/)  
Assembly: Cephalon.Data.dll  

Defines the stable outcome identifiers used when reporting CDC capture activity.

```csharp
public static class CdcCaptureRuntimeOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureRuntimeOutcomes](/0-1-0-preview/reference/api/cephalon-data-services-cdccaptureruntimeoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Services_CdcCaptureRuntimeOutcomes_Captured"></a> Captured

Gets the outcome identifier used when a capture observes one or more source changes.

```csharp
public const string Captured = "captured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Services_CdcCaptureRuntimeOutcomes_Failed"></a> Failed

Gets the outcome identifier used when a capture fails.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Services_CdcCaptureRuntimeOutcomes_Idle"></a> Idle

Gets the outcome identifier used when a capture polls successfully but finds no new changes.

```csharp
public const string Idle = "idle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Services_CdcCaptureRuntimeOutcomes_Started"></a> Started

Gets the outcome identifier used when a capture runtime starts or resumes work.

```csharp
public const string Started = "started"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
