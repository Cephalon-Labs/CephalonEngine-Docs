---
title: Interface ITenantInvitationContributor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationcontributor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Allows a module to contribute tenant invitations into the active governance runtime.

```csharp
public interface ITenantInvitationContributor
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationContributor_RegisterInvitations_Cephalon_MultiTenancy_Governance_Services_ITenantInvitationRegistry_"></a> RegisterInvitations\(ITenantInvitationRegistry\)

Registers one or more tenant invitations with the supplied registry.

```csharp
void RegisterInvitations(ITenantInvitationRegistry invitations)
```

#### Parameters

`invitations` [ITenantInvitationRegistry](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationregistry/)

The registry that collects contributed invitations.
