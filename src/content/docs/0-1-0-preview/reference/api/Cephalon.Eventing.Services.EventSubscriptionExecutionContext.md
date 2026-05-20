---
title: Class EventSubscriptionExecutionContext
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutioncontext
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes the host-agnostic execution context delivered to a managed event-subscription executor.

```csharp
public sealed class EventSubscriptionExecutionContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionExecutionContext](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutioncontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionContext__ctor_Cephalon_Eventing_Services_EventSubscriptionDescriptor_Cephalon_Eventing_Services_EventPublication_System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventSubscriptionExecutionContext\(EventSubscriptionDescriptor, EventPublication, int, IReadOnlyDictionary<string, string\>?\)

Creates a new managed event-subscription execution context.

```csharp
public EventSubscriptionExecutionContext(EventSubscriptionDescriptor subscription, EventPublication publication, int attempt = 1, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`subscription` [EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)

The declared subscription that is being executed.

`publication` [EventPublication](/0-1-0-preview/reference/api/cephalon-eventing-services-eventpublication/)

The staged publication being delivered to the subscription.

`attempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The current managed execution attempt.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the current execution attempt.

## Properties

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionContext_Attempt"></a> Attempt

Gets the current managed execution attempt number.

```csharp
public int Attempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionContext_Metadata"></a> Metadata

Gets operator-facing metadata associated with the current execution attempt.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionContext_Publication"></a> Publication

Gets the staged publication being delivered to the managed subscription.

```csharp
public EventPublication Publication { get; }
```

#### Property Value

 [EventPublication](/0-1-0-preview/reference/api/cephalon-eventing-services-eventpublication/)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionContext_Subscription"></a> Subscription

Gets the declared subscription that is currently being executed.

```csharp
public EventSubscriptionDescriptor Subscription { get; }
```

#### Property Value

 [EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)
