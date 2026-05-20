---
title: Class BehaviorExecutionSlot
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

A compiled, type-safe invocation delegate for a concrete <xref href="Cephalon.Abstractions.Behaviors.IAppBehavior%602" data-throw-if-not-resolved="false"></xref> implementation.
Slots are created once at dispatcher construction time and reused for every dispatch call.

```csharp
public sealed class BehaviorExecutionSlot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionSlot](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorExecutionSlot_For__3"></a> For<TBehavior, TIn, TOut\>\(\)

Creates a <xref href="Cephalon.Behaviors.Services.BehaviorExecutionSlot" data-throw-if-not-resolved="false"></xref> for a behavior whose generic type arguments are known at compile time.

```csharp
public static BehaviorExecutionSlot For<TBehavior, TIn, TOut>() where TBehavior : IAppBehavior<TIn, TOut> where TIn : notnull
```

#### Returns

 [BehaviorExecutionSlot](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot/)

A compiled execution slot for the behavior.

#### Type Parameters

`TBehavior` 

The concrete behavior type.

`TIn` 

The input message type.

`TOut` 

The output message type.

### <a id="Cephalon_Behaviors_Services_BehaviorExecutionSlot_ForType_System_Type_"></a> ForType\(Type\)

Creates a <xref href="Cephalon.Behaviors.Services.BehaviorExecutionSlot" data-throw-if-not-resolved="false"></xref> for a behavior type discovered at runtime via reflection.
The <code>IAppBehavior&lt;TIn, TOut&gt;</code> interface is located on <code class="paramref">behaviorType</code>
and the generic <xref href="Cephalon.Behaviors.Services.BehaviorExecutionSlot.For%60%603" data-throw-if-not-resolved="false"></xref> factory is invoked via reflection once
to build a closed delegate.

```csharp
public static BehaviorExecutionSlot ForType(Type behaviorType)
```

#### Parameters

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The concrete behavior implementation type.

#### Returns

 [BehaviorExecutionSlot](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorexecutionslot/)

A compiled execution slot for the behavior.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when <code class="paramref">behaviorType</code> does not implement <code>IAppBehavior&lt;TIn, TOut&gt;</code>.

### <a id="Cephalon_Behaviors_Services_BehaviorExecutionSlot_InvokeAsync_System_Object_System_Object_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> InvokeAsync\(object, object, IBehaviorContext, CancellationToken\)

Invokes the compiled behavior delegate.

```csharp
public Task<object?> InvokeAsync(object behavior, object input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`behavior` [object](https://learn.microsoft.com/dotnet/api/system.object)

The resolved behavior instance.

`input` [object](https://learn.microsoft.com/dotnet/api/system.object)

The input message object.

`context` IBehaviorContext

The behavior execution context.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the invocation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)?\>

A task that resolves to the behavior output, boxed as <xref href="System.Object" data-throw-if-not-resolved="false"></xref>.
