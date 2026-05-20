---
title: Class SendGridInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-hosting-sendgridinvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.dll  

Adds SendGrid Mail Send API invitation delivery services to a Cephalon host.

```csharp
public static class SendGridInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-hosting-sendgridinvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Hosting_SendGridInvitationDeliveryServiceCollectionExtensions_HttpClientName"></a> HttpClientName

The named HTTP client used by the SendGrid invitation delivery client.

```csharp
public const string HttpClientName = "Cephalon.MultiTenancy.Governance.SendGridDelivery"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Hosting_SendGridInvitationDeliveryServiceCollectionExtensions_AddCephalonSendGridInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions__"></a> AddCephalonSendGridInvitationDelivery\(IServiceCollection, IConfiguration, Action<SendGridInvitationDeliveryOptions\>?\)

Adds SendGrid invitation delivery using configuration as the primary source of Mail Send API settings.

```csharp
public static IServiceCollection AddCephalonSendGridInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<SendGridInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SendGridInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration-sendgridinvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Hosting_SendGridInvitationDeliveryServiceCollectionExtensions_AddCephalonSendGridInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions__"></a> AddCephalonSendGridInvitationDelivery\(IServiceCollection, Action<SendGridInvitationDeliveryOptions\>?\)

Adds SendGrid invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonSendGridInvitationDelivery(this IServiceCollection services, Action<SendGridInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SendGridInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration-sendgridinvitationdeliveryoptions/)\>?

An optional callback that configures the SendGrid invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
