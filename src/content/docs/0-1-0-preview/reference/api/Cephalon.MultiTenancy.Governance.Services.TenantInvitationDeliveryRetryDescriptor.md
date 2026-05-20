---
title: Class TenantInvitationDeliveryRetryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one queued tenant invitation delivery retry entry.

```csharp
public sealed class TenantInvitationDeliveryRetryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_String_System_Int32_System_Int32_System_DateTimeOffset_System_DateTimeOffset_System_Nullable_System_DateTimeOffset__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRetryDescriptor\(string, string, string, string?, string?, string?, string?, string?, bool, string, int, int, DateTimeOffset, DateTimeOffset, DateTimeOffset?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery retry descriptor.

```csharp
public TenantInvitationDeliveryRetryDescriptor(string retryId, string tenantId, string invitationId, string? channel, string? senderId, string? source, string? actor, string? correlationId, bool recordDelivery, string status, int attemptCount, int maxAttempts, DateTimeOffset createdAtUtc, DateTimeOffset nextAttemptAtUtc, DateTimeOffset? lastAttemptAtUtc, string? lastOutcome, string? lastReason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`retryId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable retry entry identifier.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the invitation.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to retry.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery channel to retry.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The sender identifier to retry when specified.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source recorded on the next retry attempt.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor recorded on the next retry attempt.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier retained for retry attempts.

`recordDelivery` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether retry attempts should record delivery metadata.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The retry entry status.

`attemptCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of dispatch attempts represented by this entry, including the original failed attempt.

`maxAttempts` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of dispatch attempts allowed for this entry.

`createdAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the retry entry was created.

`nextAttemptAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the next attempt is due.

`lastAttemptAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp of the latest dispatch attempt.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest delivery dispatch outcome.

`lastReason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest delivery dispatch reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional retry metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_Actor"></a> Actor

Gets the actor recorded on retry attempts.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_AttemptCount"></a> AttemptCount

Gets the number of dispatch attempts represented by this entry.

```csharp
public int AttemptCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_Channel"></a> Channel

Gets the delivery channel to retry.

```csharp
public string Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_CorrelationId"></a> CorrelationId

Gets the correlation identifier retained for retry attempts.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_CreatedAtUtc"></a> CreatedAtUtc

Gets the UTC timestamp when the retry entry was created.

```csharp
public DateTimeOffset CreatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_InvitationId"></a> InvitationId

Gets the invitation identifier to retry.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_LastAttemptAtUtc"></a> LastAttemptAtUtc

Gets the UTC timestamp of the latest dispatch attempt.

```csharp
public DateTimeOffset? LastAttemptAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_LastOutcome"></a> LastOutcome

Gets the latest delivery dispatch outcome.

```csharp
public string? LastOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_LastReason"></a> LastReason

Gets the latest delivery dispatch reason.

```csharp
public string? LastReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_MaxAttempts"></a> MaxAttempts

Gets the maximum number of dispatch attempts allowed for this entry.

```csharp
public int MaxAttempts { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_Metadata"></a> Metadata

Gets optional retry metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_NextAttemptAtUtc"></a> NextAttemptAtUtc

Gets the UTC timestamp when the next attempt is due.

```csharp
public DateTimeOffset NextAttemptAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_RecordDelivery"></a> RecordDelivery

Gets a value indicating whether retry attempts should record delivery metadata.

```csharp
public bool RecordDelivery { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_RetryId"></a> RetryId

Gets the stable retry entry identifier.

```csharp
public string RetryId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_SenderId"></a> SenderId

Gets the sender identifier to retry when specified.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_Source"></a> Source

Gets the source recorded on retry attempts.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_Status"></a> Status

Gets the retry entry status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_TenantId"></a> TenantId

Gets the tenant identifier that owns the invitation.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_WithRetryState_System_String_System_Int32_System_DateTimeOffset_System_Nullable_System_DateTimeOffset__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> WithRetryState\(string, int, DateTimeOffset, DateTimeOffset?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a copy of this retry entry with updated retry state.

```csharp
public TenantInvitationDeliveryRetryDescriptor WithRetryState(string status, int attemptCount, DateTimeOffset nextAttemptAtUtc, DateTimeOffset? lastAttemptAtUtc, string? lastOutcome, string? lastReason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The updated status.

`attemptCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The updated attempt count.

`nextAttemptAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The updated next-attempt timestamp.

`lastAttemptAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The updated last-attempt timestamp.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The updated latest outcome.

`lastReason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The updated latest reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The updated metadata.

#### Returns

 [TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)

The updated retry descriptor.
