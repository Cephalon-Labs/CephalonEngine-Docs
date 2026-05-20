---
title: Class MailgunInvitationDeliveryMessage
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services-mailguninvitationdeliverymessage
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.dll  

Describes a prepared Mailgun invitation delivery message.

```csharp
public sealed class MailgunInvitationDeliveryMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-services-mailguninvitationdeliverymessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Boolean_"></a> MailgunInvitationDeliveryMessage\(string, string, string, string, string, string, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, bool\)

Creates a prepared Mailgun invitation delivery message.

```csharp
public MailgunInvitationDeliveryMessage(string messageId, string from, string to, string toEmail, string subject, string textBody, string? htmlBody = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? variables = null, IReadOnlyDictionary<string, string>? headers = null, bool testMode = false)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic Cephalon message identifier carried in Mailgun user variables.

`from` [string](https://learn.microsoft.com/dotnet/api/system.string)

The formatted sender address.

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

The formatted recipient address.

`toEmail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The recipient email address.

`subject` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message subject.

`textBody` [string](https://learn.microsoft.com/dotnet/api/system.string)

The plain-text message body.

`htmlBody` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional HTML message body.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Mailgun tags attached to the message.

`variables` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Mailgun user variables attached to the message.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Mailgun custom headers attached to the message.

`testMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether Mailgun test mode should be enabled.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_From"></a> From

Gets the formatted sender address.

```csharp
public string From { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_Headers"></a> Headers

Gets Mailgun custom headers attached to the message.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_HtmlBody"></a> HtmlBody

Gets the optional HTML message body.

```csharp
public string? HtmlBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_MessageId"></a> MessageId

Gets the deterministic Cephalon message identifier carried in Mailgun user variables.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_Subject"></a> Subject

Gets the message subject.

```csharp
public string Subject { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_Tags"></a> Tags

Gets Mailgun tags attached to the message.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_TestMode"></a> TestMode

Gets a value indicating whether Mailgun test mode should be enabled.

```csharp
public bool TestMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_TextBody"></a> TextBody

Gets the plain-text message body.

```csharp
public string TextBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_To"></a> To

Gets the formatted recipient address.

```csharp
public string To { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_ToEmail"></a> ToEmail

Gets the recipient email address.

```csharp
public string ToEmail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_Services_MailgunInvitationDeliveryMessage_Variables"></a> Variables

Gets Mailgun user variables attached to the message.

```csharp
public IReadOnlyDictionary<string, string> Variables { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>
