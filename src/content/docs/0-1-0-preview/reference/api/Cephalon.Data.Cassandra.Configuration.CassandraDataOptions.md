---
title: Class CassandraDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-cassandra-configuration-cassandradataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Cassandra.Configuration](/0-1-0-preview/reference/api/cephalon-data-cassandra-configuration/)  
Assembly: Cephalon.Data.Cassandra.dll  

Options controlling how <code>Cephalon.Data.Cassandra</code> connects to a Cassandra cluster and registers data services.

```csharp
public sealed class CassandraDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraDataOptions](/0-1-0-preview/reference/api/cephalon-data-cassandra-configuration-cassandradataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_ProviderId"></a> ProviderId

The provider identifier used in capability and descriptor metadata.

```csharp
public const string ProviderId = "cassandra"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_ContactPoints"></a> ContactPoints

One or more Cassandra contact-point host addresses, separated by commas
(e.g. <code>"localhost"</code> or <code>"node1,node2,node3"</code>).

```csharp
public string ContactPoints { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_Keyspace"></a> Keyspace

The Cassandra keyspace to connect to (created if not exists on first operation).

```csharp
public string Keyspace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_PendingDispatchShardCount"></a> PendingDispatchShardCount

Gets or sets the number of deterministic shards used by the pending-dispatch eligibility table.
Defaults to <code>16</code> and applies only when <xref href="Cephalon.Data.Cassandra.Configuration.CassandraDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref> is enabled.

```csharp
public int PendingDispatchShardCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_Port"></a> Port

The Cassandra native transport port. Defaults to <code>9042</code>.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_RegisterInbox"></a> RegisterInbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IInbox" data-throw-if-not-resolved="false"></xref> backed by a Cassandra wide-column table.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_RegisterOutbox"></a> RegisterOutbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IOutbox" data-throw-if-not-resolved="false"></xref> backed by a Cassandra wide-column table.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Cassandra_Configuration_CassandraDataOptions_TablePrefix"></a> TablePrefix

Optional prefix applied to all managed table names (e.g. <code>"cephalon_"</code>).

```csharp
public string TablePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
