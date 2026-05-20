---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionadaptercategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector execution-adapter answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionadaptercategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_AdapterReady"></a> AdapterReady

The execution adapter is currently ready to translate provider-facing commands.

```csharp
public const string AdapterReady = "adapter-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_AdapterUnavailable"></a> AdapterUnavailable

The execution adapter is currently unavailable for the active managed connector.

```csharp
public const string AdapterUnavailable = "adapter-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_ApprovalReady"></a> ApprovalReady

The execution adapter is currently approval-ready on the shared execution lane.

```csharp
public const string ApprovalReady = "approval-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_ApprovalRequired"></a> ApprovalRequired

The execution adapter still reflects a higher-risk approval requirement.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_BlockingRemediation"></a> BlockingRemediation

The execution adapter is blocked by remediation that still needs to clear first.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_ChangePlanned"></a> ChangePlanned

The execution adapter still reflects one or more shared write-path changes.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_ControlPlaneOwnershipGap"></a> ControlPlaneOwnershipGap

The execution adapter is constrained because control-plane ownership still remains outside Cephalon.

```csharp
public const string ControlPlaneOwnershipGap = "control-plane-ownership-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_DestructiveOperation"></a> DestructiveOperation

The execution adapter still reflects a destructive write-path such as connector deletion.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The execution adapter is constrained by governance that is currently out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The execution adapter is constrained by incomplete reporting coverage.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_LifecycleChange"></a> LifecycleChange

The execution adapter still reflects a lifecycle transition such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The current provider execution lane does not require an outbound provider command.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The execution adapter is not currently applicable because the runtime remains observe-only.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_OperatorOnly"></a> OperatorOnly

The execution adapter remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The execution adapter is constrained by incomplete runtime truth.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterCategories_StaleObservation"></a> StaleObservation

The execution adapter is constrained by stale observation posture.

```csharp
public const string StaleObservation = "stale-observation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
