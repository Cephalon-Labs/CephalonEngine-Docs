---
title: Class BehaviorEventingEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventing-behaviors-registration-behavioreventingenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Eventing.Behaviors.Registration](/0-1-0-preview/reference/api/cephalon-eventing-behaviors-registration/)  
Assembly: Cephalon.Eventing.Behaviors.dll  

Registers the optional behavior-to-eventing choreography bridge with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class BehaviorEventingEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorEventingEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-eventing-behaviors-registration-behavioreventingenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Eventing_Behaviors_Registration_BehaviorEventingEngineBuilderExtensions_AddBehaviorEventingBridge_Cephalon_Engine_Composition_EngineBuilder_"></a> AddBehaviorEventingBridge\(EngineBuilder\)

Adds the explicit saga-choreography bridge that stages behavior publications through the shared
<code>Cephalon.Eventing</code> publication path.

```csharp
public static EngineBuilder AddBehaviorEventingBridge(this EngineBuilder builder)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
