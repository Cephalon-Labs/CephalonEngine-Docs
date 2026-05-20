---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector durable shared scheduler-orchestration answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordurablesharedschedulerorchestrationstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_Disabled"></a> Disabled

Durable shared scheduler orchestration is currently disabled for the runtime.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_LeaseBlocked"></a> LeaseBlocked

Durable shared scheduler orchestration remains blocked by broader lease-execution truth.

```csharp
public const string LeaseBlocked = "lease-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_NotApplicable"></a> NotApplicable

Durable shared scheduler orchestration does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_OperatorOnly"></a> OperatorOnly

Durable shared scheduler orchestration still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_RecoveryNeeded"></a> RecoveryNeeded

Durable shared scheduler orchestration still needs durable journal recovery or persistence hardening.

```csharp
public const string RecoveryNeeded = "recovery-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_Scheduled"></a> Scheduled

Durable shared scheduler orchestration can currently keep one bounded automatic retry scheduled on the current node.

```csharp
public const string Scheduled = "scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_SchedulerConflicted"></a> SchedulerConflicted

Durable shared scheduler orchestration remains conflicted across coordination or lease ownership truth.

```csharp
public const string SchedulerConflicted = "scheduler-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDurableSharedSchedulerOrchestrationStates_Unscheduled"></a> Unscheduled

Durable shared scheduler orchestration currently does not need to keep the runtime scheduled.

```csharp
public const string Unscheduled = "unscheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
