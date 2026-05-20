---
title: Class DebeziumDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-debezium-registration-debeziumdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Debezium.Registration](/0-1-0-preview/reference/api/cephalon-data-debezium-registration/)  
Assembly: Cephalon.Data.Debezium.dll  

Registers the Debezium-managed external CDC companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class DebeziumDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DebeziumDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-debezium-registration-debeziumdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Debezium_Registration_DebeziumDataEngineBuilderExtensions_AddDebeziumData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Debezium_Configuration_DebeziumDataOptions__"></a> AddDebeziumData\(EngineBuilder, Action<DebeziumDataOptions\>\)

Adds the Debezium-managed external CDC pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddDebeziumData(this EngineBuilder builder, Action<DebeziumDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DebeziumDataOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumdataoptions/)\>

The callback that configures the host-owned Debezium pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
