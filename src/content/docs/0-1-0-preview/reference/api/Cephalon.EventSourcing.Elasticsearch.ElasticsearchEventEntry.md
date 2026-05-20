---
title: Class ElasticsearchEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch-elasticsearchevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Elasticsearch](/0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch/)  
Assembly: Cephalon.EventSourcing.Elasticsearch.dll  

Elasticsearch document mapping for an event stream entry.

```csharp
public sealed class ElasticsearchEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ElasticsearchEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch-elasticsearchevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_AppendedAtUtc"></a> AppendedAtUtc

Gets or sets the UTC timestamp when the event was appended to the store.

```csharp
[JsonPropertyName("appended_at_utc")]
public DateTime AppendedAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_CorrelationId"></a> CorrelationId

Gets or sets an optional causality tracking identifier.

```csharp
[JsonPropertyName("correlation_id")]
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_EventType"></a> EventType

Gets or sets the fully-qualified CLR event type name.

```csharp
[JsonPropertyName("event_type")]
public string EventType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the UTC timestamp when the domain event occurred.

```csharp
[JsonPropertyName("occurred_at_utc")]
public DateTime OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_Payload"></a> Payload

Gets or sets the JSON-serialized event payload.

```csharp
[JsonPropertyName("payload")]
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_StreamId"></a> StreamId

Gets or sets the logical stream identifier.

```csharp
[JsonPropertyName("stream_id")]
public string StreamId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_StreamVersion"></a> StreamVersion

Gets or sets the per-stream monotonic version number.

```csharp
[JsonPropertyName("stream_version")]
public long StreamVersion { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventEntry_TenantId"></a> TenantId

Gets or sets an optional tenant identifier for multi-tenancy.

```csharp
[JsonPropertyName("tenant_id")]
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
