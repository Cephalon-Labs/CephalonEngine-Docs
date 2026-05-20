---
title: Interface ITenantInvitationDeliveryRetryExecutionCoordinationCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliveryretryexecutioncoordinationcatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes runtime state for process-local tenant-invitation delivery retry execution coordination.

```csharp
public interface ITenantInvitationDeliveryRetryExecutionCoordinationCatalog
```

## Remarks

The catalog reports the in-process overlap guard used by bounded retry runner passes. It does not
represent distributed retry leases, cross-node exactly-once delivery, or provider-specific sender ownership.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryExecutionCoordinationCatalog_Current"></a> Current

Gets the latest tenant-invitation delivery retry execution coordination snapshot.

```csharp
TenantInvitationDeliveryRetryExecutionCoordinationSnapshot Current { get; }
```

#### Property Value

 [TenantInvitationDeliveryRetryExecutionCoordinationSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryexecutioncoordinationsnapshot/)
