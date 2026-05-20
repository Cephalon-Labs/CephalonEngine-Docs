---
title: Class CdcCaptureLagStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the provider-facing lag posture currently visible for one CDC capture.

```csharp
public sealed record CdcCaptureLagStatus : IEquatable<CdcCaptureLagStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)

#### Implements

[IEquatable<CdcCaptureLagStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStatus__ctor_System_String_System_Nullable_System_Int64__System_String_"></a> CdcCaptureLagStatus\(string, long?, string?\)

Creates a new CDC lag status.

```csharp
public CdcCaptureLagStatus(string state, long? pendingChangeCount = null, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable lag-state identifier, such as <code>unknown</code>, <code>current</code>, <code>lagging</code>, or <code>backfilling</code>.

`pendingChangeCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The number of source-side changes still pending capture when the provider can report that answer.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing lag summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStatus_Description"></a> Description

Gets an optional operator-facing lag summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStatus_HasPendingChanges"></a> HasPendingChanges

Gets a value indicating whether the capture still has pending source-side changes.

```csharp
public bool HasPendingChanges { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStatus_PendingChangeCount"></a> PendingChangeCount

Gets the number of source-side changes still pending capture when the provider reports that answer.

```csharp
public long? PendingChangeCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureLagStatus_State"></a> State

Gets the stable lag-state identifier.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
