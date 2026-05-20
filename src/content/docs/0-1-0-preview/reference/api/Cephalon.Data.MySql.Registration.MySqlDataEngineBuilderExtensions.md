---
title: Class MySqlDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-mysql-registration-mysqldataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.MySql.Registration](/0-1-0-preview/reference/api/cephalon-data-mysql-registration/)  
Assembly: Cephalon.Data.MySql.dll  

Registers the MySQL binlog CDC companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MySqlDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MySqlDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-mysql-registration-mysqldataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_MySql_Registration_MySqlDataEngineBuilderExtensions_AddMySqlData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_MySql_Configuration_MySqlDataOptions__"></a> AddMySqlData\(EngineBuilder, string, string, Action<MySqlDataOptions\>?\)

Adds the MySQL binlog CDC pack with the supplied connection string and database name.

```csharp
public static EngineBuilder AddMySqlData(this EngineBuilder builder, string connectionString, string databaseName, Action<MySqlDataOptions>? configure = null)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MySQL connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing database name.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MySqlDataOptions](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqldataoptions/)\>?

An optional callback that configures the host-owned MySQL pack options.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

### <a id="Cephalon_Data_MySql_Registration_MySqlDataEngineBuilderExtensions_AddMySqlData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_MySql_Configuration_MySqlDataOptions__"></a> AddMySqlData\(EngineBuilder, Action<MySqlDataOptions\>\)

Adds the MySQL binlog CDC pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddMySqlData(this EngineBuilder builder, Action<MySqlDataOptions> configure)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MySqlDataOptions](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqldataoptions/)\>

The callback that configures the host-owned MySQL pack options, including
<xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>, and
<xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.
