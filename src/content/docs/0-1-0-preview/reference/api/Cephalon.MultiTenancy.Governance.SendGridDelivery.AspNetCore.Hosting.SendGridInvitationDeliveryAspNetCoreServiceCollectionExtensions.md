---
title: Class SendGridInvitationDeliveryAspNetCoreServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliveryaspnetcoreservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.dll  

Registers ASP.NET Core SendGrid Event Webhook translation services for tenant-invitation delivery status callbacks.

```csharp
public static class SendGridInvitationDeliveryAspNetCoreServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryAspNetCoreServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliveryaspnetcoreservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryAspNetCoreServiceCollectionExtensions_AddCephalonSendGridInvitationDeliveryAspNetCore_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Configuration_SendGridInvitationDeliveryAspNetCoreOptions__"></a> AddCephalonSendGridInvitationDeliveryAspNetCore\(IServiceCollection, IConfiguration?, Action<SendGridInvitationDeliveryAspNetCoreOptions\>?\)

Adds SendGrid Event Webhook callback translation services using configuration as the primary setup source.

```csharp
public static IServiceCollection AddCephalonSendGridInvitationDeliveryAspNetCore(this IServiceCollection services, IConfiguration? configuration = null, Action<SendGridInvitationDeliveryAspNetCoreOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The optional configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SendGridInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-configuration-sendgridinvitationdeliveryaspnetcoreoptions/)\>?

An optional callback that can extend or override configuration-driven options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
