---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDriftStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current desired-versus-observed drift posture for one managed-connector CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorDriftStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorDriftStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDriftStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorDriftStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorDriftStatus\(string, string?\)

Creates a new managed-connector drift answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorDriftStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable drift state, such as <code>in-sync</code>, <code>drifted</code>, <code>unknown</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing drift summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ActiveTaskIds"></a> ActiveTaskIds

Gets the latest reported active managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> ActiveTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_CanEvaluateDrift"></a> CanEvaluateDrift

Gets a value indicating whether the current drift posture can be evaluated from the available baseline and report data.

```csharp
public bool CanEvaluateDrift { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_CategoryCount"></a> CategoryCount

Gets the number of active drift categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_CategoryIds"></a> CategoryIds

Gets the stable managed-connector drift categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ConnectorLifecycleState"></a> ConnectorLifecycleState

Gets the latest reported connector lifecycle state when one is known.

```csharp
public string? ConnectorLifecycleState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_DeclaredConnectClusterId"></a> DeclaredConnectClusterId

Gets the declared connector-cluster identifier when one is known.

```csharp
public string? DeclaredConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_DeclaredConnectorClass"></a> DeclaredConnectorClass

Gets the declared connector-class identifier when one is known.

```csharp
public string? DeclaredConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_DeclaredSourceProviderId"></a> DeclaredSourceProviderId

Gets the declared source-provider identifier when one is known.

```csharp
public string? DeclaredSourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_DeclaredTaskIds"></a> DeclaredTaskIds

Gets the declared managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> DeclaredTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_Description"></a> Description

Gets an optional operator-facing drift summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ExpectedTaskCount"></a> ExpectedTaskCount

Gets the declared task count when the managed connector reports one.

```csharp
public int? ExpectedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_IsDrifted"></a> IsDrifted

Gets a value indicating whether the managed connector currently reports declared-versus-observed drift.

```csharp
public bool IsDrifted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_IsInSync"></a> IsInSync

Gets a value indicating whether the managed connector currently reports no declared-versus-observed drift.

```csharp
public bool IsInSync { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_MissingDeclaredTaskIds"></a> MissingDeclaredTaskIds

Gets the declared task ids that are missing from the latest reported task set.

```csharp
public IReadOnlyList<string> MissingDeclaredTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_RecommendedActionId"></a> RecommendedActionId

Gets the stable recommended action identifier for the current drift posture.

```csharp
public string RecommendedActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReconciliationReason"></a> ReconciliationReason

Gets the latest reported reconciliation summary when one is known.

```csharp
public string? ReconciliationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReconciliationState"></a> ReconciliationState

Gets the latest reported overall reconciliation state when one is known.

```csharp
public string? ReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReportedConnectClusterId"></a> ReportedConnectClusterId

Gets the latest reported connector-cluster identifier when one is known.

```csharp
public string? ReportedConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReportedConnectorClass"></a> ReportedConnectorClass

Gets the latest reported connector-class identifier when one is known.

```csharp
public string? ReportedConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReportedSourceProviderId"></a> ReportedSourceProviderId

Gets the latest reported source-provider identifier when one is known.

```csharp
public string? ReportedSourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReportedTaskCount"></a> ReportedTaskCount

Gets the latest reported task count when the managed connector reports one.

```csharp
public int? ReportedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_ReportedTaskIds"></a> ReportedTaskIds

Gets the latest reported managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> ReportedTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_RequiresAttention"></a> RequiresAttention

Gets a value indicating whether the managed connector currently requires operator drift attention.

```csharp
public bool RequiresAttention { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_State"></a> State

Gets the stable managed-connector drift state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_TaskReconciliationState"></a> TaskReconciliationState

Gets the latest reported task-reconciliation state when one is known.

```csharp
public string? TaskReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftStatus_UnexpectedReportedTaskIds"></a> UnexpectedReportedTaskIds

Gets the reported task ids that were not part of the declared task baseline.

```csharp
public IReadOnlyList<string> UnexpectedReportedTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
