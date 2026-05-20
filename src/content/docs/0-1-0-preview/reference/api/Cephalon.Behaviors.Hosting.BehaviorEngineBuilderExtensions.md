---
title: Class BehaviorEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-hosting-behaviorenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-hosting/)  
Assembly: Cephalon.Behaviors.dll  

Extends <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref> with behavior topology registration.

```csharp
public static class BehaviorEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-hosting-behaviorenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Hosting_BehaviorEngineBuilderExtensions_AddBehaviors_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder__"></a> AddBehaviors\(EngineBuilder, Action<IBehaviorCollectionBuilder\>?\)

Adds the behavior topology system to the engine, including catalog, dispatcher, compatibility matrix, and built-in rules.

```csharp
public static EngineBuilder AddBehaviors(this EngineBuilder engine, Action<IBehaviorCollectionBuilder>? configure = null)
```

#### Parameters

`engine` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)\>?

An optional callback to register behaviors fluently.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

### <a id="Cephalon_Behaviors_Hosting_BehaviorEngineBuilderExtensions_AddBehaviors_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Behaviors_Configuration_BehaviorOptions__System_Action_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder__"></a> AddBehaviors\(EngineBuilder, Action<BehaviorOptions\>?, Action<IBehaviorCollectionBuilder\>?\)

Adds the behavior topology system to the engine with custom options and behavior registration.

```csharp
public static EngineBuilder AddBehaviors(this EngineBuilder engine, Action<BehaviorOptions>? configureOptions, Action<IBehaviorCollectionBuilder>? configure = null)
```

#### Parameters

`engine` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureOptions` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[BehaviorOptions](/0-1-0-preview/reference/api/cephalon-behaviors-configuration-behavioroptions/)\>?

An optional callback to configure behavior topology options.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)\>?

An optional callback to register behaviors fluently.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
