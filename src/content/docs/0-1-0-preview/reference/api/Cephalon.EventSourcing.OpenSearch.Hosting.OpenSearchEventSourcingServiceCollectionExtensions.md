---
title: Class OpenSearchEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-opensearch-hosting-opensearcheventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.OpenSearch.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-opensearch-hosting/)  
Assembly: Cephalon.EventSourcing.OpenSearch.dll  

Extension methods for registering the OpenSearch event store.

```csharp
public static class OpenSearchEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenSearchEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-opensearch-hosting-opensearcheventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_OpenSearch_Hosting_OpenSearchEventSourcingServiceCollectionExtensions_AddCephalonOpenSearchEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_"></a> AddCephalonOpenSearchEventSourcing\(IServiceCollection, string, string\)

Registers <xref href="Cephalon.EventSourcing.OpenSearch.OpenSearchEventStore" data-throw-if-not-resolved="false"></xref> as <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> in the service collection.

```csharp
public static IServiceCollection AddCephalonOpenSearchEventSourcing(this IServiceCollection services, string uri, string indexName = "event-streams")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The OpenSearch node URI.

`indexName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target OpenSearch index name for event stream documents.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent composition.
