---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector cross-node idempotency-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_DuplicateLineageRisk"></a> DuplicateLineageRisk

Cross-node idempotency remains risky because retained command lineage already looks duplicated for the current retry posture.

```csharp
public const string DuplicateLineageRisk = "duplicate-lineage-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_IdempotentSafe"></a> IdempotentSafe

Cross-node idempotency evidence currently looks safe for the current retry posture.

```csharp
public const string IdempotentSafe = "idempotent-safe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_NotApplicable"></a> NotApplicable

Cross-node idempotency hardening does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_OperatorOnly"></a> OperatorOnly

Cross-node idempotency hardening still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_ReplayWindowRisk"></a> ReplayWindowRisk

Cross-node idempotency remains risky because the durable replay window still lacks enough retained evidence.

```csharp
public const string ReplayWindowRisk = "replay-window-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningStates_StaleOwnerRisk"></a> StaleOwnerRisk

Cross-node idempotency remains risky because ownership or reporter-lease truth still looks stale or conflicted.

```csharp
public const string StaleOwnerRisk = "stale-owner-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
