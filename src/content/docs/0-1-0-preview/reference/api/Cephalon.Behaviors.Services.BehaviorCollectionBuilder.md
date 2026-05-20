---
title: Class BehaviorCollectionBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcollectionbuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Default implementation of <xref href="Cephalon.Behaviors.Services.IBehaviorCollectionBuilder" data-throw-if-not-resolved="false"></xref>.
Registers behavior types in DI, populates the type registry,
and optionally contributes a fluent topology descriptor at Layer 4.

```csharp
public sealed class BehaviorCollectionBuilder : IBehaviorCollectionBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcollectionbuilder/)

#### Implements

[IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[PatternBehaviorExtensions.AddBehaviorPatterns\(IBehaviorCollectionBuilder\)](Cephalon.Behaviors.Patterns.Hosting.PatternBehaviorExtensions.md\#Cephalon\_Behaviors\_Patterns\_Hosting\_PatternBehaviorExtensions\_AddBehaviorPatterns\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, IConfiguration\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_Microsoft\_Extensions\_Configuration\_IConfiguration\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_), 
[MessagingBehaviorBindingServiceCollectionExtensions.AddMessagingBehaviorBindings\(IBehaviorCollectionBuilder, Action<InMemoryTransportOptions\>?, Action<RabbitMqTransportOptions\>?, Action<KafkaTransportOptions\>?\)](Cephalon.Behaviors.Messaging.Hosting.MessagingBehaviorBindingServiceCollectionExtensions.md\#Cephalon\_Behaviors\_Messaging\_Hosting\_MessagingBehaviorBindingServiceCollectionExtensions\_AddMessagingBehaviorBindings\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_InMemoryTransportOptions\_\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_RabbitMqTransportOptions\_\_System\_Action\_Cephalon\_Behaviors\_Messaging\_Options\_KafkaTransportOptions\_\_)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorCollectionBuilder__ctor_Microsoft_Extensions_DependencyInjection_IServiceCollection_Cephalon_Behaviors_Services_BehaviorTypeRegistry_"></a> BehaviorCollectionBuilder\(IServiceCollection, BehaviorTypeRegistry\)

Initializes the builder with the target service collection and shared type registry.

```csharp
public BehaviorCollectionBuilder(IServiceCollection services, BehaviorTypeRegistry typeRegistry)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to register behaviors into.

`typeRegistry` [BehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviortyperegistry/)

The type registry to populate with behavior id-to-type mappings.

## Properties

### <a id="Cephalon_Behaviors_Services_BehaviorCollectionBuilder_Services"></a> Services

Gets the underlying <xref href="Microsoft.Extensions.DependencyInjection.IServiceCollection" data-throw-if-not-resolved="false"></xref> so that transport packs
and other extensions can register their own services.

```csharp
public IServiceCollection Services { get; }
```

#### Property Value

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorCollectionBuilder_Register__1_System_Action_Cephalon_Behaviors_Builders_BehaviorTopologyBuilder__"></a> Register<TBehavior\>\(Action<BehaviorTopologyBuilder\>?\)

Registers a behavior of type <code class="typeparamref">TBehavior</code> with the runtime.

<ol><li>Resolves the behavior id from <xref href="Cephalon.Abstractions.Behaviors.AppBehaviorAttribute" data-throw-if-not-resolved="false"></xref>.</li><li>Registers <code class="typeparamref">TBehavior</code> as a transient service in DI.</li><li>Records the id-to-type mapping in the shared <xref href="Cephalon.Behaviors.Services.BehaviorTypeRegistry" data-throw-if-not-resolved="false"></xref>.</li><li>When <code class="paramref">configureTopology</code> is provided, adds a <xref href="Cephalon.Behaviors.Services.FluentBehaviorContributor" data-throw-if-not-resolved="false"></xref> at Layer 4.</li></ol>

```csharp
public IBehaviorCollectionBuilder Register<TBehavior>(Action<BehaviorTopologyBuilder>? configureTopology = null) where TBehavior : class
```

#### Parameters

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)\>?

An optional callback that configures the behavior's transport topology at Layer 4 (highest priority).
When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, topology is resolved from configuration layers only.

#### Returns

 [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The same builder for fluent chaining.

#### Type Parameters

`TBehavior` 

The concrete behavior type. Must be decorated with <xref href="Cephalon.Abstractions.Behaviors.AppBehaviorAttribute" data-throw-if-not-resolved="false"></xref>
and implement <xref href="Cephalon.Abstractions.Behaviors.IAppBehavior%602" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when <code class="typeparamref">TBehavior</code> is not decorated with <xref href="Cephalon.Abstractions.Behaviors.AppBehaviorAttribute" data-throw-if-not-resolved="false"></xref>.
