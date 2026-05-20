---
title: Class SmtpInvitationDeliveryMessage
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliverymessage
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SmtpDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SmtpDelivery.dll  

Describes a prepared SMTP invitation delivery message.

```csharp
public sealed class SmtpInvitationDeliveryMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmtpInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliverymessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SmtpInvitationDeliveryMessage\(string, string, string?, string, string?, string, string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a prepared SMTP invitation delivery message.

```csharp
public SmtpInvitationDeliveryMessage(string messageId, string fromAddress, string? fromDisplayName, string toAddress, string? toDisplayName, string subject, string textBody, string? htmlBody = null, IReadOnlyDictionary<string, string>? headers = null)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic SMTP message identifier.

`fromAddress` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sender email address.

`fromDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional sender display name.

`toAddress` [string](https://learn.microsoft.com/dotnet/api/system.string)

The recipient email address.

`toDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional recipient display name.

`subject` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message subject.

`textBody` [string](https://learn.microsoft.com/dotnet/api/system.string)

The plain-text message body.

`htmlBody` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional HTML message body.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Safe additional SMTP headers.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_FromAddress"></a> FromAddress

Gets the sender email address.

```csharp
public string FromAddress { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_FromDisplayName"></a> FromDisplayName

Gets the optional sender display name.

```csharp
public string? FromDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_Headers"></a> Headers

Gets safe additional SMTP headers.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_HtmlBody"></a> HtmlBody

Gets the optional HTML message body.

```csharp
public string? HtmlBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_MessageId"></a> MessageId

Gets the deterministic SMTP message identifier.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_Subject"></a> Subject

Gets the message subject.

```csharp
public string Subject { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_TextBody"></a> TextBody

Gets the plain-text message body.

```csharp
public string TextBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_ToAddress"></a> ToAddress

Gets the recipient email address.

```csharp
public string ToAddress { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryMessage_ToDisplayName"></a> ToDisplayName

Gets the optional recipient display name.

```csharp
public string? ToDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
