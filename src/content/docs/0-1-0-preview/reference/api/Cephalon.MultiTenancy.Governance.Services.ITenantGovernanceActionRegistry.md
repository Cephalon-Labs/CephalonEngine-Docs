---
title: Interface ITenantGovernanceActionRegistry
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactionregistry
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant-governance action descriptors contributed to the active governance runtime.

```csharp
public interface ITenantGovernanceActionRegistry
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionRegistry_Add_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_"></a> Add\(TenantGovernanceActionDescriptor\)

Adds a tenant-governance action descriptor to the registry.

```csharp
void Add(TenantGovernanceActionDescriptor action)
```

#### Parameters

`action` [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)

The governance action descriptor to contribute.
