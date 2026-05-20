---
title: Interface ITenantInvitationDeliveryDispatcher
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliverydispatcher
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Dispatches tenant invitation delivery through a registered sender and records delivery outcome metadata.

```csharp
public interface ITenantInvitationDeliveryDispatcher
```

## Remarks

The dispatcher owns host-agnostic lookup, validation, runtime reporting, and outcome persistence. Actual transport
delivery, such as email, SMS, chat, or an identity-provider invite, is supplied by <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliverySender" data-throw-if-not-resolved="false"></xref>
implementations registered by the host or an optional provider companion package.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryDispatcher_DispatchAsync_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_System_Threading_CancellationToken_"></a> DispatchAsync\(TenantInvitationDeliveryRequest, CancellationToken\)

Dispatches one tenant invitation delivery request.

```csharp
ValueTask<TenantInvitationDeliveryResult> DispatchAsync(TenantInvitationDeliveryRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantInvitationDeliveryRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrequest/)

The tenant invitation delivery request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels dispatch before a sender is invoked or state is stored.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantInvitationDeliveryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryresult/)\>

The dispatch outcome.
