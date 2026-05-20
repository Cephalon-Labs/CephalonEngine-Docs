---
title: Interface ILocalizedResourceContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-localization-ilocalizedresourcecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Localization](/0-1-0-preview/reference/api/cephalon-abstractions-localization/)  
Assembly: Cephalon.Abstractions.dll  

Contributes localized resources to the runtime localization catalog.

```csharp
public interface ILocalizedResourceContributor
```

## Methods

### <a id="Cephalon_Abstractions_Localization_ILocalizedResourceContributor_RegisterResources_Cephalon_Abstractions_Localization_ILocalizedResourceRegistry_"></a> RegisterResources\(ILocalizedResourceRegistry\)

Registers the contributor's localized resources.

```csharp
void RegisterResources(ILocalizedResourceRegistry resources)
```

#### Parameters

`resources` [ILocalizedResourceRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-localization-ilocalizedresourceregistry/)

The registry that accepts localized resources.
