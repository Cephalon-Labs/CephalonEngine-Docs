---
title: Class ClickHouseDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-clickhouse-registration-clickhousedataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.ClickHouse.Registration](/0-1-0-preview/reference/api/cephalon-data-clickhouse-registration/)  
Assembly: Cephalon.Data.ClickHouse.dll  

Registers the ClickHouse data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class ClickHouseDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClickHouseDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-clickhouse-registration-clickhousedataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_ClickHouse_Registration_ClickHouseDataEngineBuilderExtensions_AddClickHouseData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions__"></a> AddClickHouseData\(EngineBuilder, string, string, Action<ClickHouseDataOptions\>?\)

Adds the ClickHouse data pack with the supplied host and database.

```csharp
public static EngineBuilder AddClickHouseData(this EngineBuilder builder, string host, string database, Action<ClickHouseDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse host address (e.g. <code>"localhost"</code>).

`database` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse database to connect to.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ClickHouseDataOptions](/0-1-0-preview/reference/api/cephalon-data-clickhouse-configuration-clickhousedataoptions/)\>?

An optional callback that configures the host-owned ClickHouse pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.ClickHouse.Configuration.ClickHouseDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.ClickHouse.Configuration.ClickHouseDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.
