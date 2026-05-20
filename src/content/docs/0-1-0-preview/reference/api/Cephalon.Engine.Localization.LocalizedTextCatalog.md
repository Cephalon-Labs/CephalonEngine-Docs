---
title: Class LocalizedTextCatalog
slug: 0-1-0-preview/reference/api/cephalon-engine-localization-localizedtextcatalog
editUrl: false
---

Namespace: [Cephalon.Engine.Localization](/0-1-0-preview/reference/api/cephalon-engine-localization/)  
Assembly: Cephalon.Engine.dll  

Resolves localized resources from built-in and configuration-supplied resource catalogs.

```csharp
public sealed class LocalizedTextCatalog : ILocalizedTextCatalog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LocalizedTextCatalog](/0-1-0-preview/reference/api/cephalon-engine-localization-localizedtextcatalog/)

#### Implements

ILocalizedTextCatalog

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog__ctor_Cephalon_Engine_Configuration_LocalizationSettings_"></a> LocalizedTextCatalog\(LocalizationSettings\)

Initializes a new instance of the <xref href="Cephalon.Engine.Localization.LocalizedTextCatalog" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LocalizedTextCatalog(LocalizationSettings settings)
```

#### Parameters

`settings` [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

The localization settings that supply culture and resource overrides.

## Properties

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_DefaultCulture"></a> DefaultCulture

Gets the default culture used when no explicit culture is requested.

```csharp
public string DefaultCulture { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_SupportedCultures"></a> SupportedCultures

Gets the supported cultures available from the merged resource catalog.

```csharp
public IReadOnlyList<string> SupportedCultures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_CreateSnapshot_System_String_"></a> CreateSnapshot\(string?\)

Creates a serialization-friendly snapshot of the merged localized resources.

```csharp
public LocalizedResourcesSnapshot CreateSnapshot(string? culture = null)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture to resolve from.

#### Returns

 LocalizedResourcesSnapshot

A snapshot of the resolved localization view.

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_GetResources_System_String_"></a> GetResources\(string?\)

Gets the merged resources visible for the specified culture.

```csharp
public IReadOnlyDictionary<string, string> GetResources(string? culture = null)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture to resolve from.

#### Returns

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The merged resource dictionary for the resolved culture chain.

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_ResolveText_System_String_System_String_System_String_"></a> ResolveText\(string, string?, string?\)

Resolves a localized value or returns the provided fallback.

```csharp
public string ResolveText(string key, string? culture = null, string? fallback = null)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource key to resolve.

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture to resolve from.

`fallback` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The fallback value to return when the resource cannot be resolved.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved localized value or the fallback.

### <a id="Cephalon_Engine_Localization_LocalizedTextCatalog_TryGet_System_String_System_String_System_String__"></a> TryGet\(string, string?, out string\)

Attempts to resolve a localized value for the specified key and culture.

```csharp
public bool TryGet(string key, string? culture, out string value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource key to resolve.

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture to resolve from.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved localized value when found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a value was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
