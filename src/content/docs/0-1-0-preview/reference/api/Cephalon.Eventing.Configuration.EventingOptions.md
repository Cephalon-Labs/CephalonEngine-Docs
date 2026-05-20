---
title: Class EventingOptions
slug: 0-1-0-preview/reference/api/cephalon-eventing-configuration-eventingoptions
editUrl: false
---

Namespace: [Cephalon.Eventing.Configuration](/0-1-0-preview/reference/api/cephalon-eventing-configuration/)  
Assembly: Cephalon.Eventing.dll  

Configures the built-in eventing runtime pack.

```csharp
public sealed class EventingOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventingOptions](/0-1-0-preview/reference/api/cephalon-eventing-configuration-eventingoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed the host-owned part of the eventing runtime. Installed modules can still
contribute additional channels through <xref href="Cephalon.Eventing.Services.IEventChannelContributor" data-throw-if-not-resolved="false"></xref> and
additional subscription descriptors through <xref href="Cephalon.Eventing.Services.IEventSubscriptionContributor" data-throw-if-not-resolved="false"></xref>.

## Constructors

### <a id="Cephalon_Eventing_Configuration_EventingOptions__ctor"></a> EventingOptions\(\)

Creates eventing options with the default host-owned features enabled.

```csharp
public EventingOptions()
```

## Properties

### <a id="Cephalon_Eventing_Configuration_EventingOptions_Channels"></a> Channels

Gets the host-defined event channels that should be available to the eventing runtime.

```csharp
public IList<EventChannelDescriptor> Channels { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)\>

### <a id="Cephalon_Eventing_Configuration_EventingOptions_ContinueInProcessSubscriptionExecutionAfterFailure"></a> ContinueInProcessSubscriptionExecutionAfterFailure

Gets or sets a value indicating whether the in-process publisher should continue executing
later subscriptions on the same channel after one subscription fails.

```csharp
public bool ContinueInProcessSubscriptionExecutionAfterFailure { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The publisher still reports failed subscriptions and throws after the publication attempt
finishes. This setting only controls whether independent subscriptions on the same channel
get a chance to run before the failure is returned to the caller.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_EnableInProcessSubscriptionExecution"></a> EnableInProcessSubscriptionExecution

Gets or sets a value indicating whether the core eventing pack should execute matching
subscription executors directly inside the current process when a publication is accepted.

```csharp
public bool EnableInProcessSubscriptionExecution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is an opt-in managed execution baseline for lightweight hosts and tests. It is not a
durable broker, inbox, or retry runtime; companion packs should still own those richer
delivery guarantees when they are selected.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_EnableInProcessSubscriptionIdempotency"></a> EnableInProcessSubscriptionIdempotency

Gets or sets a value indicating whether the direct in-process publisher should suppress
duplicate completed subscription executions for the same publication identifier.

```csharp
public bool EnableInProcessSubscriptionIdempotency { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a bounded process-local guard for lightweight hosts. It records only successful
direct executions in memory and skips later duplicate <code>subscriptionId + publicationId</code>
pairs while the entry remains in the retention window. It is not a durable inbox,
cross-node idempotency store, or broker-owned exactly-once guarantee.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_EnablePublishing"></a> EnablePublishing

Gets or sets a value indicating whether publishing features are enabled.

```csharp
public bool EnablePublishing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Configuration_EventingOptions_EnableSubscriptions"></a> EnableSubscriptions

Gets or sets a value indicating whether subscription features are enabled.

```csharp
public bool EnableSubscriptions { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Configuration_EventingOptions_InProcessSubscriptionIdempotencyRetentionMinutes"></a> InProcessSubscriptionIdempotencyRetentionMinutes

Gets or sets the number of minutes that successful direct in-process subscription
executions remain eligible for duplicate suppression.

```csharp
public int InProcessSubscriptionIdempotencyRetentionMinutes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value is <code>60</code> minutes. The value is used only when
<xref href="Cephalon.Eventing.Configuration.EventingOptions.EnableInProcessSubscriptionIdempotency" data-throw-if-not-resolved="false"></xref> is enabled.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_InProcessSubscriptionMaxAttempts"></a> InProcessSubscriptionMaxAttempts

Gets or sets the maximum number of direct in-process execution attempts per matching subscription.

```csharp
public int InProcessSubscriptionMaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value of <code>1</code> preserves the no-retry baseline. Values greater than <code>1</code>
enable a bounded, process-local retry loop; this still does not provide durable broker,
inbox, or distributed retry guarantees.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_InProcessSubscriptionRetryDelayMilliseconds"></a> InProcessSubscriptionRetryDelayMilliseconds

Gets or sets the delay in milliseconds before the direct in-process publisher retries a failed subscription attempt.

```csharp
public int InProcessSubscriptionRetryDelayMilliseconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The delay is applied only when <xref href="Cephalon.Eventing.Configuration.EventingOptions.InProcessSubscriptionMaxAttempts" data-throw-if-not-resolved="false"></xref> is greater
than <code>1</code>. The default value of <code>0</code> retries immediately and is useful for tests
and lightweight process-local remediation paths.

### <a id="Cephalon_Eventing_Configuration_EventingOptions_Subscriptions"></a> Subscriptions

Gets the host-defined event subscription descriptors that should be available to the eventing runtime.

```csharp
public IList<EventSubscriptionDescriptor> Subscriptions { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)\>
