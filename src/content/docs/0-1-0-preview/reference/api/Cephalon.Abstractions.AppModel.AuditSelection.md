---
title: Class AuditSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active audit and history inputs resolved for a Cephalon app.

```csharp
public sealed class AuditSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AuditSelection__ctor_System_Nullable_System_Boolean__Cephalon_Abstractions_AppModel_AuditHistorySelection_"></a> AuditSelection\(bool?, AuditHistorySelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.AuditSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public AuditSelection(bool? enabled = null, AuditHistorySelection? history = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether audit support was explicitly enabled.

`history` [AuditHistorySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryselection/)?

The durable audit-history inputs resolved for the app.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AuditSelection_Empty"></a> Empty

Gets an empty audit-selection instance.

```csharp
public static AuditSelection Empty { get; }
```

#### Property Value

 [AuditSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection/)

### <a id="Cephalon_Abstractions_AppModel_AuditSelection_Enabled"></a> Enabled

Gets a value indicating whether audit support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_AuditSelection_HasValues"></a> HasValues

Gets a value indicating whether any audit-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_AuditSelection_History"></a> History

Gets the durable audit-history inputs resolved for the app.

```csharp
public AuditHistorySelection History { get; }
```

#### Property Value

 [AuditHistorySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryselection/)
