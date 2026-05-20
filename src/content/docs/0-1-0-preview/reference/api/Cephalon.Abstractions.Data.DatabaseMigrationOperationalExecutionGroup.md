---
title: Class DatabaseMigrationOperationalExecutionGroup
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroup
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one engine-owned execution group in the database-migration playbook.

```csharp
public sealed class DatabaseMigrationOperationalExecutionGroup
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationOperationalExecutionGroup](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroup/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup__ctor_System_Int32_System_String_System_String_Cephalon_Abstractions_Data_DatabaseMigrationStatus_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Int32_System_Int32_System_Int32_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand__System_String_"></a> DatabaseMigrationOperationalExecutionGroup\(int, string, string, DatabaseMigrationStatus, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, int, int, int, IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand\>?, IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand\>?, string?\)

Creates a new database-migration execution group.

```csharp
public DatabaseMigrationOperationalExecutionGroup(int order, string physicalTargetId, string physicalTargetDisplayName, DatabaseMigrationStatus status, IReadOnlyList<string>? databaseMigrationIds = null, IReadOnlyList<string>? requestedRoleIds = null, IReadOnlyList<string>? resolvedRoleIds = null, int productionReadyTargetCount = 0, int manualPathTargetCount = 0, int applyOnStartupTargetCount = 0, IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand>? productionCommands = null, IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand>? manualCommands = null, string? coordinationHint = null)
```

#### Parameters

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The positive execution-group order in the playbook.

`physicalTargetId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable physical-target identifier that anchors this execution group. When the runtime cannot resolve
a physical database identity, the engine uses a logical fallback identifier instead of leaving the group anonymous.

`physicalTargetDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing description of the physical target that anchors this group.

`status` [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)

The aggregate execution status across the logical migration targets in this group.

`databaseMigrationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The logical migration targets that belong to this execution group.

`requestedRoleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The logical requested role ids represented in this group.

`resolvedRoleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The concrete resolved role ids represented in this group.

`productionReadyTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of targets in this group that publish a production-recommended command.

`manualPathTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of targets in this group that publish a direct or manual command path.

`applyOnStartupTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of targets in this group that are configured for startup execution.

`productionCommands` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroupCommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand/)\>?

The selected production-recommended commands grouped for this physical-target batch.

`manualCommands` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroupCommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand/)\>?

The selected direct or manual commands grouped for this physical-target batch.

`coordinationHint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing coordination guidance for shared physical targets, when available.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ApplyOnStartupTargetCount"></a> ApplyOnStartupTargetCount

Gets the number of targets in this group that are configured for startup execution.

```csharp
public int ApplyOnStartupTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_CoordinationHint"></a> CoordinationHint

Gets the operator-facing coordination guidance for shared physical targets, when available.

```csharp
public string? CoordinationHint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_DatabaseMigrationIds"></a> DatabaseMigrationIds

Gets the logical migration targets that belong to this execution group.

```csharp
public IReadOnlyList<string> DatabaseMigrationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_HasManualCommandsForAllTargets"></a> HasManualCommandsForAllTargets

Gets a value indicating whether every target in this group publishes a direct or manual command path.

```csharp
public bool HasManualCommandsForAllTargets { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_HasProductionRecommendedCommandsForAllTargets"></a> HasProductionRecommendedCommandsForAllTargets

Gets a value indicating whether every target in this group publishes a production-recommended command.

```csharp
public bool HasProductionRecommendedCommandsForAllTargets { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ManualCommandBatch"></a> ManualCommandBatch

Gets the combined manual command-batch template for this physical-target batch, when available.

```csharp
public DatabaseMigrationOperationalExecutionGroupCommandBatch? ManualCommandBatch { get; }
```

#### Property Value

 [DatabaseMigrationOperationalExecutionGroupCommandBatch](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommandbatch/)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ManualCommands"></a> ManualCommands

Gets the selected direct or manual commands grouped for this physical-target batch.

```csharp
public IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand> ManualCommands { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroupCommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ManualPathTargetCount"></a> ManualPathTargetCount

Gets the number of targets in this group that publish a direct or manual command path.

```csharp
public int ManualPathTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_Order"></a> Order

Gets the positive execution-group order in the playbook.

```csharp
public int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_PhysicalTargetDisplayName"></a> PhysicalTargetDisplayName

Gets the operator-facing description of the physical target that anchors this group.

```csharp
public string PhysicalTargetDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_PhysicalTargetId"></a> PhysicalTargetId

Gets the stable physical-target identifier that anchors this execution group.

```csharp
public string PhysicalTargetId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ProductionCommandBatch"></a> ProductionCommandBatch

Gets the combined production command-batch template for this physical-target batch, when available.

```csharp
public DatabaseMigrationOperationalExecutionGroupCommandBatch? ProductionCommandBatch { get; }
```

#### Property Value

 [DatabaseMigrationOperationalExecutionGroupCommandBatch](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommandbatch/)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ProductionCommands"></a> ProductionCommands

Gets the selected production-recommended commands grouped for this physical-target batch.

```csharp
public IReadOnlyList<DatabaseMigrationOperationalExecutionGroupCommand> ProductionCommands { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationOperationalExecutionGroupCommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ProductionReadyTargetCount"></a> ProductionReadyTargetCount

Gets the number of targets in this group that publish a production-recommended command.

```csharp
public int ProductionReadyTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_RequestedRoleIds"></a> RequestedRoleIds

Gets the logical requested role ids represented in this group.

```csharp
public IReadOnlyList<string> RequestedRoleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_RequiresPhysicalTargetCoordination"></a> RequiresPhysicalTargetCoordination

Gets a value indicating whether this execution group spans multiple logical migration targets on one physical database target.

```csharp
public bool RequiresPhysicalTargetCoordination { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_ResolvedRoleIds"></a> ResolvedRoleIds

Gets the concrete resolved role ids represented in this group.

```csharp
public IReadOnlyList<string> ResolvedRoleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_Status"></a> Status

Gets the aggregate execution status across the logical migration targets in this group.

```csharp
public DatabaseMigrationStatus Status { get; }
```

#### Property Value

 [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroup_TargetCount"></a> TargetCount

Gets the number of logical migration targets represented in this group.

```csharp
public int TargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
