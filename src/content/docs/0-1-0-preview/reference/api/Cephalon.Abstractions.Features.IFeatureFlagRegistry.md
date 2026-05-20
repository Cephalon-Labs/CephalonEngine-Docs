---
title: Interface IFeatureFlagRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Collects feature flags contributed to the active runtime.

```csharp
public interface IFeatureFlagRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRegistry_Add_Cephalon_Abstractions_Features_FeatureFlagDescriptor_"></a> Add\(FeatureFlagDescriptor\)

Adds a feature-flag descriptor to the current runtime composition.

```csharp
void Add(FeatureFlagDescriptor featureFlag)
```

#### Parameters

`featureFlag` [FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)

The feature-flag descriptor to register.
