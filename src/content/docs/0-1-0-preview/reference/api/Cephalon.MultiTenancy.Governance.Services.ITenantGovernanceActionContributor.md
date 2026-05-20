---
title: Interface ITenantGovernanceActionContributor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactioncontributor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Allows a module to contribute tenant-governance approval or remediation actions into the active governance runtime.

```csharp
public interface ITenantGovernanceActionContributor
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionContributor_RegisterGovernanceActions_Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionRegistry_"></a> RegisterGovernanceActions\(ITenantGovernanceActionRegistry\)

Registers one or more tenant-governance actions with the supplied registry.

```csharp
void RegisterGovernanceActions(ITenantGovernanceActionRegistry actions)
```

#### Parameters

`actions` [ITenantGovernanceActionRegistry](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactionregistry/)

The registry that collects contributed governance action descriptors.
