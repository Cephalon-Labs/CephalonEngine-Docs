---
title: Class DatabaseMigrationOperationalStep
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalstep
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one ordered operator step in the engine-owned database-migration playbook.

```csharp
public sealed class DatabaseMigrationOperationalStep
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationOperationalStep](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalstep/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep__ctor_System_Int32_System_String_System_String_System_String_Cephalon_Abstractions_Data_DatabaseMigrationStatus_System_String_System_Boolean_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_"></a> DatabaseMigrationOperationalStep\(int, string, string, string, DatabaseMigrationStatus, string, bool, string?, string?, IReadOnlyList<string\>?, string?, DatabaseMigrationCommandDescriptor?, DatabaseMigrationCommandDescriptor?\)

Creates a new database-migration operational step.

```csharp
public DatabaseMigrationOperationalStep(int order, string databaseMigrationId, string requestedRoleId, string resolvedRoleId, DatabaseMigrationStatus status, string executionMode, bool applyOnStartup, string? physicalTargetId = null, string? physicalTargetDisplayName = null, IReadOnlyList<string>? coordinatedMigrationIds = null, string? coordinationHint = null, DatabaseMigrationCommandDescriptor? productionCommand = null, DatabaseMigrationCommandDescriptor? manualCommand = null)
```

#### Parameters

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The positive playbook order for this step.

`databaseMigrationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database-migration target identifier for this step.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database role requested by migration policy.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete database role that backs this step.

`status` [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)

The current execution status for this step.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution mode such as <code>startup-hosted-service</code> or <code>manual-or-deploy-time</code>.

`applyOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether startup execution is enabled for this step.

`physicalTargetId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable physical-target identifier that backs this step when known.

`physicalTargetDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing description of the physical target that backs this step when known.

`coordinatedMigrationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Other logical migration targets that share the same physical database target.

`coordinationHint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing coordination guidance for shared physical targets, when available.

`productionCommand` [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)?

The primary production-recommended command selected for this step when available.

`manualCommand` [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)?

The primary direct or manual command selected for this step when available.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_ApplyOnStartup"></a> ApplyOnStartup

Gets a value indicating whether startup execution is enabled for this step.

```csharp
public bool ApplyOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_CoordinatedMigrationIds"></a> CoordinatedMigrationIds

Gets the other logical migration targets that share the same physical database target.

```csharp
public IReadOnlyList<string> CoordinatedMigrationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_CoordinationHint"></a> CoordinationHint

Gets the operator-facing coordination guidance for shared physical targets, when available.

```csharp
public string? CoordinationHint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_DatabaseMigrationId"></a> DatabaseMigrationId

Gets the logical database-migration target identifier for this step.

```csharp
public string DatabaseMigrationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_ExecutionMode"></a> ExecutionMode

Gets the execution mode for this step.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_HasProductionRecommendedCommand"></a> HasProductionRecommendedCommand

Gets a value indicating whether this step publishes a production-recommended command.

```csharp
public bool HasProductionRecommendedCommand { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_ManualCommand"></a> ManualCommand

Gets the primary direct or manual command selected for this step when available.

```csharp
public DatabaseMigrationCommandDescriptor? ManualCommand { get; }
```

#### Property Value

 [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_Order"></a> Order

Gets the positive playbook order for this step.

```csharp
public int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_PhysicalTargetDisplayName"></a> PhysicalTargetDisplayName

Gets the operator-facing description of the physical target that backs this step when known.

```csharp
public string? PhysicalTargetDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_PhysicalTargetId"></a> PhysicalTargetId

Gets the stable physical-target identifier that backs this step when known.

```csharp
public string? PhysicalTargetId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_ProductionCommand"></a> ProductionCommand

Gets the primary production-recommended command selected for this step when available.

```csharp
public DatabaseMigrationCommandDescriptor? ProductionCommand { get; }
```

#### Property Value

 [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_RequestedRoleId"></a> RequestedRoleId

Gets the logical database role requested by migration policy.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_RequiresPhysicalTargetCoordination"></a> RequiresPhysicalTargetCoordination

Gets a value indicating whether this step needs shared-physical-target coordination.

```csharp
public bool RequiresPhysicalTargetCoordination { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_ResolvedRoleId"></a> ResolvedRoleId

Gets the concrete database role that backs this step.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalStep_Status"></a> Status

Gets the current execution status for this step.

```csharp
public DatabaseMigrationStatus Status { get; }
```

#### Property Value

 [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)
