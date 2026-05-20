---
title: Class SagaChoreographyRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one active saga-choreography behavior visible to the current runtime.

```csharp
public sealed class SagaChoreographyRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This runtime-facing surface keeps choreography truth derived from the shared behavior topology
and registered implementation types instead of inventing a host-only choreography registry. It
is intentionally static and operator-facing: it describes the active choreography contract
shape, ownership, transports, and publication semantics rather than per-invocation state.

## Constructors

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SagaChoreographyRuntimeDescriptor\(string, string, string, string, string, string, string?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyDictionary<string, string\>?\)

Creates a saga-choreography runtime descriptor.

```csharp
public SagaChoreographyRuntimeDescriptor(string id, string displayName, string description, string behaviorType, string inputType, string resultType, string? localOutputType = null, string? sourceModuleId = null, IReadOnlyList<string>? transportIds = null, IReadOnlyList<string>? requiredFeatureFlagIds = null, IReadOnlyList<int>? successStatusCodes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable choreography behavior identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing choreography name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the choreography behavior.

`behaviorType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete choreography behavior implementation type name.

`inputType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The choreography input type name.

`resultType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior result-contract type name.

`localOutputType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The typed local output carried inside the shared choreography result contract when one is
known.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when the choreography came from an explicit module-owned
behavior.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers that expose the choreography.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered feature-flag identifiers that must resolve to enabled before the choreography can
execute.

`successStatusCodes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The HTTP success status codes the shared choreography strategy can return for local output,
publication-only work, or completion without output.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional operator-facing metadata describing choreography semantics.

## Properties

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_BehaviorType"></a> BehaviorType

Gets the concrete choreography behavior implementation type name.

```csharp
public string BehaviorType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_Description"></a> Description

Gets the human-readable choreography description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing choreography name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_Id"></a> Id

Gets the stable choreography behavior identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_InputType"></a> InputType

Gets the choreography input type name.

```csharp
public string InputType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_LocalOutputType"></a> LocalOutputType

Gets the typed local output carried inside the choreography result contract when one is known.

```csharp
public string? LocalOutputType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_Metadata"></a> Metadata

Gets additional operator-facing metadata describing choreography semantics.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the ordered feature-flag identifiers that gate choreography execution.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_ResultType"></a> ResultType

Gets the behavior result-contract type name.

```csharp
public string ResultType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the owning module identifier when one is known at runtime.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_SuccessStatusCodes"></a> SuccessStatusCodes

Gets the HTTP success status codes the shared choreography strategy can return.

```csharp
public IReadOnlyList<int> SuccessStatusCodes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyRuntimeDescriptor_TransportIds"></a> TransportIds

Gets the transport identifiers that expose the choreography.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
