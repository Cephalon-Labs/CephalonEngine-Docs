---
title: Interface IFeatureToggle
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-ifeaturetoggle
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Evaluates runtime feature flags against an optional evaluation context.

```csharp
public interface IFeatureToggle
```

## Methods

### <a id="Cephalon_Abstractions_Features_IFeatureToggle_Evaluate_System_String_Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_"></a> Evaluate\(string, FeatureFlagEvaluationContext?\)

Evaluates the requested feature flag and returns a richer operator-facing result.

```csharp
FeatureFlagEvaluationResult Evaluate(string featureFlagId, FeatureFlagEvaluationContext? context = null)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable feature-flag identifier to evaluate.

`context` [FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)?

The optional runtime context used for targeting evaluation.

#### Returns

 [FeatureFlagEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationresult/)

The full evaluation result.

### <a id="Cephalon_Abstractions_Features_IFeatureToggle_IsEnabled_System_String_Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_"></a> IsEnabled\(string, FeatureFlagEvaluationContext?\)

Evaluates whether the requested feature flag is enabled for the supplied context.

```csharp
bool IsEnabled(string featureFlagId, FeatureFlagEvaluationContext? context = null)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable feature-flag identifier to evaluate.

`context` [FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)?

The optional runtime context used for targeting evaluation.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the feature flag resolves to enabled; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
