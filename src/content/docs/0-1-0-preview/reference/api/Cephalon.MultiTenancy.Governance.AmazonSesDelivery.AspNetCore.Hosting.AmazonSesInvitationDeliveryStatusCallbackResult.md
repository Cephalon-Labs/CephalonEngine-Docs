---
title: Class AmazonSesInvitationDeliveryStatusCallbackResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AmazonSesDelivery.AspNetCore.dll  

Describes an Amazon SES over SNS callback translation response.

```csharp
public sealed class AmazonSesInvitationDeliveryStatusCallbackResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AmazonSesInvitationDeliveryStatusCallbackResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult__ctor_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Boolean_System_Boolean_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackEventResult__System_Boolean_System_String_System_Int32_System_Boolean_System_String_System_Int32_System_Int32_System_Boolean_System_String_System_Int32_"></a> AmazonSesInvitationDeliveryStatusCallbackResult\(string, int, int, int, int, int, bool, bool, string, IReadOnlyList<AmazonSesInvitationDeliveryStatusCallbackEventResult\>, bool, string, int, bool, string, int, int, bool, string, int\)

Creates an Amazon SES callback translation response.

```csharp
public AmazonSesInvitationDeliveryStatusCallbackResult(string routePattern, int totalEvents, int translatedEvents, int reconciledEvents, int skippedEvents, int deniedEvents, bool snsSignatureVerificationRequired, bool snsSignatureVerified, string snsSignatureVerificationOutcome, IReadOnlyList<AmazonSesInvitationDeliveryStatusCallbackEventResult> events, bool snsReplayProtectionEnabled = false, string snsReplayProtectionOutcome = "not-configured", int duplicateEvents = 0, bool snsSubscriptionConfirmationEnabled = false, string snsSubscriptionConfirmationOutcome = "not-configured", int subscriptionConfirmationAttempts = 0, int subscriptionConfirmationsSucceeded = 0, bool snsUnsubscribeConfirmationObservationEnabled = false, string snsUnsubscribeConfirmationOutcome = "not-configured", int unsubscribeConfirmationsObserved = 0)
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

`snsSignatureVerificationRequired` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether SNS signature verification was required.

`snsSignatureVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the SNS signature verified.

`snsSignatureVerificationOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS signature verification outcome.

`events` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AmazonSesInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackeventresult/)\>

Per-event translation and reconciliation results.

`snsReplayProtectionEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether process-local SNS replay protection was enabled for this verified callback.

`snsReplayProtectionOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS replay-protection outcome.

`duplicateEvents` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of translated Amazon SES SNS events skipped because their SNS message id was already observed.

`snsSubscriptionConfirmationEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether SNS subscription confirmation was enabled for this callback.

`snsSubscriptionConfirmationOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS subscription-confirmation outcome.

`subscriptionConfirmationAttempts` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-confirmation attempts made by this callback.

`subscriptionConfirmationsSucceeded` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-confirmation attempts that succeeded.

`snsUnsubscribeConfirmationObservationEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether SNS unsubscribe-confirmation observation was enabled for this callback.

`snsUnsubscribeConfirmationOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SNS unsubscribe-confirmation observation outcome.

`unsubscribeConfirmationsObserved` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of unsubscribe-confirmation messages observed by this callback.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_DeniedEvents"></a> DeniedEvents

Gets the number of translated events denied by the reconciler.

```csharp
public int DeniedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_DuplicateEvents"></a> DuplicateEvents

Gets the number of translated Amazon SES SNS events skipped because their SNS message id was already observed.

```csharp
public int DuplicateEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_Events"></a> Events

Gets per-event translation and reconciliation results.

```csharp
public IReadOnlyList<AmazonSesInvitationDeliveryStatusCallbackEventResult> Events { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AmazonSesInvitationDeliveryStatusCallbackEventResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-amazonsesdelivery-aspnetcore-hosting-amazonsesinvitationdeliverystatuscallbackeventresult/)\>

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_ReconciledEvents"></a> ReconciledEvents

Gets the number of events reconciled by Cephalon governance.

```csharp
public int ReconciledEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_RoutePattern"></a> RoutePattern

Gets the endpoint route pattern that accepted the callback.

```csharp
public string RoutePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SkippedEvents"></a> SkippedEvents

Gets the number of events skipped before reconciliation.

```csharp
public int SkippedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsReplayProtectionEnabled"></a> SnsReplayProtectionEnabled

Gets a value indicating whether process-local SNS replay protection was enabled for this verified callback.

```csharp
public bool SnsReplayProtectionEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsReplayProtectionOutcome"></a> SnsReplayProtectionOutcome

Gets the SNS replay-protection outcome.

```csharp
public string SnsReplayProtectionOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsSignatureVerificationOutcome"></a> SnsSignatureVerificationOutcome

Gets the SNS signature verification outcome.

```csharp
public string SnsSignatureVerificationOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsSignatureVerificationRequired"></a> SnsSignatureVerificationRequired

Gets a value indicating whether SNS signature verification was required.

```csharp
public bool SnsSignatureVerificationRequired { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsSignatureVerified"></a> SnsSignatureVerified

Gets a value indicating whether the SNS signature verified.

```csharp
public bool SnsSignatureVerified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsSubscriptionConfirmationEnabled"></a> SnsSubscriptionConfirmationEnabled

Gets a value indicating whether SNS subscription confirmation was enabled for this callback.

```csharp
public bool SnsSubscriptionConfirmationEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsSubscriptionConfirmationOutcome"></a> SnsSubscriptionConfirmationOutcome

Gets the SNS subscription-confirmation outcome.

```csharp
public string SnsSubscriptionConfirmationOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsUnsubscribeConfirmationObservationEnabled"></a> SnsUnsubscribeConfirmationObservationEnabled

Gets a value indicating whether SNS unsubscribe-confirmation observation was enabled for this callback.

```csharp
public bool SnsUnsubscribeConfirmationObservationEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SnsUnsubscribeConfirmationOutcome"></a> SnsUnsubscribeConfirmationOutcome

Gets the SNS unsubscribe-confirmation observation outcome.

```csharp
public string SnsUnsubscribeConfirmationOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SubscriptionConfirmationAttempts"></a> SubscriptionConfirmationAttempts

Gets the number of subscription-confirmation attempts made by this callback.

```csharp
public int SubscriptionConfirmationAttempts { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_SubscriptionConfirmationsSucceeded"></a> SubscriptionConfirmationsSucceeded

Gets the number of subscription-confirmation attempts that succeeded.

```csharp
public int SubscriptionConfirmationsSucceeded { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_TotalEvents"></a> TotalEvents

Gets the number of events supplied in the callback payload.

```csharp
public int TotalEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_TranslatedEvents"></a> TranslatedEvents

Gets the number of events translated into Cephalon delivery-status events.

```csharp
public int TranslatedEvents { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AmazonSesDelivery_AspNetCore_Hosting_AmazonSesInvitationDeliveryStatusCallbackResult_UnsubscribeConfirmationsObserved"></a> UnsubscribeConfirmationsObserved

Gets the number of unsubscribe-confirmation messages observed by this callback.

```csharp
public int UnsubscribeConfirmationsObserved { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
