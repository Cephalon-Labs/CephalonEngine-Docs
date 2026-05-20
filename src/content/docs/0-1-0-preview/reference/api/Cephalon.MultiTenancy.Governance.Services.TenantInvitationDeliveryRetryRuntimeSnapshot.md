---
title: Class TenantInvitationDeliveryRetryRuntimeSnapshot
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryruntimesnapshot
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the latest runtime state of automatic tenant-invitation delivery retry scheduling.

```csharp
public sealed class TenantInvitationDeliveryRetryRuntimeSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryRuntimeSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryruntimesnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot__ctor_System_Boolean_System_String_System_Int32_System_Int32_System_Boolean_System_Int64_System_Int64_System_Int64_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRetryRuntimeSnapshot\(bool, string, int, int, bool, long, long, long, DateTimeOffset?, DateTimeOffset?, string?, int, int, int, int, int, int, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-invitation delivery retry scheduling runtime snapshot.

```csharp
public TenantInvitationDeliveryRetryRuntimeSnapshot(bool enabled, string ownership, int intervalSeconds, int maxItems, bool runOnStartup, long runCount, long successfulRunCount, long failedRunCount, DateTimeOffset? lastStartedAtUtc, DateTimeOffset? lastCompletedAtUtc, string? lastOutcome, int lastAttemptedCount, int lastDispatchedCount, int lastFailedCount, int lastExhaustedCount, int lastTerminalCount, int lastRemainingPendingCount, string? lastError, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether automatic background retry scheduling is effectively enabled.

`ownership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The automatic background retry scheduling ownership mode.

`intervalSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The effective background retry interval in seconds.

`maxItems` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The effective retry entry limit for one scheduled pass.

`runOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether background retry scheduling runs once during hosted-service startup.

`runCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background retry passes that reached a completed or failed terminal state.

`successfulRunCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background retry passes that completed without an unhandled failure.

`failedRunCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of background retry passes that failed before producing a retry result.

`lastStartedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest background retry pass started.

`lastCompletedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest background retry pass completed or failed.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest retry runner outcome.

`lastAttemptedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest attempted retry-entry count.

`lastDispatchedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest successfully dispatched retry-entry count.

`lastFailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest still-retryable failed retry-entry count.

`lastExhaustedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest exhausted retry-entry count.

`lastTerminalCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest terminal retry-entry count.

`lastRemainingPendingCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest remaining pending retry-entry count.

`lastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest unhandled background retry error message.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_Enabled"></a> Enabled

Gets a value indicating whether automatic background retry scheduling is effectively enabled.

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_FailedRunCount"></a> FailedRunCount

Gets the number of background retry passes that failed before producing a retry result.

```csharp
public long FailedRunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_IntervalSeconds"></a> IntervalSeconds

Gets the effective background retry interval in seconds.

```csharp
public int IntervalSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastAttemptedCount"></a> LastAttemptedCount

Gets the latest attempted retry-entry count.

```csharp
public int LastAttemptedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastCompletedAtUtc"></a> LastCompletedAtUtc

Gets the UTC timestamp when the latest background retry pass completed or failed.

```csharp
public DateTimeOffset? LastCompletedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastDispatchedCount"></a> LastDispatchedCount

Gets the latest successfully dispatched retry-entry count.

```csharp
public int LastDispatchedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastError"></a> LastError

Gets the latest unhandled background retry error message.

```csharp
public string? LastError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastExhaustedCount"></a> LastExhaustedCount

Gets the latest exhausted retry-entry count.

```csharp
public int LastExhaustedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastFailedCount"></a> LastFailedCount

Gets the latest still-retryable failed retry-entry count.

```csharp
public int LastFailedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastOutcome"></a> LastOutcome

Gets the latest retry runner outcome.

```csharp
public string? LastOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastRemainingPendingCount"></a> LastRemainingPendingCount

Gets the latest remaining pending retry-entry count.

```csharp
public int LastRemainingPendingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastStartedAtUtc"></a> LastStartedAtUtc

Gets the UTC timestamp when the latest background retry pass started.

```csharp
public DateTimeOffset? LastStartedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_LastTerminalCount"></a> LastTerminalCount

Gets the latest terminal retry-entry count.

```csharp
public int LastTerminalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_MaxItems"></a> MaxItems

Gets the effective retry entry limit for one scheduled pass.

```csharp
public int MaxItems { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_Metadata"></a> Metadata

Gets optional runtime metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_Ownership"></a> Ownership

Gets the automatic background retry scheduling ownership mode.

```csharp
public string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_RunCount"></a> RunCount

Gets the number of background retry passes that reached a completed or failed terminal state.

```csharp
public long RunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_RunOnStartup"></a> RunOnStartup

Gets a value indicating whether background retry scheduling runs once during hosted-service startup.

```csharp
public bool RunOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRuntimeSnapshot_SuccessfulRunCount"></a> SuccessfulRunCount

Gets the number of background retry passes that completed without an unhandled failure.

```csharp
public long SuccessfulRunCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
