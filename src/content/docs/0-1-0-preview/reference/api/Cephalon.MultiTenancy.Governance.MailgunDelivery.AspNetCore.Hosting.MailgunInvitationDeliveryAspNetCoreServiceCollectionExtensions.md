---
title: Class MailgunInvitationDeliveryAspNetCoreServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliveryaspnetcoreservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.dll  

Registers ASP.NET Core Mailgun webhook translation services for tenant-invitation delivery status callbacks.

```csharp
public static class MailgunInvitationDeliveryAspNetCoreServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryAspNetCoreServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliveryaspnetcoreservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryAspNetCoreServiceCollectionExtensions_AddCephalonMailgunInvitationDeliveryAspNetCore_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions__"></a> AddCephalonMailgunInvitationDeliveryAspNetCore\(IServiceCollection, IConfiguration?, Action<MailgunInvitationDeliveryAspNetCoreOptions\>?\)

Adds Mailgun webhook callback translation services using configuration as the primary setup source.

```csharp
public static IServiceCollection AddCephalonMailgunInvitationDeliveryAspNetCore(this IServiceCollection services, IConfiguration? configuration = null, Action<MailgunInvitationDeliveryAspNetCoreOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The optional configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MailgunInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-configuration-mailguninvitationdeliveryaspnetcoreoptions/)\>?

An optional callback that can extend or override configuration-driven options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
