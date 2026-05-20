---
title: Class EventSubscriptionRuntimeMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimemetadatakeys
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Defines stable metadata keys used by the event-subscriptions runtime surface.

```csharp
public static class EventSubscriptionRuntimeMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionRuntimeMetadataKeys](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimemetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These keys appear in the <code>event-subscriptions</code> technology runtime surface so operators
and companion packs can distinguish descriptor-only, application-managed, hosted-execution-linked,
and runtime-bound subscription paths without parsing provider-specific metadata.

## Fields

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_BindingMetadataKeys"></a> BindingMetadataKeys

Identifies the comma-separated metadata keys contributed by the managed execution binding.

```csharp
public const string BindingMetadataKeys = "bindingMetadataKeys"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_BindingMetadataPrefix"></a> BindingMetadataPrefix

Prefix for individual managed execution-binding metadata entries.

```csharp
public const string BindingMetadataPrefix = "binding."
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ChannelId"></a> ChannelId

Identifies the logical event channel consumed by the declared subscription.

```csharp
public const string ChannelId = "channelId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_DeliveryMode"></a> DeliveryMode

Identifies the declared delivery mode for the subscription.

```csharp
public const string DeliveryMode = "deliveryMode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_DispatchRuntime"></a> DispatchRuntime

Identifies who owns the dispatch path feeding subscription execution.

```csharp
public const string DispatchRuntime = "dispatchRuntime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionGraphId"></a> ExecutionGraphId

Identifies the execution graph linked to the subscription's hosted execution.

```csharp
public const string ExecutionGraphId = "executionGraphId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionMode"></a> ExecutionMode

Identifies the execution mode used by the managed subscription binding.

```csharp
public const string ExecutionMode = "executionMode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionOwnership"></a> ExecutionOwnership

Identifies who owns the real subscription execution path.

```csharp
public const string ExecutionOwnership = "executionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionPath"></a> ExecutionPath

Identifies whether an execution path is currently bound, linked, or observed.

```csharp
public const string ExecutionPath = "executionPath"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionReadiness"></a> ExecutionReadiness

Identifies the execution-readiness state derived from managed bindings, hosted execution links, or runtime observations.

```csharp
public const string ExecutionReadiness = "executionReadiness"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionReadinessReasons"></a> ExecutionReadinessReasons

Identifies the comma-separated reasons that explain the execution-readiness state.

```csharp
public const string ExecutionReadinessReasons = "executionReadinessReasons"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ExecutionRuntimeId"></a> ExecutionRuntimeId

Identifies the managed execution-runtime identifier bound to the subscription.

```csharp
public const string ExecutionRuntimeId = "executionRuntimeId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_HandlerId"></a> HandlerId

Identifies the logical handler or consumer declared for the subscription.

```csharp
public const string HandlerId = "handlerId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_HostedExecutionId"></a> HostedExecutionId

Identifies the single hosted execution linked to the declared subscription when exactly one exists.

```csharp
public const string HostedExecutionId = "hostedExecutionId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_HostedExecutionIds"></a> HostedExecutionIds

Identifies all hosted executions linked to the declared subscription.

```csharp
public const string HostedExecutionIds = "hostedExecutionIds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_Inbox"></a> Inbox

Identifies whether an inbox is available for the subscription's channel.

```csharp
public const string Inbox = "inbox"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_InboxIds"></a> InboxIds

Identifies the linked inbox identifiers that can observe the subscription channel.

```csharp
public const string InboxIds = "inboxIds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_InboxLink"></a> InboxLink

Identifies who owns the inbox linkage for the subscription's channel.

```csharp
public const string InboxLink = "inboxLink"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_LastOutcome"></a> LastOutcome

Identifies the latest reported subscription execution outcome.

```csharp
public const string LastOutcome = "lastOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_ReportedMetadataPrefix"></a> ReportedMetadataPrefix

Prefix for individual runtime-observation metadata entries.

```csharp
public const string ReportedMetadataPrefix = "reported."
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_RetryPending"></a> RetryPending

Identifies whether the latest runtime observation says a retry is pending.

```csharp
public const string RetryPending = "retryPending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_RuntimeState"></a> RuntimeState

Identifies whether runtime observations have been reported for the subscription.

```csharp
public const string RuntimeState = "runtimeState"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeMetadataKeys_SubscriptionRuntime"></a> SubscriptionRuntime

Identifies the subscription execution posture, such as application-managed or runtime-bound.

```csharp
public const string SubscriptionRuntime = "subscriptionRuntime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
