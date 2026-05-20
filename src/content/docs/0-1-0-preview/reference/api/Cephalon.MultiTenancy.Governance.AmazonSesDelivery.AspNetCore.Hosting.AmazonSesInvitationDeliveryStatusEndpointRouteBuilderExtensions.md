---
title: Class AmazonSesInvitationDeliveryStatusEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatusendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Maps ASP.NET Core endpoints for SNS-wrapped Amazon SES tenant-invitation delivery status callbacks.

```csharp
public static class AmazonSesInvitationDeliveryStatusEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryStatusEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatusendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusEndpointRouteBuilderExtensions_MapCephalonAmazonSesInvitationDeliveryStatusCallbacks_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonAmazonSesInvitationDeliveryStatusCallbacks\(IEndpointRouteBuilder\)

Maps the optional Amazon SES over SNS tenant-invitation delivery status callback endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonAmazonSesInvitationDeliveryStatusCallbacks(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint translates SNS HTTP notifications containing Amazon SES event publishing payloads into the
host-agnostic <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusReconciler" data-throw-if-not-resolved="false"></xref>. Durable inboxing, distributed replay
protection, and provider polling remain host-managed or future provider-pack responsibilities. When configured,
the endpoint verifies the SNS message signature before translation, confirms verified SNS subscription requests,
observes verified unsubscribe-confirmation lifecycle messages without restoring subscriptions, and skips
duplicate SNS message identifiers already present in the Cephalon delivery-status observation store.
