---
title: Class AmazonSesSnsSubscriptionConfirmationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Represents the result of confirming an Amazon SNS subscription for Amazon SES callbacks.

```csharp
public sealed class AmazonSesSnsSubscriptionConfirmationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesSnsSubscriptionConfirmationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult__ctor_System_Boolean_System_String_System_String_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AmazonSesSnsSubscriptionConfirmationResult\(bool, string, string, int?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Services.AmazonSesSnsSubscriptionConfirmationResult" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AmazonSesSnsSubscriptionConfirmationResult(bool succeeded, string outcome, string reason, int? statusCode = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`succeeded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the subscription confirmation succeeded.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable confirmation outcome.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable reason for the confirmation result.

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The provider HTTP status code, when one was observed.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Safe provider metadata for operator reporting.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_Metadata"></a> Metadata

Gets safe provider metadata for operator reporting.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_Outcome"></a> Outcome

Gets the stable confirmation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_Reason"></a> Reason

Gets a human-readable reason for the confirmation result.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_StatusCode"></a> StatusCode

Gets the provider HTTP status code, when one was observed.

```csharp
public int? StatusCode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_Succeeded"></a> Succeeded

Gets a value indicating whether the subscription confirmation succeeded.

```csharp
public bool Succeeded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationResult_Confirmed_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Confirmed\(int?, IReadOnlyDictionary<string, string\>?\)

Creates a successful SNS subscription-confirmation result.

```csharp
public static AmazonSesSnsSubscriptionConfirmationResult Confirmed(int? statusCode = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The observed provider status code.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Safe provider metadata for operator reporting.

#### Returns

 [AmazonSesSnsSubscriptionConfirmationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationresult/)

A successful confirmation result.
