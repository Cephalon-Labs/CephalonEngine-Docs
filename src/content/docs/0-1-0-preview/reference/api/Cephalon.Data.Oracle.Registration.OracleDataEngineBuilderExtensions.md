---
title: Class OracleDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-oracle-registration-oracledataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Oracle.Registration](/0-1-0-preview/reference/api/cephalon-data-oracle-registration/)  
Assembly: Cephalon.Data.Oracle.dll  

Registers the Oracle LogMiner CDC companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class OracleDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OracleDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-oracle-registration-oracledataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Oracle_Registration_OracleDataEngineBuilderExtensions_AddOracleData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_Oracle_Configuration_OracleDataOptions__"></a> AddOracleData\(EngineBuilder, string, string, Action<OracleDataOptions\>?\)

Adds the Oracle LogMiner CDC pack with the supplied connection string and database name.

```csharp
public static EngineBuilder AddOracleData(this EngineBuilder builder, string connectionString, string databaseName, Action<OracleDataOptions>? configure = null)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Oracle connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing Oracle database name.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OracleDataOptions](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oracledataoptions/)\>?

An optional callback that configures the host-owned Oracle pack options.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

### <a id="Cephalon_Data_Oracle_Registration_OracleDataEngineBuilderExtensions_AddOracleData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Oracle_Configuration_OracleDataOptions__"></a> AddOracleData\(EngineBuilder, Action<OracleDataOptions\>\)

Adds the Oracle LogMiner CDC pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddOracleData(this EngineBuilder builder, Action<OracleDataOptions> configure)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OracleDataOptions](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oracledataoptions/)\>

The callback that configures the host-owned Oracle pack options, including
<xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>, and
<xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.
