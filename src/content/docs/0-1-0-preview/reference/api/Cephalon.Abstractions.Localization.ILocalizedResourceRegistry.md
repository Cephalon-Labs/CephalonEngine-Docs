---
title: Interface ILocalizedResourceRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-localization-ilocalizedresourceregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Localization](/0-1-0-preview/reference/api/cephalon-abstractions-localization/)  
Assembly: Cephalon.Abstractions.dll  

Registers localized resources by culture and key.

```csharp
public interface ILocalizedResourceRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Localization_ILocalizedResourceRegistry_Add_System_String_System_String_System_String_"></a> Add\(string, string, string\)

Adds one localized text value.

```csharp
void Add(string culture, string key, string value)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)

The culture the value belongs to.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The localized resource key.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The localized text value.

### <a id="Cephalon_Abstractions_Localization_ILocalizedResourceRegistry_Add_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Add\(string, IReadOnlyDictionary<string, string\>\)

Adds a batch of localized text values for one culture.

```csharp
void Add(string culture, IReadOnlyDictionary<string, string> resources)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)

The culture the values belong to.

`resources` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The localized resources to register.
