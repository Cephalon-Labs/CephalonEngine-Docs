---
title: Class CdcCaptureReporterCoordinationStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable reporter-coordination state identifiers used by CDC runtime-state and execution-runtime summaries.

```csharp
public static class CdcCaptureReporterCoordinationStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterCoordinationStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_Active"></a> Active

Exactly one reporter currently holds the active lease for the execution runtime.

```csharp
public const string Active = "active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_Conflicted"></a> Conflicted

Reporter coordination is currently degraded because conflicting or ambiguous reporters are visible.

```csharp
public const string Conflicted = "conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_LeaseExpired"></a> LeaseExpired

The latest known reporter lease expired before a replacement reporter took over, so the runtime is awaiting takeover.

```csharp
public const string LeaseExpired = "lease-expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_NotConfigured"></a> NotConfigured

The execution runtime does not currently declare reporter-lease coordination semantics.

```csharp
public const string NotConfigured = "not-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_Unknown"></a> Unknown

The runtime cannot currently determine the reporter-coordination posture.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStates_Unreported"></a> Unreported

The execution runtime has not reported any capture observations yet.

```csharp
public const string Unreported = "unreported"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
