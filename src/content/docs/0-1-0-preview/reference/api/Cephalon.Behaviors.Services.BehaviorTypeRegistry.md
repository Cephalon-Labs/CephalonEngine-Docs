---
title: Class BehaviorTypeRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviortyperegistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Default mutable implementation of <xref href="Cephalon.Behaviors.Services.IBehaviorTypeRegistry" data-throw-if-not-resolved="false"></xref>.
Populated during DI setup by <code>BehaviorCollectionBuilder.Register&lt;TBehavior&gt;()</code>
and consumed by <xref href="Cephalon.Behaviors.Services.BehaviorDispatcher" data-throw-if-not-resolved="false"></xref> at construction time.

```csharp
public sealed class BehaviorTypeRegistry : IBehaviorTypeRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviortyperegistry/)

#### Implements

[IBehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviortyperegistry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorTypeRegistry__ctor"></a> BehaviorTypeRegistry\(\)

Initializes a new empty <xref href="Cephalon.Behaviors.Services.BehaviorTypeRegistry" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorTypeRegistry()
```

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorTypeRegistry_Register_System_String_System_Type_"></a> Register\(string, Type\)

Registers a mapping from <code class="paramref">behaviorId</code> to <code class="paramref">behaviorType</code>.

```csharp
public void Register(string behaviorId, Type behaviorType)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The concrete behavior implementation type.

### <a id="Cephalon_Behaviors_Services_BehaviorTypeRegistry_TryGetType_System_String_System_Type__"></a> TryGetType\(string, out Type?\)

Attempts to resolve the concrete behavior type for the given identifier.

```csharp
public bool TryGetType(string behaviorId, out Type? behaviorType)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to look up.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)?

When this method returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, receives the concrete behavior type;
otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the identifier is registered; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
