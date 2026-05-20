---
title: Class Abt003ProcessManagerRequiresInboxRule
slug: 0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt003processmanagerrequiresinboxrule
editUrl: false
---

Namespace: [Cephalon.Behaviors.Compatibility](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility/)  
Assembly: Cephalon.Behaviors.dll  

ABT-003: A <code>process-manager</code> behavior must have inbox deduplication enabled
to guarantee exactly-once processing across checkpoints.

```csharp
public sealed class Abt003ProcessManagerRequiresInboxRule : IBehaviorCompatibilityRule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Abt003ProcessManagerRequiresInboxRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt003processmanagerrequiresinboxrule/)

#### Implements

IBehaviorCompatibilityRule

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Compatibility_Abt003ProcessManagerRequiresInboxRule_Description"></a> Description

Gets a human-readable description of the rule.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Compatibility_Abt003ProcessManagerRequiresInboxRule_RuleId"></a> RuleId

Gets the rule identifier <code>ABT-003</code>.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Compatibility_Abt003ProcessManagerRequiresInboxRule_Check_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> Check\(BehaviorTopologyDescriptor\)

Returns a violation when a <code>process-manager</code> behavior does not have inbox enabled.

```csharp
public BehaviorCompatibilityViolation? Check(BehaviorTopologyDescriptor descriptor)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor to evaluate.

#### Returns

 BehaviorCompatibilityViolation?

A <xref href="Cephalon.Abstractions.Behaviors.BehaviorCompatibilityViolation" data-throw-if-not-resolved="false"></xref> with <xref href="Cephalon.Abstractions.Behaviors.CompatibilitySeverity.Error" data-throw-if-not-resolved="false"></xref>
when the rule is violated, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when the descriptor is compliant.
