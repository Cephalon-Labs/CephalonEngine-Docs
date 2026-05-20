---
title: Class FeatureFlagSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one configuration-driven feature flag.

```csharp
public sealed class FeatureFlagSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings__ctor_System_String_System_String_System_String_System_Boolean_Cephalon_Abstractions_Features_FeatureFlagSourceKind_System_String_Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_FeatureFlagProviderBindingSettings__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> FeatureFlagSettings\(string, string, string, bool, FeatureFlagSourceKind, string?, FeatureFlagTargetingSettings?, IReadOnlyList<FeatureFlagProviderBindingSettings\>?, IReadOnlyDictionary<string, string\>?\)

Creates feature-flag settings.

```csharp
public FeatureFlagSettings(string id, string displayName, string description, bool enabled = false, FeatureFlagSourceKind sourceKind = FeatureFlagSourceKind.Host, string? sourceModuleId = null, FeatureFlagTargetingSettings? targeting = null, IReadOnlyList<FeatureFlagProviderBindingSettings>? providerBindings = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable feature-flag identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing feature-flag name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable feature-flag description.

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the feature flag is enabled before targeting is applied.

`sourceKind` FeatureFlagSourceKind

Identifies whether the feature flag is host-owned or module-owned.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source-module identifier when the feature flag is module-owned.

`targeting` [FeatureFlagTargetingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings/)?

The optional targeting settings attached to the feature flag.

`providerBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagProviderBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagproviderbindingsettings/)\>?

Optional external provider bindings attached to the feature flag.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata.

## Properties

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_Description"></a> Description

Gets the human-readable feature-flag description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_DisplayName"></a> DisplayName

Gets the operator-facing feature-flag name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_Enabled"></a> Enabled

Gets a value indicating whether the feature flag is enabled before targeting is applied.

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_Id"></a> Id

Gets the stable feature-flag identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_Metadata"></a> Metadata

Gets optional operator-facing metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_ProviderBindings"></a> ProviderBindings

Gets the optional external provider bindings attached to the feature flag.

```csharp
public IReadOnlyList<FeatureFlagProviderBindingSettings> ProviderBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagProviderBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagproviderbindingsettings/)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_SourceKind"></a> SourceKind

Gets the ownership kind for this feature flag.

```csharp
public FeatureFlagSourceKind SourceKind { get; }
```

#### Property Value

 FeatureFlagSourceKind

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_SourceModuleId"></a> SourceModuleId

Gets the source-module identifier when the feature flag is module-owned.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_Targeting"></a> Targeting

Gets the optional targeting settings attached to the feature flag.

```csharp
public FeatureFlagTargetingSettings Targeting { get; }
```

#### Property Value

 [FeatureFlagTargetingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_FeatureFlagSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads one feature flag from configuration.

```csharp
public static FeatureFlagSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the feature flag.

#### Returns

 [FeatureFlagSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagsettings/)

The parsed feature-flag settings.
