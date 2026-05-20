---
title: Class DatabaseRoleDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one logical database role resolved for the active Cephalon runtime.

```csharp
public sealed class DatabaseRoleDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseRoleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_System_Boolean_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Nullable_Cephalon_Abstractions_Health_HealthState__System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DatabaseRoleDescriptor\(string, string, string, string, string, string, string, DatabaseRuntimeSelection?, bool, string?, string?, string?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, string?, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, HealthState?, string?, string?, string?, DateTimeOffset?, DatabaseRoleProbeDescriptor?, IReadOnlyDictionary<string, string\>?\)

Creates a new database-role descriptor.

```csharp
public DatabaseRoleDescriptor(string id, string displayName, string description, string provider, string requestedRoleId, string resolvedRoleId, string resolutionMode, DatabaseRuntimeSelection? runtime = null, bool usesRoleReference = false, string? useRole = null, string? connectionMode = null, string? connectionStringName = null, string? schema = null, IReadOnlyList<string>? consumers = null, IReadOnlyList<string>? referencedByRoles = null, IReadOnlyList<string>? coLocatedRoles = null, string? physicalTargetId = null, string? physicalTargetDisplayName = null, IReadOnlyList<string>? physicalCoLocatedRoles = null, IReadOnlyDictionary<string, string>? metadata = null, HealthState? healthState = null, string? healthDescription = null, string? migrationState = null, string? migrationDescription = null, DateTimeOffset? observedAtUtc = null, DatabaseRoleProbeDescriptor? probe = null, IReadOnlyDictionary<string, string>? runtimeMetadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable logical database-role identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing database-role name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable database-role description.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that backs the effective target.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical role that was requested by configuration or runtime selection.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete role that ultimately backs the physical target.

`resolutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The runtime resolution mode such as <code>direct</code> or <code>role-reference</code>.

`runtime` [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)?

The effective runtime tuning resolved for this database role.

`usesRoleReference` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the logical role resolves through <code>UseRole</code>.

`useRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The referenced role supplied through <code>UseRole</code>, when present.

`connectionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective connection mode such as <code>named</code> or <code>inline</code>.

`connectionStringName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective named connection-string reference, when used.

`schema` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective schema override, when configured.

`consumers` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The logical engine features that explicitly target this role.

`referencedByRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Other logical roles that explicitly reference this role through <code>UseRole</code>.

`coLocatedRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Other logical roles that resolve to the same concrete role target.

`physicalTargetId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable physical-target identifier used to group logical roles that share one physical database target.

`physicalTargetDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing description of the physical target that backs this role.

`physicalCoLocatedRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Other logical roles that share the same physical database target.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the database role.

`healthState` [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

The current runtime health state reported for the database role, when available.

`healthDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing health description reported for the database role, when available.

`migrationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current migration execution state reported for the database role, when available.

`migrationDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing migration description reported for the database role, when available.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when runtime state was last observed for the database role, when available.

`probe` [DatabaseRoleProbeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor/)?

The stable probe-freshness answer reported for the database role, when available.

`runtimeMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime metadata associated with the database role.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_CoLocatedRoles"></a> CoLocatedRoles

Gets the logical roles that resolve to the same concrete role target.

```csharp
public IReadOnlyList<string> CoLocatedRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ConnectionMode"></a> ConnectionMode

Gets the effective connection mode.

```csharp
public string? ConnectionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ConnectionStringName"></a> ConnectionStringName

Gets the effective named connection-string reference, when used.

```csharp
public string? ConnectionStringName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Consumers"></a> Consumers

Gets the logical engine features that explicitly target this role.

```csharp
public IReadOnlyList<string> Consumers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Description"></a> Description

Gets the human-readable database-role description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing database-role name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_HealthDescription"></a> HealthDescription

Gets the operator-facing health description reported for the database role, when available.

```csharp
public string? HealthDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_HealthState"></a> HealthState

Gets the current runtime health state reported for the database role, when available.

```csharp
public HealthState? HealthState { get; }
```

#### Property Value

 [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Id"></a> Id

Gets the stable logical database-role identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the database role.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_MigrationDescription"></a> MigrationDescription

Gets the operator-facing migration description reported for the database role, when available.

```csharp
public string? MigrationDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_MigrationState"></a> MigrationState

Gets the current migration execution state reported for the database role, when available.

```csharp
public string? MigrationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when runtime state was last observed for the database role, when available.

```csharp
public DateTimeOffset? ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_PhysicalCoLocatedRoles"></a> PhysicalCoLocatedRoles

Gets the logical roles that share the same physical database target.

```csharp
public IReadOnlyList<string> PhysicalCoLocatedRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_PhysicalTargetDisplayName"></a> PhysicalTargetDisplayName

Gets the operator-facing description of the physical target that backs this role.

```csharp
public string? PhysicalTargetDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_PhysicalTargetId"></a> PhysicalTargetId

Gets the stable physical-target identifier used to group logical roles that share one physical database target.

```csharp
public string? PhysicalTargetId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Probe"></a> Probe

Gets the stable probe-freshness answer reported for the database role, when available.

```csharp
public DatabaseRoleProbeDescriptor? Probe { get; }
```

#### Property Value

 [DatabaseRoleProbeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor/)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Provider"></a> Provider

Gets the logical provider identifier that backs the effective target.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ReferencedByRoles"></a> ReferencedByRoles

Gets the logical roles that explicitly reference this role through <code>UseRole</code>.

```csharp
public IReadOnlyList<string> ReferencedByRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_RequestedRoleId"></a> RequestedRoleId

Gets the logical role requested by configuration or runtime selection.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ResolutionMode"></a> ResolutionMode

Gets the runtime resolution mode.

```csharp
public string ResolutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_ResolvedRoleId"></a> ResolvedRoleId

Gets the concrete role that ultimately backs the physical target.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Runtime"></a> Runtime

Gets the effective runtime tuning resolved for this database role.

```csharp
public DatabaseRuntimeSelection Runtime { get; }
```

#### Property Value

 [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_RuntimeMetadata"></a> RuntimeMetadata

Gets optional runtime metadata associated with the database role.

```csharp
public IReadOnlyDictionary<string, string> RuntimeMetadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_Schema"></a> Schema

Gets the effective schema override, when configured.

```csharp
public string? Schema { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_UseRole"></a> UseRole

Gets the referenced role supplied through <code>UseRole</code>, when present.

```csharp
public string? UseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleDescriptor_UsesRoleReference"></a> UsesRoleReference

Gets a value indicating whether this role resolves through <code>UseRole</code>.

```csharp
public bool UsesRoleReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
