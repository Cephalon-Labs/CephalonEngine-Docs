---
title: Class DatabaseTopologySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven database topology for a Cephalon app.

```csharp
public sealed class DatabaseTopologySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings__ctor_Cephalon_Engine_Configuration_DatabaseRuntimeSettings_Cephalon_Engine_Configuration_DatabaseTargetSettings_Cephalon_Engine_Configuration_DatabaseTargetSettings_Cephalon_Engine_Configuration_DatabaseTargetSettings_Cephalon_Engine_Configuration_DatabaseTargetSettings_Cephalon_Engine_Configuration_DatabaseMigrationsSettings_"></a> DatabaseTopologySettings\(DatabaseRuntimeSettings?, DatabaseTargetSettings?, DatabaseTargetSettings?, DatabaseTargetSettings?, DatabaseTargetSettings?, DatabaseMigrationsSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.DatabaseTopologySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DatabaseTopologySettings(DatabaseRuntimeSettings? runtime = null, DatabaseTargetSettings? write = null, DatabaseTargetSettings? read = null, DatabaseTargetSettings? outbox = null, DatabaseTargetSettings? history = null, DatabaseMigrationsSettings? migrations = null)
```

#### Parameters

`runtime` [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)?

`write` [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)?

`read` [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)?

`outbox` [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)?

`history` [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)?

`migrations` [DatabaseMigrationsSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings/)?

## Properties

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Empty"></a> Empty

Gets an empty database-topology settings instance.

```csharp
public static DatabaseTopologySettings Empty { get; }
```

#### Property Value

 [DatabaseTopologySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_HasValues"></a> HasValues

Gets a value indicating whether any database-topology settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_History"></a> History

Gets the audit-history database target.

```csharp
public DatabaseTargetSettings History { get; }
```

#### Property Value

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Migrations"></a> Migrations

Gets the database-migration settings for the active topology.

```csharp
public DatabaseMigrationsSettings Migrations { get; }
```

#### Property Value

 [DatabaseMigrationsSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Outbox"></a> Outbox

Gets the outbox database target.

```csharp
public DatabaseTargetSettings Outbox { get; }
```

#### Property Value

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Read"></a> Read

Gets the read-side database target.

```csharp
public DatabaseTargetSettings Read { get; }
```

#### Property Value

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Runtime"></a> Runtime

Gets the shared database runtime tuning.

```csharp
public DatabaseRuntimeSettings Runtime { get; }
```

#### Property Value

 [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_Write"></a> Write

Gets the write-side database target.

```csharp
public DatabaseTargetSettings Write { get; }
```

#### Property Value

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_DatabaseTopologySettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads database-topology settings from configuration.

```csharp
public static DatabaseTopologySettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [DatabaseTopologySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings/)
