---
title: Class EntityFrameworkEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-entityframeworkeventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.EntityFramework](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework/)  
Assembly: Cephalon.EventSourcing.EntityFramework.dll  

Applies the Cephalon event-store schema to an Entity Framework model.

```csharp
public static class EntityFrameworkEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-entityframeworkeventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_EntityFramework_EntityFrameworkEventSourcingConfiguration_ConfigureCephalonEvents_Microsoft_EntityFrameworkCore_ModelBuilder_"></a> ConfigureCephalonEvents\(ModelBuilder\)

Configures the <code>CephalonEvents</code> table and indexes required by the Entity Framework event-store provider.

```csharp
public static void ConfigureCephalonEvents(ModelBuilder modelBuilder)
```

#### Parameters

`modelBuilder` [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The model builder to extend.
