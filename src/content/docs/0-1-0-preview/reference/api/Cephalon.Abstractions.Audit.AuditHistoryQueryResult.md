---
title: Class AuditHistoryQueryResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryqueryresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Represents one page of audit-history results returned by an <xref href="Cephalon.Abstractions.Audit.IAuditHistoryReader" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class AuditHistoryQueryResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryqueryresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Audit_AuditHistoryEntry__System_Int32_System_Int32_System_Int32_"></a> AuditHistoryQueryResult\(IReadOnlyList<AuditHistoryEntry\>?, int, int, int\)

Creates a new audit-history query result.

```csharp
public AuditHistoryQueryResult(IReadOnlyList<AuditHistoryEntry>? entries, int offset, int limit, int totalCount)
```

#### Parameters

`entries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)\>?

The returned audit-history entries.

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based query offset that produced this page.

`limit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The normalized page size used for the query.

`totalCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of matching entries before paging was applied.

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult_Entries"></a> Entries

Gets the returned audit-history entries.

```csharp
public IReadOnlyList<AuditHistoryEntry> Entries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)\>

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult_HasMore"></a> HasMore

Gets a value indicating whether more entries remain beyond this page.

```csharp
public bool HasMore { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult_Limit"></a> Limit

Gets the normalized page size used for the query.

```csharp
public int Limit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult_Offset"></a> Offset

Gets the zero-based query offset that produced this page.

```csharp
public int Offset { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Audit_AuditHistoryQueryResult_TotalCount"></a> TotalCount

Gets the total number of matching entries before paging was applied.

```csharp
public int TotalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
