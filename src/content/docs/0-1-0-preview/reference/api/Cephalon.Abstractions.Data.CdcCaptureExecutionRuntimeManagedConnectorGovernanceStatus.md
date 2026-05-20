---
title: Class CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernancestatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing managed-connector governance posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernancestatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus\(string, string?\)

Creates a new managed-connector governance answer.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governance state, such as <code>observe-only</code>, <code>future-control-plane</code>, or <code>out-of-policy</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing governance summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ActiveTaskIds"></a> ActiveTaskIds

Gets the latest reported active managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> ActiveTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_AppliesToManagedConnector"></a> AppliesToManagedConnector

Gets a value indicating whether the execution runtime currently represents a managed connector.

```csharp
public bool AppliesToManagedConnector { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_CategoryCount"></a> CategoryCount

Gets the number of active governance categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_CategoryIds"></a> CategoryIds

Gets the stable managed-connector governance categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ConnectClusterId"></a> ConnectClusterId

Gets the upstream connector-cluster identifier when one is known.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ConnectorClass"></a> ConnectorClass

Gets the upstream connector-class identifier when one is known.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ConnectorLifecycleState"></a> ConnectorLifecycleState

Gets the latest reported connector lifecycle state when one is known.

```csharp
public string? ConnectorLifecycleState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_DeclaredTaskIds"></a> DeclaredTaskIds

Gets the declared managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> DeclaredTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_Description"></a> Description

Gets an optional operator-facing governance summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ExpectedTaskCount"></a> ExpectedTaskCount

Gets the declared task count when the managed connector reports one.

```csharp
public int? ExpectedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_IsObserveOnly"></a> IsObserveOnly

Gets a value indicating whether the execution runtime is currently governed in observe-only mode.

```csharp
public bool IsObserveOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_IsOutOfPolicy"></a> IsOutOfPolicy

Gets a value indicating whether the execution runtime is currently out of policy.

```csharp
public bool IsOutOfPolicy { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_RecommendedActionId"></a> RecommendedActionId

Gets the stable recommended action identifier for the current governance posture.

```csharp
public string RecommendedActionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ReconciliationReason"></a> ReconciliationReason

Gets the latest reported reconciliation summary when one is known.

```csharp
public string? ReconciliationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ReconciliationState"></a> ReconciliationState

Gets the latest reported overall reconciliation state when one is known.

```csharp
public string? ReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ReportedTaskCount"></a> ReportedTaskCount

Gets the latest reported task count when the managed connector reports one.

```csharp
public int? ReportedTaskCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_ReportedTaskIds"></a> ReportedTaskIds

Gets the latest reported managed-connector task identifiers when they are known.

```csharp
public IReadOnlyList<string> ReportedTaskIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_RequiresAttention"></a> RequiresAttention

Gets a value indicating whether the execution runtime currently requires operator governance attention.

```csharp
public bool RequiresAttention { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_RequiresControlPlaneSupport"></a> RequiresControlPlaneSupport

Gets a value indicating whether the execution runtime currently requires future control-plane support.

```csharp
public bool RequiresControlPlaneSupport { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_SourceProviderId"></a> SourceProviderId

Gets the upstream source-provider identifier when one is known.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_State"></a> State

Gets the stable managed-connector governance state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceStatus_TaskReconciliationState"></a> TaskReconciliationState

Gets the latest reported task-reconciliation state when one is known.

```csharp
public string? TaskReconciliationState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
