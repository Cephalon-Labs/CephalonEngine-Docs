---
title: Class BackendForFrontendBehaviorFilterDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes behavior, capability, and tag-selection hints for one backend-for-frontend binding.

```csharp
public sealed class BackendForFrontendBehaviorFilterDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendBehaviorFilterDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> BackendForFrontendBehaviorFilterDescriptor\(IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a backend-for-frontend behavior filter descriptor.

```csharp
public BackendForFrontendBehaviorFilterDescriptor(IReadOnlyList<string>? includedBehaviorIds = null, IReadOnlyList<string>? excludedBehaviorIds = null, IReadOnlyList<string>? includedCapabilityKeys = null, IReadOnlyList<string>? excludedCapabilityKeys = null, IReadOnlyList<string>? includedTags = null, IReadOnlyList<string>? excludedTags = null)
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

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_Empty"></a> Empty

Gets an empty backend-for-frontend behavior filter.

```csharp
public static BackendForFrontendBehaviorFilterDescriptor Empty { get; }
```

#### Property Value

 [BackendForFrontendBehaviorFilterDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor/)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_ExcludedBehaviorIds"></a> ExcludedBehaviorIds

Gets the explicit behavior identifiers that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_ExcludedCapabilityKeys"></a> ExcludedCapabilityKeys

Gets the explicit capability keys that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_ExcludedTags"></a> ExcludedTags

Gets the behavior or endpoint tags that should be hidden from the client.

```csharp
public IReadOnlyList<string> ExcludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_HasValues"></a> HasValues

Gets a value indicating whether any behavior-filter hints were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_IncludedBehaviorIds"></a> IncludedBehaviorIds

Gets the explicit behavior identifiers that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_IncludedCapabilityKeys"></a> IncludedCapabilityKeys

Gets the explicit capability keys that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_IncludedTags"></a> IncludedTags

Gets the behavior or endpoint tags that should stay visible to the client.

```csharp
public IReadOnlyList<string> IncludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
