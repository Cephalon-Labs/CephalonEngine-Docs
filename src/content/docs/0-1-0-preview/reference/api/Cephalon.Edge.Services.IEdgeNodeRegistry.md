---
title: Interface IEdgeNodeRegistry
slug: 0-1-0-preview/reference/api/cephalon-edge-services-iedgenoderegistry
editUrl: false
---

Namespace: [Cephalon.Edge.Services](/0-1-0-preview/reference/api/cephalon-edge-services/)  
Assembly: Cephalon.Edge.dll  

Collects edge node descriptors contributed to the active edge runtime pack.

```csharp
public interface IEdgeNodeRegistry
```

## Methods

### <a id="Cephalon_Edge_Services_IEdgeNodeRegistry_Add_Cephalon_Edge_Services_EdgeNodeDescriptor_"></a> Add\(EdgeNodeDescriptor\)

Adds an edge node descriptor to the registry.

```csharp
void Add(EdgeNodeDescriptor node)
```

#### Parameters

`node` [EdgeNodeDescriptor](/0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor/)

The node descriptor to contribute.
