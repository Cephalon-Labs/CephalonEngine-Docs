---
title: Class EventSubscriptionExecutionReadinessDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current execution-readiness posture for one declared event subscription.

```csharp
public sealed class EventSubscriptionExecutionReadinessDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionExecutionReadinessDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventSubscriptionExecutionReadinessDescriptor\(string, string, string, string, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new event-subscription execution-readiness descriptor.

```csharp
public EventSubscriptionExecutionReadinessDescriptor(string subscriptionId, string readinessState, string executionOwnership, string executionMode, string? executionRuntimeId = null, IReadOnlyList<string>? reasons = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`readinessState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable readiness-state identifier.

`executionOwnership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution ownership answer.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution mode answer.

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The managed runtime identifier when a runtime-bound path exists.

`reasons` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered machine-readable reasons that explain the readiness state.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the readiness answer.

## Properties

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_ExecutionMode"></a> ExecutionMode

Gets the operator-facing execution mode answer.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution ownership answer.

```csharp
public string ExecutionOwnership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the managed runtime identifier when a runtime-bound path exists.

```csharp
public string? ExecutionRuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_HasExecutionPath"></a> HasExecutionPath

Gets a value indicating whether Cephalon can currently observe or bind an execution path for the subscription.

```csharp
public bool HasExecutionPath { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the readiness answer.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_ReadinessState"></a> ReadinessState

Gets the stable readiness-state identifier.

```csharp
public string ReadinessState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_Reasons"></a> Reasons

Gets the ordered machine-readable reasons that explain the readiness state.

```csharp
public IReadOnlyList<string> Reasons { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor_SubscriptionId"></a> SubscriptionId

Gets the stable declared subscription identifier.

```csharp
public string SubscriptionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
