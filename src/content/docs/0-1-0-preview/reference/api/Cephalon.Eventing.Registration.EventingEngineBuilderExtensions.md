---
title: Class EventingEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventing-registration-eventingenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Eventing.Registration](/0-1-0-preview/reference/api/cephalon-eventing-registration/)  
Assembly: Cephalon.Eventing.dll  

Registers the built-in eventing runtime pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EventingEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventingEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-eventing-registration-eventingenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Eventing_Registration_EventingEngineBuilderExtensions_AddEventing_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Eventing_Configuration_EventingOptions__"></a> AddEventing\(EngineBuilder, Action<EventingOptions\>?\)

Adds the eventing runtime pack to the engine.

```csharp
public static EngineBuilder AddEventing(this EngineBuilder builder, Action<EventingOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EventingOptions](/0-1-0-preview/reference/api/cephalon-eventing-configuration-eventingoptions/)\>?

An optional callback that configures the host-owned eventing options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
