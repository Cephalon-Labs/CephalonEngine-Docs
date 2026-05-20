---
title: Class EventSubscriptionExecutionBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes how a declared event subscription binds to a managed execution runtime.

```csharp
public sealed class EventSubscriptionExecutionBindingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionbindingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventSubscriptionExecutionBindingDescriptor\(string, string, string, string, IReadOnlyDictionary<string, string\>?\)

Creates a new managed execution binding descriptor for a declared event subscription.

```csharp
public EventSubscriptionExecutionBindingDescriptor(string subscriptionId, string executionRuntimeId, string executionOwnership = "runtime-managed", string executionMode = "message-handler", IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing managed execution-runtime identifier.

`executionOwnership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing ownership mode for the execution runtime.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution mode for the binding.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the binding.

## Properties

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor_ExecutionMode"></a> ExecutionMode

Gets the operator-facing execution mode for the binding.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing ownership mode for the managed execution runtime.

```csharp
public string ExecutionOwnership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the operator-facing managed execution-runtime identifier.

```csharp
public string ExecutionRuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the binding.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionBindingDescriptor_SubscriptionId"></a> SubscriptionId

Gets the stable declared subscription identifier.

```csharp
public string SubscriptionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
