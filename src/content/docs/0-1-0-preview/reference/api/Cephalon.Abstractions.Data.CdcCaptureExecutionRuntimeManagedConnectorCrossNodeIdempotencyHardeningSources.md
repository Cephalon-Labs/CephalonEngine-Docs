---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector cross-node idempotency-hardening answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcrossnodeidempotencyhardeningsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_AutomaticRetryCoordination"></a> AutomaticRetryCoordination

The cross-node idempotency-hardening answer was derived primarily from automatic-retry coordination truth.

```csharp
public const string AutomaticRetryCoordination = "automatic-retry-coordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_CommandExecutionHistory"></a> CommandExecutionHistory

The cross-node idempotency-hardening answer was derived primarily from retained command-execution history.

```csharp
public const string CommandExecutionHistory = "command-execution-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_CommandJournalDurability"></a> CommandJournalDurability

The cross-node idempotency-hardening answer was derived primarily from durable command-journal truth.

```csharp
public const string CommandJournalDurability = "command-journal-durability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_DistributedRetryLease"></a> DistributedRetryLease

The cross-node idempotency-hardening answer was derived primarily from distributed retry lease truth.

```csharp
public const string DistributedRetryLease = "distributed-retry-lease"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_RetryExecutionPolicy"></a> RetryExecutionPolicy

The cross-node idempotency-hardening answer was derived primarily from retry-execution policy truth.

```csharp
public const string RetryExecutionPolicy = "retry-execution-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCrossNodeIdempotencyHardeningSources_Unknown"></a> Unknown

The cross-node idempotency-hardening answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
