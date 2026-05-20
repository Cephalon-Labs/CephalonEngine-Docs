---
title: Namespace Cephalon.Behaviors.Http
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http
editUrl: false
---

### Namespaces

 [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)

 [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)

 [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)

 [Cephalon.Behaviors.Http.Registry](/0-1-0-preview/reference/api/cephalon-behaviors-http-registry/)

### Classes

 [LazyTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-lazytransportbinding/)

Deferred-initialization wrapper around an <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding" data-throw-if-not-resolved="false"></xref>.
Ensures that <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding.MapAsync(Microsoft.AspNetCore.Builder.WebApplication%2cCephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor%2cCephalon.Behaviors.Services.BehaviorDispatcher)" data-throw-if-not-resolved="false"></xref> is called exactly once,
on first request, using a <xref href="System.Threading.SemaphoreSlim" data-throw-if-not-resolved="false"></xref> to guard concurrent callers.
This keeps pod startup under 100 ms regardless of transport count.
