---
title: Class MicrosoftGraphInvitationDeliveryAzureIdentityOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.AzureIdentity.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.AzureIdentity.dll  

Configures Azure Identity token acquisition for Microsoft Graph tenant-invitation delivery.

```csharp
public sealed class MicrosoftGraphInvitationDeliveryAzureIdentityOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryAzureIdentityOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This companion package only supplies a Microsoft Graph bearer token through <code>Azure.Identity</code>. The Microsoft
Graph sender still owns the <code>sendMail</code> request, while Microsoft Entra application registration, permissions,
mailbox access policy, and credential lifecycle remain outside the Cephalon engine boundary.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions__ctor"></a> MicrosoftGraphInvitationDeliveryAzureIdentityOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.AzureIdentity.Configuration.MicrosoftGraphInvitationDeliveryAzureIdentityOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MicrosoftGraphInvitationDeliveryAzureIdentityOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_AuthorityHost"></a> AuthorityHost

Gets or sets the Microsoft Entra authority host used for token acquisition.

```csharp
public string? AuthorityHost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported aliases are <code>AzurePublicCloud</code>, <code>AzureGovernment</code>, and <code>AzureChina</code>. Hosts can also
provide an absolute HTTPS authority URI for a sovereign or private cloud.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the Azure Identity token provider should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_ExcludeInteractiveBrowserCredential"></a> ExcludeInteractiveBrowserCredential

Gets or sets a value indicating whether interactive browser authentication should be excluded.

```csharp
public bool ExcludeInteractiveBrowserCredential { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> so production hosts do not accidentally launch browser prompts.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_ExcludeManagedIdentityCredential"></a> ExcludeManagedIdentityCredential

Gets or sets a value indicating whether managed identity authentication should be excluded.

```csharp
public bool ExcludeManagedIdentityCredential { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default keeps managed identity available because hosted Azure, workload identity, and service-style
invitation delivery are the primary production scenarios for this package.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_ManagedIdentityClientId"></a> ManagedIdentityClientId

Gets or sets the client id for a user-assigned managed identity.

```csharp
public string? ManagedIdentityClientId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Leave this value empty to allow <xref href="Azure.Identity.DefaultAzureCredential" data-throw-if-not-resolved="false"></xref> to use a system-assigned managed identity
or another credential source from its chain.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_Scopes"></a> Scopes

Gets or sets the Microsoft Graph scopes requested from the configured Azure credential.

```csharp
public IReadOnlyList<string> Scopes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

The default is <code>https://graph.microsoft.com/.default</code>, which asks Microsoft Entra ID for the app's
configured application permissions such as Microsoft Graph <code>Mail.Send</code>.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_TenantId"></a> TenantId

Gets or sets the Microsoft Entra tenant id used by <xref href="Azure.Identity.DefaultAzureCredential" data-throw-if-not-resolved="false"></xref>.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_AzureIdentity_Configuration_MicrosoftGraphInvitationDeliveryAzureIdentityOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Azure Identity token-provider options from configuration.

```csharp
public static MicrosoftGraphInvitationDeliveryAzureIdentityOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MicrosoftGraphInvitationDeliveryAzureIdentityOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-azureidentity-configuration-microsoftgraphinvitationdeliveryazureidentityoptions/)

The bound Azure Identity token-provider options.
