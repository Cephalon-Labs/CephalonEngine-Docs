---
title: Class EventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-hosting-eventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-hosting/)  
Assembly: Cephalon.EventSourcing.dll  

Registers the runtime-neutral event-sourcing services used by Cephalon hosts.

```csharp
public static class EventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-hosting-eventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Hosting_EventSourcingServiceCollectionExtensions_AddCephalonEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_EventSourcing_Configuration_EventSourcingOptions__"></a> AddCephalonEventSourcing\(IServiceCollection, Action<EventSourcingOptions\>?\)

Adds the Cephalon event-sourcing baseline services to the service collection.

```csharp
public static IServiceCollection AddCephalonEventSourcing(this IServiceCollection services, Action<EventSourcingOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EventSourcingOptions](/0-1-0-preview/reference/api/cephalon-eventsourcing-configuration-eventsourcingoptions/)\>?

An optional callback that configures the host-owned event-sourcing options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
