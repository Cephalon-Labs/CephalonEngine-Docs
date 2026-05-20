---
title: Class CdcCaptureLagStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the recommended stable lag-state identifiers for CDC runtime reporting.

```csharp
public static class CdcCaptureLagStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureLagStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStates_Backfilling"></a> Backfilling

Indicates that the provider reports the capture as intentionally backfilling older changes.

```csharp
public const string Backfilling = "backfilling"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStates_Current"></a> Current

Indicates that the provider reports the capture as caught up.

```csharp
public const string Current = "current"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStates_Lagging"></a> Lagging

Indicates that the provider reports the capture as lagging behind the source stream.

```csharp
public const string Lagging = "lagging"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStates_Unknown"></a> Unknown

Indicates that the active runtime does not yet have a lag answer.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
