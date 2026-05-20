---
title: Class MessagingSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven messaging settings for a Cephalon app.

```csharp
public sealed class MessagingSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessagingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_MessagingSettings__ctor_System_String_"></a> MessagingSettings\(string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.MessagingSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MessagingSettings(string? provider = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected messaging provider or runtime adapter.

## Properties

### <a id="Cephalon_Engine_Configuration_MessagingSettings_Empty"></a> Empty

Gets an empty messaging-settings instance.

```csharp
public static MessagingSettings Empty { get; }
```

#### Property Value

 [MessagingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings/)

### <a id="Cephalon_Engine_Configuration_MessagingSettings_HasValues"></a> HasValues

Gets a value indicating whether any messaging settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_MessagingSettings_Provider"></a> Provider

Gets the selected messaging provider or runtime adapter.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Engine_Configuration_MessagingSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads messaging settings from configuration.

```csharp
public static MessagingSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [MessagingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings/)

The parsed messaging settings.
