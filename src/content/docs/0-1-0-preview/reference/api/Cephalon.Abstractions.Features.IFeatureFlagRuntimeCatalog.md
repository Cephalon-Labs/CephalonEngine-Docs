---
title: Interface IFeatureFlagRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the feature flags visible to the current runtime.

```csharp
public interface IFeatureFlagRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRuntimeCatalog_FeatureFlags"></a> FeatureFlags

Gets all feature flags visible to the current runtime.

```csharp
IReadOnlyList<FeatureFlagDescriptor> FeatureFlags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one feature flag by its stable identifier.

```csharp
FeatureFlagDescriptor? GetById(string featureFlagId)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The feature-flag identifier to resolve.

#### Returns

 [FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)?

The matching feature flag, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all module-owned feature flags contributed by the requested source module.

```csharp
IReadOnlyList<FeatureFlagDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)\>

The matching feature flags, or an empty list when none were contributed.

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRuntimeCatalog_GetDisabled"></a> GetDisabled\(\)

Gets all feature flags that are disabled before targeting is applied.

```csharp
IReadOnlyList<FeatureFlagDescriptor> GetDisabled()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)\>

The disabled feature flags.

### <a id="Cephalon_Abstractions_Features_IFeatureFlagRuntimeCatalog_GetEnabled"></a> GetEnabled\(\)

Gets all feature flags that are enabled before targeting is applied.

```csharp
IReadOnlyList<FeatureFlagDescriptor> GetEnabled()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)\>

The enabled feature flags.
