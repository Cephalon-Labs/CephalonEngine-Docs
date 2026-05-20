---
title: Class AuditHistorySelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the durable audit-history inputs resolved for a Cephalon app.

```csharp
public sealed class AuditHistorySelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistorySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection__ctor_System_Nullable_System_Boolean__System_String_System_String_Cephalon_Abstractions_AppModel_AuditHistoryExportSelection_Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_"></a> AuditHistorySelection\(bool?, string?, string?, AuditHistoryExportSelection?, AuditHistoryRetentionSelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.AuditHistorySelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public AuditHistorySelection(bool? enabled = null, string? provider = null, string? databaseRole = null, AuditHistoryExportSelection? export = null, AuditHistoryRetentionSelection? retention = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether durable audit history was explicitly enabled.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected durable history provider identifier.

`databaseRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected database role used by the durable history path.

`export` [AuditHistoryExportSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryexportselection/)?

The resolved export inputs for durable audit history.

`retention` [AuditHistoryRetentionSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryretentionselection/)?

The resolved retention inputs for durable audit history.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_DatabaseRole"></a> DatabaseRole

Gets the selected database role used by the durable history path.

```csharp
public string? DatabaseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_Empty"></a> Empty

Gets an empty audit-history selection instance.

```csharp
public static AuditHistorySelection Empty { get; }
```

#### Property Value

 [AuditHistorySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryselection/)

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_Enabled"></a> Enabled

Gets a value indicating whether durable audit history was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_Export"></a> Export

Gets the resolved export inputs for durable audit history.

```csharp
public AuditHistoryExportSelection Export { get; }
```

#### Property Value

 [AuditHistoryExportSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryexportselection/)

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_HasValues"></a> HasValues

Gets a value indicating whether any durable audit-history inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_Provider"></a> Provider

Gets the selected durable history provider identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistorySelection_Retention"></a> Retention

Gets the resolved retention inputs for durable audit history.

```csharp
public AuditHistoryRetentionSelection Retention { get; }
```

#### Property Value

 [AuditHistoryRetentionSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryretentionselection/)
