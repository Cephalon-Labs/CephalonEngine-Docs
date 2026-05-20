---
title: Class DatabaseMigrationOperationalExecutionGroupCommand
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one selected command path for a logical migration target inside an engine-owned execution group.

```csharp
public sealed class DatabaseMigrationOperationalExecutionGroupCommand
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationOperationalExecutionGroupCommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommand/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand__ctor_System_Int32_System_String_System_String_System_String_Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_"></a> DatabaseMigrationOperationalExecutionGroupCommand\(int, string, string, string, DatabaseMigrationCommandDescriptor\)

Creates a new execution-group command entry.

```csharp
public DatabaseMigrationOperationalExecutionGroupCommand(int order, string databaseMigrationId, string requestedRoleId, string resolvedRoleId, DatabaseMigrationCommandDescriptor command)
```

#### Parameters

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The positive playbook order of the logical migration target that owns this command.

`databaseMigrationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical migration target identifier that owns this command.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical requested role id represented by this command.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete resolved role id represented by this command.

`command` [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)

The selected command descriptor for this execution-group entry.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand_Command"></a> Command

Gets the selected command descriptor for this execution-group entry.

```csharp
public DatabaseMigrationCommandDescriptor Command { get; }
```

#### Property Value

 [DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand_DatabaseMigrationId"></a> DatabaseMigrationId

Gets the logical migration target identifier that owns this command.

```csharp
public string DatabaseMigrationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand_Order"></a> Order

Gets the positive playbook order of the logical migration target that owns this command.

```csharp
public int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand_RequestedRoleId"></a> RequestedRoleId

Gets the logical requested role id represented by this command.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommand_ResolvedRoleId"></a> ResolvedRoleId

Gets the concrete resolved role id represented by this command.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
