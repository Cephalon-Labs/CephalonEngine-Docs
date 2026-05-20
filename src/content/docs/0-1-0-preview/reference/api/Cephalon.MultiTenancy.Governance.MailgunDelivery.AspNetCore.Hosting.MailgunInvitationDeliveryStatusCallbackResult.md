---
title: Class MailgunInvitationDeliveryStatusCallbackResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.MailgunDelivery.AspNetCore.dll  

Describes a Mailgun webhook callback translation response.

```csharp
public sealed class MailgunInvitationDeliveryStatusCallbackResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MailgunInvitationDeliveryStatusCallbackResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult__ctor_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Boolean_System_Boolean_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackEventResult__System_Boolean_System_String_System_Int32_"></a> MailgunInvitationDeliveryStatusCallbackResult\(string, int, int, int, int, int, bool, bool, string, string?, IReadOnlyList<MailgunInvitationDeliveryStatusCallbackEventResult\>, bool, string, int\)

Creates a Mailgun callback translation response.

```csharp
public MailgunInvitationDeliveryStatusCallbackResult(string routePattern, int totalEvents, int translatedEvents, int reconciledEvents, int skippedEvents, int deniedEvents, bool signedWebhookVerificationRequired, bool signedWebhookVerified, string signedWebhookVerificationOutcome, string? signedWebhookSignatureField, IReadOnlyList<MailgunInvitationDeliveryStatusCallbackEventResult> events, bool signedWebhookReplayProtectionEnabled = false, string signedWebhookReplayProtectionOutcome = "not-configured", int duplicateEvents = 0)
```

#### Parameters

`routePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The endpoint route pattern that accepted the callback.

`totalEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of events supplied in the callback payload.

`translatedEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of events translated into Cephalon reconciliation requests.

`reconciledEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of events reconciled by Cephalon governance.

`skippedEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of events skipped before reconciliation.

`deniedEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of translated events denied by the reconciler.

`signedWebhookVerificationRequired` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether Mailgun webhook signature verification was required.

`signedWebhookVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the Mailgun webhook signature verified.

`signedWebhookVerificationOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Mailgun webhook signature verification outcome.

`signedWebhookSignatureField` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The Mailgun signature field that verified the callback, when configured.

`events` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[MailgunInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackeventresult/)\>

Per-event translation and reconciliation results.

`signedWebhookReplayProtectionEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether process-local replay protection was enabled for this verified signed callback.

`signedWebhookReplayProtectionOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The replay-protection outcome for this callback.

`duplicateEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of translated Mailgun events skipped because their event id was already observed.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_DeniedEvents"></a> DeniedEvents

Gets the number of translated events denied by the reconciler.

```csharp
public int DeniedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_DuplicateEvents"></a> DuplicateEvents

Gets the number of translated Mailgun events skipped because their event id was already observed.

```csharp
public int DuplicateEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_Events"></a> Events

Gets per-event translation and reconciliation results.

```csharp
public IReadOnlyList<MailgunInvitationDeliveryStatusCallbackEventResult> Events { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[MailgunInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-mailgundelivery-aspnetcore-hosting-mailguninvitationdeliverystatuscallbackeventresult/)\>

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_ReconciledEvents"></a> ReconciledEvents

Gets the number of events reconciled by Cephalon governance.

```csharp
public int ReconciledEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_RoutePattern"></a> RoutePattern

Gets the endpoint route pattern that accepted the callback.

```csharp
public string RoutePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookReplayProtectionEnabled"></a> SignedWebhookReplayProtectionEnabled

Gets a value indicating whether process-local replay protection was enabled for this verified signed callback.

```csharp
public bool SignedWebhookReplayProtectionEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookReplayProtectionOutcome"></a> SignedWebhookReplayProtectionOutcome

Gets the replay-protection outcome for this callback.

```csharp
public string SignedWebhookReplayProtectionOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookSignatureField"></a> SignedWebhookSignatureField

Gets the Mailgun signature field that verified the callback, when configured.

```csharp
public string? SignedWebhookSignatureField { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookVerificationOutcome"></a> SignedWebhookVerificationOutcome

Gets the Mailgun webhook signature verification outcome.

```csharp
public string SignedWebhookVerificationOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookVerificationRequired"></a> SignedWebhookVerificationRequired

Gets a value indicating whether Mailgun webhook signature verification was required.

```csharp
public bool SignedWebhookVerificationRequired { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SignedWebhookVerified"></a> SignedWebhookVerified

Gets a value indicating whether the Mailgun webhook signature verified.

```csharp
public bool SignedWebhookVerified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_SkippedEvents"></a> SkippedEvents

Gets the number of events skipped before reconciliation.

```csharp
public int SkippedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_TotalEvents"></a> TotalEvents

Gets the number of events supplied in the callback payload.

```csharp
public int TotalEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_MailgunDelivery_AspNetCore_Hosting_MailgunInvitationDeliveryStatusCallbackResult_TranslatedEvents"></a> TranslatedEvents

Gets the number of events translated into Cephalon delivery-status events.

```csharp
public int TranslatedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
