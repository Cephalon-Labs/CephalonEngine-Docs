---
title: Class RuntimeIntrospectionSnapshot
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeintrospectionsnapshot
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Combines the main operator-facing runtime views into a single payload.

```csharp
public sealed record RuntimeIntrospectionSnapshot : IEquatable<RuntimeIntrospectionSnapshot>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeIntrospectionSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeintrospectionsnapshot/)

#### Implements

[IEquatable<RuntimeIntrospectionSnapshot\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This snapshot is intended for tooling and operator surfaces that need one coherent view of the runtime
without issuing separate requests for manifest, status, execution-graph details, hosted-execution details, technology-pack details,
diagnostics conventions, data product details, CDC capture details, data projection details, outbox details, inbox details,
agent-tool run-state details, retrieval index-state details, event-publication runtime details, event-dispatch runtime details, event-subscription execution-readiness details,
durable-execution runtime details, authorization-policy details, database-migration playbook details,
database-topology posture details, and lifecycle story data.

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot__ctor_Cephalon_Engine_Manifest_RuntimeManifest_Cephalon_Engine_Runtime_RuntimeStatusSnapshot_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_ExecutionGraphDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Diagnostics_DiagnosticsConvention__Cephalon_Engine_Runtime_RuntimeOperationalStory_"></a> RuntimeIntrospectionSnapshot\(RuntimeManifest, RuntimeStatusSnapshot, IReadOnlyList<ExecutionGraphDescriptor\>, IReadOnlyList<TechnologyRuntimeSurface\>, IReadOnlyList<DiagnosticsConvention\>, RuntimeOperationalStory\)

Combines the main operator-facing runtime views into a single payload.

```csharp
public RuntimeIntrospectionSnapshot(RuntimeManifest Manifest, RuntimeStatusSnapshot Status, IReadOnlyList<ExecutionGraphDescriptor> ExecutionGraphs, IReadOnlyList<TechnologyRuntimeSurface> TechnologySurfaces, IReadOnlyList<DiagnosticsConvention> DiagnosticsConventions, RuntimeOperationalStory OperationalStory)
```

#### Parameters

`Manifest` [RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

The immutable manifest that describes the built runtime shape.

`Status` [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

The current lifecycle status of the runtime.

`ExecutionGraphs` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<ExecutionGraphDescriptor\>

The execution graphs contributed by active modules and visible to the runtime at the time the snapshot was created.

`TechnologySurfaces` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyRuntimeSurface\>

The active technology-pack runtime surfaces visible to the runtime at the time the snapshot was created.

`DiagnosticsConventions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)\>

The diagnostics conventions and published event-id catalogs visible to the runtime at the time the snapshot was created.

