---
title: Class EntityFrameworkEventSourcingEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-registration-entityframeworkeventsourcingenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.EntityFramework.Registration](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-registration/)  
Assembly: Cephalon.EventSourcing.EntityFramework.dll  

Registers the Entity Framework event-store provider with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EntityFrameworkEventSourcingEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkEventSourcingEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-entityframework-registration-entityframeworkeventsourcingenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_EntityFramework_Registration_EntityFrameworkEventSourcingEngineBuilderExtensions_AddEntityFrameworkEventSourcing__1_Cephalon_Engine_Composition_EngineBuilder_"></a> AddEntityFrameworkEventSourcing<TContext\>\(EngineBuilder\)

Adds the Entity Framework event-store provider to the engine.

```csharp
public static EngineBuilder AddEntityFrameworkEventSourcing<TContext>(this EngineBuilder builder) where TContext : DbContext, IEntityFrameworkEventContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TContext` 

The DbContext type that persists event rows.
