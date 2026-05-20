---
title: Class HttpBehaviorBindingExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-httpbehaviorbindingextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Extension methods for registering the HTTP transport binding pack into the
behavior DI container.

```csharp
public static class HttpBehaviorBindingExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpBehaviorBindingExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-httpbehaviorbindingextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_HttpBehaviorBindingExtensions_AddHttpBehaviorBindings_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_"></a> AddHttpBehaviorBindings\(IBehaviorCollectionBuilder\)

Registers all 6 generic HTTP transport bindings (JSON-RPC, GraphQL, GraphQL-SSE,
GraphQL-WS, SSE, WebSocket) and the <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>
as singletons in the service collection.

```csharp
public static IBehaviorCollectionBuilder AddHttpBehaviorBindings(this IBehaviorCollectionBuilder builder)
```

#### Parameters

`builder` IBehaviorCollectionBuilder

The behavior collection builder to extend.

#### Returns

 IBehaviorCollectionBuilder

The same builder for fluent chaining.
