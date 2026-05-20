---
title: Class ExecutionGraphEdgeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphedgedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one directed edge within an execution graph.

```csharp
public sealed class ExecutionGraphEdgeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExecutionGraphEdgeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphedgedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ExecutionGraphEdgeDescriptor\(string, string, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new execution-graph edge descriptor.

```csharp
[JsonConstructor]
public ExecutionGraphEdgeDescriptor(string fromNodeId, string toNodeId, string? displayName = null, string? condition = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`fromNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source node identifier.

`toNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The destination node identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing label for the edge.

`condition` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional condition or routing hint associated with the edge.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the edge.

## Properties

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor_Condition"></a> Condition

Gets the optional condition or routing hint for the edge.

```csharp
public string? Condition { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor_DisplayName"></a> DisplayName

Gets the optional operator-facing label for the edge.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor_FromNodeId"></a> FromNodeId

Gets the source node identifier.

```csharp
public string FromNodeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the edge.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_ExecutionGraphEdgeDescriptor_ToNodeId"></a> ToNodeId

Gets the destination node identifier.

```csharp
public string ToNodeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
