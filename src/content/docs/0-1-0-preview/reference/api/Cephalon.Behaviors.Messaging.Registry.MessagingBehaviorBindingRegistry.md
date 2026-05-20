---
title: Class MessagingBehaviorBindingRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-registry-messagingbehaviorbindingregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Registry](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-registry/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Default implementation of <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.
Uses a <xref href="System.Collections.Frozen.FrozenDictionary%602" data-throw-if-not-resolved="false"></xref> with <xref href="System.StringComparer.OrdinalIgnoreCase" data-throw-if-not-resolved="false"></xref>
for O(1) lock-free transport id lookup.

```csharp
public sealed class MessagingBehaviorBindingRegistry : IMessagingBehaviorBindingRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessagingBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-registry-messagingbehaviorbindingregistry/)

#### Implements

[IMessagingBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbindingregistry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Messaging_Registry_MessagingBehaviorBindingRegistry__ctor_System_Collections_Generic_IEnumerable_Cephalon_Behaviors_Messaging_Abstractions_IMessagingBehaviorBinding__"></a> MessagingBehaviorBindingRegistry\(IEnumerable<IMessagingBehaviorBinding\>\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Messaging.Registry.MessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>
from the supplied set of bindings.

```csharp
public MessagingBehaviorBindingRegistry(IEnumerable<IMessagingBehaviorBinding> bindings)
```

#### Parameters

`bindings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)\>

All registered messaging transport bindings.

## Properties

### <a id="Cephalon_Behaviors_Messaging_Registry_MessagingBehaviorBindingRegistry_All"></a> All

Gets all registered bindings in registration order.

```csharp
public IReadOnlyList<IMessagingBehaviorBinding> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)\>

## Methods

### <a id="Cephalon_Behaviors_Messaging_Registry_MessagingBehaviorBindingRegistry_GetBinding_System_String_"></a> GetBinding\(string\)

Returns the binding registered for <code class="paramref">transportId</code>,
or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if none is registered.

```csharp
public IMessagingBehaviorBinding? GetBinding(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical transport identifier, e.g. <code>"rabbitmq"</code>.

#### Returns

 [IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)?

The matching binding, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
