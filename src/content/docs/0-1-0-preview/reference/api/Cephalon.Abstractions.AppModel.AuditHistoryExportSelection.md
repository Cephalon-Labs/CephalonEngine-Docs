---
title: Class AuditHistoryExportSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryexportselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the durable audit-history export inputs resolved for a Cephalon app.

```csharp
public sealed class AuditHistoryExportSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryExportSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryexportselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryExportSelection__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__"></a> AuditHistoryExportSelection\(bool?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.AuditHistoryExportSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public AuditHistoryExportSelection(bool? enabled = null, int? maxEntries = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether audit-history export was explicitly enabled.

`maxEntries` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The configured maximum number of entries that one export may stream.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryExportSelection_Empty"></a> Empty

Gets an empty audit-history export-selection instance.

```csharp
public static AuditHistoryExportSelection Empty { get; }
```

#### Property Value

 [AuditHistoryExportSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryexportselection/)

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryExportSelection_Enabled"></a> Enabled

Gets a value indicating whether audit-history export was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryExportSelection_HasValues"></a> HasValues

Gets a value indicating whether any audit-history export inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryExportSelection_MaxEntries"></a> MaxEntries

Gets the configured maximum number of entries that one export may stream.

```csharp
public int? MaxEntries { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
