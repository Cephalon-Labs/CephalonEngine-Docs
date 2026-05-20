---
title: Class DatabaseMigrationsSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven database migration behavior for a Cephalon app.

```csharp
public sealed class DatabaseMigrationsSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationsSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_Collections_Generic_IReadOnlyList_System_String__"></a> DatabaseMigrationsSettings\(bool?, bool?, IReadOnlyList<string\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.DatabaseMigrationsSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DatabaseMigrationsSettings(bool? applyOnStartup = null, bool? exitAfterApply = null, IReadOnlyList<string>? targets = null)
```

#### Parameters

`applyOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`exitAfterApply` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`targets` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

## Properties

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_ApplyOnStartup"></a> ApplyOnStartup

Gets a value indicating whether migrations should be applied during host startup.

```csharp
public bool? ApplyOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_Empty"></a> Empty

Gets an empty database-migrations settings instance.

```csharp
public static DatabaseMigrationsSettings Empty { get; }
```

#### Property Value

 [DatabaseMigrationsSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_ExitAfterApply"></a> ExitAfterApply

Gets a value indicating whether the host should exit after applying migrations.

```csharp
public bool? ExitAfterApply { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_HasValues"></a> HasValues

Gets a value indicating whether any migration settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_Targets"></a> Targets

Gets the logical migration targets selected for the app.

```csharp
public IReadOnlyList<string> Targets { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Configuration_DatabaseMigrationsSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads database-migration settings from the supplied configuration section.

```csharp
public static DatabaseMigrationsSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

#### Returns

 [DatabaseMigrationsSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasemigrationssettings/)
