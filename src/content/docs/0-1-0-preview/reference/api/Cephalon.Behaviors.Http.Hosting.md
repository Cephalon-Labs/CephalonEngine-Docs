---
title: Namespace Cephalon.Behaviors.Http.Hosting
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting
editUrl: false
---

### Classes

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

Wraps a Minimal API route group so REST endpoints can dispatch directly into Cephalon behaviors
while keeping module metadata, OpenAPI tags, and version defaults aligned.

 [BehaviorRestEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointroutebuilderextensions/)

Adds Minimal API helpers that route versioned REST endpoints into Cephalon behaviors.

 [HttpBehaviorBindingExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-httpbehaviorbindingextensions/)

Extension methods for registering the HTTP transport binding pack into the
behavior DI container.

 [RestBehaviorEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviorenginebuilderextensions/)

Extends <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref> with low-code registration for module-owned REST behavior modules.

 [RestBehaviorModuleBase](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviormodulebase/)

Base class for modules that own behaviors and expose a public REST surface for some of them.

### Interfaces

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

Describes one public REST route group backed by Cephalon behaviors.

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

Collects behavior ownership and public REST exposure for a <xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase" data-throw-if-not-resolved="false"></xref>.
