---
title: Namespace Cephalon.Agentics.Services
slug: 0-1-0-preview/reference/api/cephalon-agentics-services
editUrl: false
---

### Classes

 [AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)

Describes a tool that can be surfaced through the agentic runtime pack.

 [AgentToolExecutionContext](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutioncontext/)

Describes the host-agnostic execution context delivered to one managed agent-tool executor.

 [AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)

Describes a policy decision for one agent-tool execution request.

 [AgentToolExecutionDecisionKinds](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecisionkinds/)

Defines stable decision identifiers returned by agent-tool execution policies.

 [AgentToolExecutionReport](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutionreport/)

Describes one runtime observation for an agent-tool run.

### Interfaces

 [IAgentToolCatalog](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolcatalog/)

Exposes the merged set of tools available to the active agentic runtime.

 [IAgentToolContributor](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolcontributor/)

Allows a module to contribute tools into the active agentic runtime pack.

 [IAgentToolExecutionObserver](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutionobserver/)

Observes agent-tool execution reports for audit, telemetry, or host-specific projection.

 [IAgentToolExecutionPolicy](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutionpolicy/)

Evaluates whether an agent-tool execution request can continue.

 [IAgentToolExecutor](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutor/)

Executes one registered agent tool through the Cephalon-managed agentics runtime.

 [IAgentToolRegistry](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolregistry/)

Collects tool descriptors contributed to the active agentic runtime pack.

 [IAgentToolRunReporter](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolrunreporter/)

Records runtime observations for agent-tool runs.
