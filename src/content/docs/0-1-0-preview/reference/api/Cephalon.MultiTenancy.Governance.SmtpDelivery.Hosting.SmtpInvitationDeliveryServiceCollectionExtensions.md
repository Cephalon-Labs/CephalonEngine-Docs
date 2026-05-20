---
title: Class SmtpInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-hosting-smtpinvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SmtpDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SmtpDelivery.dll  

Adds SMTP relay invitation delivery services to a Cephalon host.

```csharp
public static class SmtpInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmtpInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-hosting-smtpinvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Hosting_SmtpInvitationDeliveryServiceCollectionExtensions_AddCephalonSmtpInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions__"></a> AddCephalonSmtpInvitationDelivery\(IServiceCollection, IConfiguration, Action<SmtpInvitationDeliveryOptions\>?\)

Adds SMTP invitation delivery using configuration as the primary source of relay settings.

```csharp
public static IServiceCollection AddCephalonSmtpInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<SmtpInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SmtpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration-smtpinvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Hosting_SmtpInvitationDeliveryServiceCollectionExtensions_AddCephalonSmtpInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions__"></a> AddCephalonSmtpInvitationDelivery\(IServiceCollection, Action<SmtpInvitationDeliveryOptions\>?\)

Adds SMTP invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonSmtpInvitationDelivery(this IServiceCollection services, Action<SmtpInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SmtpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration-smtpinvitationdeliveryoptions/)\>?

An optional callback that configures the SMTP invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
