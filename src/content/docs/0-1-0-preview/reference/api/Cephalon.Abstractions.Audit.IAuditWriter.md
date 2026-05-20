---
title: Interface IAuditWriter
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditwriter
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Persists audit entries for the current runtime.

```csharp
public interface IAuditWriter
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditWriter_WriteAsync_Cephalon_Abstractions_Audit_AuditEntry_System_Threading_CancellationToken_"></a> WriteAsync\(AuditEntry, CancellationToken\)

Writes one audit entry.

```csharp
ValueTask WriteAsync(AuditEntry entry, CancellationToken cancellationToken = default)
```

#### Parameters

`entry` [AuditEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditentry/)

The audit entry to write.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the audit entry has been written.
