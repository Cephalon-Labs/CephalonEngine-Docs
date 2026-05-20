---
title: Class EventDispatchItem
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchitem
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes one staged outbound event that is waiting for dispatch through the active eventing runtime.

```csharp
public sealed class EventDispatchItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchItem](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchitem/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventDispatchItem__ctor_System_String_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_DateTimeOffset_System_Int32_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventDispatchItem\(string, string, string, string, string, DateTimeOffset, DateTimeOffset, int, string?, string?, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new dispatch item.

```csharp
public EventDispatchItem(string outboxId, string messageId, string channelId, string eventType, string payload, DateTimeOffset occurredAtUtc, DateTimeOffset createdAtUtc, int dispatchAttemptCount, string? contentType = null, string? correlationId = null, string? tenantId = null, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier that owns the staged message.

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbound message identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`eventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

The serialized payload that should be dispatched.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the event became visible to the outbox.

`createdAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the durable outbox row was created.

`dispatchAttemptCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of dispatch attempts already recorded for this message.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The payload content type when one is known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the message.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the message.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional message headers associated with the dispatch item.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional message metadata associated with the dispatch item.

## Properties

### <a id="Cephalon_Eventing_Services_EventDispatchItem_ChannelId"></a> ChannelId

Gets the logical channel or destination identifier.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_ContentType"></a> ContentType

Gets the payload content type when one is known.

```csharp
public string? ContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventDispatchItem_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the message.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventDispatchItem_CreatedAtUtc"></a> CreatedAtUtc

Gets the time at which the durable outbox row was created.

```csharp
public DateTimeOffset CreatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_DispatchAttemptCount"></a> DispatchAttemptCount

Gets the number of dispatch attempts already recorded for this message.

```csharp
public int DispatchAttemptCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_EventType"></a> EventType

Gets the logical event type identifier.

```csharp
public string EventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_Headers"></a> Headers

Gets optional message headers associated with the dispatch item.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventDispatchItem_MessageId"></a> MessageId

Gets the stable outbound message identifier.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_Metadata"></a> Metadata

Gets optional message metadata associated with the dispatch item.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventDispatchItem_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the event became visible to the outbox.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_OutboxId"></a> OutboxId

Gets the stable outbox identifier that owns the staged message.

```csharp
public string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_Payload"></a> Payload

Gets the serialized payload that should be dispatched.

```csharp
public string Payload { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchItem_TenantId"></a> TenantId

Gets the tenant identifier associated with the message.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
