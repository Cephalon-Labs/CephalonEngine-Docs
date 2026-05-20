---
title: Class SmtpInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration-smtpinvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SmtpDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.SmtpDelivery.dll  

Configures SMTP relay delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class SmtpInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmtpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration-smtpinvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The SMTP sender sends one email message through a configured SMTP relay. It does not own provider-specific
transactional-email APIs, bounce handling, delivery callbacks, or public onboarding flows.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the SMTP invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_FromAddress"></a> FromAddress

Gets or sets the sender email address used in the SMTP message.

```csharp
public string? FromAddress { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_FromDisplayName"></a> FromDisplayName

Gets or sets the optional sender display name used in the SMTP message.

```csharp
public string? FromDisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_Headers"></a> Headers

Gets or sets additional SMTP message headers added to every delivery message.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_Host"></a> Host

Gets or sets the SMTP relay host name.

```csharp
public string? Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_HtmlBodyTemplate"></a> HtmlBodyTemplate

Gets or sets the optional HTML SMTP message body template.

```csharp
public string? HtmlBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_IncludeContextHeaders"></a> IncludeContextHeaders

Gets or sets a value indicating whether safe Cephalon context headers should be added to the SMTP message.

```csharp
public bool IncludeContextHeaders { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_MessageIdDomain"></a> MessageIdDomain

Gets or sets the domain used for deterministic SMTP <code>Message-Id</code> values.

```csharp
public string MessageIdDomain { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_Password"></a> Password

Gets or sets the SMTP password when the relay requires explicit credentials.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_Port"></a> Port

Gets or sets the SMTP relay port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_RecipientAddressMetadataKey"></a> RecipientAddressMetadataKey

Gets or sets the metadata key used to resolve the recipient email address when the invitee id is not an email address.

```csharp
public string RecipientAddressMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The sender checks dispatch metadata first and invitation metadata second. If neither contains a value and
<code>InviteeKind</code> is <code>email</code>, the invitee id is treated as the recipient address.

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by <code>TenantInvitationDeliveryRequest.SenderId</code>.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_SubjectTemplate"></a> SubjectTemplate

Gets or sets the SMTP message subject template.

```csharp
public string SubjectTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_TextBodyTemplate"></a> TextBodyTemplate

Gets or sets the plain-text SMTP message body template.

```csharp
public string TextBodyTemplate { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the SMTP send operation.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_UseSsl"></a> UseSsl

Gets or sets a value indicating whether SSL/TLS should be enabled for the SMTP relay connection.

```csharp
public bool UseSsl { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_UserName"></a> UserName

Gets or sets the SMTP username when the relay requires explicit credentials.

```csharp
public string? UserName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Configuration_SmtpInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds SMTP invitation delivery options from configuration.

```csharp
public static SmtpInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [SmtpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-configuration-smtpinvitationdeliveryoptions/)

The bound SMTP invitation delivery options.
