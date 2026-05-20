---
title: Class AmazonSesInvitationDeliveryStatusCallbackEventResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackeventresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Describes how one SNS-wrapped Amazon SES event was translated and reconciled.

```csharp
public sealed class AmazonSesInvitationDeliveryStatusCallbackEventResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackeventresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult__ctor_System_Int32_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_String_"></a> AmazonSesInvitationDeliveryStatusCallbackEventResult\(int, string?, string?, string?, string?, string?, string?, string?, string, bool, bool, string\)

Creates an Amazon SES callback event result.

```csharp
public AmazonSesInvitationDeliveryStatusCallbackEventResult(int index, string? snsMessageId, string? snsMessageType, string? amazonSesMessageId, string? amazonSesEventType, string? tenantId, string? invitationId, string? status, string outcome, bool translated, bool reconciled, string reason)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based event index inside the request payload.

`snsMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SNS message identifier when supplied.

`snsMessageType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SNS message type when supplied.

`amazonSesMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Amazon SES message identifier when supplied.

`amazonSesEventType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Amazon SES event type when supplied.

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

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_AmazonSesEventType"></a> AmazonSesEventType

Gets the Amazon SES event type when supplied.

```csharp
public string? AmazonSesEventType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_AmazonSesMessageId"></a> AmazonSesMessageId

Gets the Amazon SES message identifier when supplied.

```csharp
public string? AmazonSesMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Index"></a> Index

Gets the zero-based event index inside the request payload.

```csharp
public int Index { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_InvitationId"></a> InvitationId

Gets the Cephalon invitation identifier when supplied.

```csharp
public string? InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Outcome"></a> Outcome

Gets the translation or reconciliation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Reason"></a> Reason

Gets the operator-facing reason for the event outcome.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Reconciled"></a> Reconciled

Gets a value indicating whether the event reconciled a tenant invitation.

```csharp
public bool Reconciled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_SnsMessageId"></a> SnsMessageId

Gets the SNS message identifier when supplied.

```csharp
public string? SnsMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_SnsMessageType"></a> SnsMessageType

Gets the SNS message type when supplied.

```csharp
public string? SnsMessageType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Status"></a> Status

Gets the normalized Cephalon delivery status when translated.

```csharp
public string? Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_TenantId"></a> TenantId

Gets the Cephalon tenant identifier when supplied.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult_Translated"></a> Translated

Gets a value indicating whether the event was translated into a reconciliation request.

```csharp
public bool Translated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
