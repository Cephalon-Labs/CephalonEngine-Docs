---
title: Interface IMicrosoftGraphInvitationDeliveryClient
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-imicrosoftgraphinvitationdeliveryclient
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Sends Microsoft Graph invitation delivery messages for the Microsoft Graph companion pack.

```csharp
public interface IMicrosoftGraphInvitationDeliveryClient
```

## Remarks

Hosts can replace this service to route <code>sendMail</code> requests through a custom Graph SDK client, test double,
gateway, or platform-specific HTTP policy while retaining the same Cephalon invitation dispatcher and sender
metadata contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_IMicrosoftGraphInvitationDeliveryClient_SendAsync_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_System_Threading_CancellationToken_"></a> SendAsync\(MicrosoftGraphInvitationDeliveryMessage, CancellationToken\)

Sends one Microsoft Graph invitation delivery message.

```csharp
ValueTask<MicrosoftGraphInvitationDeliveryClientResult> SendAsync(MicrosoftGraphInvitationDeliveryMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [MicrosoftGraphInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliverymessage/)

The message prepared by the Microsoft Graph invitation delivery sender.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the send operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[MicrosoftGraphInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliveryclientresult/)\>

The client result normalized for Cephalon sender reporting.
