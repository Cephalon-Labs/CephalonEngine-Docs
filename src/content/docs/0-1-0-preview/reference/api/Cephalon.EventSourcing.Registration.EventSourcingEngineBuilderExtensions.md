---
title: Class EventSourcingEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-registration-eventsourcingenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Registration](/0-1-0-preview/reference/api/cephalon-eventsourcing-registration/)  
Assembly: Cephalon.EventSourcing.dll  

Registers the runtime-neutral Cephalon event-sourcing companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EventSourcingEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSourcingEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-registration-eventsourcingenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Registration_EventSourcingEngineBuilderExtensions_AddEventSourcing_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_EventSourcing_Configuration_EventSourcingOptions__"></a> AddEventSourcing\(EngineBuilder, Action<EventSourcingOptions\>?\)

Adds the Cephalon event-sourcing companion pack to the engine.

```csharp
public static EngineBuilder AddEventSourcing(this EngineBuilder builder, Action<EventSourcingOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EventSourcingOptions](/0-1-0-preview/reference/api/cephalon-eventsourcing-configuration-eventsourcingoptions/)\>?

An optional callback that configures host-owned event-sourcing options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
