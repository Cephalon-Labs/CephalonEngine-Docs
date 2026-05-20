---
title: Class LocalizationSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes localization configuration for the runtime and module resources.

```csharp
public sealed class LocalizationSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_LocalizationSettings__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String___"></a> LocalizationSettings\(string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, IReadOnlyDictionary<string, string\>\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.LocalizationSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LocalizationSettings(string? defaultCulture = null, IReadOnlyList<string>? supportedCultures = null, IReadOnlyDictionary<string, IReadOnlyDictionary<string, string>>? resources = null)
```

#### Parameters

`defaultCulture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default culture to use when no explicit culture is requested.

`supportedCultures` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The supported culture identifiers.

`resources` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>?

Localized resource entries keyed by culture and resource key.

## Properties

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_DefaultCulture"></a> DefaultCulture

Gets the default culture to use when no explicit culture is requested.

```csharp
public string? DefaultCulture { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_Empty"></a> Empty

Gets an empty localization configuration instance.

```csharp
public static LocalizationSettings Empty { get; }
```

#### Property Value

 [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_HasValues"></a> HasValues

Gets a value indicating whether any localization settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_Resources"></a> Resources

Gets localized resource entries keyed by culture and resource key.

```csharp
public IReadOnlyDictionary<string, IReadOnlyDictionary<string, string>> Resources { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_SupportedCultures"></a> SupportedCultures

Gets the supported culture identifiers.

```csharp
public IReadOnlyList<string> SupportedCultures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads localization settings from configuration.

```csharp
public static LocalizationSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

The parsed localization settings.

### <a id="Cephalon_Engine_Configuration_LocalizationSettings_Merge_Cephalon_Engine_Configuration_LocalizationSettings_"></a> Merge\(LocalizationSettings?\)

Merges another localization settings instance into the current instance.

```csharp
public LocalizationSettings Merge(LocalizationSettings? other)
```

#### Parameters

`other` [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)?

The localization settings to overlay on top of the current values.

#### Returns

 [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

A merged localization settings instance.
