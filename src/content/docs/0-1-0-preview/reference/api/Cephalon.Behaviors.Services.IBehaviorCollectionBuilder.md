---
title: Interface IBehaviorCollectionBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Provides a fluent API for registering application behaviors with their
topology, DI lifetime, and type registry entries.

```csharp
public interface IBehaviorCollectionBuilder
```

#### Extension Methods

[PatternBehaviorExtensions.AddBehaviorPatterns\(IBehaviorCollectionBuilder\)](Cephalon.Behaviors.Patterns.Hosting.PatternBehaviorExtensions.md\#Cephalon\_Behaviors\_Patterns\_Hosting\_PatternBehaviorExtensions\_AddBehaviorPatterns\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, IConfiguration\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_Microsoft\_Extensions\_Configuration\_IConfiguration\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, Action<InMemoryTransportOptions\>?, Action<RabbitMqTransportOptions\>?, Action<KafkaTransportOptions\>?\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_InMemoryTransportOptions\_\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_RabbitMqTransportOptions\_\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_KafkaTransportOptions\_\_)

## Properties

### <a id="Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_Services"></a> Services

Gets the underlying <xref href="Microsoft.Extensions.DependencyInjection.IServiceCollection" data-throw-if-not-resolved="false"></xref> so that transport packs
and other extensions can register their own services.

```csharp
IServiceCollection Services { get; }
```

#### Property Value

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

## Methods

### <a id="Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_Register__1_System_Action_Cephalon_Behaviors_Builders_BehaviorTopologyBuilder__"></a> Register<TBehavior\>\(Action<BehaviorTopologyBuilder\>?\)

Registers a behavior of type <code class="typeparamref">TBehavior</code> with the runtime.

```csharp
IBehaviorCollectionBuilder Register<TBehavior>(Action<BehaviorTopologyBuilder>? configureTopology = null) where TBehavior : class
```

#### Parameters

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)\>?

An optional callback that configures the behavior's transport topology.
When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, topology is resolved from configuration.

#### Returns

 [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The same builder for fluent chaining.

#### Type Parameters

`TBehavior` 

The concrete behavior type. Must be decorated with <xref href="Cephalon.Abstractions.Behaviors.AppBehaviorAttribute" data-throw-if-not-resolved="false"></xref>
and implement <xref href="Cephalon.Abstractions.Behaviors.IAppBehavior%602" data-throw-if-not-resolved="false"></xref>.
