---
title: Class Abt004CqrsMultipleTransportsRule
slug: 0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt004cqrsmultipletransportsrule
editUrl: false
---

Namespace: [Cephalon.Behaviors.Compatibility](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility/)  
Assembly: Cephalon.Behaviors.dll  

ABT-004: A CQRS behavior with more than one transport may produce unexpected routing ambiguity.

```csharp
public sealed class Abt004CqrsMultipleTransportsRule : IBehaviorCompatibilityRule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Abt004CqrsMultipleTransportsRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt004cqrsmultipletransportsrule/)

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

### <a id="Cephalon_Behaviors_Compatibility_Abt004CqrsMultipleTransportsRule_Description"></a> Description

Gets a human-readable description of the rule.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Compatibility_Abt004CqrsMultipleTransportsRule_RuleId"></a> RuleId

Gets the rule identifier <code>ABT-004</code>.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Compatibility_Abt004CqrsMultipleTransportsRule_Check_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> Check\(BehaviorTopologyDescriptor\)

Returns an advisory when a <code>cqrs</code> behavior is configured with more than one transport.

```csharp
public BehaviorCompatibilityViolation? Check(BehaviorTopologyDescriptor descriptor)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor to evaluate.

#### Returns

 BehaviorCompatibilityViolation?

A <xref href="Cephalon.Abstractions.Behaviors.BehaviorCompatibilityViolation" data-throw-if-not-resolved="false"></xref> with <xref href="Cephalon.Abstractions.Behaviors.CompatibilitySeverity.Advisory" data-throw-if-not-resolved="false"></xref>
when the rule is violated, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when the descriptor is compliant.
