---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopestatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector write-path command envelope for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopestatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus\(string, string?\)

Creates a new managed-connector command-envelope answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-envelope state, such as <code>blocked</code>, <code>operator-only</code>, <code>approval-gated</code>, <code>engine-ready</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-envelope summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed the command envelope.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_CanPrepareFutureExecutionLane"></a> CanPrepareFutureExecutionLane

Gets a value indicating whether the command envelope currently fits a future engine-execution lane.

```csharp
public bool CanPrepareFutureExecutionLane { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_CategoryCount"></a> CategoryCount

Gets the number of active command-envelope categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_CategoryIds"></a> CategoryIds

Gets the stable command-envelope categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with the command envelope.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint Cephalon currently derives for the managed connector.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ConnectClusterId"></a> ConnectClusterId

Gets the best available connector-cluster identifier Cephalon would target for the command envelope.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ConnectorClass"></a> ConnectorClass

Gets the best available connector-class identifier Cephalon would target for the command envelope.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_Description"></a> Description

Gets an optional operator-facing command-envelope summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed the command envelope.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed the command envelope.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ExecutionApprovalSourceId"></a> ExecutionApprovalSourceId

Gets the primary safety-gating source identifier already associated with managed-connector execution approval.

```csharp
public string ExecutionApprovalSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ExecutionApprovalState"></a> ExecutionApprovalState

Gets the current managed-connector execution-approval state that informed the command envelope.

```csharp
public string ExecutionApprovalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ExecutionIntentConfidenceSourceId"></a> ExecutionIntentConfidenceSourceId

Gets the primary confidence-source identifier already associated with managed-connector execution intent.

```csharp
public string ExecutionIntentConfidenceSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ExecutionIntentState"></a> ExecutionIntentState

Gets the current managed-connector execution-intent state that informed the command envelope.

```csharp
public string ExecutionIntentState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with the command envelope.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed the command envelope.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_HasCommandTarget"></a> HasCommandTarget

Gets a value indicating whether the command envelope currently targets a concrete managed-connector operation.

```csharp
public bool HasCommandTarget { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_IsApprovalGated"></a> IsApprovalGated

Gets a value indicating whether the managed connector currently sits behind an approval gate.

```csharp
public bool IsApprovalGated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_IsBlocked"></a> IsBlocked

Gets a value indicating whether the managed connector currently remains blocked before Cephalon can trust the command envelope.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the current command envelope targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_IsEngineReady"></a> IsEngineReady

Gets a value indicating whether the managed connector currently sits on an engine-ready execution lane.

```csharp
public bool IsEngineReady { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether the managed connector currently remains operator-owned.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier currently associated with the command envelope.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes currently associated with the command envelope.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed the command envelope.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed the command envelope.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed the command envelope.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_RequiresAttention"></a> RequiresAttention

Gets a value indicating whether the managed connector currently requires additional command-envelope attention.

```csharp
public bool RequiresAttention { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the current command envelope still requires an explicit approval gate.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive the command envelope.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_SourceProviderId"></a> SourceProviderId

Gets the best available source-provider identifier Cephalon would target for the command envelope.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_State"></a> State

Gets the stable managed-connector command-envelope state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current command envelope would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed the command envelope.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
