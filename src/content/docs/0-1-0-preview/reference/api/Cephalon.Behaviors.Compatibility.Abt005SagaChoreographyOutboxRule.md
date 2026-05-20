---
title: Class Abt005SagaChoreographyOutboxRule
slug: 0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt005sagachoreographyoutboxrule
editUrl: false
---

Namespace: [Cephalon.Behaviors.Compatibility](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility/)  
Assembly: Cephalon.Behaviors.dll  

ABT-005: A <code>saga-choreography</code> behavior should enable outbox staging
so choreography publications can survive transient failures and retries safely.

```csharp
public sealed class Abt005SagaChoreographyOutboxRule : IBehaviorCompatibilityRule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Abt005SagaChoreographyOutboxRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt005sagachoreographyoutboxrule/)

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

### <a id="Cephalon_Behaviors_Compatibility_Abt005SagaChoreographyOutboxRule_Description"></a> Description

Gets a human-readable description of the rule.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Compatibility_Abt005SagaChoreographyOutboxRule_RuleId"></a> RuleId

Gets the rule identifier <code>ABT-005</code>.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Compatibility_Abt005SagaChoreographyOutboxRule_Check_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> Check\(BehaviorTopologyDescriptor\)

Returns an advisory when a <code>saga-choreography</code> behavior does not have outbox enabled.

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
