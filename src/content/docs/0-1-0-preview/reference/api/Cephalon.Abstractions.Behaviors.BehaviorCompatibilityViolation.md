---
title: Class BehaviorCompatibilityViolation
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorcompatibilityviolation
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a compatibility rule violation for a behavior topology.

```csharp
public sealed class BehaviorCompatibilityViolation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorCompatibilityViolation](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorcompatibilityviolation/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorCompatibilityViolation__ctor_System_String_System_String_Cephalon_Abstractions_Behaviors_CompatibilitySeverity_System_String_"></a> BehaviorCompatibilityViolation\(string, string, CompatibilitySeverity, string\)

Initializes a new instance of <xref href="Cephalon.Abstractions.Behaviors.BehaviorCompatibilityViolation" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorCompatibilityViolation(string ruleId, string behaviorId, CompatibilitySeverity severity, string message)
```

#### Parameters

`ruleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`severity` [CompatibilitySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-compatibilityseverity/)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorCompatibilityViolation_BehaviorId"></a> BehaviorId

Gets the behavior identifier that triggered the violation.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorCompatibilityViolation_Message"></a> Message

Gets the violation message.

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorCompatibilityViolation_RuleId"></a> RuleId

Gets the rule identifier that was violated.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorCompatibilityViolation_Severity"></a> Severity

Gets the violation severity.

```csharp
public CompatibilitySeverity Severity { get; }
```

#### Property Value

 [CompatibilitySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-compatibilityseverity/)