`OperationalStory` [RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

The richer operator-facing lifecycle story that combines loaded packages, execution-graph state, hosted-execution state, module state, and the ordered runtime timeline.

#### Remarks

This snapshot is intended for tooling and operator surfaces that need one coherent view of the runtime
without issuing separate requests for manifest, status, execution-graph details, hosted-execution details, technology-pack details,
diagnostics conventions, data product details, CDC capture details, data projection details, outbox details, inbox details,
agent-tool run-state details, retrieval index-state details, event-publication runtime details, event-dispatch runtime details, event-subscription execution-readiness details,
durable-execution runtime details, authorization-policy details, database-migration playbook details,
database-topology posture details, and lifecycle story data.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_AgentToolRuns"></a> AgentToolRuns

Gets the latest reported agent-tool run states visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<AgentToolRunState> AgentToolRuns { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AgentToolRunState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_AuditStores"></a> AuditStores

Gets the audit-store surfaces contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<AuditStoreDescriptor> AuditStores { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AuditStoreDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_AuthorizationPolicies"></a> AuthorizationPolicies

Gets the authorization policies contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<AuthorizationPolicyDescriptor> AuthorizationPolicies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AuthorizationPolicyDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_BackendForFrontendBindings"></a> BackendForFrontendBindings

Gets the backend-for-frontend client bindings visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<BackendForFrontendClientBindingDescriptor> BackendForFrontendBindings { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BackendForFrontendClientBindingDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_BackendForFrontendRestDocuments"></a> BackendForFrontendRestDocuments

Gets the client-aware REST documentation surfaces derived from the active backend-for-frontend
bindings and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<BackendForFrontendRestDocumentRuntimeDescriptor> BackendForFrontendRestDocuments { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BackendForFrontendRestDocumentRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_BackendForFrontendRestEndpoints"></a> BackendForFrontendRestEndpoints

Gets the client-aware published REST endpoint projections derived from the active
backend-for-frontend bindings and visible to the runtime at the time the snapshot was
created.

```csharp
public IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> BackendForFrontendRestEndpoints { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BackendForFrontendRestEndpointRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_BehaviorResiliencePolicies"></a> BehaviorResiliencePolicies

Gets the effective behavior-execution resilience policies visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<BehaviorResilienceRuntimeDescriptor> BehaviorResiliencePolicies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorResilienceRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CdcCaptureExecutionRuntimes"></a> CdcCaptureExecutionRuntimes

Gets the configured CDC capture execution runtimes visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CdcCaptureExecutionRuntimeDescriptor> CdcCaptureExecutionRuntimes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CdcCaptureExecutionRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CdcCaptureStates"></a> CdcCaptureStates

Gets the CDC runtime-state entries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CdcCaptureRuntimeState> CdcCaptureStates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CdcCaptureRuntimeState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CdcCaptures"></a> CdcCaptures

Gets the CDC captures contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CdcCaptureDescriptor> CdcCaptures { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CdcCaptureDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CellBoundaries"></a> CellBoundaries

Gets the cell boundaries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CellBoundaryDescriptor> CellBoundaries { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CellBoundaryDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CellHealthIsolations"></a> CellHealthIsolations

Gets the cell health-isolation answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CellHealthIsolationDescriptor> CellHealthIsolations { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CellHealthIsolationDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CellRoutes"></a> CellRoutes

Gets the cell-to-cell routing and governance answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CellRouteDescriptor> CellRoutes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CellRouteDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_CellTrafficAutomations"></a> CellTrafficAutomations

Gets the effective cell traffic-automation answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> CellTrafficAutomations { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<CellTrafficAutomationRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DataProducts"></a> DataProducts

Gets the data products contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DataProductDescriptor> DataProducts { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DataProductDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DatabaseMigrationPlaybook"></a> DatabaseMigrationPlaybook

Gets the engine-owned ordered database-migration playbook visible to the runtime at the time the snapshot was created.

```csharp
public DatabaseMigrationOperationalPlaybook? DatabaseMigrationPlaybook { get; init; }
```

#### Property Value

 DatabaseMigrationOperationalPlaybook?

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DatabaseMigrations"></a> DatabaseMigrations

Gets the database-migration catalog visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DatabaseMigrationDescriptor> DatabaseMigrations { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DatabaseMigrationDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DatabaseRoles"></a> DatabaseRoles

Gets the engine-owned database-role catalog visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DatabaseRoleDescriptor> DatabaseRoles { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DatabaseRoleDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DatabaseTopology"></a> DatabaseTopology

Gets the engine-owned database-topology posture snapshot visible to the runtime at the time the snapshot was created.

```csharp
public DatabaseTopologyOperationalSnapshot? DatabaseTopology { get; init; }
```

#### Property Value

 DatabaseTopologyOperationalSnapshot?

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DiagnosticsConventions"></a> DiagnosticsConventions

The diagnostics conventions and published event-id catalogs visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DiagnosticsConvention> DiagnosticsConventions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DurableExecutionStates"></a> DurableExecutionStates

Gets the latest reported durable-execution runtime state entries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DurableExecutionRuntimeState> DurableExecutionStates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionRuntimeState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_DurableExecutions"></a> DurableExecutions

Gets the active durable-execution workflows visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<DurableExecutionRuntimeDescriptor> DurableExecutions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_EventDispatchRuntimes"></a> EventDispatchRuntimes

Gets the configured event-dispatch runtimes visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<EventDispatchRuntimeDescriptor> EventDispatchRuntimes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventDispatchRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_EventDispatchStates"></a> EventDispatchStates

Gets the latest reported event-dispatch runtime state entries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<EventDispatchRuntimeState> EventDispatchStates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventDispatchRuntimeState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_EventPublicationStates"></a> EventPublicationStates

Gets the latest reported event-publication runtime state entries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<EventPublicationRuntimeState> EventPublicationStates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventPublicationRuntimeState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_EventSubscriptionExecutionReadiness"></a> EventSubscriptionExecutionReadiness

Gets the event-subscription execution-readiness entries visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<EventSubscriptionExecutionReadinessDescriptor> EventSubscriptionExecutionReadiness { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventSubscriptionExecutionReadinessDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_ExecutionGraphs"></a> ExecutionGraphs

The execution graphs contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<ExecutionGraphDescriptor> ExecutionGraphs { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<ExecutionGraphDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_FeatureFlags"></a> FeatureFlags

Gets the feature flags visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<FeatureFlagDescriptor> FeatureFlags { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<FeatureFlagDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_HostedExecutions"></a> HostedExecutions

Gets the hosted executions contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<HostedExecutionDescriptor> HostedExecutions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<HostedExecutionDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_Inboxes"></a> Inboxes

Gets the inbox surfaces contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<InboxDescriptor> Inboxes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<InboxDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_KnowledgeIndexes"></a> KnowledgeIndexes

Gets the latest managed retrieval index states visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<KnowledgeIndexState> KnowledgeIndexes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<KnowledgeIndexState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_Manifest"></a> Manifest

The immutable manifest that describes the built runtime shape.

```csharp
public RuntimeManifest Manifest { get; init; }
```

#### Property Value

 [RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_OperationalStory"></a> OperationalStory

The richer operator-facing lifecycle story that combines loaded packages, execution-graph state, hosted-execution state, module state, and the ordered runtime timeline.

```csharp
public RuntimeOperationalStory OperationalStory { get; init; }
```

#### Property Value

 [RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_Outboxes"></a> Outboxes

Gets the outbox surfaces contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<OutboxDescriptor> Outboxes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<OutboxDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_Projections"></a> Projections

Gets the projections contributed by active modules and visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<ProjectionDescriptor> Projections { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<ProjectionDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RateLimitingPolicies"></a> RateLimitingPolicies

Gets the effective rate-limiting policies visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RateLimitingRuntimeDescriptor> RateLimitingPolicies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RateLimitingRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpointAuthoringPolicies"></a> RestEndpointAuthoringPolicies

Gets the behavior-level REST authoring-policy answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicyDescriptor> RestEndpointAuthoringPolicies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointAuthoringPolicyDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpointCandidates"></a> RestEndpointCandidates

Gets the module-owned REST endpoint candidates visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointCandidateRuntimeDescriptor> RestEndpointCandidates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointCandidateRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpointOverrides"></a> RestEndpointOverrides

Gets the host-level REST endpoint override rules visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointOverrideDescriptor> RestEndpointOverrides { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointOverrideDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpointPublicationGroups"></a> RestEndpointPublicationGroups

Gets the grouped module-owned REST publication answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupDescriptor> RestEndpointPublicationGroups { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointPublicationGroupDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpointSuppressions"></a> RestEndpointSuppressions

Gets the host-level REST endpoint suppression rules visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointSuppressionDescriptor> RestEndpointSuppressions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointSuppressionDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_RestEndpoints"></a> RestEndpoints

Gets the resolved public REST endpoints visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<RestEndpointRuntimeDescriptor> RestEndpoints { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_SagaChoreographies"></a> SagaChoreographies

Gets the active saga-choreography behaviors visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<SagaChoreographyRuntimeDescriptor> SagaChoreographies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<SagaChoreographyRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_SagaChoreographyPublicationStates"></a> SagaChoreographyPublicationStates

Gets the latest reported saga-choreography publication-state entries visible to the runtime at
the time the snapshot was created.

```csharp
public IReadOnlyList<SagaChoreographyPublicationRuntimeState> SagaChoreographyPublicationStates { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<SagaChoreographyPublicationRuntimeState\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_Status"></a> Status

The current lifecycle status of the runtime.

```csharp
public RuntimeStatusSnapshot Status { get; init; }
```

#### Property Value

 [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_StranglerFigIngressRoutes"></a> StranglerFigIngressRoutes

Gets the effective strangler-fig ingress materialization answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<StranglerFigIngressRuntimeDescriptor> StranglerFigIngressRoutes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<StranglerFigIngressRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_StranglerFigRoutePolicies"></a> StranglerFigRoutePolicies

Gets the effective strangler-fig migration-policy answers visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<StranglerFigMigrationRuntimeDescriptor> StranglerFigRoutePolicies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<StranglerFigMigrationRuntimeDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_StranglerFigRoutes"></a> StranglerFigRoutes

Gets the strangler-fig migration routes visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<StranglerFigRouteDescriptor> StranglerFigRoutes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<StranglerFigRouteDescriptor\>

### <a id="Cephalon_Engine_Runtime_RuntimeIntrospectionSnapshot_TechnologySurfaces"></a> TechnologySurfaces

The active technology-pack runtime surfaces visible to the runtime at the time the snapshot was created.

```csharp
public IReadOnlyList<TechnologyRuntimeSurface> TechnologySurfaces { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyRuntimeSurface\>
