---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandissuancestatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector command-issuance posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandissuancestatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus\(string, string?\)

Creates a new managed-connector command-issuance answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-issuance state, such as <code>blocked</code>, <code>operator-only</code>, <code>accepted</code>, <code>rejected</code>, <code>issued</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-issuance summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed command issuance.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CanEnterFutureIssuanceLane"></a> CanEnterFutureIssuanceLane

Gets a value indicating whether the current command issuance can advance through a future shared issuance lane.

```csharp
public bool CanEnterFutureIssuanceLane { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CategoryCount"></a> CategoryCount

Gets the number of active command-issuance categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CategoryIds"></a> CategoryIds

Gets the stable command-issuance categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with command issuance.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CommandEnvelopeSourceId"></a> CommandEnvelopeSourceId

Gets the primary source identifier already associated with managed-connector command envelopes.

```csharp
public string CommandEnvelopeSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current managed-connector command-envelope state that informed command issuance.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint already associated with the current managed connector.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier Cephalon would target for command issuance.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier Cephalon would target for command issuance.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_Description"></a> Description

Gets an optional operator-facing command-issuance summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed command issuance.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed command issuance.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ExecutionApprovalSourceId"></a> ExecutionApprovalSourceId

Gets the primary safety-gating source identifier already associated with managed-connector execution approval.

```csharp
public string ExecutionApprovalSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed command issuance.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ExecutionIntentConfidenceSourceId"></a> ExecutionIntentConfidenceSourceId

Gets the primary confidence-source identifier already associated with managed-connector execution intent.

```csharp
public string ExecutionIntentConfidenceSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed command issuance.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with command issuance.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed command issuance.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_HasIssuableCommand"></a> HasIssuableCommand

Gets a value indicating whether command issuance currently targets a concrete managed-connector operation.

```csharp
public bool HasIssuableCommand { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsAccepted"></a> IsAccepted

Gets a value indicating whether the managed connector has been accepted onto a future shared issuance lane.

```csharp
public bool IsAccepted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsBlocked"></a> IsBlocked

Gets a value indicating whether the managed connector currently remains blocked before Cephalon can trust the shared issuance lane.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current command issuance targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsIssued"></a> IsIssued

Gets a value indicating whether the managed connector has been marked as issued on the shared issuance lane.

```csharp
public bool IsIssued { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether the managed connector currently remains operator-owned.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IsRejected"></a> IsRejected

Gets a value indicating whether the managed connector has been rejected on the shared issuance lane.

```csharp
public bool IsRejected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_IssuanceFingerprint"></a> IssuanceFingerprint

Gets the deterministic issuance fingerprint Cephalon currently derives for the shared issuance lane.

```csharp
public string IssuanceFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with command issuance.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with command issuance.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed command issuance.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed command issuance.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed command issuance.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_RequiresAttention"></a> RequiresAttention

Gets a value indicating whether the managed connector currently requires additional command-issuance attention.

```csharp
public bool RequiresAttention { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current command issuance still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive command issuance.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier Cephalon would target for command issuance.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_State"></a> State

Gets the stable managed-connector command-issuance state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current command issuance would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed command issuance.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
