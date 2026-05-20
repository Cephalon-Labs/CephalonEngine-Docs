---
title: Interface ITenantMembershipRegistry
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipregistry
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant memberships contributed to the active governance runtime.

```csharp
public interface ITenantMembershipRegistry
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipRegistry_Add_Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_"></a> Add\(TenantMembershipDescriptor\)

Adds a tenant-membership descriptor to the registry.

```csharp
void Add(TenantMembershipDescriptor membership)
```

#### Parameters

`membership` [TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)

The membership descriptor to contribute.
