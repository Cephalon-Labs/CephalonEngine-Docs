---
title: Class SendGridInvitationDeliveryStatusEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatusendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.dll  

Maps ASP.NET Core endpoints for SendGrid Event Webhook tenant-invitation delivery status callbacks.

```csharp
public static class SendGridInvitationDeliveryStatusEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryStatusEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatusendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusEndpointRouteBuilderExtensions_MapCephalonSendGridInvitationDeliveryStatusCallbacks_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonSendGridInvitationDeliveryStatusCallbacks\(IEndpointRouteBuilder\)

Maps the optional SendGrid Event Webhook tenant-invitation delivery status callback endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonSendGridInvitationDeliveryStatusCallbacks(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint translates SendGrid Event Webhook JSON arrays into the host-agnostic
<xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusReconciler" data-throw-if-not-resolved="false"></xref>. It can also verify SendGrid signed Event Webhook
signatures and reject bounded process-local signed-callback replays when configured. OAuth token validation,
durable inboxing, and distributed replay protection remain host-managed or future provider-pack responsibilities.
