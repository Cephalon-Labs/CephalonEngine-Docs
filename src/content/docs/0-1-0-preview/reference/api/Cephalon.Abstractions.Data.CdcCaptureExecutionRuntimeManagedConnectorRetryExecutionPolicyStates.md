---
title: Class CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicystates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector retry-execution policy answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorretryexecutionpolicystates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_BackgroundRetryDisabled"></a> BackgroundRetryDisabled

The current shared runtime truth allows one safe retry, but background retry execution is not enabled yet.

```csharp
public const string BackgroundRetryDisabled = "background-retry-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_Cooldown"></a> Cooldown

The current retry-execution policy is waiting for a cooldown window to elapse.

```csharp
public const string Cooldown = "cooldown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_ManualApproval"></a> ManualApproval

The current retry-execution policy still needs a human approval gate to clear first.

```csharp
public const string ManualApproval = "manual-approval"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_NotApplicable"></a> NotApplicable

The retry-execution policy does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_NotNeeded"></a> NotNeeded

The current shared runtime truth indicates that no further retry action is currently needed.

```csharp
public const string NotNeeded = "not-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_OperatorOnly"></a> OperatorOnly

The current retry-execution policy remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_PolicyBlocked"></a> PolicyBlocked

The current retry-execution policy remains blocked by shared runtime truth or safety guardrails.

```csharp
public const string PolicyBlocked = "policy-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorRetryExecutionPolicyStates_RetryReady"></a> RetryReady

The current retry-execution policy allows Cephalon to execute one safe retry automatically.

```csharp
public const string RetryReady = "retry-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
