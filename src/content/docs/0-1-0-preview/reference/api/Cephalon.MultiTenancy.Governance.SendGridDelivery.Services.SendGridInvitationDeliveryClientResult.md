---
title: Class SendGridInvitationDeliveryClientResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliveryclientresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.dll  

Describes the result returned by a SendGrid invitation delivery client.

```csharp
public sealed class SendGridInvitationDeliveryClientResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-services-sendgridinvitationdeliveryclientresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult__ctor_System_Boolean_System_Nullable_System_Int32__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SendGridInvitationDeliveryClientResult\(bool, int?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a SendGrid invitation delivery client result.

```csharp
public SendGridInvitationDeliveryClientResult(bool accepted, int? statusCode = null, string? providerMessageId = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`accepted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the SendGrid API accepted the request.

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The HTTP status code returned by SendGrid when one is known.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SendGrid message identifier when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-facing outcome reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional safe client metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult_Accepted"></a> Accepted

Gets a value indicating whether the SendGrid API accepted the request.

```csharp
public bool Accepted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult_Metadata"></a> Metadata

Gets optional safe client metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult_ProviderMessageId"></a> ProviderMessageId

Gets the SendGrid message identifier when one is known.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult_Reason"></a> Reason

Gets the provider-facing outcome reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_Services_SendGridInvitationDeliveryClientResult_StatusCode"></a> StatusCode

Gets the HTTP status code returned by SendGrid when one is known.

```csharp
public int? StatusCode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
