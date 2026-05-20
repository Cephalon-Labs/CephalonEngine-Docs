---
title: Class SendGridInvitationDeliveryMessage
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliverymessage
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.dll  

Describes a prepared SendGrid invitation delivery message.

```csharp
public sealed class SendGridInvitationDeliveryMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliverymessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Boolean_"></a> SendGridInvitationDeliveryMessage\(string, string, string?, string, string?, string, string, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, bool\)

Creates a prepared SendGrid invitation delivery message.

```csharp
public SendGridInvitationDeliveryMessage(string messageId, string fromEmail, string? fromName, string toEmail, string? toName, string subject, string textBody, string? htmlBody = null, IReadOnlyList<string>? categories = null, IReadOnlyDictionary<string, string>? customArgs = null, IReadOnlyDictionary<string, string>? headers = null, bool sandboxMode = false)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic Cephalon message identifier carried in SendGrid custom arguments.

`fromEmail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sender email address.

`fromName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional sender display name.

`toEmail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The recipient email address.

`toName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional recipient display name.

`subject` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message subject.

`textBody` [string](https://learn.microsoft.com/dotnet/api/system.string)

The plain-text message body.

`htmlBody` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional HTML message body.

`categories` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

SendGrid categories attached to the message.

`customArgs` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

SendGrid custom arguments attached to the personalization.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Safe SendGrid message headers.

`sandboxMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether SendGrid sandbox mode should be enabled.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_Categories"></a> Categories

Gets SendGrid categories attached to the message.

```csharp
public IReadOnlyList<string> Categories { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_CustomArgs"></a> CustomArgs

Gets SendGrid custom arguments attached to the personalization.

```csharp
public IReadOnlyDictionary<string, string> CustomArgs { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_FromEmail"></a> FromEmail

Gets the sender email address.

```csharp
public string FromEmail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_FromName"></a> FromName

Gets the optional sender display name.

```csharp
public string? FromName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_Headers"></a> Headers

Gets safe SendGrid message headers.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_HtmlBody"></a> HtmlBody

Gets the optional HTML message body.

```csharp
public string? HtmlBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_MessageId"></a> MessageId

Gets the deterministic Cephalon message identifier carried in SendGrid custom arguments.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_SandboxMode"></a> SandboxMode

Gets a value indicating whether SendGrid sandbox mode should be enabled.

```csharp
public bool SandboxMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_Subject"></a> Subject

Gets the message subject.

```csharp
public string Subject { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_TextBody"></a> TextBody

Gets the plain-text message body.

```csharp
public string TextBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_ToEmail"></a> ToEmail

Gets the recipient email address.

```csharp
public string ToEmail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryMessage_ToName"></a> ToName

Gets the optional recipient display name.

```csharp
public string? ToName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
