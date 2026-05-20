---
title: Class EntityFrameworkOutboxEntry
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkoutboxentry
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Represents one durable outbox row stored through the Entity Framework data companion pack.

```csharp
public sealed class EntityFrameworkOutboxEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkOutboxEntry](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkoutboxentry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry__ctor"></a> EntityFrameworkOutboxEntry\(\)

Initializes a new instance of the <xref href="Cephalon.Data.EntityFramework.Modeling.EntityFrameworkOutboxEntry" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkOutboxEntry()
```

## Properties

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_ChannelId"></a> ChannelId

Gets or sets the logical channel or destination identifier.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_ContentType"></a> ContentType

Gets or sets the payload content type when one is known.

```csharp
public string? ContentType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_CorrelationId"></a> CorrelationId

Gets or sets the correlation identifier associated with the message.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_CreatedAtUtc"></a> CreatedAtUtc

Gets or sets the time at which the outbox row was created.

```csharp
public DateTimeOffset CreatedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_DispatchAttemptCount"></a> DispatchAttemptCount

Gets or sets the current dispatch-attempt count.

```csharp
public int DispatchAttemptCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_DispatchedAtUtc"></a> DispatchedAtUtc

Gets or sets the time at which the outbox row was dispatched, when known.

```csharp
public DateTimeOffset? DispatchedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_HeadersJson"></a> HeadersJson

Gets or sets the serialized message headers payload.

```csharp
public string HeadersJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_Id"></a> Id

Gets or sets the stable outbox message identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_MessageType"></a> MessageType

Gets or sets the logical message type identifier.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_MetadataJson"></a> MetadataJson

Gets or sets the serialized message metadata payload.

```csharp
public string MetadataJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_NextAttemptAtUtc"></a> NextAttemptAtUtc

Gets or sets the time at which the outbox row becomes eligible for the next dispatch attempt, when delayed retry is in effect.

```csharp
public DateTimeOffset? NextAttemptAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the time at which the message became visible to the outbox.

```csharp
public DateTimeOffset OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_Payload"></a> Payload

Gets or sets the serialized payload that should be delivered later.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkOutboxEntry_TenantId"></a> TenantId

Gets or sets the tenant identifier associated with the message.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
