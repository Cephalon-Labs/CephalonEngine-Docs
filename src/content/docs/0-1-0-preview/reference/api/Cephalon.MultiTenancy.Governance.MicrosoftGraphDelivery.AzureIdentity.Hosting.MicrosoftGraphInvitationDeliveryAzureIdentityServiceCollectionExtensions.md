---
title: Class MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-hosting-microsoftgraphinvitationdeliveryazureidentityservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.AzureIdentity.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.AzureIdentity.dll  

Adds Azure Identity token acquisition for Microsoft Graph invitation delivery.

```csharp
public static class MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-hosting-microsoftgraphinvitationdeliveryazureidentityservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Hosting_MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions_AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions__"></a> AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity\(IServiceCollection, IConfiguration, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions\>?\)

Adds the Azure Identity token provider using configuration as the primary source of token-acquisition settings.

```csharp
public static IServiceCollection AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity(this IServiceCollection services, IConfiguration configuration, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MicrosoftGraphInvitationDeliveryAzureIdentityOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions/)\>?

An optional callback that can extend or override configuration-driven settings.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Hosting_MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions_AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions__"></a> AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity\(IServiceCollection, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions\>?\)

Adds the Azure Identity token provider using code-first configuration.

```csharp
public static IServiceCollection AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity(this IServiceCollection services, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MicrosoftGraphInvitationDeliveryAzureIdentityOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions/)\>?

An optional callback that configures token acquisition.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Hosting_MicrosoftGraphInvitationDeliveryAzureIdentityServiceCollectionExtensions_AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity_Microsoft_Extensions_DependencyInjection_IServiceCollection_Azure_Core_TokenCredential_System_Action_Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions__"></a> AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity\(IServiceCollection, TokenCredential, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions\>?\)

Adds the Azure Identity token provider with an explicit credential instance.

```csharp
public static IServiceCollection AddCephalonMicrosoftGraphInvitationDeliveryAzureIdentity(this IServiceCollection services, TokenCredential credential, Action<MicrosoftGraphInvitationDeliveryAzureIdentityOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`credential` [TokenCredential](https://learn.microsoft.com/dotnet/api/azure.core.tokencredential)

The credential used to acquire Microsoft Graph access tokens.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MicrosoftGraphInvitationDeliveryAzureIdentityOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions/)\>?

An optional callback that configures token acquisition.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

#### Remarks

This overload is useful for tests, shared host credential factories, or applications that want to provide a
specific <xref href="Azure.Core.TokenCredential" data-throw-if-not-resolved="false"></xref> such as <xref href="Azure.Identity.ManagedIdentityCredential" data-throw-if-not-resolved="false"></xref>.
