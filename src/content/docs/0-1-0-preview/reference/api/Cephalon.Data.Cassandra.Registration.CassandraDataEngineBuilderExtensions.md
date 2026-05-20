---
title: Class CassandraDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-cassandra-registration-cassandradataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Cassandra.Registration](/0-1-0-preview/reference/api/cephalon-data-cassandra-registration/)  
Assembly: Cephalon.Data.Cassandra.dll  

Registers the Cassandra data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class CassandraDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-cassandra-registration-cassandradataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Cassandra_Registration_CassandraDataEngineBuilderExtensions_AddCassandraData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_Action_Cephalon_Data_Cassandra_Configuration_CassandraDataOptions__"></a> AddCassandraData\(EngineBuilder, string, string, Action<CassandraDataOptions\>?\)

Adds the Cassandra data pack with the supplied contact points and keyspace.

```csharp
public static EngineBuilder AddCassandraData(this EngineBuilder builder, string contactPoints, string keyspace, Action<CassandraDataOptions>? configure = null)
```

#### Parameters

`builder` EngineBuilder

The engine builder to extend.

`contactPoints` [string](https://learn.microsoft.com/dotnet/api/system.string)

One or more Cassandra contact-point host addresses, separated by commas
(e.g. <code>"localhost"</code> or <code>"node1,node2,node3"</code>).

`keyspace` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cassandra keyspace to connect to.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[CassandraDataOptions](/0-1-0-preview/reference/api/cephalon-data-cassandra-configuration-cassandradataoptions/)\>?

An optional callback that configures the host-owned Cassandra pack options.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.Cassandra.Configuration.CassandraDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.Cassandra.Configuration.CassandraDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.
