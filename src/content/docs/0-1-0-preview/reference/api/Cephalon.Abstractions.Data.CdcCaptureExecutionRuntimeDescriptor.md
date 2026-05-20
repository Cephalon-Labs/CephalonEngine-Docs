---
title: Class CdcCaptureExecutionRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing CDC capture execution runtime visible to the current Cephalon runtime.

```csharp
public sealed class CdcCaptureExecutionRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_"></a> CdcCaptureExecutionRuntimeDescriptor\(string, string, string, IReadOnlyDictionary<string, string\>?, IReadOnlyList<string\>?, CdcCaptureExecutionRuntimeSummary?\)

Creates a new CDC capture execution runtime descriptor.

```csharp
[JsonConstructor]
public CdcCaptureExecutionRuntimeDescriptor(string id, string displayName, string description, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyList<string>? cdcCaptureIds = null, CdcCaptureExecutionRuntimeSummary? summary = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-runtime name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable execution-runtime description.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata for the execution runtime.

`cdcCaptureIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional CDC capture identifiers explicitly owned by the execution runtime when ownership is bounded to a known capture set.

`summary` [CdcCaptureExecutionRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary/)?

Optional aggregate runtime summary describing the latest reported operator-facing state for the execution runtime.

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_Int32__System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_System_Nullable_System_Int32__System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__"></a> CdcCaptureExecutionRuntimeDescriptor\(string, string, string, string, string, string?, string?, string?, int?, bool, IReadOnlyDictionary<string, string\>?, IReadOnlyList<string\>?, CdcCaptureExecutionRuntimeSummary?, int?, bool, IReadOnlyList<string\>?\)

Creates a new CDC capture execution runtime descriptor with first-class ownership and topology semantics.

```csharp
public CdcCaptureExecutionRuntimeDescriptor(string id, string displayName, string description, string executionOwnership, string executionTopology, string? acknowledgementMode = null, string? hostedExecutionId = null, string? executionGraphId = null, int? observationStaleAfterSeconds = null, bool rejectOutOfOrderReports = false, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyList<string>? cdcCaptureIds = null, CdcCaptureExecutionRuntimeSummary? summary = null, int? reporterLeaseSeconds = null, bool rejectConflictingReporterIds = false, IReadOnlyList<string>? edgeNodeIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-runtime name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable execution-runtime description.

`executionOwnership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-ownership mode, such as <code>host-managed</code> or <code>external-managed</code>.

`executionTopology` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-topology classification, such as <code>shared-in-process-polling</code> or <code>provider-native</code>.

`acknowledgementMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing acknowledgement mode when the runtime reports one, such as <code>post-stage-provider</code>.

`hostedExecutionId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable hosted-execution identifier when the runtime is backed by a Cephalon hosted execution.

`executionGraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable execution-graph identifier when the runtime is backed by a Cephalon execution graph.

`observationStaleAfterSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional report-freshness window, in seconds, used to decide when external runtime observations become stale.

`rejectOutOfOrderReports` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the runtime should reject external observations that arrive older than the current latest report.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata for the execution runtime.

`cdcCaptureIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional CDC capture identifiers explicitly owned by the execution runtime when ownership is bounded to a known capture set.

`summary` [CdcCaptureExecutionRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary/)?

Optional aggregate runtime summary describing the latest reported operator-facing state for the execution runtime.

`reporterLeaseSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional reporter-lease window, in seconds, used to keep one external reporter authoritative for the runtime.

`rejectConflictingReporterIds` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the runtime should reject reports from conflicting reporter identities while an active lease still exists.

`edgeNodeIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The declared edge-node identifiers that can originate observations for the runtime when the topology is edge-aware.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_AcknowledgementMode"></a> AcknowledgementMode

Gets the operator-facing acknowledgement mode for the runtime when one was declared.

```csharp
public string? AcknowledgementMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers explicitly owned by the execution runtime.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_Description"></a> Description

Gets the human-readable execution-runtime description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing execution-runtime name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_EdgeNodeIds"></a> EdgeNodeIds

Gets the declared edge-node identifiers that can originate observations for the runtime.

```csharp
public IReadOnlyList<string> EdgeNodeIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ExecutionGraphId"></a> ExecutionGraphId

Gets the linked execution-graph identifier when the runtime is backed by a Cephalon execution graph.

```csharp
public string? ExecutionGraphId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode for the runtime.

```csharp
public string ExecutionOwnership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification for the runtime.

```csharp
public string ExecutionTopology { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_HostedExecutionId"></a> HostedExecutionId

Gets the linked hosted-execution identifier when the runtime is backed by a Cephalon hosted execution.

```csharp
public string? HostedExecutionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_Id"></a> Id

Gets the stable execution-runtime identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorActionPlan"></a> ManagedConnectorActionPlan

Gets the operator-facing managed-connector action plan derived from remediation, governance, and drift posture.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorActionPlanStatus ManagedConnectorActionPlan { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorActionPlanStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectoractionplanstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorAutomaticRetryCoordination"></a> ManagedConnectorAutomaticRetryCoordination

Gets the operator-facing managed-connector automatic background retry coordination posture derived from reporter coordination, execution ownership, and the current host-owned coordination owner id.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus ManagedConnectorAutomaticRetryCoordination { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorAutomaticRetryExecution"></a> ManagedConnectorAutomaticRetryExecution

Gets the operator-facing managed-connector automatic background retry execution posture derived from retry policy, bounded command history, and the latest command-execution outcomes.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus ManagedConnectorAutomaticRetryExecution { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretryexecutionstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandEnvelope"></a> ManagedConnectorCommandEnvelope

Gets the operator-facing managed-connector write-path command envelope derived from execution approval, execution intent, dry-run, preflight, and the broader shared runtime truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus ManagedConnectorCommandEnvelope { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandExecution"></a> ManagedConnectorCommandExecution

Gets the latest recorded managed-connector command-execution outcome visible on the shared runtime surface.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult ManagedConnectorCommandExecution { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandIssuance"></a> ManagedConnectorCommandIssuance

Gets the operator-facing managed-connector command-issuance posture derived from command envelopes, execution approval, execution intent, dry-run, preflight, and the broader shared runtime truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus ManagedConnectorCommandIssuance { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandissuancestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandJournal"></a> ManagedConnectorCommandJournal

Gets the operator-facing bounded managed-connector command journal derived from shared command history, command retry, and retry-execution policy truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus ManagedConnectorCommandJournal { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandJournalDurability"></a> ManagedConnectorCommandJournalDurability

Gets the operator-facing managed-connector command-journal durability posture derived from the shared command journal, automatic retry, and durable journal-store truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus ManagedConnectorCommandJournalDurability { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandJournalDurabilityStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaldurabilitystatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCommandRetry"></a> ManagedConnectorCommandRetry

Gets the operator-facing managed-connector command-retry and idempotency posture derived from the shared command lane plus bounded execution history.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus ManagedConnectorCommandRetry { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrystatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorCrossNodeIdempotencyHardening"></a> ManagedConnectorCrossNodeIdempotencyHardening

Gets the operator-facing managed-connector cross-node idempotency-hardening posture derived from retry coordination, durable journal truth, and retained command lineage evidence.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus ManagedConnectorCrossNodeIdempotencyHardening { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorDistributedRetryLease"></a> ManagedConnectorDistributedRetryLease

Gets the operator-facing managed-connector distributed retry lease posture derived from automatic retry coordination, durable command-journal truth, and retained cross-node idempotency evidence.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStatus ManagedConnectorDistributedRetryLease { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorDistributedRetryOrchestration"></a> ManagedConnectorDistributedRetryOrchestration

Gets the operator-facing managed-connector distributed retry orchestration posture derived from automatic retry, retry policy, durable journal, and distributed retry lease truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationStatus ManagedConnectorDistributedRetryOrchestration { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryOrchestrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryorchestrationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorDrift"></a> ManagedConnectorDrift

Gets the operator-facing desired-versus-observed managed-connector drift posture for the execution runtime.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDriftStatus ManagedConnectorDrift { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorDriftStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorDryRun"></a> ManagedConnectorDryRun

Gets the operator-facing managed-connector dry-run posture derived from coverage, remediation, governance, drift, action planning, write-path readiness, and preflight truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDryRunStatus ManagedConnectorDryRun { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorDryRunStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordryrunstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorDurableSharedSchedulerOrchestration"></a> ManagedConnectorDurableSharedSchedulerOrchestration

Gets the operator-facing managed-connector durable shared scheduler-orchestration posture derived from coordination, durable journal, distributed retry orchestration, and broader lease-execution truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus ManagedConnectorDurableSharedSchedulerOrchestration { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorExecutionAdapter"></a> ManagedConnectorExecutionAdapter

Gets the operator-facing managed-connector provider execution-adapter posture derived from command issuance, command envelopes, execution approval, execution intent, and the broader shared runtime truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterStatus ManagedConnectorExecutionAdapter { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionadapterstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorExecutionApproval"></a> ManagedConnectorExecutionApproval

Gets the operator-facing managed-connector execution-approval and safety-gating posture derived from execution intent, dry-run, preflight, write-path readiness, governance, remediation, and runtime coverage truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStatus ManagedConnectorExecutionApproval { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionapprovalstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorExecutionIntent"></a> ManagedConnectorExecutionIntent

Gets the operator-facing managed-connector execution intent derived from dry-run, preflight, write-path readiness, action planning, governance, remediation, and runtime coverage truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus ManagedConnectorExecutionIntent { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorGovernance"></a> ManagedConnectorGovernance

Gets the operator-facing managed-connector governance posture for the execution runtime.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus ManagedConnectorGovernance { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernancestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorMultiNodeLeaseExecution"></a> ManagedConnectorMultiNodeLeaseExecution

Gets the operator-facing managed-connector broader multi-node lease-execution posture derived from coordination, lease, cross-node hardening, and distributed retry orchestration truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus ManagedConnectorMultiNodeLeaseExecution { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorPreflight"></a> ManagedConnectorPreflight

Gets the operator-facing managed-connector preflight posture derived from coverage, remediation, governance, drift, action planning, and write-path readiness.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorPreflightStatus ManagedConnectorPreflight { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorPreflightStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderExecutionOrchestration"></a> ManagedConnectorProviderExecutionOrchestration

Gets the operator-facing managed-connector broader provider execution-orchestration posture derived from provider-owned write-path execution, command-journal, scheduler, and recovery truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus ManagedConnectorProviderExecutionOrchestration { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderExecutionOrchestrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderexecutionorchestrationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecution"></a> ManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecution

Gets the operator-facing managed-connector provider-owned control-plane apply-and-reconcile execution posture derived from control-plane provisioning, ownership, command-lane truth, and retained journal evidence.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus ManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecution { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneApplyAndReconcileExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneapplyandreconcileexecutionstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening"></a> ManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening

Gets the current shared dependency-aware apply-and-reconcile hardening answer for the managed connector when one applies.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus ManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardening { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareApplyAndReconcileHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareapplyandreconcilehardeningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardening"></a> ManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardening

Gets the current shared dependency-aware provisioning and mutation hardening answer for the managed connector when one applies.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStatus ManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardening { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneDependencyAwareProvisioningAndMutationHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanedependencyawareprovisioningandmutationhardeningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneMutationReconcile"></a> ManagedConnectorProviderOwnedControlPlaneMutationReconcile

Gets the operator-facing managed-connector provider-owned control-plane mutation and reconcile posture derived from control-plane ownership, command lane truth, retry policy, and retained journal evidence.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStatus ManagedConnectorProviderOwnedControlPlaneMutationReconcile { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneMutationReconcileStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplanemutationreconcilestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneOwnership"></a> ManagedConnectorProviderOwnedControlPlaneOwnership

Gets the operator-facing managed-connector provider-owned control-plane ownership posture derived from provider execution orchestration, provider-owned write-path execution, command-journal, scheduler, and recovery truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStatus ManagedConnectorProviderOwnedControlPlaneOwnership { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneOwnershipStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneownershipstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedControlPlaneProvisioning"></a> ManagedConnectorProviderOwnedControlPlaneProvisioning

Gets the operator-facing managed-connector provider-owned control-plane provisioning posture derived from control-plane mutation and reconcile, ownership, command-lane truth, and retained journal evidence.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningStatus ManagedConnectorProviderOwnedControlPlaneProvisioning { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneprovisioningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderOwnedWritePathExecution"></a> ManagedConnectorProviderOwnedWritePathExecution

Gets the operator-facing managed-connector provider-owned write-path execution posture derived from execution-adapter, command-execution, retry, scheduler, and recovery truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStatus ManagedConnectorProviderOwnedWritePathExecution { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutionstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening"></a> ManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening

Gets the current shared provider-specific dependency-aware teardown and mutation-execution hardening answer for the managed connector when one applies.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus ManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardening { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneDependencyAwareTeardownAndMutationExecutionHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanedependencyawareteardownandmutationexecutionhardeningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorProviderSpecificControlPlaneMaterializer"></a> ManagedConnectorProviderSpecificControlPlaneMaterializer

Gets the current shared provider-specific control-plane materializer answer for the managed connector when one applies.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus ManagedConnectorProviderSpecificControlPlaneMaterializer { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorProviderSpecificControlPlaneMaterializerStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderspecificcontrolplanematerializerstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorRetryExecutionPolicy"></a> ManagedConnectorRetryExecutionPolicy

Gets the operator-facing managed-connector retry-execution policy derived from command retry, execution approval, execution adapter, and the broader shared runtime truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus ManagedConnectorRetryExecutionPolicy { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicystatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorSchedulerRecoveryExecutionHardening"></a> ManagedConnectorSchedulerRecoveryExecutionHardening

Gets the operator-facing managed-connector scheduler recovery and execution-hardening posture derived from durable scheduler, lease-execution, durable journal, and latest execution truth.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus ManagedConnectorSchedulerRecoveryExecutionHardening { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ManagedConnectorWritePathReadiness"></a> ManagedConnectorWritePathReadiness

Gets the operator-facing managed-connector write-path readiness posture derived from coverage, remediation, governance, drift, and action planning.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessStatus ManagedConnectorWritePathReadiness { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorwritepathreadinessstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata for the execution runtime.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ObservationStaleAfterSeconds"></a> ObservationStaleAfterSeconds

Gets the report-freshness window, in seconds, used to mark external runtime observations stale when one was declared.

```csharp
public int? ObservationStaleAfterSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_RejectConflictingReporterIds"></a> RejectConflictingReporterIds

Gets a value indicating whether the runtime rejects reports from conflicting reporter identities while an active reporter lease still exists.

```csharp
public bool RejectConflictingReporterIds { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_RejectOutOfOrderReports"></a> RejectOutOfOrderReports

Gets a value indicating whether the runtime rejects out-of-order external runtime reports.

```csharp
public bool RejectOutOfOrderReports { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_ReporterLeaseSeconds"></a> ReporterLeaseSeconds

Gets the optional reporter-lease window, in seconds, used to keep one external reporter authoritative for the runtime.

```csharp
public int? ReporterLeaseSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_Summary"></a> Summary

Gets the latest aggregate runtime summary reported for the execution runtime.

```csharp
public CdcCaptureExecutionRuntimeSummary Summary { get; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary/)
