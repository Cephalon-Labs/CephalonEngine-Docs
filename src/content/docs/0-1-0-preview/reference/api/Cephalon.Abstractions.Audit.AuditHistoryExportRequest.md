---
title: Class AuditHistoryExportRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryexportrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Describes a host-agnostic audit-history export request against the active audit-history exporter.

```csharp
public sealed class AuditHistoryExportRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryExportRequest](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryexportrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_Cephalon_Abstractions_Audit_AuditOutcome__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Int32_"></a> AuditHistoryExportRequest\(string?, string?, string?, string?, string?, string?, string?, AuditOutcome?, DateTimeOffset?, DateTimeOffset?, int\)

Creates a new audit-history export request.

```csharp
public AuditHistoryExportRequest(string? category = null, string? action = null, string? subjectType = null, string? subjectId = null, string? actorId = null, string? tenantId = null, string? correlationId = null, AuditOutcome? outcome = null, DateTimeOffset? occurredFromUtc = null, DateTimeOffset? occurredToUtc = null, int maxEntries = 1000)
```

#### Parameters

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional logical audit category filter.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional logical action identifier filter.

`subjectType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional logical subject-type filter.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional stable subject identifier filter.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional stable actor identifier filter.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional tenant identifier filter.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional correlation identifier filter.

`outcome` [AuditOutcome](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditoutcome/)?

An optional audit-outcome filter.

`occurredFromUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

An optional inclusive lower occurrence bound.

`occurredToUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

An optional inclusive upper occurrence bound.

`maxEntries` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of exported entries.

## Fields

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_DefaultMaxEntries"></a> DefaultMaxEntries

Gets the default maximum number of audit-history entries exported when the caller does not supply one.

```csharp
public const int DefaultMaxEntries = 1000
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_Action"></a> Action

Gets the optional logical action identifier filter.

```csharp
public string? Action { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_ActorId"></a> ActorId

Gets the optional stable actor identifier filter.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_Category"></a> Category

Gets the optional logical audit category filter.

```csharp
public string? Category { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier filter.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_MaxEntries"></a> MaxEntries

Gets the maximum number of entries to export.

```csharp
public int MaxEntries { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_OccurredFromUtc"></a> OccurredFromUtc

Gets the optional inclusive lower occurrence bound.

```csharp
public DateTimeOffset? OccurredFromUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_OccurredToUtc"></a> OccurredToUtc

Gets the optional inclusive upper occurrence bound.

```csharp
public DateTimeOffset? OccurredToUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_Outcome"></a> Outcome

Gets the optional audit-outcome filter.

```csharp
public AuditOutcome? Outcome { get; }
```

#### Property Value

 [AuditOutcome](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditoutcome/)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_SubjectId"></a> SubjectId

Gets the optional stable subject identifier filter.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_SubjectType"></a> SubjectType

Gets the optional logical subject-type filter.

```csharp
public string? SubjectType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditHistoryExportRequest_TenantId"></a> TenantId

Gets the optional tenant identifier filter.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
