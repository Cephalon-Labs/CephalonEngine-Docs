---
title: Class AmazonSesInvitationDeliveryAspNetCoreOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-configuration-amazonsesinvitationdeliveryaspnetcoreoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Configures ASP.NET Core Amazon SES over SNS callback translation for tenant-invitation delivery status updates.

```csharp
public sealed class AmazonSesInvitationDeliveryAspNetCoreOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-configuration-amazonsesinvitationdeliveryaspnetcoreoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This adapter translates SNS-wrapped Amazon SES event publishing payloads into Cephalon delivery-status
reconciliation requests. It does not own AWS account setup, SES identity verification, SNS topic/subscription
creation beyond optionally confirming signed subscription-confirmation callbacks, durable callback inboxes,
distributed replay protection, or provider polling. When configured, it can verify the Amazon SNS message signature
before translation, confirm verified SNS subscription requests, observe verified unsubscribe-confirmation lifecycle
messages without restoring subscriptions, and skip duplicate SNS message identifiers already recorded by the
Cephalon delivery-status observation store.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions__ctor"></a> AmazonSesInvitationDeliveryAspNetCoreOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Configuration.AmazonSesInvitationDeliveryAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AmazonSesInvitationDeliveryAspNetCoreOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_AcceptRawSesEventPayloads"></a> AcceptRawSesEventPayloads

Gets or sets a value indicating whether raw Amazon SES event payloads should be accepted for controlled replay.

```csharp
public bool AcceptRawSesEventPayloads { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Production SNS HTTP subscriptions post an SNS envelope whose <code>Message</code> field contains the SES event. This
option lets tests or replay tools post the SES event body directly without claiming a durable callback inbox.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_Actor"></a> Actor

Gets or sets the actor value recorded on translated Amazon SES delivery status observations.

```csharp
public string Actor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_AllowedSnsTopicArns"></a> AllowedSnsTopicArns

Gets or sets the SNS topic ARNs accepted by this callback endpoint when topic allow-listing is required.

```csharp
public string[] AllowedSnsTopicArns { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_EnableSnsMessageIdIdempotency"></a> EnableSnsMessageIdIdempotency

Gets or sets a value indicating whether translated SNS notifications should skip duplicate <code>MessageId</code>
values that already exist in the Cephalon delivery-status observation store.

```csharp
public bool EnableSnsMessageIdIdempotency { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This guard uses the stable SNS <code>MessageId</code>-derived observation id emitted by the translator. It does not
replace durable inboxing or distributed callback processing; the durability of the guard follows the configured
<code>ITenantInvitationDeliveryStatusObservationStore</code>.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_EnableSnsReplayProtection"></a> EnableSnsReplayProtection

Gets or sets a value indicating whether verified SNS callbacks should be protected against replay inside the
current process.

```csharp
public bool EnableSnsReplayProtection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Replay protection is active only when <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Configuration.AmazonSesInvitationDeliveryAspNetCoreOptions.RequireSnsSignatureVerification" data-throw-if-not-resolved="false"></xref> is enabled and the SNS
envelope verifies successfully. The built-in guard stores bounded fingerprints derived from <code>TopicArn</code> and
<code>MessageId</code> in memory and does not claim distributed replay protection or durable callback inbox ownership.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_EnableSnsSubscriptionConfirmation"></a> EnableSnsSubscriptionConfirmation

Gets or sets a value indicating whether verified SNS subscription-confirmation messages should be confirmed by
the callback endpoint.

```csharp
public bool EnableSnsSubscriptionConfirmation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This option is disabled by default. When enabled, the endpoint only confirms <code>SubscriptionConfirmation</code>
envelopes after SNS signature verification has succeeded. It does not create SNS topics, configure SES event
destinations, own subscription lifecycle governance, or store confirmation tokens.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_EnableSnsUnsubscribeConfirmationObservation"></a> EnableSnsUnsubscribeConfirmationObservation

Gets or sets a value indicating whether verified SNS unsubscribe-confirmation messages should be reported by the
callback endpoint without restoring the subscription.

```csharp
public bool EnableSnsUnsubscribeConfirmationObservation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This option is active only when <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Configuration.AmazonSesInvitationDeliveryAspNetCoreOptions.RequireSnsSignatureVerification" data-throw-if-not-resolved="false"></xref> is enabled and the SNS envelope
verifies successfully. The endpoint never visits the unsubscribe envelope's <code>SubscribeURL</code>; that URL would
re-confirm the subscription and belongs to an explicit operator or provider lifecycle flow.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_EnableStatusCallbackEndpoint"></a> EnableStatusCallbackEndpoint

Gets or sets a value indicating whether the Amazon SES callback endpoint should be mapped.

```csharp
public bool EnableStatusCallbackEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_ExcludeStatusCallbackEndpointFromDescription"></a> ExcludeStatusCallbackEndpointFromDescription

Gets or sets a value indicating whether the Amazon SES callback endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeStatusCallbackEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_MapEngagementEventsAsDelivered"></a> MapEngagementEventsAsDelivered

Gets or sets a value indicating whether Amazon SES engagement events such as open and click should be recorded as delivered.

```csharp
public bool MapEngagementEventsAsDelivered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> so the endpoint records deliverability events only. Enable this when a
host deliberately wants engagement events to update invitation delivery status.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_MaxEventsPerRequest"></a> MaxEventsPerRequest

Gets or sets the maximum number of Amazon SES events accepted in one callback request.

```csharp
public int MaxEventsPerRequest { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

SNS HTTP callbacks normally contain one SES event in the <code>Message</code> field. Arrays are accepted only for
controlled replay and test harness scenarios while keeping the same bounded parsing posture.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_MaxRequestBodyBytes"></a> MaxRequestBodyBytes

Gets or sets the maximum request body size accepted by the Amazon SES callback endpoint, in bytes.

```csharp
public int MaxRequestBodyBytes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_PinnedSnsSigningCertificatePem"></a> PinnedSnsSigningCertificatePem

Gets or sets a pinned X.509 certificate PEM used to verify SNS signatures instead of downloading the certificate
from <code>SigningCertURL</code>.

```csharp
public string? PinnedSnsSigningCertificatePem { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This is primarily useful for tests, controlled replay, or hosts that deliberately pin the SNS signing
certificate. Production hosts usually leave this unset so the endpoint retrieves the AWS SNS signing
certificate from the validated HTTPS URL in the SNS envelope.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RecordStatus"></a> RecordStatus

Gets or sets a value indicating whether translated delivery status should be recorded on the invitation.

```csharp
public bool RecordStatus { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RequireAllowedSnsTopicArn"></a> RequireAllowedSnsTopicArn

Gets or sets a value indicating whether <code>TopicArn</code> must match <xref href="Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Configuration.AmazonSesInvitationDeliveryAspNetCoreOptions.AllowedSnsTopicArns" data-throw-if-not-resolved="false"></xref> when
signature verification is required.

```csharp
public bool RequireAllowedSnsTopicArn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Keeping this enabled follows the SNS spoofing-prevention guidance that receivers reject messages from
unexpected topics. Disable only for controlled multi-topic gateways that apply their own allow-list.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RequireProviderMessageMatch"></a> RequireProviderMessageMatch

Gets or sets a value indicating whether translated Amazon SES events must match an existing provider message id.

```csharp
public bool RequireProviderMessageMatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Amazon SES event payloads expose the SES-assigned message id through <code>mail.messageId</code>. Keeping this guard
enabled makes the callback translator reconcile only the invitation dispatch previously accepted by SES.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RequireSnsSignatureVerification"></a> RequireSnsSignatureVerification

Gets or sets a value indicating whether SNS message signatures must verify before translation.

```csharp
public bool RequireSnsSignatureVerification { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

When enabled, the endpoint rejects raw SES replay payloads, validates the SNS envelope, verifies the
Base64-encoded RSA signature over the canonical SNS string-to-sign, and records safe verification metadata.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RequireSnsSignatureVersion2"></a> RequireSnsSignatureVersion2

Gets or sets a value indicating whether verified SNS messages must use <code>SignatureVersion</code> 2.

```csharp
public bool RequireSnsSignatureVersion2 { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Amazon SNS topics default to signature version 1, but version 2 uses SHA-256 and is the recommended setting for
new deployments. Disable this only when a host deliberately accepts legacy SHA-1 SNS signatures.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_RequireStatusCallbackAuthorization"></a> RequireStatusCallbackAuthorization

Gets or sets a value indicating whether the Amazon SES callback endpoint should require authorization.

```csharp
public bool RequireStatusCallbackAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint performs an in-handler authorization check by default. Hosts can satisfy it with ASP.NET Core
authentication, a gateway, or deliberately disable it for trusted test hosts.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_SnsReplayCacheLimit"></a> SnsReplayCacheLimit

Gets or sets the maximum number of verified SNS callback replay fingerprints retained in the current process.

```csharp
public int SnsReplayCacheLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

When the bounded cache is full, the oldest fingerprint is evicted before recording a new accepted signed
callback.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_SnsReplayRetentionSeconds"></a> SnsReplayRetentionSeconds

Gets or sets the process-local retention window, in seconds, for verified SNS callback replay fingerprints.

```csharp
public int SnsReplayRetentionSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The endpoint clamps the effective retention to at least one second. The default is five minutes.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_SnsSubscriptionConfirmationTimeoutSeconds"></a> SnsSubscriptionConfirmationTimeoutSeconds

Gets or sets the timeout, in seconds, for an enabled SNS subscription-confirmation HTTP request.

```csharp
public int SnsSubscriptionConfirmationTimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The effective timeout is clamped between one second and five minutes.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_Source"></a> Source

Gets or sets the source value recorded on translated Amazon SES delivery status observations.

```csharp
public string Source { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_StatusCallbackAuthorizationPolicy"></a> StatusCallbackAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the Amazon SES callback endpoint.

```csharp
public string? StatusCallbackAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_StatusCallbackRoutePattern"></a> StatusCallbackRoutePattern

Gets or sets the ASP.NET Core route pattern used for SNS-wrapped Amazon SES callbacks.

```csharp
public string StatusCallbackRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because this endpoint is a provider-adapter ingress surface, not an
application-owned onboarding API.

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_ValidateSnsSigningCertificateChain"></a> ValidateSnsSigningCertificateChain

Gets or sets a value indicating whether the SNS signing certificate chain and validity window should be checked.

```csharp
public bool ValidateSnsSigningCertificateChain { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> for production safety. Tests using self-signed pinned certificates can
disable this without weakening the canonical message-signature proof.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Configuration_AmazonSesInvitationDeliveryAspNetCoreOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads Amazon SES ASP.NET Core callback options from configuration.

```csharp
public static AmazonSesInvitationDeliveryAspNetCoreOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The engine root section path to read from.

#### Returns

 [AmazonSesInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-configuration-amazonsesinvitationdeliveryaspnetcoreoptions/)

The parsed Amazon SES ASP.NET Core callback options.
