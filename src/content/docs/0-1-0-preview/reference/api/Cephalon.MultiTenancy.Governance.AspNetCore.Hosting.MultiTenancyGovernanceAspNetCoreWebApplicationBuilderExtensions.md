---
title: Class MultiTenancyGovernanceAspNetCoreWebApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-multitenancygovernanceaspnetcorewebapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Registers the ASP.NET Core multi-tenancy governance adapter on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MultiTenancyGovernanceAspNetCoreWebApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyGovernanceAspNetCoreWebApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-multitenancygovernanceaspnetcorewebapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_MultiTenancyGovernanceAspNetCoreWebApplicationBuilderExtensions_AddCephalonMultiTenancyGovernanceAspNetCore_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions__"></a> AddCephalonMultiTenancyGovernanceAspNetCore\(WebApplicationBuilder, Action<MultiTenancyGovernanceAspNetCoreOptions\>?\)

Adds the Cephalon ASP.NET Core multi-tenancy governance adapter to the target application builder.

```csharp
public static WebApplicationBuilder AddCephalonMultiTenancyGovernanceAspNetCore(this WebApplicationBuilder builder, Action<MultiTenancyGovernanceAspNetCoreOptions>? configure = null)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MultiTenancyGovernanceAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration-multitenancygovernanceaspnetcoreoptions/)\>?

An optional callback that can extend or override the configuration-driven ASP.NET Core governance adapter options.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.
