---
title: Class AgenticEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-agentics-registration-agenticenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Agentics.Registration](/0-1-0-preview/reference/api/cephalon-agentics-registration/)  
Assembly: Cephalon.Agentics.dll  

Registers the built-in agentic runtime pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class AgenticEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgenticEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-agentics-registration-agenticenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Agentics_Registration_AgenticEngineBuilderExtensions_AddAgentics_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Agentics_Configuration_AgenticRuntimeOptions__"></a> AddAgentics\(EngineBuilder, Action<AgenticRuntimeOptions\>?\)

Adds the agentic runtime pack to the engine.

```csharp
public static EngineBuilder AddAgentics(this EngineBuilder builder, Action<AgenticRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AgenticRuntimeOptions](/0-1-0-preview/reference/api/cephalon-agentics-configuration-agenticruntimeoptions/)\>?

An optional callback that configures the host-owned agentic runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

The pack activates only when the matching technology profile is selected, but registering it
here makes its services, capabilities, and runtime surfaces available when that selection is active.
