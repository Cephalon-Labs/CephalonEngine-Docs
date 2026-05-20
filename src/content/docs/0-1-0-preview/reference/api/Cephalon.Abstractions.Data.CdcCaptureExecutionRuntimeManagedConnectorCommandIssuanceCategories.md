---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandissuancecategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector command-issuance answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandissuancecategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_Accepted"></a> Accepted

The command issuance has been accepted onto a future shared issuance lane.

```csharp
public const string Accepted = "accepted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ApprovalGated"></a> ApprovalGated

The command issuance is currently approval-gated on the shared issuance lane.

```csharp
public const string ApprovalGated = "approval-gated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ApprovalReady"></a> ApprovalReady

The command issuance is currently approval-ready on the shared issuance lane.

```csharp
public const string ApprovalReady = "approval-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ApprovalRequired"></a> ApprovalRequired

The command issuance still reflects a higher-risk approval requirement.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_BlockingRemediation"></a> BlockingRemediation

The command issuance is blocked by remediation that still needs to clear first.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ChangePlanned"></a> ChangePlanned

The command issuance still reflects one or more shared write-path changes.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ControlPlaneOwnershipGap"></a> ControlPlaneOwnershipGap

The command issuance is constrained because control-plane ownership still remains outside Cephalon.

```csharp
public const string ControlPlaneOwnershipGap = "control-plane-ownership-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_DestructiveOperation"></a> DestructiveOperation

The command issuance still reflects a destructive write-path such as connector deletion.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The command issuance is constrained by governance that is currently out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The command issuance is constrained by incomplete reporting coverage.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_Issued"></a> Issued

The command issuance has been marked as issued on the shared issuance lane.

```csharp
public const string Issued = "issued"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_LifecycleChange"></a> LifecycleChange

The command issuance still reflects a lifecycle transition such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The command issuance does not currently require additional write-path changes.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The command issuance is not currently applicable because the runtime remains observe-only.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_OperatorOnly"></a> OperatorOnly

The command issuance currently remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_Rejected"></a> Rejected

The command issuance has been rejected on the shared issuance lane.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The command issuance is constrained by incomplete runtime truth.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandIssuanceCategories_StaleObservation"></a> StaleObservation

The command issuance is constrained by stale observation posture.

```csharp
public const string StaleObservation = "stale-observation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
