---
title: Class FeatureFlagTargetingSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven targeting constraints for one feature flag.

```csharp
public sealed class FeatureFlagTargetingSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagTargetingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> FeatureFlagTargetingSettings\(IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates feature-flag targeting settings.

```csharp
public FeatureFlagTargetingSettings(IReadOnlyList<string>? includedModuleIds = null, IReadOnlyList<string>? excludedModuleIds = null, IReadOnlyList<string>? includedBehaviorIds = null, IReadOnlyList<string>? excludedBehaviorIds = null, IReadOnlyList<string>? includedCapabilityKeys = null, IReadOnlyList<string>? excludedCapabilityKeys = null, IReadOnlyList<string>? includedTransportIds = null, IReadOnlyList<string>? excludedTransportIds = null, IReadOnlyList<string>? includedEnvironmentNames = null, IReadOnlyList<string>? excludedEnvironmentNames = null, IReadOnlyList<string>? includedTenantIds = null, IReadOnlyList<string>? excludedTenantIds = null, IReadOnlyList<string>? includedSubjectIds = null, IReadOnlyList<string>? excludedSubjectIds = null, IReadOnlyList<string>? includedTags = null, IReadOnlyList<string>? excludedTags = null)
```

#### Parameters

`includedModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included module identifiers.

`excludedModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded module identifiers.

`includedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included behavior identifiers.

`excludedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded behavior identifiers.

`includedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included capability keys.

`excludedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded capability keys.

`includedTransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included transport identifiers.

`excludedTransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded transport identifiers.

`includedEnvironmentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included environment names.

`excludedEnvironmentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded environment names.

`includedTenantIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included tenant identifiers.

`excludedTenantIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded tenant identifiers.

`includedSubjectIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included subject identifiers.

`excludedSubjectIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded subject identifiers.

`includedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly included descriptive tags.

`excludedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicitly excluded descriptive tags.

## Properties

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_Empty"></a> Empty

Gets an empty feature-flag targeting settings instance.

```csharp
public static FeatureFlagTargetingSettings Empty { get; }
```

#### Property Value

 [FeatureFlagTargetingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings/)

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedBehaviorIds"></a> ExcludedBehaviorIds

Gets the explicitly excluded behavior identifiers.

```csharp
public IReadOnlyList<string> ExcludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedCapabilityKeys"></a> ExcludedCapabilityKeys

Gets the explicitly excluded capability keys.

```csharp
public IReadOnlyList<string> ExcludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedEnvironmentNames"></a> ExcludedEnvironmentNames

Gets the explicitly excluded environment names.

```csharp
public IReadOnlyList<string> ExcludedEnvironmentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedModuleIds"></a> ExcludedModuleIds

Gets the explicitly excluded module identifiers.

```csharp
public IReadOnlyList<string> ExcludedModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedSubjectIds"></a> ExcludedSubjectIds

Gets the explicitly excluded subject identifiers.

```csharp
public IReadOnlyList<string> ExcludedSubjectIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedTags"></a> ExcludedTags

Gets the explicitly excluded descriptive tags.

```csharp
public IReadOnlyList<string> ExcludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedTenantIds"></a> ExcludedTenantIds

Gets the explicitly excluded tenant identifiers.

```csharp
public IReadOnlyList<string> ExcludedTenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_ExcludedTransportIds"></a> ExcludedTransportIds

Gets the explicitly excluded transport identifiers.

```csharp
public IReadOnlyList<string> ExcludedTransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_HasValues"></a> HasValues

Gets a value indicating whether any targeting constraint was supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedBehaviorIds"></a> IncludedBehaviorIds

Gets the explicitly included behavior identifiers.

```csharp
public IReadOnlyList<string> IncludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedCapabilityKeys"></a> IncludedCapabilityKeys

Gets the explicitly included capability keys.

```csharp
public IReadOnlyList<string> IncludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedEnvironmentNames"></a> IncludedEnvironmentNames

Gets the explicitly included environment names.

```csharp
public IReadOnlyList<string> IncludedEnvironmentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedModuleIds"></a> IncludedModuleIds

Gets the explicitly included module identifiers.

```csharp
public IReadOnlyList<string> IncludedModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedSubjectIds"></a> IncludedSubjectIds

Gets the explicitly included subject identifiers.

```csharp
public IReadOnlyList<string> IncludedSubjectIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedTags"></a> IncludedTags

Gets the explicitly included descriptive tags.

```csharp
public IReadOnlyList<string> IncludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedTenantIds"></a> IncludedTenantIds

Gets the explicitly included tenant identifiers.

```csharp
public IReadOnlyList<string> IncludedTenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_IncludedTransportIds"></a> IncludedTransportIds

Gets the explicitly included transport identifiers.

```csharp
public IReadOnlyList<string> IncludedTransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Configuration_FeatureFlagTargetingSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads feature-flag targeting settings from the supplied configuration section.

```csharp
public static FeatureFlagTargetingSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the targeting settings.

#### Returns

 [FeatureFlagTargetingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featureflagtargetingsettings/)

The parsed targeting settings.
