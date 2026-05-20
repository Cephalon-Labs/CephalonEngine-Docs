---
title: Namespace Cephalon.Behaviors.Services
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services
editUrl: false
---

### Classes

 [BehaviorAdvisoryCatalog](/0-1-0-preview/reference/api/cephalon-behaviors-services-behavioradvisorycatalog/)

Aggregates advisories from all registered <xref href="Cephalon.Abstractions.Behaviors.IBehaviorAdvisoryContributor" data-throw-if-not-resolved="false"></xref> implementations.

 [BehaviorCatalog](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcatalog/)

Exposes the merged set of behavior topology descriptors contributed to the active runtime.
Contributors are discovered via DI enumeration over <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContributor" data-throw-if-not-resolved="false"></xref>.

 [BehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcollectionbuilder/)

Default implementation of <xref href="Cephalon.Behaviors.Services.IBehaviorCollectionBuilder" data-throw-if-not-resolved="false"></xref>.
Registers behavior types in DI, populates the type registry,
and optionally contributes a fluent topology descriptor at Layer 4.

 [BehaviorDispatcher](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviordispatcher/)

Resolves behavior instances from the service provider and dispatches calls
to the appropriate <xref href="Cephalon.Behaviors.Services.BehaviorExecutionSlot" data-throw-if-not-resolved="false"></xref> by behavior identifier.
The dispatch table is built once at construction time from a frozen dictionary
for O(1) lock-free lookup on every call.

 [BehaviorExecutionSlot](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot/)

A compiled, type-safe invocation delegate for a concrete <xref href="Cephalon.Abstractions.Behaviors.IAppBehavior%602" data-throw-if-not-resolved="false"></xref> implementation.
Slots are created once at dispatcher construction time and reused for every dispatch call.

 [BehaviorRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorregistry/)

Simple list-backed registry that collects <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor" data-throw-if-not-resolved="false"></xref> instances from contributors.

 [BehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviortyperegistry/)

Default mutable implementation of <xref href="Cephalon.Behaviors.Services.IBehaviorTypeRegistry" data-throw-if-not-resolved="false"></xref>.
Populated during DI setup by <code>BehaviorCollectionBuilder.Register&lt;TBehavior&gt;()</code>
and consumed by <xref href="Cephalon.Behaviors.Services.BehaviorDispatcher" data-throw-if-not-resolved="false"></xref> at construction time.

 [FluentBehaviorContributor](/0-1-0-preview/reference/api/cephalon-behaviors-services-fluentbehaviorcontributor/)

A behavior contributor that carries a topology descriptor built via fluent DI registration.
This contributor represents Layer 4 (highest priority) in the topology resolution chain.

### Interfaces

 [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

Provides a fluent API for registering application behaviors with their
topology, DI lifetime, and type registry entries.

 [IBehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviortyperegistry/)

Maps behavior identifiers to their concrete implementation types.
This registry is populated during DI setup and consumed by
<xref href="Cephalon.Behaviors.Services.BehaviorDispatcher" data-throw-if-not-resolved="false"></xref> at construction time to build its dispatch table.
