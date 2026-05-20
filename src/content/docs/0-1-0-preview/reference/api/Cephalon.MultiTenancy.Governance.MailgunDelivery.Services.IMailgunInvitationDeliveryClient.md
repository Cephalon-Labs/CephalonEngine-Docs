---
title: Interface IMailgunInvitationDeliveryClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services-imailguninvitationdeliveryclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.dll  

Sends Mailgun invitation delivery messages for the Mailgun companion pack.

```csharp
public interface IMailgunInvitationDeliveryClient
```

## Remarks

Hosts can replace this service to route Messages API requests through a custom Mailgun client, test double, gateway,
or platform-specific HTTP policy while retaining the same Cephalon invitation dispatcher and sender metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_IMailgunInvitationDeliveryClient_SendAsync_Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_System_Threading_CancellationToken_"></a> SendAsync\(MailgunInvitationDeliveryMessage, CancellationToken\)

Sends one Mailgun invitation delivery message.

```csharp
ValueTask<MailgunInvitationDeliveryClientResult> SendAsync(MailgunInvitationDeliveryMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [MailgunInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services-mailguninvitationdeliverymessage/)

The message prepared by the Mailgun invitation delivery sender.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the send operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[MailgunInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services-mailguninvitationdeliveryclientresult/)\>

The client result normalized for Cephalon sender reporting.
