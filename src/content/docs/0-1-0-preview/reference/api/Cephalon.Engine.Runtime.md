---
title: Namespace Cephalon.Engine.Runtime
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime
editUrl: false
---

### Classes

 [EngineRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-engineruntime/)

Executes module lifecycle transitions and exposes runtime status, manifest, and failure information.

 [RuntimeExecutionGraphState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeexecutiongraphstate/)

Describes the current operator-facing lifecycle state for one execution graph visible to the runtime.

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)

Describes a runtime lifecycle failure in a way that can be surfaced through diagnostics,
status endpoints, and operator tooling.

 [RuntimeHealthEvaluator](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthevaluator/)

Evaluates runtime liveness, readiness, and dependency health.

 [RuntimeHealthReport](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthreport/)

Captures the health result for a runtime liveness or readiness probe.

 [RuntimeHostedExecutionState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehostedexecutionstate/)

Describes the current operator-facing lifecycle state for one hosted execution visible to the runtime.

 [RuntimeIntrospectionSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeintrospectionsnapshot/)

Combines the main operator-facing runtime views into a single payload.

 [RuntimeLifecycleEvent](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleevent/)

Captures one operator-facing lifecycle event in the runtime story timeline.

 [RuntimeModuleLifecycleState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimemodulelifecyclestate/)

Describes the current operator-facing lifecycle state for one loaded module.

 [RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

Combines the operator-facing runtime story into one payload that explains what loaded, started, failed, and why.

 [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

Captures the current runtime lifecycle state in a serialization-friendly form.

### Interfaces

 [IRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-iruntime/)

Represents a built Cephalon runtime that can be initialized, started, restarted, stopped,
and introspected by a host.

 [IRuntimeIntrospectionSnapshotProvider](/0-1-0-preview/reference/api/cephalon-engine-runtime-iruntimeintrospectionsnapshotprovider/)

Creates operator-facing runtime introspection snapshots.

### Enums

 [RuntimeHealthState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthstate/)

Represents the overall health state of the runtime.

 [RuntimeLifecycleEventOutcome](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventoutcome/)

Describes whether one lifecycle event completed successfully or failed.

 [RuntimeLifecycleEventScope](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventscope/)

Identifies which runtime surface produced one operator-facing lifecycle event.

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

Represents the current lifecycle phase of the runtime.
