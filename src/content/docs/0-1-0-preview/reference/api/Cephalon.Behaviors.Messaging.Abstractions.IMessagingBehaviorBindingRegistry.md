---
title: Interface IMessagingBehaviorBindingRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbindingregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Provides lookup and enumeration of all registered <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBinding" data-throw-if-not-resolved="false"></xref> instances.

```csharp
public interface IMessagingBehaviorBindingRegistry
```

## Properties

### <a id="Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBindingRegistry_All"></a> All

Gets all registered bindings in registration order.

```csharp
IReadOnlyList<IMessagingBehaviorBinding> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)\>

## Methods

### <a id="Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBindingRegistry_GetBinding_System_String_"></a> GetBinding\(string\)

Returns the binding registered for <code class="paramref">transportId</code>,
or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if none is registered.

```csharp
IMessagingBehaviorBinding? GetBinding(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical transport identifier, e.g. <code>"rabbitmq"</code>.

#### Returns

 [IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)?

The matching binding, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
