---
title: Interface ITenantInvitationDeliveryRetryRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliveryretryruntimecatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes runtime state for automatic tenant-invitation delivery retry scheduling.

```csharp
public interface ITenantInvitationDeliveryRetryRuntimeCatalog
```

## Remarks

The catalog reports the opt-in background retry hosted-service posture. It does not
represent distributed retry leases, cross-node exactly-once delivery, or provider-specific sender ownership.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryRuntimeCatalog_Current"></a> Current

Gets the latest tenant-invitation delivery retry scheduling runtime snapshot.

```csharp
TenantInvitationDeliveryRetryRuntimeSnapshot Current { get; }
```

#### Property Value

 [TenantInvitationDeliveryRetryRuntimeSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryruntimesnapshot/)
