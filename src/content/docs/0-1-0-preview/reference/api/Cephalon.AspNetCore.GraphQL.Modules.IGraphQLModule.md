---
title: Interface IGraphQLModule
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-graphql-modules-igraphqlmodule
editUrl: false
---

Namespace: [Cephalon.AspNetCore.GraphQL.Modules](/0-1-0-preview/reference/api/cephalon-aspnetcore-graphql-modules/)  
Assembly: Cephalon.AspNetCore.GraphQL.dll  

Marks a Cephalon module as contributing GraphQL schema or resolver behavior on ASP.NET Core.

```csharp
public interface IGraphQLModule : IModule
```

#### Implements

IModule

## Remarks

Implementing modules should also register their GraphQL query, mutation, subscription, or
type-extension services from <code>ConfigureServices</code> by calling
<code>ConfigureGraphQLQuery(...)</code>, <code>ConfigureGraphQLMutation(...)</code>,
<code>ConfigureGraphQLSubscription(...)</code>, or <code>ConfigureGraphQLTransport(...)</code> on the
shared service collection. Subscription fields still require a concrete Hot Chocolate
subscription provider, such as <code>AddInMemorySubscriptions()</code>, to execute over the built-in
GraphQL-over-SSE or GraphQL-over-WebSocket routes.
