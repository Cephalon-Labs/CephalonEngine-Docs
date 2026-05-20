---
title: Class MultiTenancyGovernanceAspNetCoreServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-multitenancygovernanceaspnetcoreservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Registers the ASP.NET Core governance adapter services used by Cephalon multi-tenancy governance.

```csharp
public static class MultiTenancyGovernanceAspNetCoreServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyGovernanceAspNetCoreServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-multitenancygovernanceaspnetcoreservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_MultiTenancyGovernanceAspNetCoreServiceCollectionExtensions_AddCephalonMultiTenancyGovernanceAspNetCore_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions__"></a> AddCephalonMultiTenancyGovernanceAspNetCore\(IServiceCollection, IConfiguration?, Action<MultiTenancyGovernanceAspNetCoreOptions\>?\)

Adds the Cephalon ASP.NET Core multi-tenancy governance adapter to the service collection.

```csharp
public static IServiceCollection AddCephalonMultiTenancyGovernanceAspNetCore(this IServiceCollection services, IConfiguration? configuration = null, Action<MultiTenancyGovernanceAspNetCoreOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The optional configuration root used to populate <xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Configuration.MultiTenancyGovernanceAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> from
<code>Engine:MultiTenancy:Governance:AspNetCore</code>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MultiTenancyGovernanceAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration-multitenancygovernanceaspnetcoreoptions/)\>?

An optional callback that can extend or override the configuration-driven ASP.NET Core governance adapter options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
