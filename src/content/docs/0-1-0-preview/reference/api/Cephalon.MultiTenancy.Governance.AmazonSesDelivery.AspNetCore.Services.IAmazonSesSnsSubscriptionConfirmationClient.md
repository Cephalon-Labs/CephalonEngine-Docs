---
title: Interface IAmazonSesSnsSubscriptionConfirmationClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-iamazonsessnssubscriptionconfirmationclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Confirms Amazon SNS subscriptions for the Amazon SES callback adapter.

```csharp
public interface IAmazonSesSnsSubscriptionConfirmationClient
```

## Remarks

Hosts can replace this service to route subscription confirmation through a platform HTTP policy, an AWS SDK seam,
a queue-backed approval workflow, or a test double while keeping the same Cephalon callback result and runtime
metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_IAmazonSesSnsSubscriptionConfirmationClient_ConfirmAsync_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_System_Threading_CancellationToken_"></a> ConfirmAsync\(AmazonSesSnsSubscriptionConfirmationRequest, CancellationToken\)

Confirms one verified SNS subscription-confirmation envelope.

```csharp
ValueTask<AmazonSesSnsSubscriptionConfirmationResult> ConfirmAsync(AmazonSesSnsSubscriptionConfirmationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [AmazonSesSnsSubscriptionConfirmationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationrequest/)

The verified SNS subscription-confirmation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the confirmation operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AmazonSesSnsSubscriptionConfirmationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationresult/)\>

The normalized confirmation result.
