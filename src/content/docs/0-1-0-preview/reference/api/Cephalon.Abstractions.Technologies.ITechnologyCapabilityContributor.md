---
title: Interface ITechnologyCapabilityContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologycapabilitycontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Contributes capabilities when specific technology profiles are active.

```csharp
public interface ITechnologyCapabilityContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ITechnologyCapabilityContributor_RegisterTechnologyCapabilities_Cephalon_Abstractions_Capabilities_ICapabilityRegistry_Cephalon_Abstractions_Technologies_TechnologySelection_"></a> RegisterTechnologyCapabilities\(ICapabilityRegistry, TechnologySelection\)

Registers capabilities for the active technology selection.

```csharp
void RegisterTechnologyCapabilities(ICapabilityRegistry capabilities, TechnologySelection technologies)
```

#### Parameters

`capabilities` [ICapabilityRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities-icapabilityregistry/)

The capability registry receiving technology capabilities.

`technologies` [TechnologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyselection/)

The active technology selection.
