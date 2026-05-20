---
title: Class AuditMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-audit-conventions-auditmetadatakeys
editUrl: false
---

Namespace: [Cephalon.Audit.Conventions](/0-1-0-preview/reference/api/cephalon-audit-conventions/)  
Assembly: Cephalon.Audit.dll  

Defines shared metadata keys used by the Cephalon audit companion pack.

```csharp
public static class AuditMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditMetadataKeys](/0-1-0-preview/reference/api/cephalon-audit-conventions-auditmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_Action"></a> Action

The metadata key that stores the audit action identifier.

```csharp
public const string Action = "audit.action"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_ActorId"></a> ActorId

The metadata key that stores the actor identifier associated with an audit entry.

```csharp
public const string ActorId = "audit.actorId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_Category"></a> Category

The metadata key that stores the audit category.

```csharp
public const string Category = "audit.category"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_CorrelationId"></a> CorrelationId

The metadata key that stores the correlation identifier associated with an audit entry.

```csharp
public const string CorrelationId = "audit.correlationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_SubjectId"></a> SubjectId

The metadata key that stores the audited subject identifier.

```csharp
public const string SubjectId = "audit.subjectId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_SubjectType"></a> SubjectType

The metadata key that stores the audited subject type.

```csharp
public const string SubjectType = "audit.subjectType"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Audit_Conventions_AuditMetadataKeys_TenantId"></a> TenantId

The metadata key that stores the tenant identifier associated with an audit entry.

```csharp
public const string TenantId = "audit.tenantId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
