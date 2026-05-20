---
title: Class EntityFrameworkAuditHistoryEntry
slug: 0-1-0-preview/reference/api/cephalon-audit-entityframework-entityframeworkaudithistoryentry
editUrl: false
---

Namespace: [Cephalon.Audit.EntityFramework](/0-1-0-preview/reference/api/cephalon-audit-entityframework/)  
Assembly: Cephalon.Audit.EntityFramework.dll  

Represents one durable audit-history row persisted by the Entity Framework provider.

```csharp
public sealed class EntityFrameworkAuditHistoryEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkAuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-audit-entityframework-entityframeworkaudithistoryentry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_Action"></a> Action

Gets or sets the logical action identifier.

```csharp
public string Action { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_ActorDisplayName"></a> ActorDisplayName

Gets or sets the actor display name associated with the entry.

```csharp
public string ActorDisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_ActorId"></a> ActorId

Gets or sets the actor identifier associated with the entry.

```csharp
public string ActorId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_ActorIsSystem"></a> ActorIsSystem

Gets or sets a value indicating whether the actor represents a system principal.

```csharp
public bool ActorIsSystem { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_ActorType"></a> ActorType

Gets or sets the actor type associated with the entry.

```csharp
public string ActorType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_Category"></a> Category

Gets or sets the logical audit category.

```csharp
public string Category { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_ChangesJson"></a> ChangesJson

Gets or sets the serialized change set associated with the entry.

```csharp
public string ChangesJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_CorrelationId"></a> CorrelationId

Gets or sets the correlation identifier associated with the entry.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_Id"></a> Id

Gets or sets the stable audit-entry identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_MetadataJson"></a> MetadataJson

Gets or sets the serialized audit metadata associated with the entry.

```csharp
public string MetadataJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the time at which the audited operation occurred.

```csharp
public DateTimeOffset OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_Outcome"></a> Outcome

Gets or sets the serialized audit outcome.

```csharp
public string Outcome { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_PersistedAtUtc"></a> PersistedAtUtc

Gets or sets the time at which the durable history row was persisted.

```csharp
public DateTimeOffset PersistedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_SubjectId"></a> SubjectId

Gets or sets the stable subject identifier associated with the entry.

```csharp
public string? SubjectId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_SubjectType"></a> SubjectType

Gets or sets the logical subject type associated with the entry.

```csharp
public string SubjectType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_Summary"></a> Summary

Gets or sets the human-readable audit summary.

```csharp
public string Summary { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_TagsJson"></a> TagsJson

Gets or sets the serialized descriptive tags associated with the entry.

```csharp
public string TagsJson { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_EntityFramework_EntityFrameworkAuditHistoryEntry_TenantId"></a> TenantId

Gets or sets the tenant identifier associated with the entry.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
