---
title: Class AmazonSesInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-hosting-amazonsesinvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.dll  

Adds Amazon SES v2 invitation delivery services to a Cephalon host.

```csharp
public static class AmazonSesInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-hosting-amazonsesinvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Hosting_AmazonSesInvitationDeliveryServiceCollectionExtensions_AddCephalonAmazonSesInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions__"></a> AddCephalonAmazonSesInvitationDelivery\(IServiceCollection, IConfiguration, Action<AmazonSesInvitationDeliveryOptions\>?\)

Adds Amazon SES invitation delivery using configuration as the primary source of SES settings.

```csharp
public static IServiceCollection AddCephalonAmazonSesInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<AmazonSesInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AmazonSesInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration-amazonsesinvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Hosting_AmazonSesInvitationDeliveryServiceCollectionExtensions_AddCephalonAmazonSesInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions__"></a> AddCephalonAmazonSesInvitationDelivery\(IServiceCollection, Action<AmazonSesInvitationDeliveryOptions\>?\)

Adds Amazon SES invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonAmazonSesInvitationDelivery(this IServiceCollection services, Action<AmazonSesInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AmazonSesInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration-amazonsesinvitationdeliveryoptions/)\>?

An optional callback that configures the Amazon SES invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
