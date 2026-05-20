---
title: Class RestEndpointBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one resolved request-binding rule for a public REST endpoint.

```csharp
public sealed class RestEndpointBindingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__ctor_System_String_Cephalon_Abstractions_Transports_RestEndpointBindingSource_System_String_"></a> RestEndpointBindingDescriptor\(string, RestEndpointBindingSource, string?\)

Creates a resolved REST endpoint binding descriptor.

```csharp
public RestEndpointBindingDescriptor(string propertyName, RestEndpointBindingSource source, string? name = null)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target request-model property name.

`source` [RestEndpointBindingSource](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsource/)

The HTTP request source that supplies the value.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The route/query/header/body member name when one is available.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor_Name"></a> Name

Gets the route/query/header/body member name when one is available.

```csharp
public string? Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor_PropertyName"></a> PropertyName

Gets the target request-model property name.

```csharp
public string PropertyName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor_Source"></a> Source

Gets the HTTP request source that supplies the value.

```csharp
public RestEndpointBindingSource Source { get; }
```

#### Property Value

 [RestEndpointBindingSource](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsource/)
