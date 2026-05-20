---
title: Class PatternDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes one pattern that can shape a Cephalon app.

```csharp
public sealed class PatternDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor__ctor_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_PatternKind_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> PatternDescriptor\(string, string, string, PatternKind, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a pattern descriptor.

```csharp
public PatternDescriptor(string id, string displayName, string description, PatternKind kind, IReadOnlyList<string>? aliases = null, IReadOnlyList<string>? tags = null, IReadOnlyList<string>? requires = null, IReadOnlyList<string>? conflictsWith = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable pattern identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable pattern name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pattern description.

`kind` [PatternKind](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patternkind/)

The category of the pattern.

`aliases` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional aliases that can resolve to the same pattern.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tags associated with the pattern.

`requires` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The pattern identifiers required by this pattern.

`conflictsWith` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The pattern identifiers that conflict with this pattern.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional pattern metadata.

## Properties

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Aliases"></a> Aliases

Gets optional aliases that can resolve to the same pattern.

```csharp
public IReadOnlyList<string> Aliases { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_ConflictsWith"></a> ConflictsWith

Gets the pattern identifiers that conflict with this pattern.

```csharp
public IReadOnlyList<string> ConflictsWith { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Description"></a> Description

Gets the pattern description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_DisplayName"></a> DisplayName

Gets the human-readable pattern name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Id"></a> Id

Gets the stable pattern identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Kind"></a> Kind

Gets the category of the pattern.

```csharp
public PatternKind Kind { get; }
```

#### Property Value

 [PatternKind](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patternkind/)

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Metadata"></a> Metadata

Gets optional pattern metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Requires"></a> Requires

Gets the pattern identifiers required by this pattern.

```csharp
public IReadOnlyList<string> Requires { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_PatternDescriptor_Tags"></a> Tags

Gets the tags associated with the pattern.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
