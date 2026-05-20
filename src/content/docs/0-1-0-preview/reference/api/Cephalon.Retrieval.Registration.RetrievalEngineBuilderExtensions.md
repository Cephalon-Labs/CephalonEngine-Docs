---
title: Class RetrievalEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-retrieval-registration-retrievalenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Retrieval.Registration](/0-1-0-preview/reference/api/cephalon-retrieval-registration/)  
Assembly: Cephalon.Retrieval.dll  

Registers the built-in retrieval runtime pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RetrievalEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RetrievalEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-retrieval-registration-retrievalenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Retrieval_Registration_RetrievalEngineBuilderExtensions_AddRetrieval_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Retrieval_Configuration_RetrievalOptions__"></a> AddRetrieval\(EngineBuilder, Action<RetrievalOptions\>?\)

Adds the retrieval runtime pack to the engine.

```csharp
public static EngineBuilder AddRetrieval(this EngineBuilder builder, Action<RetrievalOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RetrievalOptions](/0-1-0-preview/reference/api/cephalon-retrieval-configuration-retrievaloptions/)\>?

An optional callback that configures the host-owned retrieval options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
