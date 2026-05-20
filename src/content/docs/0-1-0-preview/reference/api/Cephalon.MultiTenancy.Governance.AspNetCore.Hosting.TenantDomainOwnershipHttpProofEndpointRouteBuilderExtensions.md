---
title: Class TenantDomainOwnershipHttpProofEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantdomainownershiphttpproofendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Maps ASP.NET Core endpoints for tenant-domain ownership HTTP proof files published by Cephalon governance.

```csharp
public static class TenantDomainOwnershipHttpProofEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantdomainownershiphttpproofendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantDomainOwnershipHttpProofEndpointRouteBuilderExtensions_MapCephalonTenantDomainOwnershipHttpProofs_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonTenantDomainOwnershipHttpProofs\(IEndpointRouteBuilder\)

Maps the tenant-domain ownership HTTP proof publication endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonTenantDomainOwnershipHttpProofs(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

This endpoint is opt-in and reads proof-file state from
<xref href="Cephalon.MultiTenancy.Governance.Services.ITenantDomainOwnershipHttpProofPublicationCatalog" data-throw-if-not-resolved="false"></xref>. The core governance package remains
host-agnostic and only records the proof state that this adapter serves.
