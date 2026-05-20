---
title: Interface ITenantInvitationDeliveryRetryRunner
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliveryretryrunner
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Runs bounded retries for queued tenant invitation delivery failures.

```csharp
public interface ITenantInvitationDeliveryRetryRunner
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryRunner_RetryPendingAsync_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_System_Threading_CancellationToken_"></a> RetryPendingAsync\(TenantInvitationDeliveryRetryRequest?, CancellationToken\)

Retries pending tenant invitation delivery queue entries.

```csharp
ValueTask<TenantInvitationDeliveryRetryResult> RetryPendingAsync(TenantInvitationDeliveryRetryRequest? request = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantInvitationDeliveryRetryRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryrequest/)?

The retry runner request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the retry pass.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantInvitationDeliveryRetryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryresult/)\>

The aggregate retry pass result.
