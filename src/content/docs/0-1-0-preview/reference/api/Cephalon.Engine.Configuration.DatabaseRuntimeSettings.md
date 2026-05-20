---
title: Class DatabaseRuntimeSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven database runtime tuning for Cephalon apps.

```csharp
public sealed class DatabaseRuntimeSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> DatabaseRuntimeSettings\(bool?, bool?, bool?, int?, int?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.DatabaseRuntimeSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DatabaseRuntimeSettings(bool? enableDetailedErrors = null, bool? enableSensitiveDataLogging = null, bool? enableRetryOnFailure = null, int? maxRetryCount = null, int? maxRetryDelaySeconds = null, int? commandTimeoutSeconds = null, int? maxBatchSize = null, int? roleProbeFreshnessSeconds = null)
```

#### Parameters

`enableDetailedErrors` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`enableSensitiveDataLogging` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`enableRetryOnFailure` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`maxRetryCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`maxRetryDelaySeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`commandTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`maxBatchSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`roleProbeFreshnessSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Properties

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_CommandTimeoutSeconds"></a> CommandTimeoutSeconds

Gets the command timeout in seconds when one was configured.

```csharp
public int? CommandTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_Empty"></a> Empty

Gets an empty database-runtime settings instance.

```csharp
public static DatabaseRuntimeSettings Empty { get; }
```

#### Property Value

 [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_EnableDetailedErrors"></a> EnableDetailedErrors

Gets a value indicating whether detailed provider errors were explicitly enabled.

```csharp
public bool? EnableDetailedErrors { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_EnableRetryOnFailure"></a> EnableRetryOnFailure

Gets a value indicating whether transient-failure retries were explicitly enabled.

```csharp
public bool? EnableRetryOnFailure { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_EnableSensitiveDataLogging"></a> EnableSensitiveDataLogging

Gets a value indicating whether sensitive-data logging was explicitly enabled.

```csharp
public bool? EnableSensitiveDataLogging { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_HasValues"></a> HasValues

Gets a value indicating whether any database runtime settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_MaxBatchSize"></a> MaxBatchSize

Gets the maximum provider batch size when one was configured.

```csharp
public int? MaxBatchSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_MaxRetryCount"></a> MaxRetryCount

Gets the maximum retry count when transient-failure retries were configured.

```csharp
public int? MaxRetryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_MaxRetryDelaySeconds"></a> MaxRetryDelaySeconds

Gets the maximum retry delay in seconds when transient-failure retries were configured.

```csharp
public int? MaxRetryDelaySeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_RoleProbeFreshnessSeconds"></a> RoleProbeFreshnessSeconds

Gets the freshness window in seconds for cached database-role probes when one was configured.
A value of <code>0</code> disables probe-result caching.

```csharp
public int? RoleProbeFreshnessSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Methods

### <a id="Cephalon_Engine_Configuration_DatabaseRuntimeSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads database runtime settings from the supplied configuration section.

```csharp
public static DatabaseRuntimeSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

#### Returns

 [DatabaseRuntimeSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databaseruntimesettings/)
