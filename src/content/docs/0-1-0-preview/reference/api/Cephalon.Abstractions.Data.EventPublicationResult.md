---
title: Class EventPublicationResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the operator-facing result of one managed event-publication request.

```csharp
public sealed record EventPublicationResult : IEquatable<EventPublicationResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventPublicationResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationresult/)

#### Implements

[IEquatable<EventPublicationResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventPublicationResult__ctor_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventPublicationResult\(string, string, string, string, DateTimeOffset, string?, IReadOnlyDictionary<string, string\>\)

Describes the operator-facing result of one managed event-publication request.

```csharp
public EventPublicationResult(string PublicationId, string ChannelId, string EventType, string Outcome, DateTimeOffset AcceptedAtUtc, string? Error, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`PublicationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier.

`ChannelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`EventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`Outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication outcome identifier.

`AcceptedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the active runtime accepted the publication.

`Error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when publication failed.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Optional operator-facing metadata captured with the result.

## Properties

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_AcceptedAtUtc"></a> AcceptedAtUtc

The UTC timestamp when the active runtime accepted the publication.

```csharp
public DateTimeOffset AcceptedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_ChannelId"></a> ChannelId

The logical channel or destination identifier.

```csharp
public string ChannelId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_Error"></a> Error

The operator-facing error summary when publication failed.

```csharp
public string? Error { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_EventType"></a> EventType

The logical event type identifier.

```csharp
public string EventType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_Metadata"></a> Metadata

Optional operator-facing metadata captured with the result.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_Outcome"></a> Outcome

The stable publication outcome identifier.

```csharp
public string Outcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationResult_PublicationId"></a> PublicationId

The stable publication identifier.

```csharp
public string PublicationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
