---
title: Class DataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-registration-dataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Registration](/0-1-0-preview/reference/api/cephalon-data-registration/)  
Assembly: Cephalon.Data.dll  

Registers the runtime-neutral data pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class DataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-registration-dataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Registration_DataEngineBuilderExtensions_AddData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Configuration_DataRuntimeOptions__"></a> AddData\(EngineBuilder, Action<DataRuntimeOptions\>?\)

Adds the data runtime pack to the engine.

```csharp
public static EngineBuilder AddData(this EngineBuilder builder, Action<DataRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DataRuntimeOptions](/0-1-0-preview/reference/api/cephalon-data-configuration-dataruntimeoptions/)\>?

An optional callback that configures the host-owned data runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
