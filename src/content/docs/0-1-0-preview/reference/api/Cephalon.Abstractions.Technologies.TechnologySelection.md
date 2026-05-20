---
title: Class TechnologySelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Provides lookup helpers over selected and available technology profiles.

```csharp
public sealed class TechnologySelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyDescriptor__"></a> TechnologySelection\(IReadOnlyList<TechnologyDescriptor\>, IReadOnlyList<TechnologyDescriptor\>\)

Creates a technology-selection view.

```csharp
public TechnologySelection(IReadOnlyList<TechnologyDescriptor> selected, IReadOnlyList<TechnologyDescriptor> catalog)
```

#### Parameters

`selected` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>

The technology profiles currently selected for the app.

`catalog` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>

The technology profiles available to the runtime.

## Properties

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_Catalog"></a> Catalog

Gets the technology profiles available to the runtime.

```csharp
public IReadOnlyList<TechnologyDescriptor> Catalog { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_Selected"></a> Selected

Gets the technology profiles currently selected for the app.

```csharp
public IReadOnlyList<TechnologyDescriptor> Selected { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_IsAvailable_System_String_"></a> IsAvailable\(string\)

Determines whether a technology is available in the runtime catalog.

```csharp
public bool IsAvailable(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier or display name to match.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the technology is available; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_IsSelected_System_String_"></a> IsSelected\(string\)

Determines whether a technology is selected.

```csharp
public bool IsSelected(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier or display name to match.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the technology is selected; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_TryGetAvailable_System_String_Cephalon_Abstractions_Technologies_TechnologyDescriptor__"></a> TryGetAvailable\(string, out TechnologyDescriptor\)

Attempts to resolve one available technology from the runtime catalog.

```csharp
public bool TryGetAvailable(string value, out TechnologyDescriptor technology)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier or display name to match.

`technology` [TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)

The resolved available technology when one is found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the technology is available; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Technologies_TechnologySelection_TryGetSelected_System_String_Cephalon_Abstractions_Technologies_TechnologyDescriptor__"></a> TryGetSelected\(string, out TechnologyDescriptor\)

Attempts to resolve one selected technology.

```csharp
public bool TryGetSelected(string value, out TechnologyDescriptor technology)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier or display name to match.

`technology` [TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)

The resolved selected technology when one is found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the technology is selected; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
