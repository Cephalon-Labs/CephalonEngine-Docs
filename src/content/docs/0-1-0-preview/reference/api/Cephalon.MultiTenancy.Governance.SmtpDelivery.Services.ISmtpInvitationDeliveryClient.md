---
title: Interface ISmtpInvitationDeliveryClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-ismtpinvitationdeliveryclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SmtpDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SmtpDelivery.dll  

Sends SMTP invitation delivery messages for the SMTP companion pack.

```csharp
public interface ISmtpInvitationDeliveryClient
```

## Remarks

Hosts can replace this service to route SMTP messages through a custom relay client, test double, or platform-specific
mail transport while retaining the same Cephalon invitation dispatcher and sender metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_ISmtpInvitationDeliveryClient_SendAsync_Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_System_Threading_CancellationToken_"></a> SendAsync\(SmtpInvitationDeliveryMessage, CancellationToken\)

Sends one SMTP invitation delivery message.

```csharp
ValueTask<SmtpInvitationDeliveryClientResult> SendAsync(SmtpInvitationDeliveryMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [SmtpInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliverymessage/)

The message prepared by the SMTP invitation delivery sender.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the send operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[SmtpInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliveryclientresult/)\>

The client result normalized for Cephalon sender reporting.
