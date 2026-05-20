---
title: Class MicrosoftGraphInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-hosting-microsoftgraphinvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Adds Microsoft Graph <code>sendMail</code> invitation delivery services to a Cephalon host.

```csharp
public static class MicrosoftGraphInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-hosting-microsoftgraphinvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Hosting_MicrosoftGraphInvitationDeliveryServiceCollectionExtensions_HttpClientName"></a> HttpClientName

The named HTTP client used by the Microsoft Graph invitation delivery client.

```csharp
public const string HttpClientName = "Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Hosting_MicrosoftGraphInvitationDeliveryServiceCollectionExtensions_AddCephalonMicrosoftGraphInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions__"></a> AddCephalonMicrosoftGraphInvitationDelivery\(IServiceCollection, IConfiguration, Action<MicrosoftGraphInvitationDeliveryOptions\>?\)

Adds Microsoft Graph invitation delivery using configuration as the primary source of <code>sendMail</code> settings.

```csharp
public static IServiceCollection AddCephalonMicrosoftGraphInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<MicrosoftGraphInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MicrosoftGraphInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration-microsoftgraphinvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Hosting_MicrosoftGraphInvitationDeliveryServiceCollectionExtensions_AddCephalonMicrosoftGraphInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions__"></a> AddCephalonMicrosoftGraphInvitationDelivery\(IServiceCollection, Action<MicrosoftGraphInvitationDeliveryOptions\>?\)

Adds Microsoft Graph invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonMicrosoftGraphInvitationDelivery(this IServiceCollection services, Action<MicrosoftGraphInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MicrosoftGraphInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration-microsoftgraphinvitationdeliveryoptions/)\>?

An optional callback that configures the Microsoft Graph invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
