---
title: Class DatabaseTopologySelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active database topology inputs resolved for a Cephalon app.

```csharp
public sealed class DatabaseTopologySelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection__ctor_Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseMigrationsSelection_"></a> DatabaseTopologySelection\(DatabaseRuntimeSelection?, DatabaseTargetSelection?, DatabaseTargetSelection?, DatabaseTargetSelection?, DatabaseTargetSelection?, DatabaseMigrationsSelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.DatabaseTopologySelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public DatabaseTopologySelection(DatabaseRuntimeSelection? runtime = null, DatabaseTargetSelection? write = null, DatabaseTargetSelection? read = null, DatabaseTargetSelection? outbox = null, DatabaseTargetSelection? history = null, DatabaseMigrationsSelection? migrations = null)
```

#### Parameters

`runtime` [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)?

`write` [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)?

`read` [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)?

`outbox` [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)?

`history` [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)?

`migrations` [DatabaseMigrationsSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasemigrationsselection/)?

## Properties

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Empty"></a> Empty

Gets an empty database-topology selection instance.

```csharp
public static DatabaseTopologySelection Empty { get; }
```

#### Property Value

 [DatabaseTopologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_HasValues"></a> HasValues

Gets a value indicating whether any database-topology inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_History"></a> History

Gets the audit-history database target selection.

```csharp
public DatabaseTargetSelection History { get; }
```

#### Property Value

 [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Migrations"></a> Migrations

Gets the database-migration selection.

```csharp
public DatabaseMigrationsSelection Migrations { get; }
```

#### Property Value

 [DatabaseMigrationsSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasemigrationsselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Outbox"></a> Outbox

Gets the outbox database target selection.

```csharp
public DatabaseTargetSelection Outbox { get; }
```

#### Property Value

 [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Read"></a> Read

Gets the read-side database target selection.

```csharp
public DatabaseTargetSelection Read { get; }
```

#### Property Value

 [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Runtime"></a> Runtime

Gets the shared runtime tuning selected for database roles.

```csharp
public DatabaseRuntimeSelection Runtime { get; }
```

#### Property Value

 [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Write"></a> Write

Gets the write-side database target selection.

```csharp
public DatabaseTargetSelection Write { get; }
```

#### Property Value

 [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)
