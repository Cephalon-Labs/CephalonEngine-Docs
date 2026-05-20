---
title: Class MicrosoftGraphInvitationDeliveryMessage
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliverymessage
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Describes a prepared Microsoft Graph invitation delivery message.

```csharp
public sealed class MicrosoftGraphInvitationDeliveryMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryMessage](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliverymessage/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Boolean_"></a> MicrosoftGraphInvitationDeliveryMessage\(string, string, string, string?, string, string, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, bool\)

Creates a prepared Microsoft Graph invitation delivery message.

```csharp
public MicrosoftGraphInvitationDeliveryMessage(string messageId, string senderUserId, string toEmail, string? toName, string subject, string textBody, string? htmlBody = null, IReadOnlyList<string>? categories = null, IReadOnlyDictionary<string, string>? headers = null, bool saveToSentItems = false)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The deterministic Cephalon message identifier carried in request metadata.

`senderUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Microsoft Graph sender mailbox scope or <code>me</code>.

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

Microsoft Graph categories attached to the message.

`headers` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Safe Microsoft Graph internet message headers.

`saveToSentItems` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether Graph should save the message to Sent Items.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_Categories"></a> Categories

Gets Microsoft Graph categories attached to the message.

```csharp
public IReadOnlyList<string> Categories { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_HasHtmlBody"></a> HasHtmlBody

Gets a value indicating whether the message uses HTML content.

```csharp
public bool HasHtmlBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_Headers"></a> Headers

Gets safe Microsoft Graph internet message headers.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_HtmlBody"></a> HtmlBody

Gets the optional HTML message body.

```csharp
public string? HtmlBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_MessageId"></a> MessageId

Gets the deterministic Cephalon message identifier carried in request metadata.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_SaveToSentItems"></a> SaveToSentItems

Gets a value indicating whether Graph should save the message to Sent Items.

```csharp
public bool SaveToSentItems { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_SenderUserId"></a> SenderUserId

Gets the Microsoft Graph sender mailbox scope or <code>me</code>.

```csharp
public string SenderUserId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_Subject"></a> Subject

Gets the message subject.

```csharp
public string Subject { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_TextBody"></a> TextBody

Gets the plain-text message body.

```csharp
public string TextBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_ToEmail"></a> ToEmail

Gets the recipient email address.

```csharp
public string ToEmail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryMessage_ToName"></a> ToName

Gets the optional recipient display name.

```csharp
public string? ToName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
