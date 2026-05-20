---
title: Class SagaChoreographyPublication
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Describes one event publication produced by a choreography-based saga step.

```csharp
public sealed class SagaChoreographyPublication
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication__ctor_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SagaChoreographyPublication\(string, string, string, string, DateTimeOffset, string?, string?, string?, bool, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Abstractions.SagaChoreographyPublication" data-throw-if-not-resolved="false"></xref>.

```csharp
public SagaChoreographyPublication(string id, string channelId, string eventType, string payload, DateTimeOffset occurredAtUtc, string? contentType = null, string? correlationId = null, string? tenantId = null, bool isCompensation = false, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`eventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

The serialized event payload.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the publication occurred.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The payload content type when one is known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the publication.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the publication.

`isCompensation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the publication represents compensation work.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event headers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event metadata.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_ChannelId"></a> ChannelId

Gets the logical channel or destination identifier.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_ContentType"></a> ContentType

Gets the payload content type when one is known.

```csharp
public string? ContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the publication.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_EventType"></a> EventType

Gets the logical event type identifier.

```csharp
public string EventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_Headers"></a> Headers

Gets the event headers associated with the publication.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_Id"></a> Id

Gets the stable publication identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_IsCompensation"></a> IsCompensation

Gets a value indicating whether this publication represents compensation work.

```csharp
public bool IsCompensation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_Metadata"></a> Metadata

Gets the event metadata associated with the publication.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the publication occurred.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_Payload"></a> Payload

Gets the serialized event payload.

```csharp
public string Payload { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_TenantId"></a> TenantId

Gets the tenant identifier associated with the publication.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_CreateCompensationJson__1_System_String_System_String_System_String___0_System_DateTimeOffset_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Text_Json_JsonSerializerOptions_"></a> CreateCompensationJson<TPayload\>\(string, string, string, TPayload, DateTimeOffset, string?, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, JsonSerializerOptions?\)

Creates one choreography publication with a JSON-serialized payload that is explicitly marked as compensation work.

```csharp
public static SagaChoreographyPublication CreateCompensationJson<TPayload>(string id, string channelId, string eventType, TPayload payload, DateTimeOffset occurredAtUtc, string? correlationId = null, string? tenantId = null, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null, JsonSerializerOptions? serializerOptions = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`eventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`payload` TPayload

The typed payload to serialize as JSON.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the publication occurred.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the publication.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the publication.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event headers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event metadata.

`serializerOptions` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)?

Optional JSON serializer options for the payload.

#### Returns

 [SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

The choreography publication with a JSON payload, compensation flag, and JSON content type.

#### Type Parameters

`TPayload` 

The payload type to serialize.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_CreateJson__1_System_String_System_String_System_String___0_System_DateTimeOffset_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Text_Json_JsonSerializerOptions_"></a> CreateJson<TPayload\>\(string, string, string, TPayload, DateTimeOffset, string?, string?, bool, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, JsonSerializerOptions?\)

Creates one choreography publication with a JSON-serialized payload.

```csharp
public static SagaChoreographyPublication CreateJson<TPayload>(string id, string channelId, string eventType, TPayload payload, DateTimeOffset occurredAtUtc, string? correlationId = null, string? tenantId = null, bool isCompensation = false, IReadOnlyDictionary<string, string>? headers = null, IReadOnlyDictionary<string, string>? metadata = null, JsonSerializerOptions? serializerOptions = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier.

`eventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier.

`payload` TPayload

The typed payload to serialize as JSON.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the publication occurred.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the publication.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the publication.

`isCompensation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the publication represents compensation work.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event headers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional event metadata.

`serializerOptions` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)?

Optional JSON serializer options for the payload.

#### Returns

 [SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

The choreography publication with a JSON payload and <code>application/json</code> content type.

#### Type Parameters

`TPayload` 

The payload type to serialize.
