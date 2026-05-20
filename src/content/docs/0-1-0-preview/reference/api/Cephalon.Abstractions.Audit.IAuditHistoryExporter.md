---
title: Interface IAuditHistoryExporter
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iaudithistoryexporter
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Streams persisted audit-history entries for export-oriented operator or application flows.

```csharp
public interface IAuditHistoryExporter
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditHistoryExporter_ExportAsync_Cephalon_Abstractions_Audit_AuditHistoryExportRequest_System_Threading_CancellationToken_"></a> ExportAsync\(AuditHistoryExportRequest, CancellationToken\)

Streams audit-history entries that match the supplied export request in stable export order.

```csharp
IAsyncEnumerable<AuditHistoryEntry> ExportAsync(AuditHistoryExportRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [AuditHistoryExportRequest](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryexportrequest/)

The export request to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the export stream.

#### Returns

 [IAsyncEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable\-1)<[AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)\>

The matching audit-history entries.
