---
title: Interface ILocalizedTextCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-localization-ilocalizedtextcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Localization](/0-1-0-preview/reference/api/cephalon-abstractions-localization/)  
Assembly: Cephalon.Abstractions.dll  

Reads localized text resolved by the runtime.

```csharp
public interface ILocalizedTextCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_DefaultCulture"></a> DefaultCulture

Gets the default culture used by the catalog.

```csharp
string DefaultCulture { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_SupportedCultures"></a> SupportedCultures

Gets the cultures currently available in the catalog.

```csharp
IReadOnlyList<string> SupportedCultures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_CreateSnapshot_System_String_"></a> CreateSnapshot\(string?\)

Creates an introspectable snapshot of the currently resolved localized resources.

```csharp
LocalizedResourcesSnapshot CreateSnapshot(string? culture = null)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to use the default resolution flow.

#### Returns

 [LocalizedResourcesSnapshot](/0-1-0-preview/reference/api/cephalon-abstractions-localization-localizedresourcessnapshot/)

The localized-resource snapshot.

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_GetResources_System_String_"></a> GetResources\(string?\)

Returns the localized resources visible for one culture.

```csharp
IReadOnlyDictionary<string, string> GetResources(string? culture = null)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to use the default resolution flow.

#### Returns

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The localized resources visible for the requested culture.

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_ResolveText_System_String_System_String_System_String_"></a> ResolveText\(string, string?, string?\)

Resolves one localized text value with an optional fallback.

```csharp
string ResolveText(string key, string? culture = null, string? fallback = null)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource key to resolve.

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to use the default resolution flow.

`fallback` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The fallback value to use when the key cannot be resolved.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved localized text value.

### <a id="Cephalon_Abstractions_Localization_ILocalizedTextCatalog_TryGet_System_String_System_String_System_String__"></a> TryGet\(string, string?, out string\)

Attempts to resolve one localized text value.

```csharp
bool TryGet(string key, string? culture, out string value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource key to resolve.

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred culture, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to use the default resolution flow.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved text value when one is found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the value was resolved; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
