---
title: Namespace Cephalon.Eventing.Services
slug: 0-1-0-preview/reference/api/cephalon-eventing-services
editUrl: false
---

### Classes

 [EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)

Describes an event channel that can be surfaced through the eventing runtime pack.

 [EventDispatchExecutionOutcomes](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionoutcomes/)

Defines the stable outcome identifiers used when reporting durable event-dispatch activity.

 [EventDispatchExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionreport/)

Describes one reported dispatch observation for a durable event publication path.

 [EventDispatchItem](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchitem/)

Describes one staged outbound event that is waiting for dispatch through the active eventing runtime.

 [EventDispatchRuntimeMetadataKeys](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchruntimemetadatakeys/)

Defines stable metadata keys used by event-dispatch runtime observations.

 [EventPublication](/0-1-0-preview/reference/api/cephalon-eventing-services-eventpublication/)

Describes one integration event publication request handled by the active eventing runtime.

 [EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)

Describes one declared event subscription available to the active eventing runtime.

 [EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)

Describes how a declared event subscription binds to a managed execution runtime.

 [EventSubscriptionExecutionContext](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutioncontext/)

Describes the host-agnostic execution context delivered to a managed event-subscription executor.

 [EventSubscriptionExecutionOutcomes](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionoutcomes/)

Defines the stable outcome identifiers used when reporting declared event-subscription activity.

 [EventSubscriptionExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionreport/)

Describes one application-managed execution observation for a declared event subscription.

 [EventSubscriptionRuntimeMetadataKeys](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimemetadatakeys/)

Defines stable metadata keys used by the event-subscriptions runtime surface.

 [EventSubscriptionRuntimeState](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate/)

Describes the latest operator-facing runtime state reported for one declared event subscription.

### Interfaces

 [IEventChannelCatalog](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelcatalog/)

Exposes the merged set of event channels available to the active eventing runtime.

 [IEventChannelContributor](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelcontributor/)

Allows a module to contribute event channels into the active eventing runtime pack.

 [IEventChannelRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelregistry/)

Collects event channel descriptors contributed to the active eventing runtime pack.

 [IEventDispatchRuntimeContributor](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimecontributor/)

Contributes one or more operator-facing durable dispatch runtimes to the active eventing technology.

 [IEventDispatchRuntimeRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimeregistry/)

Receives operator-facing durable dispatch-runtime descriptors contributed by active eventing packs.

 [IEventDispatchRuntimeReporter](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimereporter/)

Accepts operator-facing dispatch runtime observations for durable event publication paths.

 [IEventDispatchStore](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchstore/)

Reads pending staged events and applies durable dispatch outcomes for the active eventing runtime.

 [IEventPublisher](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventpublisher/)

Accepts integration events for the active eventing runtime.

 [IEventSubscriptionCatalog](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptioncatalog/)

Exposes the merged set of declared event subscriptions available to the active eventing runtime.

 [IEventSubscriptionContributor](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptioncontributor/)

Allows a module to contribute declared event subscriptions into the active eventing runtime pack.

 [IEventSubscriptionExecutionBindingCatalog](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutionbindingcatalog/)

Exposes managed execution bindings for declared event subscriptions.

 [IEventSubscriptionExecutionBindingContributor](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutionbindingcontributor/)

Contributes one or more managed execution bindings for declared event subscriptions.

 [IEventSubscriptionExecutor](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutor/)

Executes one declared event subscription through a pack-owned managed runtime.

 [IEventSubscriptionRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionregistry/)

Collects event subscription descriptors contributed to the active eventing runtime pack.

 [IEventSubscriptionRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionruntimecatalog/)

Exposes the latest reported runtime state for declared event subscriptions.

 [IEventSubscriptionRuntimeReporter](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionruntimereporter/)

Records application-managed runtime observations for declared event subscriptions.
