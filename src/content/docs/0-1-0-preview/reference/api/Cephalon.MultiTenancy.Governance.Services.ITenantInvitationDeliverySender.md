---
title: Interface ITenantInvitationDeliverySender
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliverysender
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Sends tenant invitation delivery payloads for a host or provider-specific channel.

```csharp
public interface ITenantInvitationDeliverySender
```

## Remarks

Sender implementations own external delivery behavior and provider semantics. Cephalon calls the sender only after
resolving a pending invitation and records the returned outcome without assuming that every provider can guarantee
final recipient delivery.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliverySender_SenderId"></a> SenderId

Gets the stable sender identifier used by configuration, runtime metadata, and diagnostics.

```csharp
string SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliverySender_SendAsync_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_System_Threading_CancellationToken_"></a> SendAsync\(TenantInvitationDeliveryContext, CancellationToken\)

Sends or queues one tenant invitation delivery payload.

```csharp
ValueTask<TenantInvitationDeliverySenderResult> SendAsync(TenantInvitationDeliveryContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`context` [TenantInvitationDeliveryContext](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverycontext/)

The delivery context resolved by the governance companion pack.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels sender execution.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantInvitationDeliverySenderResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverysenderresult/)\>

The provider-specific sender outcome normalized for Cephalon runtime reporting.
