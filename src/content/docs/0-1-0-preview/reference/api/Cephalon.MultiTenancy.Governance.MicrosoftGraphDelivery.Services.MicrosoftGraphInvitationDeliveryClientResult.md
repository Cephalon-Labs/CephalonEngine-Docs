---
title: Class MicrosoftGraphInvitationDeliveryClientResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliveryclientresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.MicrosoftGraphDelivery.dll  

Describes the result returned by a Microsoft Graph invitation delivery client.

```csharp
public sealed class MicrosoftGraphInvitationDeliveryClientResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MicrosoftGraphInvitationDeliveryClientResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-microsoftgraphdelivery-services-microsoftgraphinvitationdeliveryclientresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult__ctor_System_Boolean_System_Nullable_System_Int32__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> MicrosoftGraphInvitationDeliveryClientResult\(bool, int?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a Microsoft Graph invitation delivery client result.

```csharp
public MicrosoftGraphInvitationDeliveryClientResult(bool accepted, int? statusCode = null, string? providerMessageId = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`accepted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether Microsoft Graph accepted the request.

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The HTTP status code returned by Microsoft Graph when one is known.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-facing outcome reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional safe client metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult_Accepted"></a> Accepted

Gets a value indicating whether Microsoft Graph accepted the request.

```csharp
public bool Accepted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult_Metadata"></a> Metadata

Gets optional safe client metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier when one is known.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Microsoft Graph <code>sendMail</code> normally returns <code>202 Accepted</code> without a message id. Implementations should
leave this value empty unless they have a real provider message identifier rather than a request-id header.

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult_Reason"></a> Reason

Gets the provider-facing outcome reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MicrosoftGraphDelivery_Services_MicrosoftGraphInvitationDeliveryClientResult_StatusCode"></a> StatusCode

Gets the HTTP status code returned by Microsoft Graph when one is known.

```csharp
public int? StatusCode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
