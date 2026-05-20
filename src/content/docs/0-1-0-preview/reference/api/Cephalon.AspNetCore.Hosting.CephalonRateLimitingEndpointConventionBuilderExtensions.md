---
title: Class CephalonRateLimitingEndpointConventionBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-cephalonratelimitingendpointconventionbuilderextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Applies Cephalon ASP.NET Core rate-limiting conventions to endpoint builders by consulting the
host's effective rate-limiting policy catalog.

```csharp
public static class CephalonRateLimitingEndpointConventionBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CephalonRateLimitingEndpointConventionBuilderExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-cephalonratelimitingendpointconventionbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_CephalonRateLimitingEndpointConventionBuilderExtensions_ApplyCephalonRateLimiting__1___0_System_IServiceProvider_System_String_System_String_"></a> ApplyCephalonRateLimiting<TBuilder\>\(TBuilder, IServiceProvider, string, string?\)

Applies the effective Cephalon rate-limiting policy for the supplied transport and optional
behavior identifier onto the endpoint builder.

```csharp
public static TBuilder ApplyCephalonRateLimiting<TBuilder>(this TBuilder builder, IServiceProvider services, string transportId, string? behaviorId = null) where TBuilder : IEndpointConventionBuilder
```

#### Parameters

`builder` TBuilder

The endpoint builder to configure.

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The application service provider.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier used by the endpoint.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional behavior identifier when the endpoint maps a single behavior.

#### Returns

 TBuilder

The same builder instance for fluent composition.

#### Type Parameters

`TBuilder` 

The endpoint convention builder type.

### <a id="Cephalon_AspNetCore_Hosting_CephalonRateLimitingEndpointConventionBuilderExtensions_HasCephalonRateLimiting_System_IServiceProvider_System_String_System_String_"></a> HasCephalonRateLimiting\(IServiceProvider, string, string?\)

Determines whether the effective Cephalon rate-limiting policy for the supplied transport
and optional behavior identifier actively enforces a limiter.

```csharp
public static bool HasCephalonRateLimiting(this IServiceProvider services, string transportId, string? behaviorId = null)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The application service provider.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier used by the endpoint.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional behavior identifier when the endpoint maps a single behavior.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the endpoint will require a limiter; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
