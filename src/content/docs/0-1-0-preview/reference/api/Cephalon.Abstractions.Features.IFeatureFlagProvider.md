---
title: Interface IFeatureFlagProvider
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagprovider
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Evaluates Cephalon feature-flag provider bindings against external or provider-owned state.

```csharp
public interface IFeatureFlagProvider
```

## Remarks

Implementations are expected to answer from cached or in-memory provider state rather than
performing network I/O on the hot execution path.

## Properties

### <a id="Cephalon_Abstractions_Features_IFeatureFlagProvider_ProviderId"></a> ProviderId

Gets the stable provider identifier used by feature-flag bindings.

```csharp
string ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Features_IFeatureFlagProvider_Evaluate_Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor_Cephalon_Abstractions_Features_FeatureFlagDescriptor_Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_"></a> Evaluate\(FeatureFlagProviderBindingDescriptor, FeatureFlagDescriptor, FeatureFlagEvaluationContext?\)

Evaluates one provider binding for the supplied Cephalon feature flag and runtime context.

```csharp
FeatureFlagProviderEvaluationResult Evaluate(FeatureFlagProviderBindingDescriptor binding, FeatureFlagDescriptor featureFlag, FeatureFlagEvaluationContext? context = null)
```

#### Parameters

`binding` [FeatureFlagProviderBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor/)

The provider binding attached to the Cephalon feature flag.

`featureFlag` [FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)

The owning Cephalon feature-flag descriptor.

`context` [FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)?

The optional runtime context used for evaluation.

#### Returns

 [FeatureFlagProviderEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderevaluationresult/)

The provider evaluation result.
