---
title: Class MailgunInvitationDeliveryStatusEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatusendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.dll  

Maps ASP.NET Core endpoints for Mailgun webhook tenant-invitation delivery status callbacks.

```csharp
public static class MailgunInvitationDeliveryStatusEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryStatusEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatusendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusEndpointRouteBuilderExtensions_MapCephalonMailgunInvitationDeliveryStatusCallbacks_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonMailgunInvitationDeliveryStatusCallbacks\(IEndpointRouteBuilder\)

Maps the optional Mailgun webhook tenant-invitation delivery status callback endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonMailgunInvitationDeliveryStatusCallbacks(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint translates Mailgun webhook JSON payloads into the host-agnostic
<xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusReconciler" data-throw-if-not-resolved="false"></xref>. It can also verify Mailgun HMAC-SHA256 webhook
signatures and reject bounded process-local token replays when configured. Durable inboxing and provider polling
remain host-managed or future provider-pack responsibilities.
