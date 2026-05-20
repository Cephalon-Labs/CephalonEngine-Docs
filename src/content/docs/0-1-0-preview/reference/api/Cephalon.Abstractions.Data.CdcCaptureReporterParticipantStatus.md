---
title: Class CdcCaptureReporterParticipantStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereporterparticipantstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one reporter participant currently visible in the CDC reporter-coordination story for one execution runtime.

```csharp
public sealed record CdcCaptureReporterParticipantStatus : IEquatable<CdcCaptureReporterParticipantStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterParticipantStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereporterparticipantstatus/)

#### Implements

[IEquatable<CdcCaptureReporterParticipantStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus__ctor_System_String_System_String_System_String_"></a> CdcCaptureReporterParticipantStatus\(string, string, string?\)

Creates a new CDC reporter participant status.

```csharp
public CdcCaptureReporterParticipantStatus(string reporterId, string role, string? description = null)
```

#### Parameters

`reporterId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable reporter identity.

`role` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable reporter role, such as <code>active</code>, <code>standby</code>, or <code>rejected</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing participant summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_Description"></a> Description

Gets an optional operator-facing participant summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_LastCdcCaptureId"></a> LastCdcCaptureId

Gets the latest CDC capture identifier associated with this reporter when one is known.

```csharp
public string? LastCdcCaptureId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_LastObservedAtUtc"></a> LastObservedAtUtc

Gets the UTC timestamp when this reporter most recently produced an accepted or rejected observation.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_LeaseExpiresAtUtc"></a> LeaseExpiresAtUtc

Gets the latest observed lease expiry for the reporter when one is known.

```csharp
public DateTimeOffset? LeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_ObservedEdgeNodeIds"></a> ObservedEdgeNodeIds

Gets the edge-node identifiers most recently associated with this reporter.

```csharp
public IReadOnlyList<string> ObservedEdgeNodeIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_ReporterId"></a> ReporterId

Gets the stable reporter identity.

```csharp
public string ReporterId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantStatus_Role"></a> Role

Gets the stable reporter role visible in the current coordination story.

```csharp
public string Role { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
