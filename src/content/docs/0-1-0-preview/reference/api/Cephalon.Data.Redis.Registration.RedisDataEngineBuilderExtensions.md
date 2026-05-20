---
title: Class RedisDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-redis-registration-redisdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Redis.Registration](/0-1-0-preview/reference/api/cephalon-data-redis-registration/)  
Assembly: Cephalon.Data.Redis.dll  

Registers the Redis data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RedisDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RedisDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-redis-registration-redisdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Redis_Registration_RedisDataEngineBuilderExtensions_AddRedisData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_Action_Cephalon_Data_Redis_Configuration_RedisDataOptions__"></a> AddRedisData\(EngineBuilder, string, Action<RedisDataOptions\>?\)

Adds the Redis data pack with the supplied connection string and optional configuration callback.

```csharp
public static EngineBuilder AddRedisData(this EngineBuilder builder, string connectionString, Action<RedisDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The StackExchange.Redis connection string or configuration (e.g. <code>"localhost:6379"</code> or a full
StackExchange.Redis configuration string with options such as <code>"localhost:6379,abortConnect=false"</code>).

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RedisDataOptions](/0-1-0-preview/reference/api/cephalon-data-redis-configuration-redisdataoptions/)\>?

An optional callback that configures the host-owned Redis pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.

### <a id="Cephalon_Data_Redis_Registration_RedisDataEngineBuilderExtensions_AddRedisData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Redis_Configuration_RedisDataOptions__"></a> AddRedisData\(EngineBuilder, Action<RedisDataOptions\>\)

Adds the Redis data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddRedisData(this EngineBuilder builder, Action<RedisDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RedisDataOptions](/0-1-0-preview/reference/api/cephalon-data-redis-configuration-redisdataoptions/)\>

The callback that configures the host-owned Redis pack options, including
<xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> and
<xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.Redis.Configuration.RedisDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>localhost:6379</code>.
