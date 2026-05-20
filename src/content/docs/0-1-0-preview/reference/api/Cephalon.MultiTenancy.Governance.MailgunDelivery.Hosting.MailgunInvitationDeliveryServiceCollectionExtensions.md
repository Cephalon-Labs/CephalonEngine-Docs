---
title: Class MailgunInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-hosting-mailguninvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.dll  

Adds Mailgun Messages API invitation delivery services to a Cephalon host.

```csharp
public static class MailgunInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-hosting-mailguninvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Hosting_MailgunInvitationDeliveryServiceCollectionExtensions_HttpClientName"></a> HttpClientName

The named HTTP client used by the Mailgun invitation delivery client.

```csharp
public const string HttpClientName = "Cephalon.MultiTenancy.Governance.MailgunDelivery"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Hosting_MailgunInvitationDeliveryServiceCollectionExtensions_AddCephalonMailgunInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions__"></a> AddCephalonMailgunInvitationDelivery\(IServiceCollection, IConfiguration, Action<MailgunInvitationDeliveryOptions\>?\)

Adds Mailgun invitation delivery using configuration as the primary source of Messages API settings.

```csharp
public static IServiceCollection AddCephalonMailgunInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<MailgunInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MailgunInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration-mailguninvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Hosting_MailgunInvitationDeliveryServiceCollectionExtensions_AddCephalonMailgunInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions__"></a> AddCephalonMailgunInvitationDelivery\(IServiceCollection, Action<MailgunInvitationDeliveryOptions\>?\)

Adds Mailgun invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonMailgunInvitationDelivery(this IServiceCollection services, Action<MailgunInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MailgunInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration-mailguninvitationdeliveryoptions/)\>?

An optional callback that configures the Mailgun invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
