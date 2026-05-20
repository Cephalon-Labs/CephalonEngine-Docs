---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector scheduler recovery and execution-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorschedulerrecoveryexecutionhardeningstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_ExecutionHardened"></a> ExecutionHardened

Scheduler execution truth currently looks hardened enough for truthful bounded execution on the shared lane.

```csharp
public const string ExecutionHardened = "execution-hardened"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_ExecutionRisk"></a> ExecutionRisk

Scheduler execution still remains risky because lease, scheduler, or automatic execution truth is not yet safe enough.

```csharp
public const string ExecutionRisk = "execution-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_NotApplicable"></a> NotApplicable

Scheduler recovery and execution hardening does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_OperatorOnly"></a> OperatorOnly

Scheduler recovery and execution hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_RecoveryBlocked"></a> RecoveryBlocked

Scheduler recovery remains blocked by missing, unhealthy, or incomplete durable journal evidence.

```csharp
public const string RecoveryBlocked = "recovery-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_RecoveryReady"></a> RecoveryReady

Scheduler recovery completed enough that the current node can safely resume bounded execution.

```csharp
public const string RecoveryReady = "recovery-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorSchedulerRecoveryExecutionHardeningStates_Replaying"></a> Replaying

Scheduler recovery is currently replaying bounded execution evidence on the current node.

```csharp
public const string Replaying = "replaying"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
