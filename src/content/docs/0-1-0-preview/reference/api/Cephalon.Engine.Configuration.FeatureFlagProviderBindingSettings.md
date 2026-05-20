---
title: Class FeatureFlagProviderBindingSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagproviderbindingsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one configuration-driven external provider binding for a feature flag.

```csharp
public sealed class FeatureFlagProviderBindingSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagProviderBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagproviderbindingsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> FeatureFlagProviderBindingSettings\(string, string?, IReadOnlyDictionary<string, string\>?\)

Creates provider-binding settings.

```csharp
public FeatureFlagProviderBindingSettings(string providerId, string? providerFeatureId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable external provider identifier.

`providerFeatureId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-specific feature identifier.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional provider-specific binding metadata.

## Properties

### <a id="Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings_Metadata"></a> Metadata

Gets provider-specific binding metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings_ProviderFeatureId"></a> ProviderFeatureId

Gets the provider-specific feature identifier when one was supplied.

```csharp
public string? ProviderFeatureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings_ProviderId"></a> ProviderId

Gets the stable external provider identifier.

```csharp
public string ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads one provider binding from configuration.

```csharp
public static FeatureFlagProviderBindingSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the provider binding.

#### Returns

 [FeatureFlagProviderBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagproviderbindingsettings/)

The parsed provider binding settings.
