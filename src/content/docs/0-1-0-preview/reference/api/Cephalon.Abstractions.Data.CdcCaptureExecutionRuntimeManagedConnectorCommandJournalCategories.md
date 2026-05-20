---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector command-journal answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_AutomaticRetryDisabled"></a> AutomaticRetryDisabled

The current command journal exposes a safe retry candidate, but automatic background retry remains disabled.

```csharp
public const string AutomaticRetryDisabled = "automatic-retry-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_BoundedRetention"></a> BoundedRetention

The command journal currently exposes bounded retention for recent command evidence.

```csharp
public const string BoundedRetention = "bounded-retention"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_ControlPlaneOwnershipGap"></a> ControlPlaneOwnershipGap

The current command journal remains constrained because control-plane ownership still remains outside Cephalon.

```csharp
public const string ControlPlaneOwnershipGap = "control-plane-ownership-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_CooldownActive"></a> CooldownActive

The current command journal still reflects a cooldown window that has not elapsed.

```csharp
public const string CooldownActive = "cooldown-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_DuplicateCommand"></a> DuplicateCommand

The current command journal contains evidence that replaying the command would be duplicative.

```csharp
public const string DuplicateCommand = "duplicate-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The current command journal remains constrained by governance that is out of policy.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_HistoryTruncated"></a> HistoryTruncated

The command journal has truncated older entries beyond the current bounded retention window.

```csharp
public const string HistoryTruncated = "history-truncated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_LatestExecutionAdapted"></a> LatestExecutionAdapted

The latest retained command-execution outcome already translated the provider command shape.

```csharp
public const string LatestExecutionAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_LatestExecutionBlocked"></a> LatestExecutionBlocked

The latest retained command-execution outcome remained blocked.

```csharp
public const string LatestExecutionBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_LatestExecutionFailed"></a> LatestExecutionFailed

The latest retained command-execution outcome failed while Cephalon was translating the provider command.

```csharp
public const string LatestExecutionFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_LatestExecutionUnavailable"></a> LatestExecutionUnavailable

The latest retained command-execution outcome could not resolve a provider execution adapter.

```csharp
public const string LatestExecutionUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_ManualApprovalRequired"></a> ManualApprovalRequired

The current command journal still requires explicit manual approval before automation should continue.

```csharp
public const string ManualApprovalRequired = "manual-approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_MatchingCommandFingerprint"></a> MatchingCommandFingerprint

The current command journal contains retained evidence matching the derived command fingerprint.

```csharp
public const string MatchingCommandFingerprint = "matching-command-fingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The current command journal indicates that no additional provider command is needed.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_NoRecordedCommand"></a> NoRecordedCommand

No managed-connector command-execution outcome has been recorded yet for the journal.

```csharp
public const string NoRecordedCommand = "no-recorded-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The command journal is not currently applicable because the runtime remains observe-only.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_OperatorOnly"></a> OperatorOnly

The current command journal remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_PolicyBlocked"></a> PolicyBlocked

The current command journal remains blocked by shared runtime truth or policy guardrails.

```csharp
public const string PolicyBlocked = "policy-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The current command journal remains constrained by incomplete shared runtime truth.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
