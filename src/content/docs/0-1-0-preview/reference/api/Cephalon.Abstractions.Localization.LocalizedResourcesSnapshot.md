---
title: Class LocalizedResourcesSnapshot
slug: 0-1-0-preview/reference/api/cephalon-abstractions-localization-localizedresourcessnapshot
editUrl: false
---

Namespace: [Cephalon.Abstractions.Localization](/0-1-0-preview/reference/api/cephalon-abstractions-localization/)  
Assembly: Cephalon.Abstractions.dll  

Captures the resolved localization state visible to the runtime.

```csharp
public sealed class LocalizedResourcesSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LocalizedResourcesSnapshot](/0-1-0-preview/reference/api/cephalon-abstractions-localization-localizedresourcessnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Localization_LocalizedResourcesSnapshot__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> LocalizedResourcesSnapshot\(string, string, IReadOnlyList<string\>, IReadOnlyDictionary<string, string\>\)

Creates a localization snapshot.

```csharp
public LocalizedResourcesSnapshot(string defaultCulture, string resolvedCulture, IReadOnlyList<string> supportedCultures, IReadOnlyDictionary<string, string> resources)
```

#### Parameters

`defaultCulture` [string](https://learn.microsoft.com/dotnet/api/system.string)

The default catalog culture.

`resolvedCulture` [string](https://learn.microsoft.com/dotnet/api/system.string)

The culture actually resolved for the snapshot.

`supportedCultures` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The cultures currently supported by the catalog.

`resources` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The localized resources visible to the snapshot.

## Properties

### <a id="Cephalon_Abstractions_Localization_LocalizedResourcesSnapshot_DefaultCulture"></a> DefaultCulture

Gets the default catalog culture.

```csharp
public string DefaultCulture { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Localization_LocalizedResourcesSnapshot_ResolvedCulture"></a> ResolvedCulture

Gets the culture actually resolved for the snapshot.

```csharp
public string ResolvedCulture { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Localization_LocalizedResourcesSnapshot_Resources"></a> Resources

Gets the localized resources visible to the snapshot.

```csharp
public IReadOnlyDictionary<string, string> Resources { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Localization_LocalizedResourcesSnapshot_SupportedCultures"></a> SupportedCultures

Gets the cultures currently supported by the catalog.

```csharp
public IReadOnlyList<string> SupportedCultures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
