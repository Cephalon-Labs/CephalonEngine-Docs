---
title: Class RestEndpointConventionBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-restendpointconventionbuilderextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest/)  
Assembly: Cephalon.AspNetCore.dll  

Adds Cephalon-specific conventions to REST route handlers.

```csharp
public static class RestEndpointConventionBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointConventionBuilderExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-restendpointconventionbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Transports_Rest_RestEndpointConventionBuilderExtensions_ClearRequiredCapability_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_"></a> ClearRequiredCapability\(RouteHandlerBuilder\)

Clears any previously declared Cephalon capability decision from a REST endpoint.

```csharp
public static RouteHandlerBuilder ClearRequiredCapability(this RouteHandlerBuilder builder)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to update.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for further convention chaining.

#### Remarks

This uses the same last-declaration-wins model as <xref href="Cephalon.AspNetCore.Transports.Rest.RestEndpointConventionBuilderExtensions.RequireCapability(Microsoft.AspNetCore.Builder.RouteHandlerBuilder%2cSystem.String)" data-throw-if-not-resolved="false"></xref>.
A later clear declaration suppresses earlier capability requirements for the same route.

### <a id="Cephalon_AspNetCore_Transports_Rest_RestEndpointConventionBuilderExtensions_ClearRequiredFeatureFlags_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_"></a> ClearRequiredFeatureFlags\(RouteHandlerBuilder\)

Clears any previously declared Cephalon feature-flag requirements from a REST endpoint.

```csharp
public static RouteHandlerBuilder ClearRequiredFeatureFlags(this RouteHandlerBuilder builder)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to update.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for further convention chaining.

#### Remarks

This uses the same last-declaration-wins model as
<xref href="Cephalon.AspNetCore.Transports.Rest.RestEndpointConventionBuilderExtensions.RequireFeatureFlags(Microsoft.AspNetCore.Builder.RouteHandlerBuilder%2cSystem.String%5b%5d)" data-throw-if-not-resolved="false"></xref>. A later clear
declaration suppresses earlier feature requirements for the same route.

### <a id="Cephalon_AspNetCore_Transports_Rest_RestEndpointConventionBuilderExtensions_RequireCapability_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_System_String_"></a> RequireCapability\(RouteHandlerBuilder, string\)

Requires a Cephalon capability decision before a REST endpoint can execute.

```csharp
public static RouteHandlerBuilder RequireCapability(this RouteHandlerBuilder builder, string capabilityKey)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to protect.

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key that must be allowed for the request.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for further convention chaining.

#### Remarks

This guard enforces the current trust and capability policy at the HTTP boundary. If the
capability is denied, the endpoint returns a <code>403 Forbidden</code> problem response.

### <a id="Cephalon_AspNetCore_Transports_Rest_RestEndpointConventionBuilderExtensions_RequireFeatureFlag_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_System_String_"></a> RequireFeatureFlag\(RouteHandlerBuilder, string\)

Requires one Cephalon feature flag to be enabled before a REST endpoint can execute.

```csharp
public static RouteHandlerBuilder RequireFeatureFlag(this RouteHandlerBuilder builder, string featureFlagId)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to protect.

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The feature-flag identifier that must resolve to enabled.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for further convention chaining.

### <a id="Cephalon_AspNetCore_Transports_Rest_RestEndpointConventionBuilderExtensions_RequireFeatureFlags_Microsoft_AspNetCore_Builder_RouteHandlerBuilder_System_String___"></a> RequireFeatureFlags\(RouteHandlerBuilder, params string\[\]\)

Requires all requested Cephalon feature flags to be enabled before a REST endpoint can execute.

```csharp
public static RouteHandlerBuilder RequireFeatureFlags(this RouteHandlerBuilder builder, params string[] featureFlagIds)
```

#### Parameters

`builder` [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder to protect.

`featureFlagIds` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The feature-flag identifiers that must resolve to enabled.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The same route handler builder for further convention chaining.

#### Remarks

This guard keeps the endpoint published and introspectable while shifting rollout decisions
to runtime evaluation at the HTTP boundary. If any required feature flag is unavailable for
the request context, the endpoint returns a <code>404 Not Found</code> problem response.
