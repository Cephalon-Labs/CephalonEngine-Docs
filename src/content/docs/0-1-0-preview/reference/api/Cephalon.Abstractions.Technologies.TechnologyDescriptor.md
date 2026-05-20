---
title: Class TechnologyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one technology profile that can be activated for an app.

```csharp
public sealed class TechnologyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor__ctor_System_String_System_String_System_String_Cephalon_Abstractions_Technologies_TechnologyKind_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TechnologyDescriptor\(string, string, string, TechnologyKind, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a technology descriptor.

```csharp
public TechnologyDescriptor(string id, string displayName, string description, TechnologyKind kind, IReadOnlyList<string>? aliases = null, IReadOnlyList<string>? tags = null, IReadOnlyList<string>? requiresPatterns = null, IReadOnlyList<string>? requiresTransports = null, IReadOnlyList<string>? requiresTechnologies = null, IReadOnlyList<string>? conflictsWith = null, IReadOnlyList<string>? packageHints = null, IReadOnlyList<string>? guidance = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable technology identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable technology name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology description.

`kind` [TechnologyKind](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologykind/)

The category of the technology.

`aliases` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional aliases that can resolve to the same technology.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tags associated with the technology.

`requiresPatterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The pattern identifiers required by the technology.

`requiresTransports` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers required by the technology.

`requiresTechnologies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The technology identifiers required by the technology.

`conflictsWith` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The technology identifiers that conflict with the technology.

`packageHints` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The companion-package hints associated with the technology.

`guidance` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The guidance entries associated with the technology.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional technology metadata.

## Properties

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Aliases"></a> Aliases

Gets optional aliases that can resolve to the same technology.

```csharp
public IReadOnlyList<string> Aliases { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_ConflictsWith"></a> ConflictsWith

Gets the technology identifiers that conflict with the technology.

```csharp
public IReadOnlyList<string> ConflictsWith { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Description"></a> Description

Gets the technology description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_DisplayName"></a> DisplayName

Gets the human-readable technology name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Guidance"></a> Guidance

Gets the guidance entries associated with the technology.

```csharp
public IReadOnlyList<string> Guidance { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Id"></a> Id

Gets the stable technology identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Kind"></a> Kind

Gets the category of the technology.

```csharp
public TechnologyKind Kind { get; }
```

#### Property Value

 [TechnologyKind](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologykind/)

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Metadata"></a> Metadata

Gets optional technology metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_PackageHints"></a> PackageHints

Gets the companion-package hints associated with the technology.

```csharp
public IReadOnlyList<string> PackageHints { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_RequiresPatterns"></a> RequiresPatterns

Gets the pattern identifiers required by the technology.

```csharp
public IReadOnlyList<string> RequiresPatterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_RequiresTechnologies"></a> RequiresTechnologies

Gets the technology identifiers required by the technology.

```csharp
public IReadOnlyList<string> RequiresTechnologies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_RequiresTransports"></a> RequiresTransports

Gets the transport identifiers required by the technology.

```csharp
public IReadOnlyList<string> RequiresTransports { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyDescriptor_Tags"></a> Tags

Gets the tags associated with the technology.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
