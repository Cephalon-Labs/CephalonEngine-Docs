---
title: Interface IEventDispatchRuntimeDescriptorCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ieventdispatchruntimedescriptorcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the configured operator-facing durable dispatch runtimes visible to the current runtime.

```csharp
public interface IEventDispatchRuntimeDescriptorCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IEventDispatchRuntimeDescriptorCatalog_Runtimes"></a> Runtimes

Gets the configured dispatch runtimes visible to the current runtime.

```csharp
IReadOnlyList<EventDispatchRuntimeDescriptor> Runtimes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventDispatchRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IEventDispatchRuntimeDescriptorCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one dispatch runtime by its stable identifier.

```csharp
EventDispatchRuntimeDescriptor? GetById(string dispatchRuntimeId)
```

#### Parameters

`dispatchRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dispatch-runtime identifier to resolve.

#### Returns

 [EventDispatchRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimedescriptor/)?

The matching dispatch-runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none exists.
