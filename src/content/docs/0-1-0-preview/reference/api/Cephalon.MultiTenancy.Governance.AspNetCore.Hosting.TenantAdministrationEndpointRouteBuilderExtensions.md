---
title: Class TenantAdministrationEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantadministrationendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Maps ASP.NET Core endpoints for Cephalon tenant-administration workflow commands.

```csharp
public static class TenantAdministrationEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantadministrationendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantAdministrationEndpointRouteBuilderExtensions_MapCephalonTenantAdministrationCommands_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonTenantAdministrationCommands\(IEndpointRouteBuilder\)

Maps the optional tenant-administration command endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonTenantAdministrationCommands(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint is opt-in, executes the host-agnostic <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantAdministrationWorkflow" data-throw-if-not-resolved="false"></xref>, and performs
a fail-closed authorization check by default. It does not provide public onboarding, tenant-admin UI,
provider-specific invitation senders, external invitation delivery, or identity-provider synchronization.
