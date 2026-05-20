---
title: Class EventDispatchExecutionReport
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionreport
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes one reported dispatch observation for a durable event publication path.

```csharp
public sealed class EventDispatchExecutionReport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionreport/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport__ctor_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventDispatchExecutionReport\(string, string, string, DateTimeOffset, string?, int, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new dispatch observation report.

```csharp
public EventDispatchExecutionReport(string outboxId, string channelId, string outcome, DateTimeOffset observedAtUtc, string? messageId = null, int attempt = 1, string? error = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier that owns the dispatch path.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable channel identifier for the dispatched event.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outcome identifier, such as <code>started</code> or <code>retry-scheduled</code>.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the observation occurred.

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable outbound message identifier when available.

`attempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The dispatch attempt number for this observation.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when the observation represents a failure.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the observation.

## Properties

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_Attempt"></a> Attempt

Gets the dispatch attempt number associated with this observation.

```csharp
public int Attempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_ChannelId"></a> ChannelId

Gets the stable channel identifier for the dispatched event.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_Error"></a> Error

Gets the operator-facing error summary when the observation represents a failure.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_MessageId"></a> MessageId

Gets the stable outbound message identifier when one was reported.

```csharp
public string? MessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the observation occurred.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_OutboxId"></a> OutboxId

Gets the stable outbox identifier that owns the dispatch path.

```csharp
public string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionReport_Outcome"></a> Outcome

Gets the stable outcome identifier for the observed dispatch activity.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
