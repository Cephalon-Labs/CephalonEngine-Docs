---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutioncategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector broader multi-node lease-execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutioncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_ActiveLeaseVisible"></a> ActiveLeaseVisible

The current runtime still exposes one active reporter lease.

```csharp
public const string ActiveLeaseVisible = "active-lease-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_ActiveReporterVisible"></a> ActiveReporterVisible

The current runtime still exposes one active reporter identifier.

```csharp
public const string ActiveReporterVisible = "active-reporter-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_CooldownWindow"></a> CooldownWindow

The current retry policy is still waiting for a cooldown window to elapse.

```csharp
public const string CooldownWindow = "cooldown-window"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_CrossNodeIdempotencyRisk"></a> CrossNodeIdempotencyRisk

Cross-node idempotency currently remains risky for the current multi-node lease posture.

```csharp
public const string CrossNodeIdempotencyRisk = "cross-node-idempotency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_CrossNodeIdempotentSafe"></a> CrossNodeIdempotentSafe

Cross-node idempotency currently looks safe for the current multi-node lease posture.

```csharp
public const string CrossNodeIdempotentSafe = "cross-node-idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet execute the next bounded automatic retry step.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute the next bounded automatic retry step.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseBlocked"></a> LeaseBlocked

The current multi-node lease posture still blocks execution on this node.

```csharp
public const string LeaseBlocked = "lease-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseConflict"></a> LeaseConflict

The current runtime still exposes conflicting retry lease ownership.

```csharp
public const string LeaseConflict = "lease-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on cross-node lease ownership before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseExecutable"></a> LeaseExecutable

The current multi-node lease posture allows execution on this node.

```csharp
public const string LeaseExecutable = "lease-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseHeld"></a> LeaseHeld

The current runtime still exposes an active retry lease.

```csharp
public const string LeaseHeld = "lease-held"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_LeaseMissing"></a> LeaseMissing

The current runtime does not currently expose an active retry lease.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_NoFurtherRetryNeeded"></a> NoFurtherRetryNeeded

The current shared runtime truth does not currently need another automatic retry attempt.

```csharp
public const string NoFurtherRetryNeeded = "no-further-retry-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_OperatorOnly"></a> OperatorOnly

Multi-node lease execution still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_SchedulerDisabled"></a> SchedulerDisabled

The shared bounded retry scheduler is currently disabled for the runtime.

```csharp
public const string SchedulerDisabled = "scheduler-disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime currently executes automatic retry on a single node without cross-node lease ownership.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionCategories_StaleLeaseRisk"></a> StaleLeaseRisk

The current multi-node lease posture still looks stale.

```csharp
public const string StaleLeaseRisk = "stale-lease-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
