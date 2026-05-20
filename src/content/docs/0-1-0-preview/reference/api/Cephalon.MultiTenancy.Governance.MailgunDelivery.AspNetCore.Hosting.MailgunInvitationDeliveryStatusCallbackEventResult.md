---
title: Class MailgunInvitationDeliveryStatusCallbackEventResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackeventresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.dll  

Describes how one Mailgun webhook event was translated and reconciled.

```csharp
public sealed class MailgunInvitationDeliveryStatusCallbackEventResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackeventresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult__ctor_System_Int32_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_String_"></a> MailgunInvitationDeliveryStatusCallbackEventResult\(int, string?, string?, string?, string?, string?, string?, string, bool, bool, string\)

Creates a Mailgun callback event result.

```csharp
public MailgunInvitationDeliveryStatusCallbackEventResult(int index, string? mailgunEventId, string? mailgunMessageId, string? mailgunEventType, string? tenantId, string? invitationId, string? status, string outcome, bool translated, bool reconciled, string reason)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based event index inside the request payload.

`mailgunEventId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Mailgun event identifier when supplied.

`mailgunMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Mailgun message identifier when supplied.

`mailgunEventType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Mailgun event type when supplied.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Cephalon tenant identifier when supplied.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Cephalon invitation identifier when supplied.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized Cephalon delivery status when translated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The translation or reconciliation outcome.

`translated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the event was translated into a reconciliation request.

`reconciled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the event reconciled a tenant invitation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing reason for the event outcome.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Index"></a> Index

Gets the zero-based event index inside the request payload.

```csharp
public int Index { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_InvitationId"></a> InvitationId

Gets the Cephalon invitation identifier when supplied.

```csharp
public string? InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_MailgunEventId"></a> MailgunEventId

Gets the Mailgun event identifier when supplied.

```csharp
public string? MailgunEventId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_MailgunEventType"></a> MailgunEventType

Gets the Mailgun event type when supplied.

```csharp
public string? MailgunEventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_MailgunMessageId"></a> MailgunMessageId

Gets the Mailgun message identifier when supplied.

```csharp
public string? MailgunMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Outcome"></a> Outcome

Gets the translation or reconciliation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Reason"></a> Reason

Gets the operator-facing reason for the event outcome.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Reconciled"></a> Reconciled

Gets a value indicating whether the event reconciled a tenant invitation.

```csharp
public bool Reconciled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Status"></a> Status

Gets the normalized Cephalon delivery status when translated.

```csharp
public string? Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_TenantId"></a> TenantId

Gets the Cephalon tenant identifier when supplied.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult_Translated"></a> Translated

Gets a value indicating whether the event was translated into a reconciliation request.

```csharp
public bool Translated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
