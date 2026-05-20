---
title: Class EventPublicationRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one host-agnostic request to publish an integration event through the active eventing runtime.

```csharp
public sealed class EventPublicationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventPublicationRequest](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest__ctor_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventPublicationRequest\(string, string, string, string?, DateTimeOffset?, string?, string?, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates an event-publication request.

```csharp
public EventPublicationRequest(string channelId, string eventType, string payload, string? id = null, DateTimeOffset? occurredAtUtc = null, string? contentType = null, string? correlationId = null, string? tenantId = null, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`eventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

The serialized event payload.

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable publication identifier. A generated identifier is used when omitted.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The time at which the event occurred. The current UTC time is used when omitted.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The payload content type when one is known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the event.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the event.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event headers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing event metadata.

## Properties

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_ChannelId"></a> ChannelId

Gets the logical channel or destination identifier.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_ContentType"></a> ContentType

Gets the payload content type when one is known.

```csharp
public string? ContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the event.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_EventType"></a> EventType

Gets the logical event type identifier.

```csharp
public string EventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_Headers"></a> Headers

Gets event headers associated with the publication.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_Id"></a> Id

Gets the stable publication identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_Metadata"></a> Metadata

Gets optional operator-facing event metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the event occurred.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_Payload"></a> Payload

Gets the serialized event payload.

```csharp
public string Payload { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRequest_TenantId"></a> TenantId

Gets the tenant identifier associated with the event.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
