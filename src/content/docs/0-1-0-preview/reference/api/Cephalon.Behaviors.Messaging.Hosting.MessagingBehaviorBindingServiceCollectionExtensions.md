---
title: Class MessagingBehaviorBindingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Extension methods that register ABT M3 messaging transport bindings into the DI container.

```csharp
public static class MessagingBehaviorBindingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessagingBehaviorBindingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingServiceCollectionExtensions_AddMessagingBehaviorBindings_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_Microsoft_Extensions_Configuration_IConfiguration_"></a> AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, IConfiguration\)

Returns a <xref href="Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingsBuilder" data-throw-if-not-resolved="false"></xref> that auto-binds transport options
from the supplied <code class="paramref">configuration</code> under the <code>Engine:Messaging</code> section.

```csharp
public static MessagingBehaviorBindingsBuilder AddMessagingBehaviorBindings(this IBehaviorCollectionBuilder builder, IConfiguration configuration)
```

#### Parameters

`builder` [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The behavior collection builder.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration. Each transport reads its options from a conventional section
(e.g. <code>Engine:Messaging:RabbitMQ</code>, <code>Engine:Messaging:Kafka</code>).

#### Returns

 [MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

A fluent builder for registering individual messaging transports.

#### Examples

<pre><code class="lang-csharp">// Options are auto-bound from config — no manual Bind() needed
behaviors.AddMessagingBehaviorBindings(config)
    .AddInMemory()
    .AddRabbitMq()
    .AddKafka();</code></pre>

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingServiceCollectionExtensions_AddMessagingBehaviorBindings_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_"></a> AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder\)

Returns a <xref href="Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingsBuilder" data-throw-if-not-resolved="false"></xref> that lets you selectively
register only the messaging transports your application requires.

```csharp
public static MessagingBehaviorBindingsBuilder AddMessagingBehaviorBindings(this IBehaviorCollectionBuilder builder)
```

#### Parameters

`builder` [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The behavior collection builder.

#### Returns

 [MessagingBehaviorBindingsBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-hosting-messagingbehaviorbindingsbuilder/)

A fluent builder for registering individual messaging transports.

#### Remarks

Transport options use their built-in defaults. To auto-bind from configuration,
use the <xref href="Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings(Cephalon.Behaviors.Services.IBehaviorCollectionBuilder%2cMicrosoft.Extensions.Configuration.IConfiguration)" data-throw-if-not-resolved="false"></xref>
overload instead.

### <a id="Cephalon_Behaviors_Messaging_Hosting_MessagingBehaviorBindingServiceCollectionExtensions_AddMessagingBehaviorBindings_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_System_Action_Cephalon_Behaviors_Messaging_Options_InMemoryTransportOptions__System_Action_Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions__System_Action_Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions__"></a> AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, Action<InMemoryTransportOptions\>?, Action<RabbitMqTransportOptions\>?, Action<KafkaTransportOptions\>?\)

Registers all built-in messaging transport bindings (InMemory, RabbitMQ, Kafka)
and the <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref> as singleton services.

```csharp
public static IBehaviorCollectionBuilder AddMessagingBehaviorBindings(this IBehaviorCollectionBuilder builder, Action<InMemoryTransportOptions>? configureInMemory = null, Action<RabbitMqTransportOptions>? configureRabbitMq = null, Action<KafkaTransportOptions>? configureKafka = null)
```

#### Parameters

`builder` [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The behavior collection builder.

`configureInMemory` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[InMemoryTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-inmemorytransportoptions/)\>?

Optional callback to configure in-memory transport options.

`configureRabbitMq` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RabbitMqTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-rabbitmqtransportoptions/)\>?

Optional callback to configure RabbitMQ transport options.

`configureKafka` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[KafkaTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-kafkatransportoptions/)\>?

Optional callback to configure Kafka transport options.

#### Returns

 [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The same builder for fluent chaining.
