---
title: Class TenantInvitationDeliveryRetryResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the aggregate result of one tenant invitation delivery retry runner pass.

```csharp
public sealed class TenantInvitationDeliveryRetryResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult__ctor_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRetryResult\(string, int, int, int, int, int, int, DateTimeOffset, IReadOnlyList<TenantInvitationDeliveryResult\>?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery retry result.

```csharp
public TenantInvitationDeliveryRetryResult(string outcome, int attemptedCount, int dispatchedCount, int failedCount, int exhaustedCount, int terminalCount, int remainingPendingCount, DateTimeOffset atUtc, IReadOnlyList<TenantInvitationDeliveryResult>? deliveryResults = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable retry runner outcome.

`attemptedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of retry entries attempted.

`dispatchedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of retry entries dispatched successfully.

`failedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of attempted entries that remained pending after failure.

`exhaustedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of attempted entries that exhausted their retry budget.

`terminalCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of attempted entries that hit a terminal invitation state.

`remainingPendingCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of pending entries retained after the pass.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp used for retry evaluation.

`deliveryResults` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryresult/)\>?

The delivery dispatch results produced by this pass.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional retry result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_AtUtc"></a> AtUtc

Gets the UTC timestamp used for retry evaluation.

```csharp
public DateTimeOffset AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_AttemptedCount"></a> AttemptedCount

Gets the number of retry entries attempted.

```csharp
public int AttemptedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_DeliveryResults"></a> DeliveryResults

Gets the delivery dispatch results produced by this pass.

```csharp
public IReadOnlyList<TenantInvitationDeliveryResult> DeliveryResults { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryresult/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_DispatchedCount"></a> DispatchedCount

Gets the number of retry entries dispatched successfully.

```csharp
public int DispatchedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_ExhaustedCount"></a> ExhaustedCount

Gets the number of attempted entries that exhausted their retry budget.

```csharp
public int ExhaustedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_FailedCount"></a> FailedCount

Gets the number of attempted entries that remained pending after failure.

```csharp
public int FailedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_Metadata"></a> Metadata

Gets optional retry result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_Outcome"></a> Outcome

Gets the stable retry runner outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_RemainingPendingCount"></a> RemainingPendingCount

Gets the number of pending entries retained after the pass.

```csharp
public int RemainingPendingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryResult_TerminalCount"></a> TerminalCount

Gets the number of attempted entries that hit a terminal invitation state.

```csharp
public int TerminalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
