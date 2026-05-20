---
title: Interface IMicrosoftGraphInvitationDeliveryAccessTokenProvider
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-imicrosoftgraphinvitationdeliveryaccesstokenprovider
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Provides bearer tokens for Microsoft Graph invitation delivery requests.

```csharp
public interface IMicrosoftGraphInvitationDeliveryAccessTokenProvider
```

## Remarks

Hosts can replace this service to integrate Azure.Identity, managed identity, workload identity, a token cache, or
another organization-specific OAuth flow without changing the Cephalon invitation dispatcher.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_IMicrosoftGraphInvitationDeliveryAccessTokenProvider_GetAccessTokenAsync_System_Threading_CancellationToken_"></a> GetAccessTokenAsync\(CancellationToken\)

Gets a bearer token that authorizes the Microsoft Graph <code>sendMail</code> request.

```csharp
ValueTask<string?> GetAccessTokenAsync(CancellationToken cancellationToken = default)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels token acquisition.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)?\>

The bearer token without the <code>Bearer</code> scheme prefix.
