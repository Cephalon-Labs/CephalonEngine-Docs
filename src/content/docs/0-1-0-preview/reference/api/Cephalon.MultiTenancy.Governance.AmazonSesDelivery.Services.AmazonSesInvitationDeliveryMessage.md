---
title: Class AmazonSesInvitationDeliveryMessage
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services-amazonsesinvitationdeliverymessage
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.dll  

Describes a prepared Amazon SES invitation delivery message.

```csharp
public sealed class AmazonSesInvitationDeliveryMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-services-amazonsesinvitationdeliverymessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_"></a> AmazonSesInvitationDeliveryMessage\(string, string, string, string, string, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, string?\)

Creates a prepared Amazon SES invitation delivery message.

```csharp
public AmazonSesInvitationDeliveryMessage(string messageId, string from, string toEmail, string subject, string textBody, string? htmlBody = null, IReadOnlyList<string>? replyToAddresses = null, IReadOnlyDictionary<string, string>? tags = null, string? configurationSetName = null)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic Cephalon message identifier carried in Amazon SES message tags.

`from` [string](https://learn.microsoft.com/dotnet/api/system.string)

The formatted sender address.

`toEmail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The recipient email address.

`subject` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message subject.

`textBody` [string](https://learn.microsoft.com/dotnet/api/system.string)

The plain-text message body.

`htmlBody` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional HTML message body.

`replyToAddresses` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Reply-to addresses attached to the message.

`tags` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Amazon SES message tags attached to the message.

`configurationSetName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional SES configuration set name attached to the request.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_ConfigurationSetName"></a> ConfigurationSetName

Gets the optional SES configuration set name attached to the request.

```csharp
public string? ConfigurationSetName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_From"></a> From

Gets the formatted sender address.

```csharp
public string From { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_HasHtmlBody"></a> HasHtmlBody

Gets a value indicating whether the message has an HTML body.

```csharp
public bool HasHtmlBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_HtmlBody"></a> HtmlBody

Gets the optional HTML message body.

```csharp
public string? HtmlBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_MessageId"></a> MessageId

Gets the deterministic Cephalon message identifier carried in Amazon SES message tags.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_ReplyToAddresses"></a> ReplyToAddresses

Gets reply-to addresses attached to the message.

```csharp
public IReadOnlyList<string> ReplyToAddresses { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_Subject"></a> Subject

Gets the message subject.

```csharp
public string Subject { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_Tags"></a> Tags

Gets Amazon SES message tags attached to the message.

```csharp
public IReadOnlyDictionary<string, string> Tags { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_TextBody"></a> TextBody

Gets the plain-text message body.

```csharp
public string TextBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_Services_AmazonSesInvitationDeliveryMessage_ToEmail"></a> ToEmail

Gets the recipient email address.

```csharp
public string ToEmail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
