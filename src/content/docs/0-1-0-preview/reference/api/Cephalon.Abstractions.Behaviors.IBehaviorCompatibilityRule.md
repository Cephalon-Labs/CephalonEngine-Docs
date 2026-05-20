---
title: Interface IBehaviorCompatibilityRule
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcompatibilityrule
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Validates a behavior topology descriptor against a compatibility constraint.

```csharp
public interface IBehaviorCompatibilityRule
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCompatibilityRule_Description"></a> Description

Gets a human-readable description of the rule.

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCompatibilityRule_RuleId"></a> RuleId

Gets the unique rule identifier (e.g. "ABT-001").

```csharp
string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCompatibilityRule_Check_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> Check\(BehaviorTopologyDescriptor\)

Checks the descriptor and returns a violation if the rule is violated, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if valid.

```csharp
BehaviorCompatibilityViolation? Check(BehaviorTopologyDescriptor descriptor)
```

#### Parameters

`descriptor` [BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)

#### Returns

 [BehaviorCompatibilityViolation](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorcompatibilityviolation/)?
