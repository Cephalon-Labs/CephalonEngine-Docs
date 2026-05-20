---
title: Class ExecutionGraphNodeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphnodedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one node within an execution graph.

```csharp
public sealed class ExecutionGraphNodeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExecutionGraphNodeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphnodedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ExecutionGraphNodeDescriptor\(string, string, string, string, string?, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new execution-graph node descriptor.

```csharp
[JsonConstructor]
public ExecutionGraphNodeDescriptor(string id, string displayName, string description, string kind, string? moduleId = null, string? capabilityKey = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable node identifier within the graph.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing node name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the node.

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The node kind, such as <code>activity</code>, <code>decision</code>, or <code>wait</code>.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module identifier that primarily owns the node, when different from the graph source.

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The capability key the node intends to drive, when it maps to an existing capability contract.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the node.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the node.

## Properties

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_CapabilityKey"></a> CapabilityKey

Gets the capability key the node intends to drive, when one was declared.

```csharp
public string? CapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_Description"></a> Description

Gets the human-readable description of the node.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing node name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_Id"></a> Id

Gets the stable node identifier within the graph.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_Kind"></a> Kind

Gets the node kind.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the node.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_ModuleId"></a> ModuleId

Gets the module identifier that primarily owns the node, when one was declared.

```csharp
public string? ModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the node.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
