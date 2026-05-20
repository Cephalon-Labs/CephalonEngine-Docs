---
title: Interface ITenantDomainOwnershipContributor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipcontributor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Allows a module to contribute tenant-domain ownership descriptors into the active governance runtime.

```csharp
public interface ITenantDomainOwnershipContributor
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipContributor_RegisterDomainOwnerships_Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipRegistry_"></a> RegisterDomainOwnerships\(ITenantDomainOwnershipRegistry\)

Registers one or more tenant-domain ownership descriptors with the supplied registry.

```csharp
void RegisterDomainOwnerships(ITenantDomainOwnershipRegistry domainOwnerships)
```

#### Parameters

`domainOwnerships` [ITenantDomainOwnershipRegistry](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipregistry/)

The registry that collects contributed domain ownership descriptors.
