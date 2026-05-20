---
title: Class BehaviorResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresult-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a legacy transport-neutral behavior outcome with an optional payload value.

```csharp
public sealed class BehaviorResult<T> : Result<T>, IBehaviorResult
```

#### Type Parameters

`T` 

The payload type carried by the result.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Result<T\>](Cephalon.Abstractions.Behaviors.Result\-1.md) ← 
[BehaviorResult<T\>](Cephalon.Abstractions.Behaviors.BehaviorResult\-1.md)

#### Implements

[IBehaviorResult](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorresult/)

#### Inherited Members

[Result<T\>.Status](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_Status), 
[Result<T\>.Code](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_Code), 
[Result<T\>.Message](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_Message), 
[Result<T\>.IsSuccess](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_IsSuccess), 
[Result<T\>.HasValue](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_HasValue), 
[Result<T\>.Value](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_Value), 
[Result<T\>.Fault](Cephalon.Abstractions.Behaviors.Result\-1.md\#Cephalon\_Abstractions\_Behaviors\_Result\_1\_Fault), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Prefer <xref href="Cephalon.Abstractions.Behaviors.Result%601" data-throw-if-not-resolved="false"></xref> for new authoring code when the shorter name is a better fit.
This type remains available as a compatibility alias.

## Operators

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResult_1_op_Implicit__0__Cephalon_Abstractions_Behaviors_BehaviorResult__0_"></a> implicit operator BehaviorResult<T\>\(T\)

Converts a raw payload value into a successful result.

```csharp
public static implicit operator BehaviorResult<T>(T value)
```

#### Parameters

`value` T

#### Returns

 [BehaviorResult](Cephalon.Abstractions.Behaviors.BehaviorResult\-1.md)<T\>

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResult_1_op_Implicit_Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor__Cephalon_Abstractions_Behaviors_BehaviorResult__0_"></a> implicit operator BehaviorResult<T\>\(BehaviorResultDescriptor\)

Converts a no-payload descriptor into a typed behavior result.

```csharp
public static implicit operator BehaviorResult<T>(BehaviorResultDescriptor descriptor)
```

#### Parameters

`descriptor` [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

#### Returns

 [BehaviorResult](Cephalon.Abstractions.Behaviors.BehaviorResult\-1.md)<T\>
