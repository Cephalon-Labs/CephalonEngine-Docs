---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrycategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector command-retry answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrycategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_ApprovalReady"></a> ApprovalReady

The command-retry posture is currently approval-ready but still requires an approval gate to clear.

```csharp
public const string ApprovalReady = "approval-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_ApprovalRequired"></a> ApprovalRequired

The command-retry posture still reflects a higher-risk approval requirement.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_BlockingRemediation"></a> BlockingRemediation

The command-retry posture remains blocked by remediation that still needs to clear first.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_ChangePlanned"></a> ChangePlanned

The command-retry posture still reflects one or more shared write-path changes.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_ControlPlaneOwnershipGap"></a> ControlPlaneOwnershipGap

The command-retry posture is constrained because control-plane ownership still remains outside Cephalon.

```csharp
public const string ControlPlaneOwnershipGap = "control-plane-ownership-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_CooldownActive"></a> CooldownActive

The current retry posture is waiting for the active cooldown window to elapse.

```csharp
public const string CooldownActive = "cooldown-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_DestructiveOperation"></a> DestructiveOperation

The command-retry posture still reflects a destructive write-path such as connector deletion.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_DuplicateCommand"></a> DuplicateCommand

Replaying the current retry posture would duplicate a previously recorded command.

```csharp
public const string DuplicateCommand = "duplicate-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The command-retry posture is constrained by governance that is currently out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The command-retry posture is constrained by incomplete reporting coverage.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_LatestExecutionAdapted"></a> LatestExecutionAdapted

The latest matching command-execution outcome already translated the provider command shape.

```csharp
public const string LatestExecutionAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_LatestExecutionBlocked"></a> LatestExecutionBlocked

The latest matching command-execution outcome remained blocked.

```csharp
public const string LatestExecutionBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_LatestExecutionFailed"></a> LatestExecutionFailed

The latest matching command-execution outcome failed while Cephalon was translating the command.

```csharp
public const string LatestExecutionFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_LatestExecutionUnavailable"></a> LatestExecutionUnavailable

The latest matching command-execution outcome could not resolve a provider execution adapter.

```csharp
public const string LatestExecutionUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_LifecycleChange"></a> LifecycleChange

The command-retry posture still reflects a lifecycle transition such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_MatchingAdapterFingerprint"></a> MatchingAdapterFingerprint

The current retry posture matches a recorded execution-adapter fingerprint.

```csharp
public const string MatchingAdapterFingerprint = "matching-adapter-fingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_MatchingCommandFingerprint"></a> MatchingCommandFingerprint

The current retry posture matches a recorded command fingerprint.

```csharp
public const string MatchingCommandFingerprint = "matching-command-fingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_MatchingIssuanceFingerprint"></a> MatchingIssuanceFingerprint

The current retry posture matches a recorded issuance fingerprint.

```csharp
public const string MatchingIssuanceFingerprint = "matching-issuance-fingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The current shared runtime truth indicates that no additional provider command is needed.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_NoMatchingCommandHistory"></a> NoMatchingCommandHistory

The current retry posture does not currently match any recorded command outcome.

```csharp
public const string NoMatchingCommandHistory = "no-matching-command-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_NoRecordedCommand"></a> NoRecordedCommand

No managed-connector command-execution outcome has been recorded yet for the current retry posture.

```csharp
public const string NoRecordedCommand = "no-recorded-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The command-retry posture is not currently applicable because the runtime remains observe-only.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_OperatorOnly"></a> OperatorOnly

The command-retry posture currently remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_RetryEligible"></a> RetryEligible

The current retry posture is eligible for one safe retry.

```csharp
public const string RetryEligible = "retry-eligible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The command-retry posture is constrained by incomplete runtime truth.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryCategories_StaleObservation"></a> StaleObservation

The command-retry posture is constrained by stale observation posture.

```csharp
public const string StaleObservation = "stale-observation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
