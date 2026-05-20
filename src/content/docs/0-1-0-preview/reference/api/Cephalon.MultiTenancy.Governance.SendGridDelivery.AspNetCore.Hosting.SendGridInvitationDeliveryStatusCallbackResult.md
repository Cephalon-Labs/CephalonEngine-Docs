---
title: Class SendGridInvitationDeliveryStatusCallbackResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.SendGridDelivery.AspNetCore.dll  

Describes a SendGrid Event Webhook callback translation response.

```csharp
public sealed class SendGridInvitationDeliveryStatusCallbackResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SendGridInvitationDeliveryStatusCallbackResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult__ctor_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackEventResult__System_Boolean_System_Boolean_System_String_System_Boolean_System_String_System_Int32_"></a> SendGridInvitationDeliveryStatusCallbackResult\(string, int, int, int, int, int, IReadOnlyList<SendGridInvitationDeliveryStatusCallbackEventResult\>, bool, bool, string, bool, string, int\)

Creates a SendGrid callback translation response.

```csharp
public SendGridInvitationDeliveryStatusCallbackResult(string routePattern, int totalEvents, int translatedEvents, int reconciledEvents, int skippedEvents, int deniedEvents, IReadOnlyList<SendGridInvitationDeliveryStatusCallbackEventResult> events, bool signedEventWebhookVerificationRequired = false, bool signedEventWebhookVerified = false, string signedEventWebhookVerificationOutcome = "not-configured", bool signedEventWebhookReplayProtectionEnabled = false, string signedEventWebhookReplayProtectionOutcome = "not-configured", int duplicateEvents = 0)
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

`events` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SendGridInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackeventresult/)\>

Per-event translation and reconciliation results.

`signedEventWebhookVerificationRequired` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether SendGrid signed Event Webhook verification was required for this callback.

`signedEventWebhookVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the required SendGrid signed Event Webhook signature verified.

`signedEventWebhookVerificationOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The signed Event Webhook verification outcome for this callback.

`signedEventWebhookReplayProtectionEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether process-local replay protection was enabled for this verified signed callback.

`signedEventWebhookReplayProtectionOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The replay-protection outcome for this callback.

`duplicateEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of translated SendGrid events skipped because their event id was already observed.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_DeniedEvents"></a> DeniedEvents

Gets the number of translated events denied by the reconciler.

```csharp
public int DeniedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_DuplicateEvents"></a> DuplicateEvents

Gets the number of translated SendGrid events skipped because their event id was already observed.

```csharp
public int DuplicateEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_Events"></a> Events

Gets per-event translation and reconciliation results.

```csharp
public IReadOnlyList<SendGridInvitationDeliveryStatusCallbackEventResult> Events { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SendGridInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-sendgriddelivery-aspnetcore-hosting-sendgridinvitationdeliverystatuscallbackeventresult/)\>

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_ReconciledEvents"></a> ReconciledEvents

Gets the number of events reconciled by Cephalon governance.

```csharp
public int ReconciledEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_RoutePattern"></a> RoutePattern

Gets the endpoint route pattern that accepted the callback.

```csharp
public string RoutePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SignedEventWebhookReplayProtectionEnabled"></a> SignedEventWebhookReplayProtectionEnabled

Gets a value indicating whether process-local replay protection was enabled for this verified signed callback.

```csharp
public bool SignedEventWebhookReplayProtectionEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SignedEventWebhookReplayProtectionOutcome"></a> SignedEventWebhookReplayProtectionOutcome

Gets the replay-protection outcome for this callback.

```csharp
public string SignedEventWebhookReplayProtectionOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SignedEventWebhookVerificationOutcome"></a> SignedEventWebhookVerificationOutcome

Gets the signed Event Webhook verification outcome for this callback.

```csharp
public string SignedEventWebhookVerificationOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SignedEventWebhookVerificationRequired"></a> SignedEventWebhookVerificationRequired

Gets a value indicating whether SendGrid signed Event Webhook verification was required for this callback.

```csharp
public bool SignedEventWebhookVerificationRequired { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SignedEventWebhookVerified"></a> SignedEventWebhookVerified

Gets a value indicating whether the required SendGrid signed Event Webhook signature verified.

```csharp
public bool SignedEventWebhookVerified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_SkippedEvents"></a> SkippedEvents

Gets the number of events skipped before reconciliation.

```csharp
public int SkippedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_TotalEvents"></a> TotalEvents

Gets the number of events supplied in the callback payload.

```csharp
public int TotalEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_SendGridDelivery_AspNetCore_Hosting_SendGridInvitationDeliveryStatusCallbackResult_TranslatedEvents"></a> TranslatedEvents

Gets the number of events translated into Cephalon delivery-status events.

```csharp
public int TranslatedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
