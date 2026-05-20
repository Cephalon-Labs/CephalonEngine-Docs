---
title: Interface ISendGridInvitationDeliveryClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-isendgridinvitationdeliveryclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.dll  

Sends SendGrid invitation delivery messages for the SendGrid companion pack.

```csharp
public interface ISendGridInvitationDeliveryClient
```

## Remarks

Hosts can replace this service to route Mail Send requests through a custom SendGrid client, test double, gateway,
or platform-specific HTTP policy while retaining the same Cephalon invitation dispatcher and sender metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_ISendGridInvitationDeliveryClient_SendAsync_Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_System_Threading_CancellationToken_"></a> SendAsync\(SendGridInvitationDeliveryMessage, CancellationToken\)

Sends one SendGrid invitation delivery message.

```csharp
ValueTask<SendGridInvitationDeliveryClientResult> SendAsync(SendGridInvitationDeliveryMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [SendGridInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliverymessage/)

The message prepared by the SendGrid invitation delivery sender.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the send operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[SendGridInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliveryclientresult/)\>

The client result normalized for Cephalon sender reporting.
