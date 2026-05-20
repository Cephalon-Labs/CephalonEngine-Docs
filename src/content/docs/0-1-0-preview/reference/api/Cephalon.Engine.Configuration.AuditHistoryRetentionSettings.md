---
title: Class AuditHistoryRetentionSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven retention settings for durable audit history.

```csharp
public sealed class AuditHistoryRetentionSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryRetentionSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Boolean__System_Nullable_System_Int32__"></a> AuditHistoryRetentionSettings\(bool?, int?, int?, bool?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.AuditHistoryRetentionSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AuditHistoryRetentionSettings(bool? enabled = null, int? maxAgeDays = null, int? deleteBatchSize = null, bool? applyOnStartup = null, int? runIntervalMinutes = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether retention was explicitly enabled.

`maxAgeDays` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum age, in days, to retain durable audit rows.

`deleteBatchSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum number of rows deleted per retention batch.

`applyOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether one retention pass should run during host startup.

`runIntervalMinutes` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional recurring retention interval in minutes.

## Fields

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_DefaultDeleteBatchSize"></a> DefaultDeleteBatchSize

Gets the default delete-batch size used by the engine-owned retention baseline.

```csharp
public const int DefaultDeleteBatchSize = 500
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_ApplyOnStartup"></a> ApplyOnStartup

Gets a value indicating whether one retention pass should run during host startup.

```csharp
public bool? ApplyOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_DeleteBatchSize"></a> DeleteBatchSize

Gets the maximum number of rows deleted per retention batch.

```csharp
public int? DeleteBatchSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_Empty"></a> Empty

Gets an empty audit-history retention settings instance.

```csharp
public static AuditHistoryRetentionSettings Empty { get; }
```

#### Property Value

 [AuditHistoryRetentionSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings/)

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_Enabled"></a> Enabled

Gets a value indicating whether retention was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_HasValues"></a> HasValues

Gets a value indicating whether any retention settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_MaxAgeDays"></a> MaxAgeDays

Gets the maximum age, in days, to retain durable audit rows.

```csharp
public int? MaxAgeDays { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_RunIntervalMinutes"></a> RunIntervalMinutes

Gets the optional recurring retention interval in minutes.

```csharp
public int? RunIntervalMinutes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Methods

### <a id="Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads retention settings from the supplied configuration section.

```csharp
public static AuditHistoryRetentionSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

The retention configuration section to read.

#### Returns

 [AuditHistoryRetentionSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings/)

The parsed retention settings.
