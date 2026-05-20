---
title: Interface ITenantDomainOwnershipCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipcatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes the merged tenant-domain ownership set available to the active governance runtime.

```csharp
public interface ITenantDomainOwnershipCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipCatalog_DomainOwnerships"></a> DomainOwnerships

Gets the effective domain ownership set after runtime storage, host options, and module contributors have been applied.

```csharp
IReadOnlyList<TenantDomainOwnershipDescriptor> DomainOwnerships { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipCatalog_GetByDomainName_System_String_"></a> GetByDomainName\(string\)

Gets domain ownership descriptors by canonical domain name across all tenants.

```csharp
IReadOnlyList<TenantDomainOwnershipDescriptor> GetByDomainName(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

The matching domain ownership descriptors.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipCatalog_GetByTenantAndDomain_System_String_System_String_"></a> GetByTenantAndDomain\(string, string\)

Gets domain ownership descriptors by tenant and domain name.

```csharp
IReadOnlyList<TenantDomainOwnershipDescriptor> GetByTenantAndDomain(string tenantId, string domainName)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

The matching domain ownership descriptors.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipCatalog_GetByTenantId_System_String_"></a> GetByTenantId\(string\)

Gets domain ownership descriptors for one tenant.

```csharp
IReadOnlyList<TenantDomainOwnershipDescriptor> GetByTenantId(string tenantId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

The matching domain ownership descriptors.
