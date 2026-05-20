---
title: Class EdgeEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-edge-registration-edgeenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Edge.Registration](/0-1-0-preview/reference/api/cephalon-edge-registration/)  
Assembly: Cephalon.Edge.dll  

Registers the built-in edge runtime pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EdgeEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-edge-registration-edgeenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Edge_Registration_EdgeEngineBuilderExtensions_AddEdge_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Edge_Configuration_EdgeRuntimeOptions__"></a> AddEdge\(EngineBuilder, Action<EdgeRuntimeOptions\>?\)

Adds the edge runtime pack to the engine.

```csharp
public static EngineBuilder AddEdge(this EngineBuilder builder, Action<EdgeRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EdgeRuntimeOptions](/0-1-0-preview/reference/api/cephalon-edge-configuration-edgeruntimeoptions/)\>?

An optional callback that configures the host-owned edge runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
