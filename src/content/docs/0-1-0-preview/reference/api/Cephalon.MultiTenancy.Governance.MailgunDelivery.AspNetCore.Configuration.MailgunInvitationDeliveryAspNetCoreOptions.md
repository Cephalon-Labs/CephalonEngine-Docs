---
title: Class MailgunInvitationDeliveryAspNetCoreOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-configuration-mailguninvitationdeliveryaspnetcoreoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.dll  

Configures ASP.NET Core Mailgun webhook callback translation for tenant-invitation delivery status updates.

```csharp
public sealed class MailgunInvitationDeliveryAspNetCoreOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-configuration-mailguninvitationdeliveryaspnetcoreoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This adapter translates Mailgun webhook payloads and can require Mailgun HMAC-SHA256 webhook signature
verification before reconciliation. It can also reject duplicate signed webhook tokens inside a bounded
process-local replay window and skip duplicate Mailgun event identifiers already present in the delivery-status
observation store. Durable callback inboxes and provider polling are intentionally separate slices.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions__ctor"></a> MailgunInvitationDeliveryAspNetCoreOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Configuration.MailgunInvitationDeliveryAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MailgunInvitationDeliveryAspNetCoreOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_AcceptParentSignature"></a> AcceptParentSignature

Gets or sets a value indicating whether Mailgun <code>parent-signature</code> should be accepted for subaccount
webhook events.

```csharp
public bool AcceptParentSignature { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Mailgun includes <code>parent-signature</code> for subaccount events so receivers can validate with the parent account
signing key. Disable this only when a host deliberately requires the child account signature field.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_Actor"></a> Actor

Gets or sets the actor value recorded on translated Mailgun delivery status observations.

```csharp
public string Actor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_EnableSignedWebhookReplayProtection"></a> EnableSignedWebhookReplayProtection

Gets or sets a value indicating whether verified Mailgun signed webhook tokens should be protected against
replay inside the current process.

```csharp
public bool EnableSignedWebhookReplayProtection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Replay protection is active only when <xref href="Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Configuration.MailgunInvitationDeliveryAspNetCoreOptions.RequireSignedWebhook" data-throw-if-not-resolved="false"></xref> is enabled and the request signature
verifies successfully. The built-in guard stores bounded token fingerprints in memory and does not claim
distributed replay protection or durable provider callback inbox ownership.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_EnableStatusCallbackEndpoint"></a> EnableStatusCallbackEndpoint

Gets or sets a value indicating whether the Mailgun webhook callback endpoint should be mapped.

```csharp
public bool EnableStatusCallbackEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_EnableWebhookEventIdIdempotency"></a> EnableWebhookEventIdIdempotency

Gets or sets a value indicating whether Mailgun webhook event identifiers should be used to skip duplicate
translated events that are already present in the delivery-status observation store.

```csharp
public bool EnableWebhookEventIdIdempotency { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint uses the stable <code>event-data.id</code>-backed observation id generated by the Mailgun mapper. This is
observation-store-backed idempotency, not a durable raw callback inbox or distributed event ledger.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_ExcludeStatusCallbackEndpointFromDescription"></a> ExcludeStatusCallbackEndpointFromDescription

Gets or sets a value indicating whether the Mailgun callback endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeStatusCallbackEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_MapEngagementEventsAsDelivered"></a> MapEngagementEventsAsDelivered

Gets or sets a value indicating whether Mailgun engagement events such as opened and clicked should be recorded as delivered.

```csharp
public bool MapEngagementEventsAsDelivered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> so the endpoint records deliverability events only. Enable this when a
host deliberately wants engagement events to update invitation delivery status.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_MaxEventsPerRequest"></a> MaxEventsPerRequest

Gets or sets the maximum number of Mailgun events accepted in one callback request.

```csharp
public int MaxEventsPerRequest { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Mailgun posts one JSON event object by default. The endpoint also accepts a JSON array for controlled replay and
test harness scenarios while keeping the same bounded parsing posture.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_MaxRequestBodyBytes"></a> MaxRequestBodyBytes

Gets or sets the maximum request body size accepted by the Mailgun callback endpoint, in bytes.

```csharp
public int MaxRequestBodyBytes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_NormalizeProviderMessageIdWithAngleBrackets"></a> NormalizeProviderMessageIdWithAngleBrackets

Gets or sets a value indicating whether Mailgun <code>message.headers.message-id</code> values should be wrapped in angle brackets.

```csharp
public bool NormalizeProviderMessageIdWithAngleBrackets { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Mailgun Messages API responses commonly return an angle-bracketed message id, while webhook headers may surface
the same id without brackets. This normalization keeps Cephalon's provider-message guard useful.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_RecordStatus"></a> RecordStatus

Gets or sets a value indicating whether translated delivery status should be recorded on the invitation.

```csharp
public bool RecordStatus { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_RequireProviderMessageMatch"></a> RequireProviderMessageMatch

Gets or sets a value indicating whether translated Mailgun events must match an existing provider message id.

```csharp
public bool RequireProviderMessageMatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Mailgun webhook payloads expose the message identifier through <code>message.headers.message-id</code>. The default
keeps provider-message guarding enabled and wraps header values in angle brackets to match the Messages API
response id shape used by the sender package.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_RequireSignedWebhook"></a> RequireSignedWebhook

Gets or sets a value indicating whether Mailgun webhook requests must carry a valid Mailgun signature before
payload translation and reconciliation can run.

```csharp
public bool RequireSignedWebhook { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

When enabled, the endpoint verifies the Mailgun HMAC-SHA256 hex digest over <code>timestamp + token</code> using the
configured webhook signing key. Signature verification is separate from replay-token caching so hosts can adopt
authentication first without claiming durable inbox or distributed replay ownership.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_RequireStatusCallbackAuthorization"></a> RequireStatusCallbackAuthorization

Gets or sets a value indicating whether the Mailgun callback endpoint should require authorization.

```csharp
public bool RequireStatusCallbackAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint performs an in-handler authorization check by default. Hosts can satisfy it with ASP.NET Core
authentication, a gateway, or deliberately disable it for trusted test hosts.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_SignedWebhookReplayCacheLimit"></a> SignedWebhookReplayCacheLimit

Gets or sets the maximum number of verified Mailgun webhook token fingerprints retained in the current process.

```csharp
public int SignedWebhookReplayCacheLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

When the bounded cache is full, the oldest token fingerprint is evicted before recording a new accepted signed
callback.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_SignedWebhookReplayRetentionSeconds"></a> SignedWebhookReplayRetentionSeconds

Gets or sets the process-local retention window, in seconds, for verified Mailgun webhook token fingerprints.

```csharp
public int SignedWebhookReplayRetentionSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The endpoint clamps the effective retention to at least one second. The default matches the signature timestamp
tolerance.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_SignedWebhookSignatureToleranceSeconds"></a> SignedWebhookSignatureToleranceSeconds

Gets or sets the allowed clock skew, in seconds, for signed Mailgun webhook timestamps.

```csharp
public int SignedWebhookSignatureToleranceSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The endpoint clamps the effective tolerance to at least one second. The default is five minutes.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_Source"></a> Source

Gets or sets the source value recorded on translated Mailgun delivery status observations.

```csharp
public string Source { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_StatusCallbackAuthorizationPolicy"></a> StatusCallbackAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the Mailgun callback endpoint.

```csharp
public string? StatusCallbackAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_StatusCallbackRoutePattern"></a> StatusCallbackRoutePattern

Gets or sets the ASP.NET Core route pattern used for Mailgun webhook callbacks.

```csharp
public string StatusCallbackRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because this endpoint is a provider-adapter ingress surface, not an
application-owned onboarding API.

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_WebhookSigningKey"></a> WebhookSigningKey

Gets or sets the Mailgun webhook signing key used for HMAC-SHA256 verification.

```csharp
public string? WebhookSigningKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

This is the Mailgun Send webhook signing key, not the Mailgun API key or an Alerts webhook signing key.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Configuration_MailgunInvitationDeliveryAspNetCoreOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads Mailgun ASP.NET Core callback options from configuration.

```csharp
public static MailgunInvitationDeliveryAspNetCoreOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The engine root section path to read from.

#### Returns

 [MailgunInvitationDeliveryAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-configuration-mailguninvitationdeliveryaspnetcoreoptions/)

The parsed Mailgun ASP.NET Core callback options.
