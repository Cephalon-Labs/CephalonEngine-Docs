---
title: Class AuditHistoryEntry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Represents one audit entry returned from a durable or queryable audit-history store.

```csharp
public sealed class AuditHistoryEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_DateTimeOffset_Cephalon_Abstractions_Audit_AuditActor_Cephalon_Abstractions_Audit_AuditOutcome_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Audit_AuditChange__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuditHistoryEntry\(string, string, string, string, string, string?, DateTimeOffset, DateTimeOffset, AuditActor, AuditOutcome, string?, string?, IReadOnlyList<AuditChange\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new audit-history entry.

```csharp
public AuditHistoryEntry(string id, string category, string action, string summary, string subjectType, string? subjectId, DateTimeOffset occurredAtUtc, DateTimeOffset persistedAtUtc, AuditActor actor, AuditOutcome outcome = AuditOutcome.Unknown, string? tenantId = null, string? correlationId = null, IReadOnlyList<AuditChange>? changes = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable audit-entry identifier.

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical audit category such as <code>identity</code>, <code>tenant</code>, or <code>billing</code>.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical action identifier associated with the audit event.

`summary` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable audit summary.

`subjectType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical subject type associated with the entry.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable subject identifier associated with the entry when one is known.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the audited operation occurred.

`persistedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time at which the audit entry was durably persisted.

`actor` [AuditActor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditactor/)

The actor responsible for the audited operation.

`outcome` [AuditOutcome](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditoutcome/)

The outcome recorded for the audited operation.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the audited operation.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the audited operation.

`changes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditChange](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditchange/)\>?

Optional field-level changes captured for the operation.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the entry.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional audit metadata.

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Action"></a> Action

Gets the logical action identifier associated with the audit event.

```csharp
public string Action { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Actor"></a> Actor

Gets the actor responsible for the audited operation.

```csharp
public AuditActor Actor { get; }
```

#### Property Value

 [AuditActor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditactor/)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Category"></a> Category

Gets the logical audit category.

```csharp
public string Category { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Changes"></a> Changes

Gets the field-level changes captured for the operation.

```csharp
public IReadOnlyList<AuditChange> Changes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditChange](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditchange/)\>

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the audited operation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Id"></a> Id

Gets the stable audit-entry identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Metadata"></a> Metadata

Gets audit metadata associated with the entry.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the audited operation occurred.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Outcome"></a> Outcome

Gets the outcome recorded for the audited operation.

```csharp
public AuditOutcome Outcome { get; }
```

#### Property Value

 [AuditOutcome](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditoutcome/)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_PersistedAtUtc"></a> PersistedAtUtc

Gets the time at which the audit entry was durably persisted.

```csharp
public DateTimeOffset PersistedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_SubjectId"></a> SubjectId

Gets the stable subject identifier associated with the entry when one is known.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_SubjectType"></a> SubjectType

Gets the logical subject type associated with the entry.

```csharp
public string SubjectType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Summary"></a> Summary

Gets the human-readable audit summary.

```csharp
public string Summary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_Tags"></a> Tags

Gets descriptive tags associated with the entry.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Audit_AuditHistoryEntry_TenantId"></a> TenantId

Gets the tenant identifier associated with the audited operation.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
