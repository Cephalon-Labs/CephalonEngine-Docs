---
title: Class MessagingBehaviorBindingsBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Fluent builder for selectively registering messaging transport bindings.

```csharp
public sealed class MessagingBehaviorBindingsBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
Use this builder to register only the transports your application actually requires
instead of registering all built-in transports unconditionally.
</p>
<p>
When an <xref href="Microsoft.Extensions.Configuration.IConfiguration" data-throw-if-not-resolved="false"></xref> instance is available, each transport automatically
binds its options from the conventional configuration section (<code>Engine:Messaging:{Transport}</code>).
An optional <xref href="System.Action%601" data-throw-if-not-resolved="false"></xref> callback can be passed to override or extend the bound values.
</p>
<pre><code class="lang-csharp">// Auto-bind from config — no manual mapping needed
behaviors.AddMessagingBehaviorBindings(config)
    .AddInMemory()
    .AddRabbitMq()
    .AddKafka();

// Override specific values after config bind
behaviors.AddMessagingBehaviorBindings(config)
    .AddRabbitMq(rmq =&gt; rmq.VirtualHost = "/custom");</code></pre>

## Methods

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingsBuilder_AddInMemory_System_Action_Cephalon_Behaviors_Messaging_Options_InMemoryTransportOptions__"></a> AddInMemory\(Action<InMemoryTransportOptions\>?\)

Registers the in-memory messaging transport binding.
Options are bound from <code>Engine:Messaging:InMemory</code> when configuration is available.

```csharp
public MessagingBehaviorBindingsBuilder AddInMemory(Action<InMemoryTransportOptions>? configure = null)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[InMemoryTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-inmemorytransportoptions/)\>?

Optional callback to override or extend configuration-bound options.

#### Returns

 [MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingsBuilder_AddKafka_System_Action_Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions__"></a> AddKafka\(Action<KafkaTransportOptions\>?\)

Registers the Kafka messaging transport binding.
Options are bound from <code>Engine:Messaging:Kafka</code> when configuration is available.

```csharp
public MessagingBehaviorBindingsBuilder AddKafka(Action<KafkaTransportOptions>? configure = null)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[KafkaTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-kafkatransportoptions/)\>?

Optional callback to override or extend configuration-bound options.

#### Returns

 [MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingsBuilder_AddRabbitMq_System_Action_Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions__"></a> AddRabbitMq\(Action<RabbitMqTransportOptions\>?\)

Registers the RabbitMQ messaging transport binding.
Options are bound from <code>Engine:Messaging:RabbitMQ</code> when configuration is available.

```csharp
public MessagingBehaviorBindingsBuilder AddRabbitMq(Action<RabbitMqTransportOptions>? configure = null)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RabbitMqTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-rabbitmqtransportoptions/)\>?

Optional callback to override or extend configuration-bound options.

#### Returns

 [MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

The same builder for fluent chaining.
