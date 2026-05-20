---
title: Class IdentityAspNetCoreWebApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting-identityaspnetcorewebapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Identity.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting/)  
Assembly: Cephalon.Identity.AspNetCore.dll  

Registers the ASP.NET Core identity adapter on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class IdentityAspNetCoreWebApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityAspNetCoreWebApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-hosting-identityaspnetcorewebapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Identity_AspNetCore_Hosting_IdentityAspNetCoreWebApplicationBuilderExtensions_AddCephalonIdentityAspNetCore_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions__"></a> AddCephalonIdentityAspNetCore\(WebApplicationBuilder, Action<IdentityAspNetCoreOptions\>?\)

Adds the Cephalon ASP.NET Core identity adapter to the target application builder.

```csharp
public static WebApplicationBuilder AddCephalonIdentityAspNetCore(this WebApplicationBuilder builder, Action<IdentityAspNetCoreOptions>? configure = null)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IdentityAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration-identityaspnetcoreoptions/)\>?

An optional callback that can extend or override the configuration-driven ASP.NET Core identity adapter options.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

#### Remarks

This keeps ASP.NET Core-specific principal, claim, and route-bound authorization mapping in the host layer while
still feeding the host-agnostic Cephalon authorization contracts. When <code>Cephalon.Audit</code> is also active and
no custom <xref href="Cephalon.Audit.Services.IAuditActorAccessor" data-throw-if-not-resolved="false"></xref> has been registered, the same adapter also
bridges the current authenticated principal into the ambient audit actor contract.
