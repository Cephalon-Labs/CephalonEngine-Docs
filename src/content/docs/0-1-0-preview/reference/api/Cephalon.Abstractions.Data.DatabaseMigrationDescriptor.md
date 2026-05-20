---
title: Class DatabaseMigrationDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one logical database-migration target visible to the active Cephalon runtime.

```csharp
public sealed class DatabaseMigrationDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Data_DatabaseMigrationStatus_System_Boolean_System_Boolean_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Nullable_System_Int32__System_Nullable_Cephalon_Abstractions_Health_HealthState__System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__"></a> DatabaseMigrationDescriptor\(string, string, string, string, string, string, DatabaseMigrationStatus, bool, bool, string?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyList<DatabaseMigrationCommandDescriptor\>?, IReadOnlyDictionary<string, string\>?, int?, HealthState?, string?, string?, string?, DateTimeOffset?\)

Creates a new database-migration descriptor.

```csharp
public DatabaseMigrationDescriptor(string id, string displayName, string description, string requestedRoleId, string resolvedRoleId, string executionMode, DatabaseMigrationStatus status, bool applyOnStartup, bool exitAfterApply, string? provider = null, string? dbContextType = null, string? mechanism = null, DateTimeOffset? startedAtUtc = null, DateTimeOffset? completedAtUtc = null, string? lastError = null, IReadOnlyList<DatabaseMigrationCommandDescriptor>? commands = null, IReadOnlyDictionary<string, string>? metadata = null, int? recommendedExecutionOrder = null, HealthState? roleHealthState = null, string? roleHealthDescription = null, string? roleMigrationState = null, string? roleMigrationDescription = null, DateTimeOffset? roleObservedAtUtc = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable logical migration-target identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing migration-target name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable migration-target description.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database role requested by migration policy.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete database role that backs the target.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution mode such as <code>startup-hosted-service</code> or <code>manual-or-deploy-time</code>.

`status` [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)

The current execution status of the migration target.

`applyOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether startup execution is enabled for this target.

`exitAfterApply` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the host exits after startup execution completes.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective provider identifier when known.

`dbContextType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The DbContext type that can execute the target when known.

`mechanism` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution mechanism such as <code>migrate</code> or <code>ensure-created</code>.

`startedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The latest start time observed for this target.

`completedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The latest completion time observed for this target.

`lastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest error observed for this target.

`commands` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)\>?

Optional operator-facing command templates for executing this target outside startup apply.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the migration target.

`recommendedExecutionOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

An optional positive ordinal that operator surfaces can use when presenting a recommended migration sequence.

`roleHealthState` [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

The current runtime health state reported for the resolved role behind this target, when available.

`roleHealthDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing health description reported for the resolved role behind this target, when available.

`roleMigrationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current migration execution state reported for the resolved role behind this target, when available.

`roleMigrationDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing migration description reported for the resolved role behind this target, when available.

`roleObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when resolved-role runtime state was last observed for this target, when available.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_ApplyOnStartup"></a> ApplyOnStartup

Gets a value indicating whether startup execution is enabled for this target.

```csharp
public bool ApplyOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Commands"></a> Commands

Gets optional operator-facing command templates for executing this target outside startup apply.

```csharp
public IReadOnlyList<DatabaseMigrationCommandDescriptor> Commands { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_CompletedAtUtc"></a> CompletedAtUtc

Gets the latest completion time observed for this target.

```csharp
public DateTimeOffset? CompletedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_DbContextType"></a> DbContextType

Gets the DbContext type that can execute the target when known.

```csharp
public string? DbContextType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Description"></a> Description

Gets the human-readable migration-target description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing migration-target name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_ExecutionMode"></a> ExecutionMode

Gets the runtime execution mode for this target.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_ExitAfterApply"></a> ExitAfterApply

Gets a value indicating whether the host exits after startup execution completes.

```csharp
public bool ExitAfterApply { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Id"></a> Id

Gets the stable logical migration-target identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_LastError"></a> LastError

Gets the latest error observed for this target.

```csharp
public string? LastError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Mechanism"></a> Mechanism

Gets the execution mechanism such as <code>migrate</code> or <code>ensure-created</code>.

```csharp
public string? Mechanism { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the migration target.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Provider"></a> Provider

Gets the effective provider identifier when known.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RecommendedExecutionOrder"></a> RecommendedExecutionOrder

Gets the recommended positive ordinal for operator-facing migration playbooks when the provider can publish one.

```csharp
public int? RecommendedExecutionOrder { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RequestedRoleId"></a> RequestedRoleId

Gets the logical database role requested by migration policy.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_ResolvedRoleId"></a> ResolvedRoleId

Gets the concrete database role that backs the target.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RoleHealthDescription"></a> RoleHealthDescription

Gets the operator-facing health description reported for the resolved role behind this target, when available.

```csharp
public string? RoleHealthDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RoleHealthState"></a> RoleHealthState

Gets the current runtime health state reported for the resolved role behind this target, when available.

```csharp
public HealthState? RoleHealthState { get; }
```

#### Property Value

 [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RoleMigrationDescription"></a> RoleMigrationDescription

Gets the operator-facing migration description reported for the resolved role behind this target, when available.

```csharp
public string? RoleMigrationDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RoleMigrationState"></a> RoleMigrationState

Gets the current migration execution state reported for the resolved role behind this target, when available.

```csharp
public string? RoleMigrationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_RoleObservedAtUtc"></a> RoleObservedAtUtc

Gets the UTC timestamp when resolved-role runtime state was last observed for this target, when available.

```csharp
public DateTimeOffset? RoleObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_StartedAtUtc"></a> StartedAtUtc

Gets the latest start time observed for this target.

```csharp
public DateTimeOffset? StartedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationDescriptor_Status"></a> Status

Gets the current execution status of the migration target.

```csharp
public DatabaseMigrationStatus Status { get; }
```

#### Property Value

 [DatabaseMigrationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus/)
