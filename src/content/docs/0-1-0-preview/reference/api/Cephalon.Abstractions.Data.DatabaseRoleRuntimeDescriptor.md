---
title: Class DatabaseRoleRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes additive runtime state projected for one logical database role.

```csharp
public sealed class DatabaseRoleRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseRoleRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor__ctor_System_String_System_Nullable_Cephalon_Abstractions_Health_HealthState__System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DatabaseRoleRuntimeDescriptor\(string, HealthState?, string?, string?, string?, DateTimeOffset?, DatabaseRoleProbeDescriptor?, IReadOnlyDictionary<string, string\>?\)

Creates a new database-role runtime descriptor.

```csharp
public DatabaseRoleRuntimeDescriptor(string databaseRoleId, HealthState? healthState = null, string? healthDescription = null, string? migrationState = null, string? migrationDescription = null, DateTimeOffset? observedAtUtc = null, DatabaseRoleProbeDescriptor? probe = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`databaseRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database-role identifier that this runtime state applies to.

`healthState` [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

The current runtime health state for the role, when known.

`healthDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing health description for the role, when known.

`migrationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current migration execution state for the role, when known.

`migrationDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing migration description for the role, when known.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when this runtime state was last observed.

`probe` [DatabaseRoleProbeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor/)?

The stable probe-freshness answer for the role, when known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime metadata associated with the role.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_DatabaseRoleId"></a> DatabaseRoleId

Gets the logical database-role identifier that this runtime state applies to.

```csharp
public string DatabaseRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_HealthDescription"></a> HealthDescription

Gets the operator-facing health description for the role, when known.

```csharp
public string? HealthDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_HealthState"></a> HealthState

Gets the current runtime health state for the role, when known.

```csharp
public HealthState? HealthState { get; }
```

#### Property Value

 [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_Metadata"></a> Metadata

Gets optional runtime metadata associated with the role.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_MigrationDescription"></a> MigrationDescription

Gets the operator-facing migration description for the role, when known.

```csharp
public string? MigrationDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_MigrationState"></a> MigrationState

Gets the current migration execution state for the role, when known.

```csharp
public string? MigrationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when this runtime state was last observed.

```csharp
public DateTimeOffset? ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleRuntimeDescriptor_Probe"></a> Probe

Gets the stable probe-freshness answer for the role, when known.

```csharp
public DatabaseRoleProbeDescriptor? Probe { get; }
```

#### Property Value

 [DatabaseRoleProbeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor/)?
