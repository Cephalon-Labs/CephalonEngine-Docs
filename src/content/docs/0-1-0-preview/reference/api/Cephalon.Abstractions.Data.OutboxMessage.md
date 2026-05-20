---
title: Class OutboxMessage
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one message staged for later delivery through an outbox implementation.

```csharp
public sealed class OutboxMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_OutboxMessage__ctor_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> OutboxMessage\(string, string, string, string, DateTimeOffset, string?, string?, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new outbox message.

```csharp
public OutboxMessage(string id, string channelId, string messageType, string payload, DateTimeOffset occurredAtUtc, string? contentType = null, string? correlationId = null, string? tenantId = null, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox message identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`messageType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical message type identifier.

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

The serialized payload that should be delivered later.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the message became visible to the outbox.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The payload content type when one is known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the message.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the message.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional message headers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional message metadata.

## Properties

### <a id="Cephalon_Abstractions_Data_OutboxMessage_ChannelId"></a> ChannelId

Gets the logical channel or destination identifier.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxMessage_ContentType"></a> ContentType

Gets the payload content type when one is known.

```csharp
public string? ContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_OutboxMessage_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the message.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_OutboxMessage_Headers"></a> Headers

Gets message headers associated with the message.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_OutboxMessage_Id"></a> Id

Gets the stable outbox message identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxMessage_MessageType"></a> MessageType

Gets the logical message type identifier.

```csharp
public string MessageType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxMessage_Metadata"></a> Metadata

Gets message metadata associated with the message.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_OutboxMessage_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the message became visible to the outbox.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_OutboxMessage_Payload"></a> Payload

Gets the serialized payload that should be delivered later.

```csharp
public string Payload { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxMessage_TenantId"></a> TenantId

Gets the tenant identifier associated with the message.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
