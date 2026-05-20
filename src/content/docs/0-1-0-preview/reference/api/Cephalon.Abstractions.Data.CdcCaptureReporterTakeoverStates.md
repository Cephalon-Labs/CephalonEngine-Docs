---
title: Class CdcCaptureReporterTakeoverStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportertakeoverstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable takeover-state identifiers used by CDC reporter-coordination answers.

```csharp
public static class CdcCaptureReporterTakeoverStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterTakeoverStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportertakeoverstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterTakeoverStates_AwaitingTakeover"></a> AwaitingTakeover

The latest known reporter lease expired and the execution runtime is awaiting takeover by a replacement reporter.

```csharp
public const string AwaitingTakeover = "awaiting-takeover"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterTakeoverStates_Completed"></a> Completed

A replacement reporter already took over after the previous lease expired.

```csharp
public const string Completed = "completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterTakeoverStates_NotApplicable"></a> NotApplicable

Reporter takeover does not currently apply to the coordination answer.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterTakeoverStates_NotRequired"></a> NotRequired

Reporter takeover is not currently required because the execution runtime still has a single active reporter owner.

```csharp
public const string NotRequired = "not-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
