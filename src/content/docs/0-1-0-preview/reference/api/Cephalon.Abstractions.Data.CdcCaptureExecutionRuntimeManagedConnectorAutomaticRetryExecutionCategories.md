---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretryexecutioncategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector automatic background retry execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretryexecutioncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_AutomaticAttemptRecorded"></a> AutomaticAttemptRecorded

The bounded command journal already contains one automatic retry attempt.

```csharp
public const string AutomaticAttemptRecorded = "automatic-attempt-recorded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_CooldownActive"></a> CooldownActive

The runtime currently remains inside an active retry cooldown window.

```csharp
public const string CooldownActive = "cooldown-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_FeatureDisabled"></a> FeatureDisabled

Automatic background retry execution is disabled by the current host-owned data runtime options.

```csharp
public const string FeatureDisabled = "feature-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_LatestExecutionAdapted"></a> LatestExecutionAdapted

The latest matching automatic retry attempt translated a provider command shape.

```csharp
public const string LatestExecutionAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_LatestExecutionBlocked"></a> LatestExecutionBlocked

The latest matching automatic retry attempt remained blocked.

```csharp
public const string LatestExecutionBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_LatestExecutionFailed"></a> LatestExecutionFailed

The latest matching automatic retry attempt failed while Cephalon was translating the provider command.

```csharp
public const string LatestExecutionFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_LatestExecutionNoOp"></a> LatestExecutionNoOp

The latest matching automatic retry attempt determined that no provider command is required.

```csharp
public const string LatestExecutionNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_LatestExecutionUnavailable"></a> LatestExecutionUnavailable

The latest matching automatic retry attempt could not resolve a provider execution adapter.

```csharp
public const string LatestExecutionUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_ManualApprovalRequired"></a> ManualApprovalRequired

The runtime still requires manual approval before automatic background retry execution should continue.

```csharp
public const string ManualApprovalRequired = "manual-approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_MatchingAutomaticAttempt"></a> MatchingAutomaticAttempt

The bounded command journal already contains one automatic retry attempt that matches the current retry fingerprint.

```csharp
public const string MatchingAutomaticAttempt = "matching-automatic-attempt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_NoExecutionNeeded"></a> NoExecutionNeeded

No additional provider execution is currently needed.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The runtime remains observe-only, so automatic background retry execution does not apply.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_OperatorOnly"></a> OperatorOnly

Control-plane ownership still remains outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_PolicyBlocked"></a> PolicyBlocked

Shared runtime truth currently blocks automatic background retry execution.

```csharp
public const string PolicyBlocked = "policy-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_PolicyDisabled"></a> PolicyDisabled

Automatic background retry execution is disabled by the current shared retry-execution policy.

```csharp
public const string PolicyDisabled = "automatic-retry-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryExecutionCategories_RetryReady"></a> RetryReady

The runtime currently exposes one retry-ready candidate for automatic background retry execution.

```csharp
public const string RetryReady = "retry-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
