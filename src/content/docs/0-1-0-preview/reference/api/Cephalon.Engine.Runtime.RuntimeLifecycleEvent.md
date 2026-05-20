---
title: Class RuntimeLifecycleEvent
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleevent
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Captures one operator-facing lifecycle event in the runtime story timeline.

```csharp
public sealed record RuntimeLifecycleEvent : IEquatable<RuntimeLifecycleEvent>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeLifecycleEvent](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleevent/)

#### Implements

[IEquatable<RuntimeLifecycleEvent\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent__ctor_System_DateTimeOffset_Cephalon_Engine_Runtime_RuntimeLifecycleEventScope_System_String_Cephalon_Engine_Runtime_RuntimeLifecycleEventOutcome_Cephalon_Engine_Runtime_RuntimeStatus_System_String_System_String_System_String_System_String_"></a> RuntimeLifecycleEvent\(DateTimeOffset, RuntimeLifecycleEventScope, string, RuntimeLifecycleEventOutcome, RuntimeStatus, string?, string?, string, string?\)

Captures one operator-facing lifecycle event in the runtime story timeline.

```csharp
public RuntimeLifecycleEvent(DateTimeOffset OccurredAtUtc, RuntimeLifecycleEventScope Scope, string Phase, RuntimeLifecycleEventOutcome Outcome, RuntimeStatus RuntimeStatus, string? SubjectId, string? SubjectVersion, string Message, string? ExceptionType)
```

#### Parameters

`OccurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the event was recorded.

`Scope` [RuntimeLifecycleEventScope](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventscope/)

The runtime surface that emitted the event.

`Phase` [string](https://learn.microsoft.com/dotnet/api/system.string)

The lifecycle phase or story phase, such as <code>load</code>, <code>initialize</code>, <code>start</code>, <code>stop</code>, or <code>restart</code>.

`Outcome` [RuntimeLifecycleEventOutcome](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventoutcome/)

The completion outcome for the event.

`RuntimeStatus` [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

The runtime status visible when the event was recorded.

`SubjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The runtime, module, package, execution-graph, or hosted-execution identifier associated with the event when available.

`SubjectVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The version associated with the event subject when available.

`Message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing narrative for the event.

`ExceptionType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The exception type captured for failed events when available.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_ExceptionType"></a> ExceptionType

The exception type captured for failed events when available.

```csharp
public string? ExceptionType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_Message"></a> Message

The operator-facing narrative for the event.

```csharp
public string Message { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_OccurredAtUtc"></a> OccurredAtUtc

The UTC timestamp when the event was recorded.

```csharp
public DateTimeOffset OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_Outcome"></a> Outcome

The completion outcome for the event.

```csharp
public RuntimeLifecycleEventOutcome Outcome { get; init; }
```

#### Property Value

 [RuntimeLifecycleEventOutcome](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventoutcome/)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_Phase"></a> Phase

The lifecycle phase or story phase, such as <code>load</code>, <code>initialize</code>, <code>start</code>, <code>stop</code>, or <code>restart</code>.

```csharp
public string Phase { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_RuntimeStatus"></a> RuntimeStatus

The runtime status visible when the event was recorded.

```csharp
public RuntimeStatus RuntimeStatus { get; init; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_Scope"></a> Scope

The runtime surface that emitted the event.

```csharp
public RuntimeLifecycleEventScope Scope { get; init; }
```

#### Property Value

 [RuntimeLifecycleEventScope](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventscope/)

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_SubjectId"></a> SubjectId

The runtime, module, package, execution-graph, or hosted-execution identifier associated with the event when available.

```csharp
public string? SubjectId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeLifecycleEvent_SubjectVersion"></a> SubjectVersion

The version associated with the event subject when available.

```csharp
public string? SubjectVersion { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
