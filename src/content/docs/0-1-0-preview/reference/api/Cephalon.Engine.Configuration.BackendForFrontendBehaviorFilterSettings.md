---
title: Class BackendForFrontendBehaviorFilterSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven behavior-filter hints for one backend-for-frontend binding.

```csharp
public sealed class BackendForFrontendBehaviorFilterSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendBehaviorFilterSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> BackendForFrontendBehaviorFilterSettings\(IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates backend-for-frontend behavior-filter settings.

```csharp
public BackendForFrontendBehaviorFilterSettings(IReadOnlyList<string>? includedBehaviorIds = null, IReadOnlyList<string>? excludedBehaviorIds = null, IReadOnlyList<string>? includedCapabilityKeys = null, IReadOnlyList<string>? excludedCapabilityKeys = null, IReadOnlyList<string>? includedTags = null, IReadOnlyList<string>? excludedTags = null)
```

#### Parameters

`includedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit behavior identifiers that should stay visible to the client.

`excludedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit behavior identifiers that should be hidden from the client.

`includedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit capability keys that should stay visible to the client.

`excludedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit capability keys that should be hidden from the client.

`includedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior or endpoint tags that should stay visible to the client.

`excludedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior or endpoint tags that should be hidden from the client.

## Properties

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_Empty"></a> Empty

Gets an empty backend-for-frontend behavior-filter settings instance.

```csharp
public static BackendForFrontendBehaviorFilterSettings Empty { get; }
```

#### Property Value

 [BackendForFrontendBehaviorFilterSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings/)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_ExcludedBehaviorIds"></a> ExcludedBehaviorIds

Gets the explicit behavior identifiers that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_ExcludedCapabilityKeys"></a> ExcludedCapabilityKeys

Gets the explicit capability keys that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_ExcludedTags"></a> ExcludedTags

Gets the behavior or endpoint tags that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_HasValues"></a> HasValues

Gets a value indicating whether any backend-for-frontend behavior-filter settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_IncludedBehaviorIds"></a> IncludedBehaviorIds

Gets the explicit behavior identifiers that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_IncludedCapabilityKeys"></a> IncludedCapabilityKeys

Gets the explicit capability keys that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_IncludedTags"></a> IncludedTags

Gets the behavior or endpoint tags that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads backend-for-frontend behavior-filter settings from the supplied configuration section.

```csharp
public static BackendForFrontendBehaviorFilterSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the behavior-filter settings.

#### Returns

 [BackendForFrontendBehaviorFilterSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings/)

The parsed behavior-filter settings.
