---
title: Interface IAmazonSesInvitationDeliveryClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services-iamazonsesinvitationdeliveryclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.dll  

Sends Amazon SES invitation delivery messages for the Amazon SES companion pack.

```csharp
public interface IAmazonSesInvitationDeliveryClient
```

## Remarks

Hosts can replace this service to route <code>SendEmail</code> requests through a custom AWS SDK client, test double,
gateway, or platform-specific retry policy while retaining the same Cephalon invitation dispatcher and sender
metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_IAmazonSesInvitationDeliveryClient_SendAsync_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_System_Threading_CancellationToken_"></a> SendAsync\(AmazonSesInvitationDeliveryMessage, CancellationToken\)

Sends one Amazon SES invitation delivery message.

```csharp
ValueTask<AmazonSesInvitationDeliveryClientResult> SendAsync(AmazonSesInvitationDeliveryMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [AmazonSesInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services-amazonsesinvitationdeliverymessage/)

The message prepared by the Amazon SES invitation delivery sender.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the send operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AmazonSesInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services-amazonsesinvitationdeliveryclientresult/)\>

The client result normalized for Cephalon sender reporting.
