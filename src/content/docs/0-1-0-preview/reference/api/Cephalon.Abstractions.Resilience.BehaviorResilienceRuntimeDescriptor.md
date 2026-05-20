---
title: Class BehaviorResilienceRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Describes one effective behavior-execution resilience policy exposed by the current runtime.

```csharp
public sealed record BehaviorResilienceRuntimeDescriptor : IEquatable<BehaviorResilienceRuntimeDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorResilienceRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor/)

#### Implements

[IEquatable<BehaviorResilienceRuntimeDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> BehaviorResilienceRuntimeDescriptor\(string, string, string, string, string, IReadOnlyList<string\>, IReadOnlyList<string\>, BehaviorExecutionResilienceSelection, BehaviorExecutionResilienceSelection, IReadOnlyDictionary<string, string\>\)

Describes one effective behavior-execution resilience policy exposed by the current runtime.

```csharp
public BehaviorResilienceRuntimeDescriptor(string Id, string DisplayName, string Description, string ExecutionMode, string Scope, IReadOnlyList<string> BehaviorIds, IReadOnlyList<string> TransportIds, BehaviorExecutionResilienceSelection Requested, BehaviorExecutionResilienceSelection Effective, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`Id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable runtime policy identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable policy name.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable policy description.

`ExecutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The enforcement mode used by the active runtime, such as <code>behavior-dispatch-middleware</code> or <code>contract-only</code>.

`Scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The runtime scope covered by the policy, such as <code>all-behavior-executions</code>.

`BehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The behavior identifiers covered by the policy when it is scoped to a behavior subset.

`TransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The transport identifiers covered by the policy when it is scoped to a transport subset.

`Requested` [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

The requested behavior-execution resilience contract.

`Effective` [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

The effective behavior-execution resilience contract after runtime normalization.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Additional runtime-specific metadata describing the policy.

## Properties

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_BehaviorIds"></a> BehaviorIds

The behavior identifiers covered by the policy when it is scoped to a behavior subset.

```csharp
public IReadOnlyList<string> BehaviorIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Description"></a> Description

The human-readable policy description.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_DisplayName"></a> DisplayName

The human-readable policy name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Effective"></a> Effective

The effective behavior-execution resilience contract after runtime normalization.

```csharp
public BehaviorExecutionResilienceSelection Effective { get; init; }
```

#### Property Value

 [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_ExecutionMode"></a> ExecutionMode

The enforcement mode used by the active runtime, such as <code>behavior-dispatch-middleware</code> or <code>contract-only</code>.

```csharp
public string ExecutionMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Id"></a> Id

The stable runtime policy identifier.

```csharp
public string Id { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Metadata"></a> Metadata

Additional runtime-specific metadata describing the policy.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Requested"></a> Requested

The requested behavior-execution resilience contract.

```csharp
public BehaviorExecutionResilienceSelection Requested { get; init; }
```

#### Property Value

 [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_Scope"></a> Scope

The runtime scope covered by the policy, such as <code>all-behavior-executions</code>.

```csharp
public string Scope { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceRuntimeDescriptor_TransportIds"></a> TransportIds

The transport identifiers covered by the policy when it is scoped to a transport subset.

```csharp
public IReadOnlyList<string> TransportIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
