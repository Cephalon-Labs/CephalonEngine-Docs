---
title: Interface IEventSubscriptionExecutionReadinessCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ieventsubscriptionexecutionreadinesscatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Reads execution-readiness posture for declared event subscriptions.

```csharp
public interface IEventSubscriptionExecutionReadinessCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IEventSubscriptionExecutionReadinessCatalog_Readiness"></a> Readiness

Gets the current execution-readiness descriptors for declared event subscriptions.

```csharp
IReadOnlyList<EventSubscriptionExecutionReadinessDescriptor> Readiness { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventSubscriptionExecutionReadinessDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IEventSubscriptionExecutionReadinessCatalog_GetBySubscriptionId_System_String_"></a> GetBySubscriptionId\(string\)

Gets the current execution-readiness descriptor for a declared subscription.

```csharp
EventSubscriptionExecutionReadinessDescriptor? GetBySubscriptionId(string subscriptionId)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

#### Returns

 [EventSubscriptionExecutionReadinessDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessdescriptor/)?

The readiness descriptor when the subscription exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

### <a id="Cephalon_Abstractions_Data_IEventSubscriptionExecutionReadinessCatalog_TryGet_System_String_Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessDescriptor__"></a> TryGet\(string, out EventSubscriptionExecutionReadinessDescriptor?\)

Attempts to get the current execution-readiness descriptor for a declared subscription.

```csharp
bool TryGet(string subscriptionId, out EventSubscriptionExecutionReadinessDescriptor? readiness)
```

#### Parameters

`subscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`readiness` [EventSubscriptionExecutionReadinessDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessdescriptor/)?

The resolved readiness descriptor when the subscription exists.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the subscription exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
