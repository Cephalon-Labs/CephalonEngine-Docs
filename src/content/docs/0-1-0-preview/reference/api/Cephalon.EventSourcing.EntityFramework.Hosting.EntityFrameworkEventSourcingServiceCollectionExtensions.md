---
title: Class EntityFrameworkEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-hosting-entityframeworkeventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.EntityFramework.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-hosting/)  
Assembly: Cephalon.EventSourcing.EntityFramework.dll  

Registers the Entity Framework event-store provider used by Cephalon hosts.

```csharp
public static class EntityFrameworkEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-hosting-entityframeworkeventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_EntityFramework_Hosting_EntityFrameworkEventSourcingServiceCollectionExtensions_AddCephalonEntityFrameworkEventSourcing__1_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> AddCephalonEntityFrameworkEventSourcing<TContext\>\(IServiceCollection\)

Adds the Entity Framework event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonEntityFrameworkEventSourcing<TContext>(this IServiceCollection services) where TContext : DbContext, IEntityFrameworkEventContext
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.

#### Type Parameters

`TContext` 

The DbContext type that persists event rows.
