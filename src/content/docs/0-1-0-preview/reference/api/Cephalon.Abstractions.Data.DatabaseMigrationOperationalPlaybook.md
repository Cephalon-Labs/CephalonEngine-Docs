---
title: Class DatabaseMigrationOperationalPlaybook
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalplaybook
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the engine-owned ordered operator playbook for database migration targets.

```csharp
public sealed class DatabaseMigrationOperationalPlaybook
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationOperationalPlaybook](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalplaybook/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook__ctor_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup__"></a> DatabaseMigrationOperationalPlaybook\(DateTimeOffset, IReadOnlyList<DatabaseMigrationOperationalStep\>?, IReadOnlyList<DatabaseMigrationOperationalExecutionGroup\>?\)

Creates a new database-migration operational playbook.

```csharp
public DatabaseMigrationOperationalPlaybook(DateTimeOffset generatedAtUtc, IReadOnlyList<DatabaseMigrationOperationalStep>? steps = null, IReadOnlyList<DatabaseMigrationOperationalExecutionGroup>? executionGroups = null)
```

#### Parameters

`generatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the playbook was created.

`steps` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalStep](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalstep/)\>?

The ordered operator steps derived from the current migration catalog.

`executionGroups` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroup](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroup/)\>?

The ordered physical-target execution groups derived from the current migration catalog and shared-target topology truth.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_ApplyOnStartupTargetCount"></a> ApplyOnStartupTargetCount

Gets the number of targets that are configured for startup execution.

```csharp
public int ApplyOnStartupTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_CoordinationRequiredGroupCount"></a> CoordinationRequiredGroupCount

Gets the number of physical-target execution groups that span multiple logical migration targets.

```csharp
public int CoordinationRequiredGroupCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_CoordinationRequiredTargetCount"></a> CoordinationRequiredTargetCount

Gets the number of targets that share one physical database target with another migration target.

```csharp
public int CoordinationRequiredTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_ExecutionGroupCount"></a> ExecutionGroupCount

Gets the total number of physical-target execution groups in the playbook.

```csharp
public int ExecutionGroupCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_ExecutionGroups"></a> ExecutionGroups

Gets the ordered physical-target execution groups derived from the current migration catalog.

```csharp
public IReadOnlyList<DatabaseMigrationOperationalExecutionGroup> ExecutionGroups { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroup](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroup/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_GeneratedAtUtc"></a> GeneratedAtUtc

Gets the UTC timestamp when the playbook was created.

```csharp
public DateTimeOffset GeneratedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_ManualPathTargetCount"></a> ManualPathTargetCount

Gets the number of targets that publish a direct or manual command path.

```csharp
public int ManualPathTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_ProductionReadyTargetCount"></a> ProductionReadyTargetCount

Gets the number of targets that publish a production-recommended command.

```csharp
public int ProductionReadyTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_Steps"></a> Steps

Gets the ordered operator steps derived from the current migration catalog.

```csharp
public IReadOnlyList<DatabaseMigrationOperationalStep> Steps { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalStep](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalstep/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalPlaybook_TargetCount"></a> TargetCount

Gets the total number of migration targets in the playbook.

```csharp
public int TargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
