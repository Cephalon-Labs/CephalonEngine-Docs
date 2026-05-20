---
title: Class CdcCaptureReporterCoordinationIssueReasons
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationissuereasons
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable degraded-reason identifiers used by CDC reporter-coordination answers.

```csharp
public static class CdcCaptureReporterCoordinationIssueReasons
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterCoordinationIssueReasons](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationissuereasons/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationIssueReasons_AwaitingTakeover"></a> AwaitingTakeover

The latest known reporter lease expired and the runtime is still awaiting takeover by a replacement reporter.

```csharp
public const string AwaitingTakeover = "awaiting-takeover"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationIssueReasons_MultipleActiveReporters"></a> MultipleActiveReporters

Multiple reporters currently appear to hold active leases for the same execution runtime.

```csharp
public const string MultipleActiveReporters = "multiple-active-reporters"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationIssueReasons_None"></a> None

Reporter coordination is not currently degraded.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationIssueReasons_RejectedReporterConflict"></a> RejectedReporterConflict

At least one conflicting reporter remains visible while another reporter still holds the active lease.

```csharp
public const string RejectedReporterConflict = "rejected-reporter-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
