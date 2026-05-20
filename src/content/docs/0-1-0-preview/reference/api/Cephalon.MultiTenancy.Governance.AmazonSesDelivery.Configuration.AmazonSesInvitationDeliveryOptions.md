---
title: Class AmazonSesInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration-amazonsesinvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.dll  

Configures Amazon SES v2 delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class AmazonSesInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration-amazonsesinvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The Amazon SES sender submits one SES v2 <code>SendEmail</code> simple message request. It does not own AWS account setup,
sender identity verification, bounce/complaint callbacks, provider polling, public onboarding, SMS, chat, CRM, or
identity-provider invitation flows.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions__ctor"></a> AmazonSesInvitationDeliveryOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.Configuration.AmazonSesInvitationDeliveryOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AmazonSesInvitationDeliveryOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_AcceptedStatusCodes"></a> AcceptedStatusCodes

Gets or sets response status codes that indicate Amazon SES accepted the request.

```csharp
public IReadOnlyList<int> AcceptedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

The default accepts <code>200 OK</code>, which the AWS SDK reports for a successful SES v2 <code>SendEmail</code> call.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_ConfigurationSetName"></a> ConfigurationSetName

Gets or sets the optional SES configuration set name attached to the request.

```csharp
public string? ConfigurationSetName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the Amazon SES invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_FromEmail"></a> FromEmail

Gets or sets the sender email address used in the SES message.

```csharp
public string? FromEmail { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_FromName"></a> FromName

Gets or sets the optional sender display name used in the SES message.

```csharp
public string? FromName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_HtmlBodyTemplate"></a> HtmlBodyTemplate

Gets or sets the optional HTML Amazon SES message body template.

```csharp
public string? HtmlBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_IncludeContextTags"></a> IncludeContextTags

Gets or sets a value indicating whether safe Cephalon context tags should be added to the SES request.

```csharp
public bool IncludeContextTags { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_RecipientEmailMetadataKey"></a> RecipientEmailMetadataKey

Gets or sets the metadata key used to resolve the recipient email address when the invitee id is not an email address.

```csharp
public string RecipientEmailMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The sender checks dispatch metadata first and invitation metadata second. If neither contains a value and
<code>InviteeKind</code> is <code>email</code>, the invitee id is treated as the recipient address.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_RegionSystemName"></a> RegionSystemName

Gets or sets the optional AWS region system name used when Cephalon creates the default SES v2 client.

```csharp
public string? RegionSystemName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the AWS SDK default region resolution chain remains authoritative. Example values include
<code>us-east-1</code> and <code>eu-west-1</code>.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_ReplyToAddresses"></a> ReplyToAddresses

Gets or sets reply-to addresses attached to the SES message.

```csharp
public IReadOnlyList<string> ReplyToAddresses { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by <code>TenantInvitationDeliveryRequest.SenderId</code>.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_SubjectTemplate"></a> SubjectTemplate

Gets or sets the Amazon SES message subject template.

```csharp
public string SubjectTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_Tags"></a> Tags

Gets or sets Amazon SES message tags attached to the request.

```csharp
public IReadOnlyDictionary<string, string> Tags { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

These values are sent to Amazon SES and can appear in provider event publishing. Do not put secrets here.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_TextBodyTemplate"></a> TextBodyTemplate

Gets or sets the plain-text Amazon SES message body template.

```csharp
public string TextBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the Amazon SES SDK request.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Configuration_AmazonSesInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Amazon SES invitation delivery options from configuration.

```csharp
public static AmazonSesInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [AmazonSesInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-configuration-amazonsesinvitationdeliveryoptions/)

The bound Amazon SES invitation delivery options.
