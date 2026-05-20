---
title: Interface ITenantDomainOwnershipRegistry
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipregistry
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant-domain ownership descriptors contributed to the active governance runtime.

```csharp
public interface ITenantDomainOwnershipRegistry
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipRegistry_Add_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_"></a> Add\(TenantDomainOwnershipDescriptor\)

Adds a tenant-domain ownership descriptor to the registry.

```csharp
void Add(TenantDomainOwnershipDescriptor domainOwnership)
```

#### Parameters

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)

The domain ownership descriptor to contribute.
