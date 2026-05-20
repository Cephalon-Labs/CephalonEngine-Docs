---
title: Class SqlServerDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-sqlserver-registration-sqlserverdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.SqlServer.Registration](/0-1-0-preview/reference/api/cephalon-data-sqlserver-registration/)  
Assembly: Cephalon.Data.SqlServer.dll  

Registers the SQL Server CDC companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class SqlServerDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SqlServerDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-registration-sqlserverdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_SqlServer_Registration_SqlServerDataEngineBuilderExtensions_AddSqlServerData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions__"></a> AddSqlServerData\(EngineBuilder, string, string, Action<SqlServerDataOptions\>?\)

Adds the SQL Server CDC pack with the supplied connection string and database name.

```csharp
public static EngineBuilder AddSqlServerData(this EngineBuilder builder, string connectionString, string databaseName, Action<SqlServerDataOptions>? configure = null)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SQL Server connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing database name.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SqlServerDataOptions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlserverdataoptions/)\>?

An optional callback that configures the host-owned SQL Server pack options.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

### <a id="Cephalon_Data_SqlServer_Registration_SqlServerDataEngineBuilderExtensions_AddSqlServerData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions__"></a> AddSqlServerData\(EngineBuilder, Action<SqlServerDataOptions\>\)

Adds the SQL Server CDC pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddSqlServerData(this EngineBuilder builder, Action<SqlServerDataOptions> configure)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SqlServerDataOptions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlserverdataoptions/)\>

The callback that configures the host-owned SQL Server pack options, including
<xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>, and
<xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.
