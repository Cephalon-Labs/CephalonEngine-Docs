---
title: Class EntityFrameworkInboxEntry
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkinboxentry
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Represents one processed inbound message row stored through the Entity Framework data companion pack.

```csharp
public sealed class EntityFrameworkInboxEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkInboxEntry](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkinboxentry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry__ctor"></a> EntityFrameworkInboxEntry\(\)

Initializes a new instance of the <xref href="Cephalon.Data.EntityFramework.Modeling.EntityFrameworkInboxEntry" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkInboxEntry()
```

## Properties

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_ChannelId"></a> ChannelId

Gets or sets the logical channel or source identifier.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_ContentType"></a> ContentType

Gets or sets the payload content type when one is known.

```csharp
public string? ContentType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_CorrelationId"></a> CorrelationId

Gets or sets the correlation identifier associated with the message.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_HeadersJson"></a> HeadersJson

Gets or sets the serialized message headers payload.

```csharp
public string HeadersJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_Id"></a> Id

Gets or sets the stable inbound message identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_MessageType"></a> MessageType

Gets or sets the logical message type identifier.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_MetadataJson"></a> MetadataJson

Gets or sets the serialized message metadata payload.

```csharp
public string MetadataJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_Payload"></a> Payload

Gets or sets the serialized payload that was received.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_ProcessedAtUtc"></a> ProcessedAtUtc

Gets or sets the time at which the inbox row was marked as processed.

```csharp
public DateTimeOffset ProcessedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_ReceivedAtUtc"></a> ReceivedAtUtc

Gets or sets the time at which the message was received.

```csharp
public DateTimeOffset ReceivedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkInboxEntry_TenantId"></a> TenantId

Gets or sets the tenant identifier associated with the message.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
