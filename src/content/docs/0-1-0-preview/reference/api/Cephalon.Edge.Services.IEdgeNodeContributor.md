---
title: Interface IEdgeNodeContributor
slug: 0-1-0-preview/reference/api/cephalon-edge-services-iedgenodecontributor
editUrl: false
---

Namespace: [Cephalon.Edge.Services](/0-1-0-preview/reference/api/cephalon-edge-services/)  
Assembly: Cephalon.Edge.dll  

Allows a module to contribute edge nodes into the active edge runtime pack.

```csharp
public interface IEdgeNodeContributor
```

## Methods

### <a id="Cephalon_Edge_Services_IEdgeNodeContributor_RegisterNodes_Cephalon_Edge_Services_IEdgeNodeRegistry_"></a> RegisterNodes\(IEdgeNodeRegistry\)

Registers one or more edge node descriptors with the supplied registry.

```csharp
void RegisterNodes(IEdgeNodeRegistry nodes)
```

#### Parameters

`nodes` [IEdgeNodeRegistry](/0-1-0-preview/reference/api/cephalon-edge-services-iedgenoderegistry/)

The registry that collects contributed node descriptors.
