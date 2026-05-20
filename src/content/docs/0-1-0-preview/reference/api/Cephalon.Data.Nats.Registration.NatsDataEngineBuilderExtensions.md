---
title: Class NatsDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-nats-registration-natsdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Nats.Registration](/0-1-0-preview/reference/api/cephalon-data-nats-registration/)  
Assembly: Cephalon.Data.Nats.dll  

Registers the NATS JetStream ledger-store data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class NatsDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-nats-registration-natsdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Nats_Registration_NatsDataEngineBuilderExtensions_AddNatsData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_Action_Cephalon_Data_Nats_Configuration_NatsDataOptions__"></a> AddNatsData\(EngineBuilder, string, Action<NatsDataOptions\>?\)

Adds the NATS data pack with the supplied server URL.

```csharp
public static EngineBuilder AddNatsData(this EngineBuilder builder, string uri, Action<NatsDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The NATS server URI (e.g. <code>"nats://localhost:4222"</code>).

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[NatsDataOptions](/0-1-0-preview/reference/api/cephalon-data-nats-configuration-natsdataoptions/)\>?

An optional callback that configures the host-owned NATS pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.

<p>
<xref href="NATS.Client.Core.NatsConnection" data-throw-if-not-resolved="false"></xref> does not connect on construction — the connection
is deferred to the first operation. DI resolution does not require a live NATS server.
</p>

### <a id="Cephalon_Data_Nats_Registration_NatsDataEngineBuilderExtensions_AddNatsData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Nats_Configuration_NatsDataOptions__"></a> AddNatsData\(EngineBuilder, Action<NatsDataOptions\>\)

Adds the NATS data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddNatsData(this EngineBuilder builder, Action<NatsDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[NatsDataOptions](/0-1-0-preview/reference/api/cephalon-data-nats-configuration-natsdataoptions/)\>

The callback that configures the host-owned NATS pack options, including
<xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.UriName" data-throw-if-not-resolved="false"></xref> and
<xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.Uri" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>nats://localhost:4222</code>.
