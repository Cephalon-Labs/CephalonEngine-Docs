---
title: Class SmtpInvitationDeliveryClientResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliveryclientresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SmtpDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.SmtpDelivery.dll  

Describes the result returned by an SMTP invitation delivery client.

```csharp
public sealed class SmtpInvitationDeliveryClientResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SmtpInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-smtpdelivery-services-smtpinvitationdeliveryclientresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryClientResult__ctor_System_Boolean_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SmtpInvitationDeliveryClientResult\(bool, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates an SMTP invitation delivery client result.

```csharp
public SmtpInvitationDeliveryClientResult(bool accepted, string? providerMessageId = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`accepted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the SMTP relay accepted the message.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider or relay message identifier when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-facing outcome reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional safe client metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryClientResult_Accepted"></a> Accepted

Gets a value indicating whether the SMTP relay accepted the message.

```csharp
public bool Accepted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryClientResult_Metadata"></a> Metadata

Gets optional safe client metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryClientResult_ProviderMessageId"></a> ProviderMessageId

Gets the provider or relay message identifier when one is known.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_SmtpDelivery_Services_SmtpInvitationDeliveryClientResult_Reason"></a> Reason

Gets the provider-facing outcome reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
