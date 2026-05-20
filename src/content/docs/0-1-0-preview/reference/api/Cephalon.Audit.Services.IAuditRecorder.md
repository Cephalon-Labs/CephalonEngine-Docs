---
title: Interface IAuditRecorder
slug: 0-1-0-preview/reference/api/cephalon-audit-services-iauditrecorder
editUrl: false
---

Namespace: [Cephalon.Audit.Services](/0-1-0-preview/reference/api/cephalon-audit-services/)  
Assembly: Cephalon.Audit.dll  

Records audit entries through the active Cephalon audit pipeline.

```csharp
public interface IAuditRecorder
```

## Methods

### <a id="Cephalon_Audit_Services_IAuditRecorder_RecordAsync_Cephalon_Audit_Services_AuditRecordRequest_System_Threading_CancellationToken_"></a> RecordAsync\(AuditRecordRequest, CancellationToken\)

Records one audit entry and returns the normalized entry that was written.

```csharp
ValueTask<AuditEntry> RecordAsync(AuditRecordRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [AuditRecordRequest](/0-1-0-preview/reference/api/cephalon-audit-services-auditrecordrequest/)

The audit request to record.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<AuditEntry\>

The normalized audit entry that was written.
