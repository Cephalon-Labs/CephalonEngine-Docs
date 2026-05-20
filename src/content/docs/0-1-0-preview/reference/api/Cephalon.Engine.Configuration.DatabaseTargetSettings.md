---
title: Class DatabaseTargetSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one configuration-driven database role target for a Cephalon app.

```csharp
public sealed class DatabaseTargetSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings__ctor_System_String_System_String_System_String_System_String_System_String_Cephalon_Engine_Configuration_DatabaseRuntimeSettings_"></a> DatabaseTargetSettings\(string?, string?, string?, string?, string?, DatabaseRuntimeSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.DatabaseTargetSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DatabaseTargetSettings(string? provider = null, string? connectionStringName = null, string? connectionString = null, string? useRole = null, string? schema = null, DatabaseRuntimeSettings? runtime = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`connectionStringName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`useRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`schema` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`runtime` [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)?

## Properties

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_ConnectionString"></a> ConnectionString

Gets the selected inline connection string.

```csharp
public string? ConnectionString { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_ConnectionStringName"></a> ConnectionStringName

Gets the selected root connection-string name.

```csharp
public string? ConnectionStringName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_Empty"></a> Empty

Gets an empty database-target settings instance.

```csharp
public static DatabaseTargetSettings Empty { get; }
```

#### Property Value

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_HasValues"></a> HasValues

Gets a value indicating whether any database-target settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_Provider"></a> Provider

Gets the selected logical provider identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_Runtime"></a> Runtime

Gets the role-specific runtime overrides.

```csharp
public DatabaseRuntimeSettings Runtime { get; }
```

#### Property Value

 [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_Schema"></a> Schema

Gets the selected schema override.

```csharp
public string? Schema { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_UseRole"></a> UseRole

Gets the referenced concrete database role used to supply the physical connection target.

```csharp
public string? UseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Engine_Configuration_DatabaseTargetSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads database-target settings from the supplied configuration section.

```csharp
public static DatabaseTargetSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

#### Returns

 [DatabaseTargetSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetargetsettings/)
