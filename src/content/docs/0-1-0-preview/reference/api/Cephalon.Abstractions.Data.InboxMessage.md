---
title: Class InboxMessage
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-inboxmessage
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one inbound message tracked by an inbox implementation for idempotency or replay control.

```csharp
public sealed class InboxMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxmessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_InboxMessage__ctor_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> InboxMessage\(string, string, string, string, DateTimeOffset, string?, string?, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new inbox message.

```csharp
public InboxMessage(string id, string channelId, string messageType, string payload, DateTimeOffset receivedAtUtc, string? contentType = null, string? correlationId = null, string? tenantId = null, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable inbound message identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or source identifier.

`messageType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical message type identifier.

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

The serialized payload that was received.

`receivedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the message was received.

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

### <a id="Cephalon_Abstractions_Data_InboxMessage_ChannelId"></a> ChannelId

Gets the logical channel or source identifier.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxMessage_ContentType"></a> ContentType

Gets the payload content type when one is known.

```csharp
public string? ContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_InboxMessage_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the message.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_InboxMessage_Headers"></a> Headers

Gets message headers associated with the message.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_InboxMessage_Id"></a> Id

Gets the stable inbound message identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxMessage_MessageType"></a> MessageType

Gets the logical message type identifier.

```csharp
public string MessageType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxMessage_Metadata"></a> Metadata

Gets message metadata associated with the message.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_InboxMessage_Payload"></a> Payload

Gets the serialized payload that was received.

```csharp
public string Payload { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxMessage_ReceivedAtUtc"></a> ReceivedAtUtc

Gets the time at which the message was received.

```csharp
public DateTimeOffset ReceivedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_InboxMessage_TenantId"></a> TenantId

Gets the tenant identifier associated with the message.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
