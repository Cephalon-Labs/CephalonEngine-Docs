---
title: Class BehaviorRestEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Adds Minimal API helpers that route versioned REST endpoints into Cephalon behaviors.

```csharp
public static class BehaviorRestEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointRouteBuilderExtensions_MapBehaviorRestGroup_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_Cephalon_Abstractions_Modules_IModule_System_String_"></a> MapBehaviorRestGroup\(IEndpointRouteBuilder, IModule, string\)

Creates a REST-oriented behavior route group owned by the supplied module.

```csharp
public static BehaviorRestEndpointGroup MapBehaviorRestGroup(this IEndpointRouteBuilder endpoints, IModule module, string prefix)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder receiving the group.

`module` IModule

The module that owns the endpoints.

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route prefix relative to the enclosing endpoint builder.

#### Returns

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

A behavior-aware route-group wrapper.
