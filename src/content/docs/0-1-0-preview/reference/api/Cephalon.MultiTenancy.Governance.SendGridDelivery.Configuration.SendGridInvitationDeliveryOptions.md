---
title: Class SendGridInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration-sendgridinvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.dll  

Configures SendGrid Mail Send API delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class SendGridInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration-sendgridinvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The SendGrid sender sends one transactional email request to the SendGrid Mail Send API. It does not own SendGrid
Event Webhook callbacks, bounce translation, provider polling, public onboarding, SMS, chat, CRM, or identity-provider
invitation flows.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions__ctor"></a> SendGridInvitationDeliveryOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.SendGridDelivery.Configuration.SendGridInvitationDeliveryOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SendGridInvitationDeliveryOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_AcceptedStatusCodes"></a> AcceptedStatusCodes

Gets or sets response status codes that indicate the SendGrid API accepted the request.

```csharp
public IReadOnlyList<int> AcceptedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

The default accepts <code>202 Accepted</code>. When sandbox mode is enabled, <code>200 OK</code> is also accepted.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_ApiKey"></a> ApiKey

Gets or sets the SendGrid API key used as the bearer token.

```csharp
public string? ApiKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_BaseUrl"></a> BaseUrl

Gets or sets the SendGrid v3 API base URL.

```csharp
public string BaseUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default is the global SendGrid endpoint. Hosts that use EU regional sending can set this value to
<code>https://api.eu.sendgrid.com</code>.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_Categories"></a> Categories

Gets or sets SendGrid message categories added to each request.

```csharp
public IReadOnlyList<string> Categories { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

SendGrid allows up to ten category names. Values beyond that limit are ignored by the sender.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_CustomArgs"></a> CustomArgs

Gets or sets SendGrid custom arguments added to each personalization.

```csharp
public IReadOnlyDictionary<string, string> CustomArgs { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

These values are sent to SendGrid and may appear in provider activity or webhook data. Do not put secrets here.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_EnableSandboxMode"></a> EnableSandboxMode

Gets or sets a value indicating whether SendGrid sandbox mode should be enabled.

```csharp
public bool EnableSandboxMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the SendGrid invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_FromEmail"></a> FromEmail

Gets or sets the verified sender email address used in the SendGrid message.

```csharp
public string? FromEmail { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_FromName"></a> FromName

Gets or sets the optional sender display name used in the SendGrid message.

```csharp
public string? FromName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_Headers"></a> Headers

Gets or sets additional SendGrid message headers added to each request.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

The sender filters empty, multi-line, and SendGrid-reserved headers before sending.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_HtmlBodyTemplate"></a> HtmlBodyTemplate

Gets or sets the optional HTML SendGrid message body template.

```csharp
public string? HtmlBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_IncludeContextCustomArgs"></a> IncludeContextCustomArgs

Gets or sets a value indicating whether safe Cephalon custom arguments should be added to the SendGrid request.

```csharp
public bool IncludeContextCustomArgs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_IncludeContextHeaders"></a> IncludeContextHeaders

Gets or sets a value indicating whether safe Cephalon context headers should be added to the SendGrid request.

```csharp
public bool IncludeContextHeaders { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_ProviderMessageIdHeaderName"></a> ProviderMessageIdHeaderName

Gets or sets the SendGrid response header that contains the provider message identifier.

```csharp
public string ProviderMessageIdHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_RecipientEmailMetadataKey"></a> RecipientEmailMetadataKey

Gets or sets the metadata key used to resolve the recipient email address when the invitee id is not an email address.

```csharp
public string RecipientEmailMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The sender checks dispatch metadata first and invitation metadata second. If neither contains a value and
<code>InviteeKind</code> is <code>email</code>, the invitee id is treated as the recipient address.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by <code>TenantInvitationDeliveryRequest.SenderId</code>.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_SubjectTemplate"></a> SubjectTemplate

Gets or sets the SendGrid message subject template.

```csharp
public string SubjectTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_TextBodyTemplate"></a> TextBodyTemplate

Gets or sets the plain-text SendGrid message body template.

```csharp
public string TextBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the SendGrid API request.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Configuration_SendGridInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds SendGrid invitation delivery options from configuration.

```csharp
public static SendGridInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [SendGridInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-configuration-sendgridinvitationdeliveryoptions/)

The bound SendGrid invitation delivery options.
