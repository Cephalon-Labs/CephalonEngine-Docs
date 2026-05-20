---
title: Namespace Cephalon.Abstractions.Resilience
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience
editUrl: false
---

### Classes

 [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

Describes the subset of resilience policy selections that apply to behavior execution pipelines.

 [BehaviorResilienceExceptionContext](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptioncontext/)

Describes one behavior-execution exception being evaluated by the resilience pipeline.

 [BehaviorResilienceRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor/)

Describes one effective behavior-execution resilience policy exposed by the current runtime.

 [RateLimitingRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor/)

Describes one effective HTTP rate-limiting policy exposed by the current runtime.

### Interfaces

 [IBehaviorResilienceExceptionClassifier](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ibehaviorresilienceexceptionclassifier/)

Classifies behavior-execution exceptions for resilience handling.

 [IBehaviorResilienceRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ibehaviorresilienceruntimecatalog/)

Exposes the active behavior-execution resilience policies visible to the current runtime.

 [IRateLimitingRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-iratelimitingruntimecatalog/)

Exposes the active HTTP rate-limiting policies visible to the current runtime.

### Enums

 [BehaviorResilienceExceptionHandling](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptionhandling/)

Describes how a behavior-execution exception should participate in resilience handling.
