---
title: Class AuditHistoryExportHttpResponseExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-audithistoryexporthttpresponseextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Writes audit-history export responses for ASP.NET Core hosts.

```csharp
public static class AuditHistoryExportHttpResponseExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryExportHttpResponseExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-audithistoryexporthttpresponseextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_AuditHistoryExportHttpResponseExtensions_WriteAuditHistoryNdjsonAsync_Microsoft_AspNetCore_Http_HttpResponse_Cephalon_Abstractions_Audit_IAuditHistoryExporter_Cephalon_Abstractions_Audit_AuditHistoryExportRequest_System_String_System_Threading_CancellationToken_"></a> WriteAuditHistoryNdjsonAsync\(HttpResponse, IAuditHistoryExporter, AuditHistoryExportRequest, string?, CancellationToken\)

Writes the supplied audit-history export as newline-delimited JSON.

```csharp
public static Task WriteAuditHistoryNdjsonAsync(this HttpResponse response, IAuditHistoryExporter exporter, AuditHistoryExportRequest request, string? fileName = null, CancellationToken cancellationToken = default)
```

#### Parameters

`response` [HttpResponse](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.http.httpresponse)

The HTTP response to populate.

`exporter` IAuditHistoryExporter

The audit-history exporter that supplies the entries.

`request` AuditHistoryExportRequest

The export request to execute.

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional download file name.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the response stream.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the response has been written.
