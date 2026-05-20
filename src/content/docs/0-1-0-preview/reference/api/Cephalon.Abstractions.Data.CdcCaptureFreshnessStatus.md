---
title: Class CdcCaptureFreshnessStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the provider-facing freshness posture currently visible for one CDC capture.

```csharp
public sealed record CdcCaptureFreshnessStatus : IEquatable<CdcCaptureFreshnessStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

#### Implements

[IEquatable<CdcCaptureFreshnessStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus__ctor_System_String_System_Nullable_System_DateTimeOffset__System_String_"></a> CdcCaptureFreshnessStatus\(string, DateTimeOffset?, string?\)

Creates a new CDC freshness status.

```csharp
public CdcCaptureFreshnessStatus(string state, DateTimeOffset? freshUntilUtc = null, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable freshness-state identifier, such as <code>unknown</code>, <code>fresh</code>, or <code>stale</code>.

`freshUntilUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp until which the active runtime expects the current observation to remain fresh when one is known.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing freshness summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Description"></a> Description

Gets an optional operator-facing freshness summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_FreshUntilUtc"></a> FreshUntilUtc

Gets the UTC timestamp until which the current capture observation remains fresh when one is known.

```csharp
public DateTimeOffset? FreshUntilUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_HasWindow"></a> HasWindow

Gets a value indicating whether a freshness window is currently known.

```csharp
public bool HasWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_State"></a> State

Gets the stable freshness-state identifier.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
