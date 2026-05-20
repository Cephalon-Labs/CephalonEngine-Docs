---
title: Interface IEntityFrameworkEventContext
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-ientityframeworkeventcontext
editUrl: false
---

Namespace: [Cephalon.EventSourcing.EntityFramework](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework/)  
Assembly: Cephalon.EventSourcing.EntityFramework.dll  

Represents the minimum Entity Framework context contract required by the Cephalon event-store provider.

```csharp
public interface IEntityFrameworkEventContext
```

## Properties

### <a id="Cephalon_EventSourcing_EntityFramework_IEntityFrameworkEventContext_Events"></a> Events

Gets the event rows persisted by the active event-store context.

```csharp
DbSet<EntityFrameworkEventEntry> Events { get; }
```

#### Property Value

 [DbSet](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbset\-1)<[EntityFrameworkEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-entityframeworkevententry/)\>
