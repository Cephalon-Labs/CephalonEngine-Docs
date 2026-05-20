---
title: Class AuditRecordRequest
slug: 0-1-0-preview/reference/api/cephalon-audit-services-auditrecordrequest
editUrl: false
---

Namespace: [Cephalon.Audit.Services](/0-1-0-preview/reference/api/cephalon-audit-services/)  
Assembly: Cephalon.Audit.dll  

Describes one audit request before Cephalon fills its default runtime context.

```csharp
public sealed class AuditRecordRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditRecordRequest](/0-1-0-preview/reference/api/cephalon-audit-services-auditrecordrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Audit_Services_AuditRecordRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__Cephalon_Abstractions_Audit_AuditActor_Cephalon_Abstractions_Audit_AuditOutcome_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Audit_AuditChange__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuditRecordRequest\(string, string, string, string, string?, string?, DateTimeOffset?, AuditActor?, AuditOutcome, string?, string?, IReadOnlyList<AuditChange\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new audit-record request.

```csharp
public AuditRecordRequest(string category, string action, string summary, string subjectType, string? subjectId = null, string? entryId = null, DateTimeOffset? occurredAtUtc = null, AuditActor? actor = null, AuditOutcome outcome = AuditOutcome.Unknown, string? tenantId = null, string? correlationId = null, IReadOnlyList<AuditChange>? changes = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical audit category.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical action identifier associated with the audit event.

`summary` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable audit summary.

`subjectType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical subject type associated with the entry.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable subject identifier associated with the entry when one is known.

`entryId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable audit-entry identifier when the caller wants to supply one explicitly.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The occurrence time when the caller wants to supply it explicitly.

`actor` AuditActor?

The actor responsible for the audited operation when the caller wants to supply one explicitly.

`outcome` AuditOutcome

The outcome recorded for the audited operation.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the audited operation.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the audited operation.

`changes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AuditChange\>?

Optional field-level changes captured for the operation.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the entry.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional audit metadata.

## Properties

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Action"></a> Action

Gets the logical action identifier associated with the audit event.

```csharp
public string Action { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Actor"></a> Actor

Gets the actor responsible for the audited operation when one was supplied explicitly.

```csharp
public AuditActor? Actor { get; }
```

#### Property Value

 AuditActor?

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Category"></a> Category

Gets the logical audit category.

```csharp
public string Category { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Changes"></a> Changes

Gets the field-level changes captured for the operation.

```csharp
public IReadOnlyList<AuditChange> Changes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AuditChange\>

### <a id="Cephalon_Audit_Services_AuditRecordRequest_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the audited operation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Audit_Services_AuditRecordRequest_EntryId"></a> EntryId

Gets the caller-supplied audit-entry identifier when one is known.

```csharp
public string? EntryId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Metadata"></a> Metadata

Gets audit metadata associated with the entry.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Audit_Services_AuditRecordRequest_OccurredAtUtc"></a> OccurredAtUtc

Gets the caller-supplied occurrence time when one is known.

```csharp
public DateTimeOffset? OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Outcome"></a> Outcome

Gets the outcome recorded for the audited operation.

```csharp
public AuditOutcome Outcome { get; }
```

#### Property Value

 AuditOutcome

### <a id="Cephalon_Audit_Services_AuditRecordRequest_SubjectId"></a> SubjectId

Gets the stable subject identifier associated with the entry when one is known.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Audit_Services_AuditRecordRequest_SubjectType"></a> SubjectType

Gets the logical subject type associated with the entry.

```csharp
public string SubjectType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Summary"></a> Summary

Gets the human-readable audit summary.

```csharp
public string Summary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Services_AuditRecordRequest_Tags"></a> Tags

Gets descriptive tags associated with the entry.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Audit_Services_AuditRecordRequest_TenantId"></a> TenantId

Gets the tenant identifier associated with the audited operation.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
