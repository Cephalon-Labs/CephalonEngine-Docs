---
title: Class EventDispatchRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing durable event-dispatch runtime available to the active Cephalon runtime.

```csharp
public sealed class EventDispatchRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_"></a> EventDispatchRuntimeDescriptor\(string, string, string, IReadOnlyDictionary<string, string\>?, IReadOnlyList<string\>?, EventDispatchRuntimeSummary?\)

Creates a new event-dispatch runtime descriptor.

```csharp
public EventDispatchRuntimeDescriptor(string id, string displayName, string description, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyList<string>? outboxIds = null, EventDispatchRuntimeSummary? summary = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dispatch-runtime identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing dispatch-runtime name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable dispatch-runtime description.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata for the dispatch runtime.

`outboxIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional outbox identifiers explicitly owned by the dispatch runtime when execution ownership is bounded to specific outboxes.

`summary` [EventDispatchRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimesummary/)?

Optional aggregate runtime summary describing the latest reported operator-facing state for the dispatch runtime.

## Properties

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_Description"></a> Description

Gets the human-readable dispatch-runtime description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing dispatch-runtime name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_Id"></a> Id

Gets the stable dispatch-runtime identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata for the dispatch runtime.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_OutboxIds"></a> OutboxIds

Gets the outbox identifiers explicitly owned by the dispatch runtime.

```csharp
public IReadOnlyList<string> OutboxIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_Summary"></a> Summary

Gets the latest aggregate runtime summary reported for the dispatch runtime.

```csharp
public EventDispatchRuntimeSummary Summary { get; }
```

#### Property Value

 [EventDispatchRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimesummary/)
