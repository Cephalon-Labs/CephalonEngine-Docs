---
title: Class ExecutionGraphDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing execution graph contributed by an active module.

```csharp
public sealed class ExecutionGraphDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_ExecutionGraphNodeDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ExecutionGraphDescriptor\(string, string, string, string, string, IReadOnlyList<ExecutionGraphNodeDescriptor\>, IReadOnlyList<ExecutionGraphEdgeDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new execution graph descriptor.

```csharp
[JsonConstructor]
public ExecutionGraphDescriptor(string id, string displayName, string description, string sourceModuleId, string entryNodeId, IReadOnlyList<ExecutionGraphNodeDescriptor> nodes, IReadOnlyList<ExecutionGraphEdgeDescriptor>? edges = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-graph identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-graph name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the graph.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the graph.

`entryNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The node identifier where execution should begin.

`nodes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphNodeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphnodedescriptor/)\>

The nodes that participate in the graph.

`edges` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphEdgeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphedgedescriptor/)\>?

The directed edges that connect the graph nodes.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the graph.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the graph.

## Properties

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Description"></a> Description

Gets the human-readable description of the graph.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing execution-graph name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Edges"></a> Edges

Gets the directed edges that connect graph nodes.

```csharp
public IReadOnlyList<ExecutionGraphEdgeDescriptor> Edges { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphEdgeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphedgedescriptor/)\>

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_EntryNodeId"></a> EntryNodeId

Gets the node identifier where execution should begin.

```csharp
public string EntryNodeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Id"></a> Id

Gets the stable execution-graph identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the graph.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Nodes"></a> Nodes

Gets the nodes that participate in the graph.

```csharp
public IReadOnlyList<ExecutionGraphNodeDescriptor> Nodes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphNodeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphnodedescriptor/)\>

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that contributed the graph.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the graph.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
