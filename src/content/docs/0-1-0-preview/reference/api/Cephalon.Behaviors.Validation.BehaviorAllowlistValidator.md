---
title: Class BehaviorAllowlistValidator
slug: 0-1-0-preview/reference/api/cephalon-behaviors-validation-behaviorallowlistvalidator
editUrl: false
---

Namespace: [Cephalon.Behaviors.Validation](/0-1-0-preview/reference/api/cephalon-behaviors-validation/)  
Assembly: Cephalon.Behaviors.dll  

Validates that a behavior's resolved interaction pattern is permitted by its
<xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedPatternsAttribute" data-throw-if-not-resolved="false"></xref>, when one is present.
When the attribute is absent, no restriction is applied.

```csharp
public sealed class BehaviorAllowlistValidator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorAllowlistValidator](/0-1-0-preview/reference/api/cephalon-behaviors-validation-behaviorallowlistvalidator/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Validation_BehaviorAllowlistValidator_Validate_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_System_Type_"></a> Validate\(BehaviorTopologyDescriptor, Type?\)

Validates the resolved topology against the allowlist declared on the behavior type.

```csharp
public static void Validate(BehaviorTopologyDescriptor descriptor, Type? behaviorType)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

The resolved behavior topology descriptor.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)?

The concrete behavior type to inspect for <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedPatternsAttribute" data-throw-if-not-resolved="false"></xref>
and <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedTransportsAttribute" data-throw-if-not-resolved="false"></xref>.
When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, no attribute check is performed.

#### Exceptions

 BehaviorSecurityException

Thrown when the resolved pattern or a transport is not in the declared allowlist.
