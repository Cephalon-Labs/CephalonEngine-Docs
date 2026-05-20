---
title: Interface IEntityFrameworkAuditHistoryContext
slug: 0-1-0-preview/reference/api/cephalon-audit-entityframework-ientityframeworkaudithistorycontext
editUrl: false
---

Namespace: [Cephalon.Audit.EntityFramework](/0-1-0-preview/reference/api/cephalon-audit-entityframework/)  
Assembly: Cephalon.Audit.EntityFramework.dll  

Represents a <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> that can persist Cephalon durable audit-history rows.

```csharp
public interface IEntityFrameworkAuditHistoryContext
```

## Properties

### <a id="Cephalon_Audit_EntityFramework_IEntityFrameworkAuditHistoryContext_AuditEntries"></a> AuditEntries

Gets the durable audit-history rows persisted by this context.

```csharp
DbSet<EntityFrameworkAuditHistoryEntry> AuditEntries { get; }
```

#### Property Value

 [DbSet](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbset\-1)<[EntityFrameworkAuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-audit-entityframework-entityframeworkaudithistoryentry/)\>
