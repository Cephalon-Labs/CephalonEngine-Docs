---
title: Class IdentityEndpointConventionBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest-identityendpointconventionbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Identity.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest/)  
Assembly: Cephalon.Identity.AspNetCore.dll  

Adds Cephalon-specific authorization conventions to REST route handlers and groups.

```csharp
public static class IdentityEndpointConventionBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityEndpointConventionBuilderExtensions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest-identityendpointconventionbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_IdentityEndpointConventionBuilderExtensions_RequireCephalonAuthorization_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_System_String_System_String_System_String_System_String_System_String_System_String_"></a> RequireCephalonAuthorization\(RouteHandlerBuilder, string, string?, string?, string?, string?, string?\)

Requires a Cephalon authorization decision before a REST route handler can execute.

```csharp
public static RouteHandlerBuilder RequireCephalonAuthorization(this RouteHandlerBuilder builder, string policyId, string? action = null, string? resourceType = null, string? resourceIdRouteKey = null, string? tenantRouteKey = null, string? ownerSubjectIdRouteKey = null)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to protect.

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon authorization policy id that must allow the request.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional action to evaluate. When omitted, the adapter maps the HTTP method to a conventional action such as
<code>read</code>, <code>create</code>, <code>update</code>, or <code>delete</code>.

`resourceType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional logical resource type. When omitted, the adapter derives it from the final literal segment in the
endpoint route pattern.

`resourceIdRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the resource identifier. When omitted, the adapter falls back to the
configured resource-id route keys.

`tenantRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the tenant identifier. When omitted, the adapter falls back to the
configured tenant route keys and tenant headers.

`ownerSubjectIdRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the owning subject identifier for owner-based policies.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for fluent convention chaining.

#### Remarks

This helper keeps ASP.NET Core principal and route parsing in the host layer while still evaluating the shared
Cephalon authorization contracts through <xref href="Cephalon.Abstractions.Authorization.IAuthorizationEvaluator" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_IdentityEndpointConventionBuilderExtensions_RequireCephalonAuthorization_Microsoft_AspNetCore_Routing_RouteGroupBuilder_System_String_System_String_System_String_System_String_System_String_System_String_"></a> RequireCephalonAuthorization\(RouteGroupBuilder, string, string?, string?, string?, string?, string?\)

Requires a Cephalon authorization decision before every REST route handler in the route group can execute.

```csharp
public static RouteGroupBuilder RequireCephalonAuthorization(this RouteGroupBuilder builder, string policyId, string? action = null, string? resourceType = null, string? resourceIdRouteKey = null, string? tenantRouteKey = null, string? ownerSubjectIdRouteKey = null)
```

#### Parameters

`builder` [RouteGroupBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.routegroupbuilder)

The route group builder to protect.

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon authorization policy id that must allow the request.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional action to evaluate. When omitted, the adapter maps the HTTP method to a conventional action such as
<code>read</code>, <code>create</code>, <code>update</code>, or <code>delete</code>.

`resourceType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional logical resource type. When omitted, the adapter derives it from the final literal segment in the
endpoint route pattern.

`resourceIdRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the resource identifier. When omitted, the adapter falls back to the
configured resource-id route keys.

`tenantRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the tenant identifier. When omitted, the adapter falls back to the
configured tenant route keys and tenant headers.

`ownerSubjectIdRouteKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional route-value key that provides the owning subject identifier for owner-based policies.

#### Returns

 [RouteGroupBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.routegroupbuilder)

The same route group builder for fluent convention chaining.

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_IdentityEndpointConventionBuilderExtensions_WithCephalonAuthenticationSchemes__1___0_System_String___"></a> WithCephalonAuthenticationSchemes<TBuilder\>\(TBuilder, params string\[\]\)

Declares the ASP.NET Core authentication schemes that should own challenge and forbid responses for an endpoint or route group.

```csharp
public static TBuilder WithCephalonAuthenticationSchemes<TBuilder>(this TBuilder builder, params string[] authenticationSchemes) where TBuilder : IEndpointConventionBuilder
```

#### Parameters

`builder` TBuilder

The endpoint or route-group builder to annotate.

`authenticationSchemes` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The authentication scheme names to use for boundary responses.

#### Returns

 TBuilder

The same builder for fluent chaining.

#### Type Parameters

`TBuilder` 

The endpoint convention builder type.
