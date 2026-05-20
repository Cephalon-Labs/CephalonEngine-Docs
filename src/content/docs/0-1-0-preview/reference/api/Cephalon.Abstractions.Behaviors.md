---
title: Namespace Cephalon.Abstractions.Behaviors
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors
editUrl: false
---

### Classes

 [AppBehaviorAttribute](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-appbehaviorattribute/)

Marks a class as a registered application behavior and assigns its stable identifier.
This attribute is required on all types registered via <code>IBehaviorCollectionBuilder.Register&lt;TBehavior&gt;()</code>.

 [BehaviorAllowedPatternsAttribute](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorallowedpatternsattribute/)

Restricts which patterns may activate for this behavior and can also provide an
attribute-only runtime baseline when exactly one pattern is declared.

 [BehaviorAllowedTransportsAttribute](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorallowedtransportsattribute/)

Restricts which transports may activate for this behavior and can also provide an
attribute-only runtime transport baseline when no explicit topology exists.

 [BehaviorApiSurfaceDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor/)

Describes the logical public API surface projected by a behavior across transport adapters.

 [BehaviorCompatibilityViolation](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorcompatibilityviolation/)

Represents a compatibility rule violation for a behavior topology.

 [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)

Represents a structured fault from a behavior execution.

 [BehaviorFeatureDisabledException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfeaturedisabledexception/)

Thrown when a behavior declares one or more required feature flags and the active runtime
evaluation context does not satisfy one of them.

 [BehaviorIdempotencyAttribute](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioridempotencyattribute/)

Declares whether a behavior execution is safe to replay automatically.

 [BehaviorNotFoundException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviornotfoundexception/)

Thrown when a behavior cannot be located in the active runtime's behavior catalog.

 [BehaviorResult](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresult/)

Provides legacy factory helpers for creating transport-neutral behavior results.

 [BehaviorResult<T\>](Cephalon.Abstractions.Behaviors.BehaviorResult\-1.md)

Represents a legacy transport-neutral behavior outcome with an optional payload value.

 [BehaviorSecurityException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorsecurityexception/)

Thrown when a behavior's resolved topology violates an allowlist constraint
declared via <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedPatternsAttribute" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedTransportsAttribute" data-throw-if-not-resolved="false"></xref>.

 [BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)

Describes the resolved topology for a single behavior, including its pattern, transports,
feature flags, and shared logical API surface.

 [BehaviorTopologyOptions](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologyoptions/)

Optional feature flags for a behavior topology entry.

 [ContainsBehaviorsAttribute](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-containsbehaviorsattribute/)

Assembly-level marker indicating that the assembly contains auto-discovered
behavior types. When present, the engine uses the source-generated registration
class instead of runtime reflection scanning, resulting in zero-reflection startup.

 [OwnedBehaviorRegistration](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ownedbehaviorregistration/)

Describes one explicit module-owned behavior registration collected during engine composition.

 [Result](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-result/)

Provides concise factory helpers for creating transport-neutral behavior results.

 [Result<T\>](Cephalon.Abstractions.Behaviors.Result\-1.md)

Represents a concise transport-neutral behavior outcome with an optional payload value.

### Structs

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

Represents a transport-neutral behavior outcome descriptor that does not carry a payload value.

### Interfaces

 [IAppBehavior<TIn, TOut\>](Cephalon.Abstractions.Behaviors.IAppBehavior\-2.md)

Single interface for all behavior patterns. Developers implement this once; pattern and transport are config-driven.

 [IBehaviorAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory/)

Represents a runtime advisory that describes a recommendation or observation about behavior topology.
Advisories are informational — they do not block dispatch.

 [IBehaviorAdvisoryCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisorycatalog/)

Provides read access to all active behavior advisories.

 [IBehaviorAdvisoryContributor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisorycontributor/)

Contributes behavior advisories to the active runtime's advisory catalog.
Implementations are collected via dependency injection enumeration.

 [IBehaviorCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcatalog/)

Provides read access to all registered behavior topology descriptors.

 [IBehaviorCompatibilityRule](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcompatibilityrule/)

Validates a behavior topology descriptor against a compatibility constraint.

 [IBehaviorContext](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcontext/)

Provides ambient context to a behavior during its execution.
The context exposes reply semantics, metadata, and cancellation.

 [IBehaviorContributor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcontributor/)

Contributes behavior topology descriptors to the active runtime's catalog.
Implementations are collected via dependency injection enumeration.

 [IBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviormodulebuilder/)

Collects behavior ownership declarations contributed by a Cephalon module.

 [IBehaviorOwnerModule](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorownermodule/)

Declares that a module explicitly owns one or more Cephalon behaviors.

 [IBehaviorRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorregistry/)

Receives behavior topology descriptors from contributors.

 [IBehaviorResult](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorresult/)

Describes a structured behavior outcome that can be projected into transport-specific responses.

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

Fluent builder for declaring behavior topology: pattern, transports, and feature options.

 [IProcessCompletion](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-iprocesscompletion/)

Marker interface that signals a process manager behavior has reached its final step.

### Enums

 [BehaviorAdvisorySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioradvisoryseverity/)

Severity levels for behavior advisories.

 [BehaviorFaultSeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfaultseverity/)

Severity levels for structured behavior faults.

 [BehaviorIdempotencyMode](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioridempotencymode/)

Describes whether a behavior execution is safe to replay automatically.

 [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)

Represents a transport-neutral behavior outcome.

 [CompatibilitySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-compatibilityseverity/)

Severity level of a behavior compatibility rule violation.
