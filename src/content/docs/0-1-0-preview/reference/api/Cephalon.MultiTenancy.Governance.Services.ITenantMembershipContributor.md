---
title: Interface ITenantMembershipContributor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipcontributor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Allows a module to contribute tenant memberships into the active governance runtime.

```csharp
public interface ITenantMembershipContributor
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipContributor_RegisterMemberships_Cephalon_MultiTenancy_Governance_Services_ITenantMembershipRegistry_"></a> RegisterMemberships\(ITenantMembershipRegistry\)

Registers one or more tenant memberships with the supplied registry.

```csharp
void RegisterMemberships(ITenantMembershipRegistry memberships)
```

#### Parameters

`memberships` [ITenantMembershipRegistry](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipregistry/)

The registry that collects contributed memberships.
