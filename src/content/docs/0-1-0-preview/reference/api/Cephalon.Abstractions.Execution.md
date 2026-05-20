---
title: Namespace Cephalon.Abstractions.Execution
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution
editUrl: false
---

### Classes

 [DurableExecutionCompensationAction](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutioncompensationaction/)

Describes one operator-facing durable-execution compensation action available for a workflow stream.

 [DurableExecutionPendingSignal](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingsignal/)

Describes one durable-execution signal that is currently pending for a workflow stream.

 [DurableExecutionPendingTimer](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingtimer/)

Describes one durable-execution timer that is currently pending for a workflow stream.

 [DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)

Describes one active durable-execution workflow visible to the current runtime.

 [DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)

Describes the latest operator-facing runtime state reported for one durable-execution stream.

 [ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)

Describes one operator-facing execution graph contributed by an active module.

 [ExecutionGraphEdgeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphedgedescriptor/)

Describes one directed edge within an execution graph.

 [ExecutionGraphNodeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphnodedescriptor/)

Describes one node within an execution graph.

 [HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)

Describes one operator-facing hosted or background execution surface contributed by an active module.

 [SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)

Describes the latest operator-facing runtime state reported for one live saga-choreography
publication path.

 [SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)

Describes one active saga-choreography behavior visible to the current runtime.

### Interfaces

 [IDurableExecutionRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-idurableexecutionruntimecatalog/)

Exposes the active durable-execution workflows visible to the current runtime.

 [IDurableExecutionRuntimeStateCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-idurableexecutionruntimestatecatalog/)

Exposes the operator-facing durable-execution runtime state currently reported for active streams.

 [IExecutionGraphContributor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutiongraphcontributor/)

Contributes one or more execution graphs to the active runtime.

 [IExecutionGraphRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutiongraphregistry/)

Receives execution graphs contributed by active modules.

 [IExecutionRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutionruntimecatalog/)

Exposes the execution graphs visible to the current runtime.

 [IHostedExecutionContributor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutioncontributor/)

Contributes one or more hosted or background execution descriptors to the active runtime.

 [IHostedExecutionRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutionregistry/)

Receives hosted-execution descriptors contributed by active modules.

 [IHostedExecutionRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutionruntimecatalog/)

Exposes the hosted executions visible to the current runtime.

 [ISagaChoreographyPublicationRuntimeStateCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-isagachoreographypublicationruntimestatecatalog/)

Exposes the operator-facing live saga-choreography publication state currently reported for the
active runtime.

 [ISagaChoreographyRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-execution-isagachoreographyruntimecatalog/)

Exposes the active saga-choreography behaviors visible to the current runtime.
