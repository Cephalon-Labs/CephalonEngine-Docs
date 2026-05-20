---
title: Namespace Cephalon.Behaviors.Http.Registry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-registry
editUrl: false
---

### Classes

 [HttpBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-http-registry-httpbehaviorbindingregistry/)

Default implementation of <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.
Bindings are indexed at construction time using a frozen dictionary for
O(1) lock-free lookup on every request.
