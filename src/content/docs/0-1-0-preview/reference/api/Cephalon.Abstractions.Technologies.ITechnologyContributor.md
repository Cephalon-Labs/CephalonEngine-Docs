---
title: Interface ITechnologyContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologycontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Contributes technology descriptors to the runtime catalog.

```csharp
public interface ITechnologyContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ITechnologyContributor_RegisterTechnologies_Cephalon_Abstractions_Technologies_ITechnologyRegistry_"></a> RegisterTechnologies\(ITechnologyRegistry\)

Registers one or more technology descriptors.

```csharp
void RegisterTechnologies(ITechnologyRegistry technologies)
```

#### Parameters

`technologies` [ITechnologyRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyregistry/)

The technology registry receiving contributed technologies.
