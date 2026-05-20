---
title: Class BehaviorExecutionContext
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutioncontext
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Carries all information needed to execute one behavior invocation.

```csharp
public sealed class BehaviorExecutionContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionContext](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutioncontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_BehaviorContext"></a> BehaviorContext

Gets the transport-neutral behavior context.

```csharp
public required IBehaviorContext BehaviorContext { get; init; }
```

#### Property Value

 IBehaviorContext

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_BehaviorInstance"></a> BehaviorInstance

Gets the resolved behavior instance.

```csharp
public required object BehaviorInstance { get; init; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_Descriptor"></a> Descriptor

Gets the behavior topology descriptor for this invocation.

```csharp
public required BehaviorTopologyDescriptor Descriptor { get; init; }
```

#### Property Value

 BehaviorTopologyDescriptor

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_Input"></a> Input

Gets the deserialized input object.

```csharp
public required object Input { get; init; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_Slot"></a> Slot

Gets the compiled execution slot for invoking the behavior.

```csharp
public required BehaviorExecutionSlot Slot { get; init; }
```

#### Property Value

 [BehaviorExecutionSlot](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot/)
