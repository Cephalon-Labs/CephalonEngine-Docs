---
title: Namespace Cephalon.Abstractions.Features
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features
editUrl: false
---

### Classes

 [FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)

Describes one feature flag visible to the active Cephalon runtime.

 [FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)

Supplies contextual information for evaluating a feature flag at runtime.

 [FeatureFlagEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationresult/)

Describes the result of evaluating a feature flag for a specific runtime context.

 [FeatureFlagProviderBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor/)

Describes one external provider binding attached to a Cephalon-owned feature flag.

 [FeatureFlagProviderEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderevaluationresult/)

Describes the result of evaluating one feature-flag provider binding.

 [FeatureFlagTargetingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor/)

Describes the optional targeting constraints that govern when a feature flag is considered
active for a given runtime evaluation context.

### Interfaces

 [IFeatureFlagContributor](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagcontributor/)

Allows a module to contribute feature flags to the active runtime.

 [IFeatureFlagProvider](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagprovider/)

Evaluates Cephalon feature-flag provider bindings against external or provider-owned state.

 [IFeatureFlagRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagregistry/)

Collects feature flags contributed to the active runtime.

 [IFeatureFlagRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeatureflagruntimecatalog/)

Exposes the feature flags visible to the current runtime.

 [IFeatureToggle](/0-1-0-preview/reference/api/cephalon-abstractions-features-ifeaturetoggle/)

Evaluates runtime feature flags against an optional evaluation context.

### Enums

 [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)

Identifies who owns a feature flag visible to the active runtime.
