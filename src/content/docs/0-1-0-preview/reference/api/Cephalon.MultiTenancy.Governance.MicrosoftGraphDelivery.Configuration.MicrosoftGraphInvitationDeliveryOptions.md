---
title: Class MicrosoftGraphInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration-microsoftgraphinvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Configures Microsoft Graph <code>sendMail</code> delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class MicrosoftGraphInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration-microsoftgraphinvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The Microsoft Graph sender posts one JSON <code>sendMail</code> request to Microsoft Graph. It does not own OAuth credential
issuance, mailbox provisioning, Graph change notifications, provider polling, public onboarding, SMS, chat, CRM, or
identity-provider invitation flows.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions__ctor"></a> MicrosoftGraphInvitationDeliveryOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Configuration.MicrosoftGraphInvitationDeliveryOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MicrosoftGraphInvitationDeliveryOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_AcceptedStatusCodes"></a> AcceptedStatusCodes

Gets or sets response status codes that indicate Microsoft Graph accepted the request.

```csharp
public IReadOnlyList<int> AcceptedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

The default accepts <code>202 Accepted</code>, which means Graph accepted the send request but not that downstream mail
delivery has completed.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_AccessToken"></a> AccessToken

Gets or sets an optional static Microsoft Graph bearer token.

```csharp
public string? AccessToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Production hosts should usually register <xref href="Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Services.IMicrosoftGraphInvitationDeliveryAccessTokenProvider" data-throw-if-not-resolved="false"></xref>
instead of storing a short-lived token in configuration.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_ApiVersion"></a> ApiVersion

Gets or sets the Microsoft Graph API version segment.

```csharp
public string ApiVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default is <code>v1.0</code>. Preview or beta endpoints should be used only by hosts that deliberately accept that
external API stability posture.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_BaseUrl"></a> BaseUrl

Gets or sets the Microsoft Graph API base URL.

```csharp
public string BaseUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default targets the global Microsoft Graph cloud. Sovereign-cloud hosts can set this to the appropriate
Graph endpoint while keeping the same <code>sendMail</code> request contract.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_Categories"></a> Categories

Gets or sets Microsoft Graph message categories added to each request.

```csharp
public IReadOnlyList<string> Categories { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the Microsoft Graph invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_Headers"></a> Headers

Gets or sets custom Microsoft Graph internet message headers added to each request.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

The sender keeps only single-line custom <code>x-*</code> headers and filters message-core headers before sending.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_HtmlBodyTemplate"></a> HtmlBodyTemplate

Gets or sets the optional HTML Microsoft Graph message body template.

```csharp
public string? HtmlBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When configured, the sender uses a Graph message body with <code>contentType = HTML</code>. Otherwise it sends a plain
text body.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_IncludeContextHeaders"></a> IncludeContextHeaders

Gets or sets a value indicating whether safe Cephalon context headers should be added to the Graph message.

```csharp
public bool IncludeContextHeaders { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_RecipientEmailMetadataKey"></a> RecipientEmailMetadataKey

Gets or sets the metadata key used to resolve the recipient email address when the invitee id is not an email address.

```csharp
public string RecipientEmailMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The sender checks dispatch metadata first and invitation metadata second. If neither contains a value and
<code>InviteeKind</code> is <code>email</code>, the invitee id is treated as the recipient address.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_SaveToSentItems"></a> SaveToSentItems

Gets or sets a value indicating whether Microsoft Graph should save the message to Sent Items.

```csharp
public bool SaveToSentItems { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> so service-style invitation dispatch does not fill the sender mailbox by
default. Hosts can opt in when mailbox history is part of their compliance posture.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by <code>TenantInvitationDeliveryRequest.SenderId</code>.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_SenderUserId"></a> SenderUserId

Gets or sets the mailbox user id or user principal name used in <code>/users/{id | userPrincipalName}/sendMail</code>.

```csharp
public string? SenderUserId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When omitted, the sender posts to <code>/me/sendMail</code>. Application-permission hosts normally configure this value
and provide a token with Microsoft Graph <code>Mail.Send</code> permission.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_SubjectTemplate"></a> SubjectTemplate

Gets or sets the Microsoft Graph message subject template.

```csharp
public string SubjectTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_TextBodyTemplate"></a> TextBodyTemplate

Gets or sets the plain-text Microsoft Graph message body template.

```csharp
public string TextBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the Microsoft Graph API request.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Configuration_MicrosoftGraphInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Microsoft Graph invitation delivery options from configuration.

```csharp
public static MicrosoftGraphInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MicrosoftGraphInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-configuration-microsoftgraphinvitationdeliveryoptions/)

The bound Microsoft Graph invitation delivery options.
