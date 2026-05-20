---
title: Class EntityFrameworkEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-entityframeworkevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.EntityFramework](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework/)  
Assembly: Cephalon.EventSourcing.EntityFramework.dll  

Represents one persisted domain event row stored by the Entity Framework event-store provider.

```csharp
[Table("CephalonEvents")]
public sealed class EntityFrameworkEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-entityframeworkevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry__ctor"></a> EntityFrameworkEventEntry\(\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.EntityFramework.EntityFrameworkEventEntry" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkEventEntry()
```

## Properties

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_AppendedAtUtc"></a> AppendedAtUtc

Gets or sets the UTC time at which the event was appended to the store.

```csharp
public DateTime AppendedAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_CorrelationId"></a> CorrelationId

Gets or sets the correlation identifier associated with the event when known.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_EventType"></a> EventType

Gets or sets the assembly-qualified CLR event type.

```csharp
[MaxLength(500)]
public string EventType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_Id"></a> Id

Gets or sets the database-assigned row identifier.

```csharp
public long Id { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the UTC time at which the domain event occurred.

```csharp
public DateTime OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_Payload"></a> Payload

Gets or sets the serialized event payload.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_StreamId"></a> StreamId

Gets or sets the stable logical stream identifier.

```csharp
[MaxLength(500)]
public string StreamId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_StreamVersion"></a> StreamVersion

Gets or sets the optimistic stream version for the event.

```csharp
public long StreamVersion { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventEntry_TenantId"></a> TenantId

Gets or sets the tenant identifier associated with the event when known.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
