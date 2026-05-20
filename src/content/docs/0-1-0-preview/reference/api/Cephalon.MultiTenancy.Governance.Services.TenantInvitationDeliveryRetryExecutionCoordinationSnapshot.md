---
title: Class TenantInvitationDeliveryRetryExecutionCoordinationSnapshot
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryexecutioncoordinationsnapshot
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the latest runtime state of process-local tenant-invitation delivery retry execution coordination.

```csharp
public sealed class TenantInvitationDeliveryRetryExecutionCoordinationSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryExecutionCoordinationSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryexecutioncoordinationsnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot__ctor_System_Boolean_System_String_System_String_System_String_System_Boolean_System_Int64_System_Int64_System_Int64_System_Int64_System_Int64_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRetryExecutionCoordinationSnapshot\(bool, string, string, string, bool, long, long, long, long, long, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-invitation delivery retry execution coordination snapshot.

```csharp
public TenantInvitationDeliveryRetryExecutionCoordinationSnapshot(bool enabled, string ownership, string scope, string mode, bool isRunning, long attemptCount, long acceptedCount, long skippedCount, long completedCount, long failedCount, DateTimeOffset? lastStartedAtUtc, DateTimeOffset? lastCompletedAtUtc, DateTimeOffset? lastSkippedAtUtc, string? lastOutcome, string? lastError, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether process-local retry execution coordination is effectively enabled.

`ownership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The retry execution coordination ownership mode.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The coordination scope, such as process-local or none.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The coordination mode, such as skip-overlap or disabled.

`isRunning` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether a coordinated retry pass is currently running.

`attemptCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of attempts to enter the coordinator.

`acceptedCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of coordinator attempts accepted for execution.

`skippedCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of coordinator attempts skipped because another pass was already running.

`completedCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of coordinated retry passes completed with a retry result.

`failedCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The number of coordinated retry passes that ended with an unhandled failure.

`lastStartedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest accepted coordinated retry pass started.

`lastCompletedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest coordinated retry pass completed or failed.

`lastSkippedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest overlapping retry pass was skipped.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest coordination or retry runner outcome.

`lastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest unhandled coordinated retry error message.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_AcceptedCount"></a> AcceptedCount

Gets the number of coordinator attempts accepted for execution.

```csharp
public long AcceptedCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_AttemptCount"></a> AttemptCount

Gets the number of attempts to enter the coordinator.

```csharp
public long AttemptCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_CompletedCount"></a> CompletedCount

Gets the number of coordinated retry passes completed with a retry result.

```csharp
public long CompletedCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_Enabled"></a> Enabled

Gets a value indicating whether process-local retry execution coordination is effectively enabled.

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_FailedCount"></a> FailedCount

Gets the number of coordinated retry passes that ended with an unhandled failure.

```csharp
public long FailedCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_IsRunning"></a> IsRunning

Gets a value indicating whether a coordinated retry pass is currently running.

```csharp
public bool IsRunning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_LastCompletedAtUtc"></a> LastCompletedAtUtc

Gets the UTC timestamp when the latest coordinated retry pass completed or failed.

```csharp
public DateTimeOffset? LastCompletedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_LastError"></a> LastError

Gets the latest unhandled coordinated retry error message.

```csharp
public string? LastError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_LastOutcome"></a> LastOutcome

Gets the latest coordination or retry runner outcome.

```csharp
public string? LastOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_LastSkippedAtUtc"></a> LastSkippedAtUtc

Gets the UTC timestamp when the latest overlapping retry pass was skipped.

```csharp
public DateTimeOffset? LastSkippedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_LastStartedAtUtc"></a> LastStartedAtUtc

Gets the UTC timestamp when the latest accepted coordinated retry pass started.

```csharp
public DateTimeOffset? LastStartedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_Metadata"></a> Metadata

Gets optional runtime metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_Mode"></a> Mode

Gets the coordination mode, such as skip-overlap or disabled.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_Ownership"></a> Ownership

Gets the retry execution coordination ownership mode.

```csharp
public string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_Scope"></a> Scope

Gets the coordination scope, such as process-local or none.

```csharp
public string Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryExecutionCoordinationSnapshot_SkippedCount"></a> SkippedCount

Gets the number of coordinator attempts skipped because another pass was already running.

```csharp
public long SkippedCount { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
