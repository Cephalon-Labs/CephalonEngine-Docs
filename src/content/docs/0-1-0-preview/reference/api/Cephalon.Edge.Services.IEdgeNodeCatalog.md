---
title: Interface IEdgeNodeCatalog
slug: 0-1-0-preview/reference/api/cephalon-edge-services-iedgenodecatalog
editUrl: false
---

Namespace: [Cephalon.Edge.Services](/0-1-0-preview/reference/api/cephalon-edge-services/)  
Assembly: Cephalon.Edge.dll  

Exposes the merged set of edge nodes available to the active edge runtime.

```csharp
public interface IEdgeNodeCatalog
```

## Properties

### <a id="Cephalon_Edge_Services_IEdgeNodeCatalog_Nodes"></a> Nodes

Gets the effective node set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<EdgeNodeDescriptor> Nodes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EdgeNodeDescriptor](/0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor/)\>

## Methods

### <a id="Cephalon_Edge_Services_IEdgeNodeCatalog_TryGet_System_String_Cephalon_Edge_Services_EdgeNodeDescriptor__"></a> TryGet\(string, out EdgeNodeDescriptor\)

Attempts to resolve an edge node descriptor by identifier.

```csharp
bool TryGet(string nodeId, out EdgeNodeDescriptor node)
```

#### Parameters

`nodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The node identifier to resolve.

`node` [EdgeNodeDescriptor](/0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor/)

When this method returns, contains the resolved node if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the node exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
