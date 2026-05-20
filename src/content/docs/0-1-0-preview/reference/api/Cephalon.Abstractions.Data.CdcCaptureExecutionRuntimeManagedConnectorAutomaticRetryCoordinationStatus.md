---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector automatic background retry coordination posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus\(string, string?\)

Creates a new managed-connector automatic background retry coordination answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable automatic background retry coordination state, such as <code>not-applicable</code>, <code>single-node</code>, <code>uncoordinated</code>, <code>lease-held</code>, <code>lease-missing</code>, <code>conflicted</code>, or <code>operator-only</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing automatic background retry coordination summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ActiveReporterId"></a> ActiveReporterId

Gets the active reporter identifier currently visible for the execution runtime when one exists.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_AutomaticRetryExecutionState"></a> AutomaticRetryExecutionState

Gets the current managed-connector automatic background retry execution state that informed coordination.

```csharp
public string AutomaticRetryExecutionState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CanExecuteOnCurrentNode"></a> CanExecuteOnCurrentNode

Gets a value indicating whether automatic background retry can safely execute on the current node.

```csharp
public bool CanExecuteOnCurrentNode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CategoryCount"></a> CategoryCount

Gets the number of active automatic background retry coordination categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CategoryIds"></a> CategoryIds

Gets the stable automatic background retry coordination categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers currently associated with automatic background retry coordination.

```csharp
public IReadOnlyList<string> CdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CommandJournalState"></a> CommandJournalState

Gets the current managed-connector command-journal state that informed coordination.

```csharp
public string CommandJournalState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CoordinationOwnerId"></a> CoordinationOwnerId

Gets the host-owned coordination owner identifier when one was configured for automatic retry.

```csharp
public string? CoordinationOwnerId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_CoordinationOwnerMatchesActiveReporter"></a> CoordinationOwnerMatchesActiveReporter

Gets a value indicating whether the current host coordination owner matches the active reporter identifier.

```csharp
public bool CoordinationOwnerMatchesActiveReporter { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_Description"></a> Description

Gets an optional operator-facing automatic background retry coordination summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing execution-ownership mode that informed automatic background retry coordination.

```csharp
public string ExecutionOwnership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with automatic background retry coordination.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing execution-topology classification that informed automatic background retry coordination.

```csharp
public string ExecutionTopology { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the execution runtime currently exposes one active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_HasCoordinationOwner"></a> HasCoordinationOwner

Gets a value indicating whether the current host declared a coordination owner identifier for automatic retry.

```csharp
public bool HasCoordinationOwner { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsConflicted"></a> IsConflicted

Gets a value indicating whether reporter coordination currently remains conflicted.

```csharp
public bool IsConflicted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsLeaseHeld"></a> IsLeaseHeld

Gets a value indicating whether the current node currently holds the active reporter lease.

```csharp
public bool IsLeaseHeld { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsLeaseMissing"></a> IsLeaseMissing

Gets a value indicating whether no active reporter lease is currently visible for automatic retry.

```csharp
public bool IsLeaseMissing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether automatic background retry still remains operator-owned outside Cephalon.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsSingleNode"></a> IsSingleNode

Gets a value indicating whether automatic background retry can execute without reporter-lease coordination.

```csharp
public bool IsSingleNode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_IsUncoordinated"></a> IsUncoordinated

Gets a value indicating whether automatic background retry currently remains uncoordinated on the current node.

```csharp
public bool IsUncoordinated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ObservedEdgeNodeIds"></a> ObservedEdgeNodeIds

Gets the declared or observed edge-node identifiers currently visible for the execution runtime.

```csharp
public IReadOnlyList<string> ObservedEdgeNodeIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ReporterCoordinationIssueReason"></a> ReporterCoordinationIssueReason

Gets the current reporter-coordination degraded-reason identifier when one applies.

```csharp
public string ReporterCoordinationIssueReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ReporterCoordinationState"></a> ReporterCoordinationState

Gets the current reporter-coordination state that informed automatic background retry coordination.

```csharp
public string ReporterCoordinationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_ReporterTakeoverState"></a> ReporterTakeoverState

Gets the current reporter takeover state when one applies.

```csharp
public string ReporterTakeoverState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_RetryExecutionPolicyState"></a> RetryExecutionPolicyState

Gets the current managed-connector retry-execution policy state that informed coordination.

```csharp
public string RetryExecutionPolicyState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive automatic background retry coordination.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStatus_State"></a> State

Gets the stable managed-connector automatic background retry coordination state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
