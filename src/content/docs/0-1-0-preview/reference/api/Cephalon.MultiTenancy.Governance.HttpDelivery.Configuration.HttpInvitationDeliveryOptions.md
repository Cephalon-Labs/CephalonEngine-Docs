---
title: Class HttpInvitationDeliveryOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration-httpinvitationdeliveryoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.HttpDelivery.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.HttpDelivery.dll  

Configures HTTP webhook delivery for tenant invitations dispatched by the governance companion pack.

```csharp
public sealed class HttpInvitationDeliveryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration-httpinvitationdeliveryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The HTTP sender queues or sends a delivery request to a configured endpoint. It does not guarantee final recipient
delivery and does not encode product-specific email, SMS, chat, or identity-provider semantics.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions__ctor"></a> HttpInvitationDeliveryOptions\(\)

Creates HTTP invitation delivery options with the default sender identifier and timeout.

```csharp
public HttpInvitationDeliveryOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_EnableIdempotencyHeader"></a> EnableIdempotencyHeader

Gets or sets a value indicating whether an idempotency key header should be added to delivery requests.

```csharp
public bool EnableIdempotencyHeader { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The key stays stable across retry attempts for the same dispatch and helps receivers de-duplicate side effects.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the HTTP invitation sender should be registered.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_Endpoint"></a> Endpoint

Gets or sets the absolute HTTP endpoint that receives invitation delivery payloads.

```csharp
public string? Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_ExpectedStatusCodes"></a> ExpectedStatusCodes

Gets or sets explicit response status codes that indicate the webhook accepted the dispatch.

```csharp
public IReadOnlyList<int> ExpectedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

When empty, any successful 2xx response is accepted.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_Headers"></a> Headers

Gets or sets additional HTTP headers added to every delivery request.

```csharp
public IReadOnlyDictionary<string, string> Headers { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_IdempotencyHeaderName"></a> IdempotencyHeaderName

Gets or sets the request header that carries the delivery idempotency key.

```csharp
public string IdempotencyHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_IdempotencyMetadataKey"></a> IdempotencyMetadataKey

Gets or sets the dispatch metadata key that can supply a caller-owned idempotency key.

```csharp
public string IdempotencyMetadataKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

When the metadata key is absent or empty, the sender derives a stable hashed key from the tenant, invitation,
channel, and sender identifiers. Caller-supplied values that are too long or unsafe for HTTP headers are hashed
before being sent.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_IncludeInvitationMetadata"></a> IncludeInvitationMetadata

Gets or sets a value indicating whether invitation metadata should be included in the webhook payload.

```csharp
public bool IncludeInvitationMetadata { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_IncludeRequestMetadata"></a> IncludeRequestMetadata

Gets or sets a value indicating whether dispatch request metadata should be included in the webhook payload.

```csharp
public bool IncludeRequestMetadata { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_IncludeResponseBodyInMetadata"></a> IncludeResponseBodyInMetadata

Gets or sets a value indicating whether a bounded response body excerpt should be copied into sender metadata.

```csharp
public bool IncludeResponseBodyInMetadata { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_MaxAttempts"></a> MaxAttempts

Gets or sets the total number of HTTP dispatch attempts for transient delivery failures.

```csharp
public int MaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The value is clamped to the supported range of 1 through 10. The default preserves single-attempt behavior.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_Method"></a> Method

Gets or sets the HTTP method used for delivery requests.

```csharp
public string Method { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_ProviderMessageIdHeaderName"></a> ProviderMessageIdHeaderName

Gets or sets the response header that contains the provider message identifier.

```csharp
public string? ProviderMessageIdHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_ResponseBodyMetadataLimit"></a> ResponseBodyMetadataLimit

Gets or sets the maximum response body characters copied into sender metadata when enabled.

```csharp
public int ResponseBodyMetadataLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_RetryDelayMilliseconds"></a> RetryDelayMilliseconds

Gets or sets the fixed delay, in milliseconds, between retry attempts.

```csharp
public int RetryDelayMilliseconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The value is clamped to the supported range of 0 through 60000 milliseconds.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_RetryStatusCodes"></a> RetryStatusCodes

Gets or sets response status codes that should be retried when the dispatch has attempts remaining.

```csharp
public IReadOnlyList<int> RetryStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

The default covers common transient HTTP responses: 408, 429, 500, 502, 503, and 504.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_RetryTransportFailures"></a> RetryTransportFailures

Gets or sets a value indicating whether transient transport failures should be retried when attempts remain.

```csharp
public bool RetryTransportFailures { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SenderId"></a> SenderId

Gets or sets the sender identifier used by `TenantInvitationDeliveryRequest.SenderId`.

```csharp
public string SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SignatureHeaderName"></a> SignatureHeaderName

Gets or sets the request header that carries the webhook signature.

```csharp
public string SignatureHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SignatureKeyIdHeaderName"></a> SignatureKeyIdHeaderName

Gets or sets the request header that carries the optional signing key identifier.

```csharp
public string SignatureKeyIdHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SignatureTimestampHeaderName"></a> SignatureTimestampHeaderName

Gets or sets the request header that carries the Unix timestamp included in the webhook signature.

```csharp
public string SignatureTimestampHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SigningKeyId"></a> SigningKeyId

Gets or sets an optional key identifier sent with signed webhook requests.

```csharp
public string? SigningKeyId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SigningSecret"></a> SigningSecret

Gets or sets the shared secret used to sign webhook payloads with HMAC-SHA256.

```csharp
public string? SigningSecret { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When empty, the sender does not add Cephalon webhook signature headers.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_SupportedChannels"></a> SupportedChannels

Gets or sets delivery channels accepted by this sender.

```csharp
public IReadOnlyList<string> SupportedChannels { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Remarks

When empty, the sender accepts every requested channel.

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the maximum time allowed for the HTTP delivery request.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Configuration_HttpInvitationDeliveryOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds HTTP invitation delivery options from configuration.

```csharp
public static HttpInvitationDeliveryOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [HttpInvitationDeliveryOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-configuration-httpinvitationdeliveryoptions/)

The bound HTTP invitation delivery options.
