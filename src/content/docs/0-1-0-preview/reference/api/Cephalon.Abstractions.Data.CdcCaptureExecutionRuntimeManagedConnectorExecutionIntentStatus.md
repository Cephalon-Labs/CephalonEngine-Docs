---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector execution intent for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus\(string, string?\)

Creates a new managed-connector execution-intent answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-intent state, such as <code>deferred</code>, <code>blocked</code>, <code>operator-action</code>, <code>requires-approval</code>, <code>ready-to-execute</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing execution-intent summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_ActionPlanState"></a> ActionPlanState

Gets the current managed-connector action-plan state that informed execution intent.

```csharp
public string ActionPlanState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_CanExecuteThroughEngine"></a> CanExecuteThroughEngine

Gets a value indicating whether the next intended follow-through currently sits inside the future engine-execution lane.

```csharp
public bool CanExecuteThroughEngine { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_CategoryCount"></a> CategoryCount

Gets the number of active execution-intent categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_CategoryIds"></a> CategoryIds

Gets the stable execution-intent categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_ConfidenceSourceId"></a> ConfidenceSourceId

Gets the primary confidence-source identifier Cephalon used to derive execution intent.

```csharp
public string ConfidenceSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_Description"></a> Description

Gets an optional operator-facing execution-intent summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_DriftState"></a> DriftState

Gets the current managed-connector drift state that informed execution intent.

```csharp
public string DriftState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_DryRunState"></a> DryRunState

Gets the current managed-connector dry-run state that informed execution intent.

```csharp
public string DryRunState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_GovernanceState"></a> GovernanceState

Gets the current managed-connector governance state that informed execution intent.

```csharp
public string GovernanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsApprovalRequired"></a> IsApprovalRequired

Gets a value indicating whether the next intended follow-through would still require an approval gate before engine execution.

```csharp
public bool IsApprovalRequired { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsBlocked"></a> IsBlocked

Gets a value indicating whether the managed connector is currently blocked before Cephalon can trust execution intent.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsDeferred"></a> IsDeferred

Gets a value indicating whether execution intent is currently deferred because the runtime remains observe-only.

```csharp
public bool IsDeferred { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsOperatorAction"></a> IsOperatorAction

Gets a value indicating whether the next intended follow-through currently remains operator-owned.

```csharp
public bool IsOperatorAction { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether the next intended follow-through still belongs to an operator-owned lane.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_IsReadyToExecute"></a> IsReadyToExecute

Gets a value indicating whether the current execution intent is ready for a future engine-execution lane.

```csharp
public bool IsReadyToExecute { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_OperationId"></a> OperationId

Gets the stable management-operation identifier Cephalon currently intends to execute next.

```csharp
public string OperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_PotentialChangeCount"></a> PotentialChangeCount

Gets the number of visible potential shared write-path changes in the current execution intent.

```csharp
public int PotentialChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_PreflightState"></a> PreflightState

Gets the current managed-connector preflight state that informed execution intent.

```csharp
public string PreflightState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_PrimaryActionId"></a> PrimaryActionId

Gets the primary action identifier currently associated with the runtime's managed-connector action plan.

```csharp
public string PrimaryActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_RemediationState"></a> RemediationState

Gets the current runtime-level remediation state that informed execution intent.

```csharp
public string RemediationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_ReportingCoverageState"></a> ReportingCoverageState

Gets the current runtime-level reporting-coverage state that informed execution intent.

```csharp
public string ReportingCoverageState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_RequiresAttention"></a> RequiresAttention

Gets a value indicating whether the managed connector currently requires additional execution-intent attention.

```csharp
public bool RequiresAttention { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_State"></a> State

Gets the stable managed-connector execution-intent state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the current execution intent would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStatus_WritePathReadinessState"></a> WritePathReadinessState

Gets the current managed-connector write-path readiness state that informed execution intent.

```csharp
public string WritePathReadinessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
