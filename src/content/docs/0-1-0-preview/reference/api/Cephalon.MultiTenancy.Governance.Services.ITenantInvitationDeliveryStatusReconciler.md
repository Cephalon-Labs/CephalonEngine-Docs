---
title: Interface ITenantInvitationDeliveryStatusReconciler
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliverystatusreconciler
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Reconciles provider or receiver delivery status observations into tenant invitation runtime metadata.

```csharp
public interface ITenantInvitationDeliveryStatusReconciler
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusReconciler_ReconcileAsync_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_System_Threading_CancellationToken_"></a> ReconcileAsync\(TenantInvitationDeliveryStatusReconciliationRequest, CancellationToken\)

Reconciles one delivery status observation for a tenant invitation.

```csharp
ValueTask<TenantInvitationDeliveryStatusReconciliationResult> ReconcileAsync(TenantInvitationDeliveryStatusReconciliationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantInvitationDeliveryStatusReconciliationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationrequest/)

The delivery status reconciliation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to cancel reconciliation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantInvitationDeliveryStatusReconciliationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationresult/)\>

The reconciliation result.
