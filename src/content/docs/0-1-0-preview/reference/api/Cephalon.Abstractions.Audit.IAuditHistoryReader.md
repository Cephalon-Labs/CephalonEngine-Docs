---
title: Interface IAuditHistoryReader
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iaudithistoryreader
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Reads persisted audit-history entries from the active runtime.

```csharp
public interface IAuditHistoryReader
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditHistoryReader_GetByIdAsync_System_String_System_Threading_CancellationToken_"></a> GetByIdAsync\(string, CancellationToken\)

Resolves one audit-history entry by its stable identifier.

```csharp
ValueTask<AuditHistoryEntry?> GetByIdAsync(string auditEntryId, CancellationToken cancellationToken = default)
```

#### Parameters

`auditEntryId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable audit-entry identifier to resolve.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)?\>

The matching audit-history entry when one exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

### <a id="Cephalon_Abstractions_Audit_IAuditHistoryReader_QueryAsync_Cephalon_Abstractions_Audit_AuditHistoryQuery_System_Threading_CancellationToken_"></a> QueryAsync\(AuditHistoryQuery, CancellationToken\)

Queries audit-history entries using the supplied host-agnostic filter set.

```csharp
ValueTask<AuditHistoryQueryResult> QueryAsync(AuditHistoryQuery query, CancellationToken cancellationToken = default)
```

#### Parameters

`query` [AuditHistoryQuery](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryquery/)

The query to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AuditHistoryQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryqueryresult/)\>

The resulting page of audit-history entries.
