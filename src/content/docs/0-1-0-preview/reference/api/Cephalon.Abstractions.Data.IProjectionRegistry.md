---
title: Interface IProjectionRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iprojectionregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Receives projection descriptors contributed by active modules or packages.

```csharp
public interface IProjectionRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Data_IProjectionRegistry_Add_Cephalon_Abstractions_Data_ProjectionDescriptor_"></a> Add\(ProjectionDescriptor\)

Adds a projection to the current runtime composition.

```csharp
void Add(ProjectionDescriptor projection)
```

#### Parameters

`projection` [ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)

The projection descriptor to register.
