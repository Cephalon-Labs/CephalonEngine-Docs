---
title: Class PostgresDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-postgres-registration-postgresdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Postgres.Registration](/0-1-0-preview/reference/api/cephalon-data-postgres-registration/)  
Assembly: Cephalon.Data.Postgres.dll  

Registers the PostgreSQL logical-replication CDC companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class PostgresDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PostgresDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-postgres-registration-postgresdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Postgres_Registration_PostgresDataEngineBuilderExtensions_AddPostgresData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_Postgres_Configuration_PostgresDataOptions__"></a> AddPostgresData\(EngineBuilder, string, string, Action<PostgresDataOptions\>?\)

Adds the PostgreSQL logical-replication CDC pack with the supplied connection string and database name.

```csharp
public static EngineBuilder AddPostgresData(this EngineBuilder builder, string connectionString, string databaseName, Action<PostgresDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The PostgreSQL connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing database name.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[PostgresDataOptions](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgresdataoptions/)\>?

An optional callback that configures the host-owned PostgreSQL pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

### <a id="Cephalon_Data_Postgres_Registration_PostgresDataEngineBuilderExtensions_AddPostgresData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Postgres_Configuration_PostgresDataOptions__"></a> AddPostgresData\(EngineBuilder, Action<PostgresDataOptions\>\)

Adds the PostgreSQL logical-replication CDC pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddPostgresData(this EngineBuilder builder, Action<PostgresDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[PostgresDataOptions](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgresdataoptions/)\>

The callback that configures the host-owned PostgreSQL pack options, including
<xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>, and
<xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
