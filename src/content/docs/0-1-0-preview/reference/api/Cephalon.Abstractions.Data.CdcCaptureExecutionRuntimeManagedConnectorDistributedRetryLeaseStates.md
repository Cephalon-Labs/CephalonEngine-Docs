---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasestates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector distributed retry lease answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordistributedretryleasestates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_IdempotencyRisk"></a> IdempotencyRisk

Automatic retry cannot run because cross-node idempotency evidence is incomplete or unsafe.

```csharp
public const string IdempotencyRisk = "idempotency-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_IdempotentSafe"></a> IdempotentSafe

Automatic retry can run because Cephalon has both lease ownership and restart-safe idempotency evidence.

```csharp
public const string IdempotentSafe = "idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_LeaseConflicted"></a> LeaseConflicted

Automatic retry cannot run because lease ownership or multi-node coordination remains conflicted.

```csharp
public const string LeaseConflicted = "lease-conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_LeaseHeld"></a> LeaseHeld

The current node holds the active retry lease, but Cephalon has not yet proven cross-node idempotency from retained history.

```csharp
public const string LeaseHeld = "lease-held"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_LeaseMissing"></a> LeaseMissing

Automatic retry cannot run because no active retry lease is currently visible.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_NotApplicable"></a> NotApplicable

Distributed retry lease posture does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_OperatorOnly"></a> OperatorOnly

Distributed retry lease posture still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDistributedRetryLeaseStates_SingleNode"></a> SingleNode

Automatic retry can run on the current node without cross-node coordination.

```csharp
public const string SingleNode = "single-node"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
