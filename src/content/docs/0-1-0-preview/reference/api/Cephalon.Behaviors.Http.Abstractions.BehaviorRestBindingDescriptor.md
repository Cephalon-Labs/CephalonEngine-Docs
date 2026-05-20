---
title: Class BehaviorRestBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Describes one explicit request-source binding for a behavior input property on a metadata-only
REST profile.

```csharp
public sealed record BehaviorRestBindingDescriptor : IEquatable<BehaviorRestBindingDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestBindingDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingdescriptor/)

#### Implements

[IEquatable<BehaviorRestBindingDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingDescriptor__ctor_System_String_Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingSource_System_String_"></a> BehaviorRestBindingDescriptor\(string, BehaviorRestBindingSource, string?\)

Describes one explicit request-source binding for a behavior input property on a metadata-only
REST profile.

```csharp
public BehaviorRestBindingDescriptor(string PropertyName, BehaviorRestBindingSource Source, string? Name = null)
```

#### Parameters

`PropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior input property that receives the bound value.

`Source` [BehaviorRestBindingSource](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource/)

The HTTP request source that supplies the value.

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The external route key, query-string key, header name, or body property name to read from. When
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, Cephalon falls back to <code class="paramref">PropertyName</code>.

## Properties

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingDescriptor_Name"></a> Name

The external route key, query-string key, header name, or body property name to read from. When
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, Cephalon falls back to <code class="paramref">PropertyName</code>.

```csharp
public string? Name { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingDescriptor_PropertyName"></a> PropertyName

The behavior input property that receives the bound value.

```csharp
public string PropertyName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingDescriptor_Source"></a> Source

The HTTP request source that supplies the value.

```csharp
public BehaviorRestBindingSource Source { get; init; }
```

#### Property Value

 [BehaviorRestBindingSource](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource/)
