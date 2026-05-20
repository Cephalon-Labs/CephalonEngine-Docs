---
title: Class HostedExecutionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing hosted or background execution surface contributed by an active module.

```csharp
public sealed class HostedExecutionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> HostedExecutionDescriptor\(string, string, string, string, string, string?, bool, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new hosted execution descriptor.

```csharp
[JsonConstructor]
public HostedExecutionDescriptor(string id, string displayName, string description, string sourceModuleId, string kind, string? executionGraphId = null, bool startsWithHost = true, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable hosted-execution identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing hosted-execution name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the hosted execution.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the hosted execution.

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing hosted-execution kind such as <code>background-service</code>, <code>timer</code>, or <code>listener</code>.

`executionGraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The related execution-graph identifier when this hosted execution drives one graph directly.

`startsWithHost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the hosted execution is expected to become active when the runtime host starts.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the hosted execution.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the hosted execution.

## Properties

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_Description"></a> Description

Gets the human-readable description of the hosted execution.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing hosted-execution name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_ExecutionGraphId"></a> ExecutionGraphId

Gets the related execution-graph identifier when one is declared.

```csharp
public string? ExecutionGraphId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_Id"></a> Id

Gets the stable hosted-execution identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_Kind"></a> Kind

Gets the operator-facing hosted-execution kind.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the hosted execution.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that contributed the hosted execution.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_StartsWithHost"></a> StartsWithHost

Gets a value indicating whether the hosted execution is expected to become active when the runtime host starts.

```csharp
public bool StartsWithHost { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_HostedExecutionDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the hosted execution.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
