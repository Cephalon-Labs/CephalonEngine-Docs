---
title: Namespace Cephalon.Behaviors.Patterns.Registry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-registry
editUrl: false
---

### Classes

 [ExecutionStrategyRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-registry-executionstrategyregistry/)

Provides O(1) lookup of <xref href="Cephalon.Behaviors.Patterns.Abstractions.IBehaviorExecutionStrategy" data-throw-if-not-resolved="false"></xref> instances by pattern identifier.
The registry is built once at construction time from a frozen dictionary for lock-free reads.
