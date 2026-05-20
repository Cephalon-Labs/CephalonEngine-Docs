---
title: Class BehaviorDispatcher
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviordispatcher
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Resolves behavior instances from the service provider and dispatches calls
to the appropriate <xref href="Cephalon.Behaviors.Services.BehaviorExecutionSlot" data-throw-if-not-resolved="false"></xref> by behavior identifier.
The dispatch table is built once at construction time from a frozen dictionary
for O(1) lock-free lookup on every call.

```csharp
public sealed class BehaviorDispatcher
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorDispatcher](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviordispatcher/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorDispatcher__ctor_Cephalon_Abstractions_Behaviors_IBehaviorCatalog_Cephalon_Behaviors_Services_IBehaviorTypeRegistry_System_IServiceProvider_"></a> BehaviorDispatcher\(IBehaviorCatalog, IBehaviorTypeRegistry, IServiceProvider\)

Initializes the dispatcher by building its frozen dispatch table from the catalog and type registry.
Only behaviors that appear in both the catalog and the type registry are dispatchable.

```csharp
public BehaviorDispatcher(IBehaviorCatalog catalog, IBehaviorTypeRegistry typeRegistry, IServiceProvider services)
```

#### Parameters

`catalog` IBehaviorCatalog

The behavior catalog that exposes topology descriptors.

`typeRegistry` [IBehaviorTypeRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviortyperegistry/)

The registry that maps behavior identifiers to concrete types.

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider used to resolve behavior instances at dispatch time.

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorDispatcher_DispatchAsync_System_String_System_Object_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> DispatchAsync\(string, object, IBehaviorContext, CancellationToken\)

Dispatches a call to the behavior identified by <code class="paramref">behaviorId</code>.
The behavior instance is resolved from the service provider on every call.

```csharp
public Task<object?> DispatchAsync(string behaviorId, object input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable identifier of the behavior to invoke.

`input` [object](https://learn.microsoft.com/dotnet/api/system.object)

The input message object.

`context` IBehaviorContext

The behavior execution context.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the dispatch.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)?\>

A task that resolves to the behavior output, boxed as <xref href="System.Object" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 BehaviorNotFoundException

Thrown when <code class="paramref">behaviorId</code> is not present in the dispatch table.
