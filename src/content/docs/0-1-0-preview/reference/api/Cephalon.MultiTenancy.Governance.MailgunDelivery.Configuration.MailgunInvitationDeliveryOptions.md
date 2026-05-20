---
title: Class MailgunInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration-mailguninvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.dll  

Configures Mailgun Messages API delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class MailgunInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration-mailguninvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The Mailgun sender posts one multipart Messages API request to Mailgun. It does not own Mailgun webhook callbacks,
bounce translation, provider polling, public onboarding, SMS, chat, CRM, or identity-provider invitation flows.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions__ctor"></a> MailgunInvitationDeliveryOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.MailgunDelivery.Configuration.MailgunInvitationDeliveryOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MailgunInvitationDeliveryOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_AcceptedStatusCodes"></a> AcceptedStatusCodes

Gets or sets response status codes that indicate the Mailgun API accepted the request.

```csharp
public IReadOnlyList<int> AcceptedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

The default accepts <code>200 OK</code>, which Mailgun returns when a message is queued.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_ApiKey"></a> ApiKey

Gets or sets the Mailgun private API key used with basic authentication.

```csharp
public string? ApiKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_BaseUrl"></a> BaseUrl

Gets or sets the Mailgun API base URL.

```csharp
public string BaseUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default is the US endpoint. Hosts that use EU regional sending can set this value to
<code>https://api.eu.mailgun.net</code>.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_DomainName"></a> DomainName

Gets or sets the Mailgun sending domain name used in the Messages API route.

```csharp
public string? DomainName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_EnableTestMode"></a> EnableTestMode

Gets or sets a value indicating whether Mailgun test mode should be enabled through <code>o:testmode=yes</code>.

```csharp
public bool EnableTestMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the Mailgun invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_FromEmail"></a> FromEmail

Gets or sets the sender email address used in the Mailgun message.

```csharp
public string? FromEmail { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_FromName"></a> FromName

Gets or sets the optional sender display name used in the Mailgun message.

```csharp
public string? FromName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_Headers"></a> Headers

Gets or sets additional Mailgun custom headers added through <code>h:*</code> form fields.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

The sender filters empty, multi-line, and message-core headers before sending.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_HtmlBodyTemplate"></a> HtmlBodyTemplate

Gets or sets the optional HTML Mailgun message body template.

```csharp
public string? HtmlBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_IncludeContextHeaders"></a> IncludeContextHeaders

Gets or sets a value indicating whether safe Cephalon custom headers should be added to the Mailgun request.

```csharp
public bool IncludeContextHeaders { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_IncludeContextVariables"></a> IncludeContextVariables

Gets or sets a value indicating whether safe Cephalon user variables should be added to the Mailgun request.

```csharp
public bool IncludeContextVariables { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_ProviderMessageIdJsonPropertyName"></a> ProviderMessageIdJsonPropertyName

Gets or sets the JSON property name that contains the Mailgun provider message identifier.

```csharp
public string ProviderMessageIdJsonPropertyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_RecipientEmailMetadataKey"></a> RecipientEmailMetadataKey

Gets or sets the metadata key used to resolve the recipient email address when the invitee id is not an email address.

```csharp
public string RecipientEmailMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The sender checks dispatch metadata first and invitation metadata second. If neither contains a value and
<code>InviteeKind</code> is <code>email</code>, the invitee id is treated as the recipient address.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by <code>TenantInvitationDeliveryRequest.SenderId</code>.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_SubjectTemplate"></a> SubjectTemplate

Gets or sets the Mailgun message subject template.

```csharp
public string SubjectTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_Tags"></a> Tags

Gets or sets Mailgun message tags added through <code>o:tag</code> form fields.

```csharp
public IReadOnlyList<string> Tags { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_TextBodyTemplate"></a> TextBodyTemplate

Gets or sets the plain-text Mailgun message body template.

```csharp
public string TextBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the Mailgun API request.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_Variables"></a> Variables

Gets or sets Mailgun user variables added through <code>v:*</code> form fields.

```csharp
public IReadOnlyDictionary<string, string> Variables { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

These values are sent to Mailgun and may appear in provider activity or webhook data. Do not put secrets here.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Configuration_MailgunInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Mailgun invitation delivery options from configuration.

```csharp
public static MailgunInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MailgunInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-configuration-mailguninvitationdeliveryoptions/)

The bound Mailgun invitation delivery options.
