---
title: Class WolverineEventingEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventing-wolverine-registration-wolverineeventingenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Eventing.Wolverine.Registration](/0-1-0-preview/reference/api/cephalon-eventing-wolverine-registration/)  
Assembly: Cephalon.Eventing.Wolverine.dll  

Registers the optional Wolverine eventing companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class WolverineEventingEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WolverineEventingEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-eventing-wolverine-registration-wolverineeventingenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Eventing_Wolverine_Registration_WolverineEventingEngineBuilderExtensions_AddWolverineEventing_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions__"></a> AddWolverineEventing\(EngineBuilder, Action<WolverineEventingOptions\>?\)

Adds the Wolverine eventing companion pack to the engine.

```csharp
public static EngineBuilder AddWolverineEventing(this EngineBuilder builder, Action<WolverineEventingOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[WolverineEventingOptions](/0-1-0-preview/reference/api/cephalon-eventing-wolverine-configuration-wolverineeventingoptions/)\>?

An optional callback that configures the host-owned Wolverine eventing options, including the opt-in managed dispatch loop.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
