---
title: Class PatternBehaviorExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-hosting-patternbehaviorextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-hosting/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Extension methods for registering pattern execution strategies with the behavior collection builder.

```csharp
public static class PatternBehaviorExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PatternBehaviorExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-hosting-patternbehaviorextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Hosting_PatternBehaviorExtensions_AddBehaviorPatterns_Cephalon_Behaviors_Services_IBehaviorCollectionBuilder_"></a> AddBehaviorPatterns\(IBehaviorCollectionBuilder\)

Registers all built-in pattern execution strategies, their default in-memory stores,
the default in-memory choreography publisher fallback,
and the <xref href="Cephalon.Behaviors.Patterns.Registry.ExecutionStrategyRegistry" data-throw-if-not-resolved="false"></xref> on the service collection.

```csharp
public static IBehaviorCollectionBuilder AddBehaviorPatterns(this IBehaviorCollectionBuilder builder)
```

#### Parameters

`builder` [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The behavior collection builder to configure.

#### Returns

 [IBehaviorCollectionBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviorcollectionbuilder/)

The same builder for fluent chaining.
