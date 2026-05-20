---
title: Class DataSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven data settings for a Cephalon app.

```csharp
public sealed class DataSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_DataSettings__ctor_System_String_System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_String_"></a> DataSettings\(string?, bool?, bool?, string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.DataSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DataSettings(string? provider = null, bool? readWriteSplit = null, bool? outboxEnabled = null, string? idGenerator = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected primary data-provider family or implementation identifier.

`readWriteSplit` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether distinct read and write paths were explicitly selected.

`outboxEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether the outbox pattern was explicitly enabled.

`idGenerator` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected identifier-generation strategy.

## Properties

### <a id="Cephalon_Engine_Configuration_DataSettings_Empty"></a> Empty

Gets an empty data-settings instance.

```csharp
public static DataSettings Empty { get; }
```

#### Property Value

 [DataSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings/)

### <a id="Cephalon_Engine_Configuration_DataSettings_HasValues"></a> HasValues

Gets a value indicating whether any data settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_DataSettings_IdGenerator"></a> IdGenerator

Gets the selected identifier-generation strategy.

```csharp
public string? IdGenerator { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DataSettings_OutboxEnabled"></a> OutboxEnabled

Gets a value indicating whether the outbox pattern was explicitly enabled.

```csharp
public bool? OutboxEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_DataSettings_Provider"></a> Provider

Gets the selected primary data-provider family or implementation identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_DataSettings_ReadWriteSplit"></a> ReadWriteSplit

Gets a value indicating whether distinct read and write paths were explicitly selected.

```csharp
public bool? ReadWriteSplit { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

## Methods

### <a id="Cephalon_Engine_Configuration_DataSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads data settings from configuration.

```csharp
public static DataSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [DataSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings/)

The parsed data settings.
