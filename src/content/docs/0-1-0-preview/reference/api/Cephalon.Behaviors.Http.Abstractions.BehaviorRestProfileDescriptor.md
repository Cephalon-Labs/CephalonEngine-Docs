---
title: Class BehaviorRestProfileDescriptor
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofiledescriptor
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Describes the metadata-only REST projection preference declared by a behavior.

```csharp
public sealed record BehaviorRestProfileDescriptor : IEquatable<BehaviorRestProfileDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestProfileDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofiledescriptor/)

#### Implements

[IEquatable<BehaviorRestProfileDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor__ctor_System_String_Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethod_System_String_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingDescriptor__System_Boolean_"></a> BehaviorRestProfileDescriptor\(string, BehaviorRestMethod, string, int?, IReadOnlyList<BehaviorRestBindingDescriptor\>?, bool\)

Describes the metadata-only REST projection preference declared by a behavior.

```csharp
public BehaviorRestProfileDescriptor(string BehaviorId, BehaviorRestMethod Method, string RelativePattern, int? ApiVersionMajor, IReadOnlyList<BehaviorRestBindingDescriptor>? Bindings = null, bool PreserveImplicitQueryFallback = false)
```

#### Parameters

`BehaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable Cephalon behavior identifier.

`Method` [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

The candidate REST method.

`RelativePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The candidate route pattern relative to a future owning REST group.

`ApiVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The candidate API major version, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when the behavior leaves version
selection to the owning module or host defaults.

`Bindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorRestBindingDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingdescriptor/)\>?

Optional explicit input-binding hints that describe where individual input properties should be
sourced from when an owning module consumes the profile.

`PreserveImplicitQueryFallback` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether explicit profile bindings should preserve the remaining implicit query-string
fallback surface when an owning module consumes the profile.

## Properties

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_ApiVersionMajor"></a> ApiVersionMajor

The candidate API major version, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when the behavior leaves version
selection to the owning module or host defaults.

```csharp
public int? ApiVersionMajor { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_BehaviorId"></a> BehaviorId

The stable Cephalon behavior identifier.

```csharp
public string BehaviorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_Bindings"></a> Bindings

Optional explicit input-binding hints that describe where individual input properties should be
sourced from when an owning module consumes the profile.

```csharp
public IReadOnlyList<BehaviorRestBindingDescriptor>? Bindings { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorRestBindingDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingdescriptor/)\>?

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_Method"></a> Method

The candidate REST method.

```csharp
public BehaviorRestMethod Method { get; init; }
```

#### Property Value

 [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_PreserveImplicitQueryFallback"></a> PreserveImplicitQueryFallback

Indicates whether explicit profile bindings should preserve the remaining implicit query-string
fallback surface when an owning module consumes the profile.

```csharp
public bool PreserveImplicitQueryFallback { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileDescriptor_RelativePattern"></a> RelativePattern

The candidate route pattern relative to a future owning REST group.

```csharp
public string RelativePattern { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
