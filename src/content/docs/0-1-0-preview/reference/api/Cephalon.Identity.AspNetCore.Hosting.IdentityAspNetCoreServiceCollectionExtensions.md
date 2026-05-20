---
title: Class IdentityAspNetCoreServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting-identityaspnetcoreservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Identity.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting/)  
Assembly: Cephalon.Identity.AspNetCore.dll  

Registers the ASP.NET Core identity adapter services used by Cephalon.

```csharp
public static class IdentityAspNetCoreServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityAspNetCoreServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting-identityaspnetcoreservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Identity_AspNetCore_Hosting_IdentityAspNetCoreServiceCollectionExtensions_AddCephalonIdentityAspNetCore_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions__"></a> AddCephalonIdentityAspNetCore\(IServiceCollection, IConfiguration?, Action<IdentityAspNetCoreOptions\>?\)

Adds the Cephalon ASP.NET Core identity adapter to the service collection.

```csharp
public static IServiceCollection AddCephalonIdentityAspNetCore(this IServiceCollection services, IConfiguration? configuration = null, Action<IdentityAspNetCoreOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The optional configuration root used to populate <xref href="Cephalon.Identity.AspNetCore.Configuration.IdentityAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> from
<code>Engine:Identity:AspNetCore</code>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IdentityAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration-identityaspnetcoreoptions/)\>?

An optional callback that can extend or override the configuration-driven ASP.NET Core identity adapter options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.

#### Remarks

When <code>Cephalon.Audit</code> is also active and the host has not already supplied a custom
<xref href="Cephalon.Audit.Services.IAuditActorAccessor" data-throw-if-not-resolved="false"></xref>, this registration also bridges the current authenticated
<xref href="Microsoft.AspNetCore.Http.HttpContext.User" data-throw-if-not-resolved="false"></xref> into the ambient audit actor contract.
