---
title: Class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector broader multi-node lease-execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectormultinodeleaseexecutionstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_LeaseBlocked"></a> LeaseBlocked

The current node cannot yet execute the next bounded automatic retry step even though lease execution applies.

```csharp
public const string LeaseBlocked = "lease-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_LeaseConflicted"></a> LeaseConflicted

The current multi-node lease posture remains conflicted across nodes.

```csharp
public const string LeaseConflicted = "lease-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_LeaseExecutable"></a> LeaseExecutable

The current node can execute the next bounded automatic retry step under the active multi-node lease posture.

```csharp
public const string LeaseExecutable = "lease-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_NotApplicable"></a> NotApplicable

Multi-node lease execution does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_OperatorOnly"></a> OperatorOnly

Multi-node lease execution still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_SingleNode"></a> SingleNode

The runtime currently executes automatic retry on a single node without cross-node lease ownership.

```csharp
public const string SingleNode = "single-node"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorMultiNodeLeaseExecutionStates_StaleLeaseRisk"></a> StaleLeaseRisk

The current multi-node lease posture remains risky because ownership truth still looks stale.

```csharp
public const string StaleLeaseRisk = "stale-lease-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
