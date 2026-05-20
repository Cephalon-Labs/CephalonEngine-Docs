---
title: Class AmazonSesSnsSubscriptionConfirmationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Describes a verified Amazon SNS subscription-confirmation request received by the Amazon SES callback adapter.

```csharp
public sealed class AmazonSesSnsSubscriptionConfirmationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesSnsSubscriptionConfirmationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-services-amazonsessnssubscriptionconfirmationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The request intentionally keeps only the values needed by a confirmation client. The signed <code>SubscribeURL</code>
may contain a provider token and should be treated as sensitive by custom client implementations.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest__ctor_System_String_System_String_System_String_System_Uri_System_String_"></a> AmazonSesSnsSubscriptionConfirmationRequest\(string, string, string, Uri, string?\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Services.AmazonSesSnsSubscriptionConfirmationRequest" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AmazonSesSnsSubscriptionConfirmationRequest(string topicArn, string messageId, string token, Uri subscribeUrl, string? timestamp)
```

#### Parameters

`topicArn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS topic ARN from the verified envelope.

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS message id from the verified envelope.

`token` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS confirmation token from the verified envelope.

`subscribeUrl` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The signed SNS subscription confirmation URL.

`timestamp` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SNS timestamp from the verified envelope, when available.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_MessageId"></a> MessageId

Gets the SNS message id from the verified envelope.

```csharp
public string MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_SubscribeUrl"></a> SubscribeUrl

Gets the signed SNS subscription confirmation URL.

```csharp
public Uri SubscribeUrl { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_Timestamp"></a> Timestamp

Gets the SNS timestamp from the verified envelope, when available.

```csharp
public string? Timestamp { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_Token"></a> Token

Gets the SNS confirmation token from the verified envelope.

```csharp
public string Token { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Services_AmazonSesSnsSubscriptionConfirmationRequest_TopicArn"></a> TopicArn

Gets the SNS topic ARN from the verified envelope.

```csharp
public string TopicArn { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
