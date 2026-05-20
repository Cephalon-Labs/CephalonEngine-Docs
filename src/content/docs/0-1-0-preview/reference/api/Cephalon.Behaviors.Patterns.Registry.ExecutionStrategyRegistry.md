---
title: Class ExecutionStrategyRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-registry-executionstrategyregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Registry](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-registry/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Provides O(1) lookup of <xref href="Cephalon.Behaviors.Patterns.Abstractions.IBehaviorExecutionStrategy" data-throw-if-not-resolved="false"></xref> instances by pattern identifier.
The registry is built once at construction time from a frozen dictionary for lock-free reads.

```csharp
public sealed class ExecutionStrategyRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExecutionStrategyRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-registry-executionstrategyregistry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Registry_ExecutionStrategyRegistry__ctor_System_Collections_Generic_IEnumerable_Cephalon_Behaviors_Patterns_Abstractions_IBehaviorExecutionStrategy__"></a> ExecutionStrategyRegistry\(IEnumerable<IBehaviorExecutionStrategy\>\)

Initializes the registry from the provided strategies.
Duplicate pattern identifiers (case-insensitive) are not allowed.

```csharp
public ExecutionStrategyRegistry(IEnumerable<IBehaviorExecutionStrategy> strategies)
```

#### Parameters

`strategies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)\>

The collection of strategies to register.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Thrown when <code class="paramref">strategies</code> is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Thrown when two strategies share the same pattern identifier.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Registry_ExecutionStrategyRegistry_All"></a> All

Gets all registered strategies.

```csharp
public IReadOnlyList<IBehaviorExecutionStrategy> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Registry_ExecutionStrategyRegistry_GetStrategy_System_String_"></a> GetStrategy\(string\)

Retrieves the strategy for the given pattern identifier.

```csharp
public IBehaviorExecutionStrategy? GetStrategy(string pattern)
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pattern identifier to look up (case-insensitive).

#### Returns

 [IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)?

The matching strategy, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.
