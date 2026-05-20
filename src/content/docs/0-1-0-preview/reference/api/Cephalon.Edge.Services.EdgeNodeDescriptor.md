---
title: Class EdgeNodeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor
editUrl: false
---

Namespace: [Cephalon.Edge.Services](/0-1-0-preview/reference/api/cephalon-edge-services/)  
Assembly: Cephalon.Edge.dll  

Describes an edge node that can be surfaced through the edge runtime pack.

```csharp
public sealed class EdgeNodeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeNodeDescriptor](/0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Edge_Services_EdgeNodeDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> EdgeNodeDescriptor\(string, string, string, IReadOnlyList<string\>?\)

Creates a new edge node descriptor.

```csharp
public EdgeNodeDescriptor(string id, string displayName, string description, IReadOnlyList<string>? tags = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable node identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing node name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the node.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the node.

## Properties

### <a id="Cephalon_Edge_Services_EdgeNodeDescriptor_Description"></a> Description

Gets the human-readable description of the node.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Services_EdgeNodeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing display name for the node.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Services_EdgeNodeDescriptor_Id"></a> Id

Gets the stable node identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Edge_Services_EdgeNodeDescriptor_Tags"></a> Tags

Gets the normalized tag set associated with the node.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
