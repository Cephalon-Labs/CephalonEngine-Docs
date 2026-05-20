---
title: Interface IFeatureFlagContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute feature flags to the active runtime.

```csharp
public interface IFeatureFlagContributor
```

## Methods

### <a id="Cephalon_Abstractions_Features_IFeatureFlagContributor_RegisterFeatureFlags_Cephalon_Abstractions_Features_IFeatureFlagRegistry_"></a> RegisterFeatureFlags\(IFeatureFlagRegistry\)

Registers the feature flags owned by the contributing module.

```csharp
void RegisterFeatureFlags(IFeatureFlagRegistry registry)
```

#### Parameters

`registry` [IFeatureFlagRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagregistry/)

The registry that receives feature-flag descriptors.
