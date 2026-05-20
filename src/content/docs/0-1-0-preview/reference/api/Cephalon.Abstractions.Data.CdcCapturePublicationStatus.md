---
title: Class CdcCapturePublicationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the publication posture currently visible for one CDC capture.

```csharp
public sealed record CdcCapturePublicationStatus : IEquatable<CdcCapturePublicationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)

#### Implements

[IEquatable<CdcCapturePublicationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCapturePublicationStatus__ctor_System_String_System_Nullable_System_Int64__System_String_"></a> CdcCapturePublicationStatus\(string, long?, string?\)

Creates a new CDC publication status.

```csharp
public CdcCapturePublicationStatus(string state, long? pendingPublicationCount = null, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication-state identifier, such as <code>unknown</code>, <code>pending-publication</code>, or <code>dispatch-retry-pending</code>.

`pendingPublicationCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The number of pending publications still waiting to flow through the linked outbox path when the provider can report that answer.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing publication summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCapturePublicationStatus_Description"></a> Description

Gets an optional operator-facing publication summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCapturePublicationStatus_HasPendingPublications"></a> HasPendingPublications

Gets a value indicating whether the capture still has pending publications.

```csharp
public bool HasPendingPublications { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCapturePublicationStatus_PendingPublicationCount"></a> PendingPublicationCount

Gets the number of pending publications still waiting to flow through the linked outbox path when one is known.

```csharp
public long? PendingPublicationCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_Abstractions_Data_CdcCapturePublicationStatus_State"></a> State

Gets the stable publication-state identifier.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
