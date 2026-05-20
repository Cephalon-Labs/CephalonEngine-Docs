---
title: Class FeatureSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven feature-flag settings for a Cephalon app.

```csharp
public sealed class FeatureSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_FeatureSettings__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_FeatureFlagSettings__"></a> FeatureSettings\(IReadOnlyList<FeatureFlagSettings\>?\)

Creates feature settings.

```csharp
public FeatureSettings(IReadOnlyList<FeatureFlagSettings>? flags = null)
```

#### Parameters

`flags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagsettings/)\>?

The feature flags configured for the app.

## Properties

### <a id="Cephalon_Engine_Configuration_FeatureSettings_Empty"></a> Empty

Gets an empty feature settings instance.

```csharp
public static FeatureSettings Empty { get; }
```

#### Property Value

 [FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)

### <a id="Cephalon_Engine_Configuration_FeatureSettings_Flags"></a> Flags

Gets the feature flags configured for the app.

```csharp
public IReadOnlyList<FeatureFlagSettings> Flags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagsettings/)\>

### <a id="Cephalon_Engine_Configuration_FeatureSettings_HasValues"></a> HasValues

Gets a value indicating whether any feature settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Engine_Configuration_FeatureSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads feature settings from configuration.

```csharp
public static FeatureSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)

The parsed feature settings.
