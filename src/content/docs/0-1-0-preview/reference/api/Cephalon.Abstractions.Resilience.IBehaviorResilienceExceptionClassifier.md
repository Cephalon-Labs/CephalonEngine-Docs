---
title: Interface IBehaviorResilienceExceptionClassifier
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-ibehaviorresilienceexceptionclassifier
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Classifies behavior-execution exceptions for resilience handling.

```csharp
public interface IBehaviorResilienceExceptionClassifier
```

## Remarks

This contract lets hosts or companion packs decide which failures should count toward
circuit-breaker style failure accounting and which ones should stay outside resilience
automation because they represent business or validation outcomes.

## Methods

### <a id="Cephalon_Abstractions_Resilience_IBehaviorResilienceExceptionClassifier_Classify_Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_"></a> Classify\(BehaviorResilienceExceptionContext\)

Classifies one behavior-execution exception.

```csharp
BehaviorResilienceExceptionHandling Classify(BehaviorResilienceExceptionContext context)
```

#### Parameters

`context` [BehaviorResilienceExceptionContext](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptioncontext/)

The exception context being evaluated.

#### Returns

 [BehaviorResilienceExceptionHandling](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptionhandling/)

The resilience-handling mode that should apply.
