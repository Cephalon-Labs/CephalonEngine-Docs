---
title: Class CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicycategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector retry-execution policy answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicycategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_AutomaticRetryDisabled"></a> AutomaticRetryDisabled

Automatic background retry remains disabled for the current retry candidate.

```csharp
public const string AutomaticRetryDisabled = "automatic-retry-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_BlockingRemediation"></a> BlockingRemediation

The retry-execution policy remains blocked by remediation that still needs to clear first.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ChangePlanned"></a> ChangePlanned

The retry-execution policy still reflects one or more shared write-path changes.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ControlPlaneOwnershipGap"></a> ControlPlaneOwnershipGap

The retry-execution policy is constrained because control-plane ownership still remains outside Cephalon.

```csharp
public const string ControlPlaneOwnershipGap = "control-plane-ownership-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_CooldownActive"></a> CooldownActive

The current retry-execution policy is waiting for the active cooldown window to elapse.

```csharp
public const string CooldownActive = "cooldown-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_DestructiveOperation"></a> DestructiveOperation

The retry-execution policy still reflects a destructive write-path such as connector deletion.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_DuplicateCommand"></a> DuplicateCommand

Replaying the current retry-execution policy would duplicate a previously recorded command.

```csharp
public const string DuplicateCommand = "duplicate-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The retry-execution policy is constrained by governance that remains out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The retry-execution policy is constrained by incomplete reporting coverage.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_LifecycleChange"></a> LifecycleChange

The retry-execution policy still reflects a lifecycle transition such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ManualApprovalReady"></a> ManualApprovalReady

The retry-execution policy is approval-ready but still waiting for a manual approval gate to clear.

```csharp
public const string ManualApprovalReady = "manual-approval-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ManualApprovalRequired"></a> ManualApprovalRequired

The retry-execution policy still requires explicit manual approval.

```csharp
public const string ManualApprovalRequired = "manual-approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The current shared runtime truth indicates that no additional provider command is needed.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The retry-execution policy is not currently applicable because the runtime remains observe-only.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_OperatorOnly"></a> OperatorOnly

The retry-execution policy currently remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ProviderExecutionBlocked"></a> ProviderExecutionBlocked

The latest matching command-execution outcome remained blocked.

```csharp
public const string ProviderExecutionBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ProviderExecutionFailed"></a> ProviderExecutionFailed

The latest matching command-execution outcome failed while Cephalon was translating the command.

```csharp
public const string ProviderExecutionFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_ProviderExecutionUnavailable"></a> ProviderExecutionUnavailable

The latest matching command-execution outcome could not resolve a provider execution adapter.

```csharp
public const string ProviderExecutionUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_RetryCandidate"></a> RetryCandidate

The current shared runtime truth exposes one safe retry candidate.

```csharp
public const string RetryCandidate = "retry-candidate"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The retry-execution policy is constrained by incomplete runtime truth.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyCategories_StaleObservation"></a> StaleObservation

The retry-execution policy is constrained by stale observation posture.

```csharp
public const string StaleObservation = "stale-observation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
