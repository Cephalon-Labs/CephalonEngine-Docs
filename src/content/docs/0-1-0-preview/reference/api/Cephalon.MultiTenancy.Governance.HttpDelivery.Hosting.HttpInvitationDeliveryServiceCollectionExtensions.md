---
title: Class HttpInvitationDeliveryServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-hosting-httpinvitationdeliveryservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.HttpDelivery.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.HttpDelivery.dll  

Adds HTTP webhook invitation delivery services to a Cephalon host.

```csharp
public static class HttpInvitationDeliveryServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpInvitationDeliveryServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-hosting-httpinvitationdeliveryservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Hosting_HttpInvitationDeliveryServiceCollectionExtensions_HttpClientName"></a> HttpClientName

The named HTTP client used by the HTTP invitation delivery sender.

```csharp
public const string HttpClientName = "Cephalon.MultiTenancy.Governance.HttpDelivery"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Hosting_HttpInvitationDeliveryServiceCollectionExtensions_AddCephalonHttpInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions__"></a> AddCephalonHttpInvitationDelivery\(IServiceCollection, IConfiguration, Action<HttpInvitationDeliveryOptions\>?\)

Adds HTTP invitation delivery using configuration as the primary source of webhook settings.

```csharp
public static IServiceCollection AddCephalonHttpInvitationDelivery(this IServiceCollection services, IConfiguration configuration, Action<HttpInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[HttpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration-httpinvitationdeliveryoptions/)\>?

An optional callback that can extend or override the configuration-driven setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Hosting_HttpInvitationDeliveryServiceCollectionExtensions_AddCephalonHttpInvitationDelivery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions__"></a> AddCephalonHttpInvitationDelivery\(IServiceCollection, Action<HttpInvitationDeliveryOptions\>?\)

Adds HTTP invitation delivery using code-first configuration.

```csharp
public static IServiceCollection AddCephalonHttpInvitationDelivery(this IServiceCollection services, Action<HttpInvitationDeliveryOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[HttpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration-httpinvitationdeliveryoptions/)\>?

An optional callback that configures the HTTP invitation delivery sender.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
