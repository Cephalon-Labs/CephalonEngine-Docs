---
title: Class Neo4jDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-neo4j-registration-neo4jdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Neo4j.Registration](/0-1-0-preview/reference/api/cephalon-data-neo4j-registration/)  
Assembly: Cephalon.Data.Neo4j.dll  

Registers the Neo4j data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class Neo4jDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-neo4j-registration-neo4jdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Neo4j_Registration_Neo4jDataEngineBuilderExtensions_AddNeo4jData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_Action_Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions__"></a> AddNeo4jData\(EngineBuilder, string, string, string, Action<Neo4jDataOptions\>?\)

Adds the Neo4j data pack with the supplied Bolt URI, username, and password.

```csharp
public static EngineBuilder AddNeo4jData(this EngineBuilder builder, string uri, string username, string password, Action<Neo4jDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j Bolt URI (e.g. <code>bolt://localhost:7687</code>).

`username` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j username.

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j password.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[Neo4jDataOptions](/0-1-0-preview/reference/api/cephalon-data-neo4j-configuration-neo4jdataoptions/)\>?

An optional callback that configures the host-owned Neo4j pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.

### <a id="Cephalon_Data_Neo4j_Registration_Neo4jDataEngineBuilderExtensions_AddNeo4jData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions__"></a> AddNeo4jData\(EngineBuilder, Action<Neo4jDataOptions\>\)

Adds the Neo4j data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddNeo4jData(this EngineBuilder builder, Action<Neo4jDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[Neo4jDataOptions](/0-1-0-preview/reference/api/cephalon-data-neo4j-configuration-neo4jdataoptions/)\>

The callback that configures the host-owned Neo4j pack options, including
<xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.UriName" data-throw-if-not-resolved="false"></xref>, <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Uri" data-throw-if-not-resolved="false"></xref>,
<xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Username" data-throw-if-not-resolved="false"></xref>, and <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Password" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Uri" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>bolt://localhost:7687</code>.
