---
title: Interface ITenantInvitationRegistry
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationregistry
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant invitations contributed to the active governance runtime.

```csharp
public interface ITenantInvitationRegistry
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationRegistry_Add_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_"></a> Add\(TenantInvitationDescriptor\)

Adds a tenant-invitation descriptor to the registry.

```csharp
void Add(TenantInvitationDescriptor invitation)
```

#### Parameters

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)

The invitation descriptor to contribute.
