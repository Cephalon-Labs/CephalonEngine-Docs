---
title: Class MongoDbDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-mongodb-registration-mongodbdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.MongoDB.Registration](/0-1-0-preview/reference/api/cephalon-data-mongodb-registration/)  
Assembly: Cephalon.Data.MongoDB.dll  

Registers the MongoDB data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MongoDbDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-mongodb-registration-mongodbdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_MongoDB_Registration_MongoDbDataEngineBuilderExtensions_AddMongoDbData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions__"></a> AddMongoDbData\(EngineBuilder, string, string, Action<MongoDbDataOptions\>?\)

Adds the MongoDB data pack with the supplied connection string and database name.

```csharp
public static EngineBuilder AddMongoDbData(this EngineBuilder builder, string connectionString, string databaseName, Action<MongoDbDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MongoDB connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target MongoDB database name.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MongoDbDataOptions](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbdataoptions/)\>?

An optional callback that configures the host-owned MongoDB pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.

### <a id="Cephalon_Data_MongoDB_Registration_MongoDbDataEngineBuilderExtensions_AddMongoDbData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions__"></a> AddMongoDbData\(EngineBuilder, Action<MongoDbDataOptions\>\)

Adds the MongoDB data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddMongoDbData(this EngineBuilder builder, Action<MongoDbDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MongoDbDataOptions](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbdataoptions/)\>

The callback that configures the host-owned MongoDB pack options, including
<xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>, and <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>mongodb://localhost:27017</code>.
