---
title: Class SendGridInvitationDeliveryStatusCallbackEventResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackeventresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.dll  

Describes how one SendGrid Event Webhook item was translated and reconciled.

```csharp
public sealed class SendGridInvitationDeliveryStatusCallbackEventResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackeventresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult__ctor_System_Int32_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_String_"></a> SendGridInvitationDeliveryStatusCallbackEventResult\(int, string?, string?, string?, string?, string?, string?, string, bool, bool, string\)

Creates a SendGrid callback event result.

```csharp
public SendGridInvitationDeliveryStatusCallbackEventResult(int index, string? sendGridEventId, string? sendGridMessageId, string? sendGridEventType, string? tenantId, string? invitationId, string? status, string outcome, bool translated, bool reconciled, string reason)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based event index inside the request payload.

`sendGridEventId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SendGrid event identifier when supplied.

`sendGridMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SendGrid message identifier when supplied.

`sendGridEventType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SendGrid event type when supplied.

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

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Index"></a> Index

Gets the zero-based event index inside the request payload.

```csharp
public int Index { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_InvitationId"></a> InvitationId

Gets the Cephalon invitation identifier when supplied.

```csharp
public string? InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Outcome"></a> Outcome

Gets the translation or reconciliation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Reason"></a> Reason

Gets the operator-facing reason for the event outcome.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Reconciled"></a> Reconciled

Gets a value indicating whether the event reconciled a tenant invitation.

```csharp
public bool Reconciled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_SendGridEventId"></a> SendGridEventId

Gets the SendGrid event identifier when supplied.

```csharp
public string? SendGridEventId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_SendGridEventType"></a> SendGridEventType

Gets the SendGrid event type when supplied.

```csharp
public string? SendGridEventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_SendGridMessageId"></a> SendGridMessageId

Gets the SendGrid message identifier when supplied.

```csharp
public string? SendGridMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Status"></a> Status

Gets the normalized Cephalon delivery status when translated.

```csharp
public string? Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_TenantId"></a> TenantId

Gets the Cephalon tenant identifier when supplied.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult_Translated"></a> Translated

Gets a value indicating whether the event was translated into a reconciliation request.

```csharp
public bool Translated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
