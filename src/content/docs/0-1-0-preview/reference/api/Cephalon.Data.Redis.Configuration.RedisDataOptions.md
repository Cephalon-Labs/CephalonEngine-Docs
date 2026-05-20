---
title: Class RedisDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-redis-configuration-redisdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Redis.Configuration](/0-1-0-preview/reference/api/cephalon-data-redis-configuration/)  
Assembly: Cephalon.Data.Redis.dll  

Configuration options for the Redis data provider (Engine:Data:Redis).

```csharp
public sealed class RedisDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RedisDataOptions](/0-1-0-preview/reference/api/cephalon-data-redis-configuration-redisdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_DefaultConnectionString"></a> DefaultConnectionString

Gets the default Redis connection string used when neither connection setting is supplied.

```csharp
public const string DefaultConnectionString = "localhost:6379"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "redis"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for Redis data settings.

```csharp
public const string SectionPath = "Engine:Data:Redis"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the StackExchange.Redis connection string or configuration.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for Redis.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_KeyPrefix"></a> KeyPrefix

Gets or sets the key prefix applied to all Cephalon-managed Redis keys (e.g. "myapp:").

```csharp
public string KeyPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_RegisterInbox"></a> RegisterInbox

Gets or sets a value indicating whether the pack should register the Redis-backed inbox implementation.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Redis_Configuration_RedisDataOptions_RegisterOutbox"></a> RegisterOutbox

Gets or sets a value indicating whether the pack should register the Redis-backed outbox implementation.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
