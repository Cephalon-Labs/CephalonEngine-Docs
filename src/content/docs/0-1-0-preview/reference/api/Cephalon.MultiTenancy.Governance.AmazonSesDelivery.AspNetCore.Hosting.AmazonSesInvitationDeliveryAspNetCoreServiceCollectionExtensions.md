---
title: Class AmazonSesInvitationDeliveryAspNetCoreServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliveryaspnetcoreservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Registers ASP.NET Core Amazon SES over SNS callback translation services for tenant-invitation delivery status callbacks.

```csharp
public static class AmazonSesInvitationDeliveryAspNetCoreServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryAspNetCoreServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliveryaspnetcoreservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryAspNetCoreServiceCollectionExtensions_HttpClientName"></a> HttpClientName

Gets the named HTTP client used by the default Amazon SNS subscription-confirmation client.

```csharp
public const string HttpClientName = "Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryAspNetCoreServiceCollectionExtensions_AddCephalonAmazonSesInvitationDeliveryAspNetCore_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions__"></a> AddCephalonAmazonSesInvitationDeliveryAspNetCore\(IServiceCollection, IConfiguration?, Action<AmazonSesInvitationDeliveryAspNetCoreOptions\>?\)

Adds Amazon SES over SNS callback translation services using configuration as the primary setup source.

```csharp
public static IServiceCollection AddCephalonAmazonSesInvitationDeliveryAspNetCore(this IServiceCollection services, IConfiguration? configuration = null, Action<AmazonSesInvitationDeliveryAspNetCoreOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The optional configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AmazonSesInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-configuration-amazonsesinvitationdeliveryaspnetcoreoptions/)\>?

An optional callback that can extend or override configuration-driven options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
