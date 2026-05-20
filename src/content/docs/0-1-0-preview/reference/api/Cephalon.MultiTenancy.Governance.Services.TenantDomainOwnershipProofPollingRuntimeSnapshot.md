---
title: Class TenantDomainOwnershipProofPollingRuntimeSnapshot
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingruntimesnapshot
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the latest runtime state of tenant-domain ownership proof polling.

```csharp
public sealed class TenantDomainOwnershipProofPollingRuntimeSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPollingRuntimeSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingruntimesnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot__ctor_System_Boolean_System_String_System_Int32_System_Int32_System_Boolean_System_Boolean_System_Int64_System_Int64_System_Int64_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofPollingRuntimeSnapshot\(bool, string, int, int, bool, bool, long, long, long, DateTimeOffset?, DateTimeOffset?, string?, string?, int, int, int, int, int, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof polling runtime snapshot.

```csharp
public TenantDomainOwnershipProofPollingRuntimeSnapshot(bool enabled, string ownership, int intervalSeconds, int batchLimit, bool runOnStartup, bool dnsTxtResolverConfigured, long runCount, long successfulRunCount, long failedRunCount, DateTimeOffset? lastStartedAtUtc, DateTimeOffset? lastCompletedAtUtc, string? lastOutcome, string? lastReason, int lastCandidateCount, int lastVerificationCount, int lastVerifiedCount, int lastRejectedCount, int lastFailedCount, string? lastError, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether automatic background proof polling is effectively enabled.

`ownership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The automatic background proof polling ownership mode.

`intervalSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The effective background polling interval in seconds.

`batchLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The effective proof polling batch limit.

`runOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether background proof polling runs once during hosted-service startup.

`dnsTxtResolverConfigured` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether DNS TXT proof collection has an explicit resolver endpoint.

`runCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background polling passes that reached a completed or failed terminal state.

`successfulRunCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background polling passes that completed without an unhandled failure.

`failedRunCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background polling passes that failed before producing a polling result.

`lastStartedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest background polling pass started.

`lastCompletedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest background polling pass completed or failed.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest proof polling outcome.

`lastReason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing proof polling reason.

`lastCandidateCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest candidate count.

`lastVerificationCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest verification-attempt count.

`lastVerifiedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest verified count.

`lastRejectedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest rejected count.

`lastFailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest failed-attempt count.

`lastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest unhandled background polling error message.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_BatchLimit"></a> BatchLimit

Gets the effective proof polling batch limit.

```csharp
public int BatchLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_DnsTxtResolverConfigured"></a> DnsTxtResolverConfigured

Gets a value indicating whether DNS TXT proof collection has an explicit resolver endpoint.

```csharp
public bool DnsTxtResolverConfigured { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_Enabled"></a> Enabled

Gets a value indicating whether automatic background proof polling is effectively enabled.

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_FailedRunCount"></a> FailedRunCount

Gets the number of background polling passes that failed before producing a polling result.

```csharp
public long FailedRunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_IntervalSeconds"></a> IntervalSeconds

Gets the effective background polling interval in seconds.

```csharp
public int IntervalSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastCandidateCount"></a> LastCandidateCount

Gets the latest candidate count.

```csharp
public int LastCandidateCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastCompletedAtUtc"></a> LastCompletedAtUtc

Gets the UTC timestamp when the latest background polling pass completed or failed.

```csharp
public DateTimeOffset? LastCompletedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastError"></a> LastError

Gets the latest unhandled background polling error message.

```csharp
public string? LastError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastFailedCount"></a> LastFailedCount

Gets the latest failed-attempt count.

```csharp
public int LastFailedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastOutcome"></a> LastOutcome

Gets the latest proof polling outcome.

```csharp
public string? LastOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastReason"></a> LastReason

Gets the latest operator-facing proof polling reason.

```csharp
public string? LastReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastRejectedCount"></a> LastRejectedCount

Gets the latest rejected count.

```csharp
public int LastRejectedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastStartedAtUtc"></a> LastStartedAtUtc

Gets the UTC timestamp when the latest background polling pass started.

```csharp
public DateTimeOffset? LastStartedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastVerificationCount"></a> LastVerificationCount

Gets the latest verification-attempt count.

```csharp
public int LastVerificationCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_LastVerifiedCount"></a> LastVerifiedCount

Gets the latest verified count.

```csharp
public int LastVerifiedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_Metadata"></a> Metadata

Gets optional runtime metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_Ownership"></a> Ownership

Gets the automatic background proof polling ownership mode.

```csharp
public string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_RunCount"></a> RunCount

Gets the number of background polling passes that reached a completed or failed terminal state.

```csharp
public long RunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_RunOnStartup"></a> RunOnStartup

Gets a value indicating whether background proof polling runs once during hosted-service startup.

```csharp
public bool RunOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRuntimeSnapshot_SuccessfulRunCount"></a> SuccessfulRunCount

Gets the number of background polling passes that completed without an unhandled failure.

```csharp
public long SuccessfulRunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
