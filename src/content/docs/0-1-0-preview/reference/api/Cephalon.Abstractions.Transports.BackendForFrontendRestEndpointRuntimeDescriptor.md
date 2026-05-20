---
title: Class BackendForFrontendRestEndpointRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one backend-for-frontend client binding matched to one published REST endpoint.

```csharp
public sealed class BackendForFrontendRestEndpointRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This runtime surface keeps the host-agnostic backend-for-frontend binding contract separate
from the host-owned REST runtime catalog while still letting operator tooling answer which
published REST endpoints are currently visible to a specific client binding.

## Constructors

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor__ctor_System_String_Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> BackendForFrontendRestEndpointRuntimeDescriptor\(string, BackendForFrontendClientBindingDescriptor, RestEndpointRuntimeDescriptor, bool, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a backend-for-frontend REST endpoint runtime descriptor.

```csharp
public BackendForFrontendRestEndpointRuntimeDescriptor(string id, BackendForFrontendClientBindingDescriptor binding, RestEndpointRuntimeDescriptor endpoint, bool matchedByDefault = false, IReadOnlyList<string>? matchedBehaviorIds = null, IReadOnlyList<string>? matchedCapabilityKeys = null, IReadOnlyList<string>? matchedTags = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable binding-plus-endpoint identifier.

`binding` [BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)

The backend-for-frontend client binding that selected the endpoint.

`endpoint` [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

The published REST endpoint selected for that binding.

`matchedByDefault` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the endpoint stayed visible because the binding declared no
positive include filters and the endpoint was not excluded.

`matchedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The included behavior identifiers that matched the published endpoint when explicit
behavior-id filters were part of the binding.

`matchedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The included required-capability keys that matched the published endpoint when explicit
capability filters were part of the binding.

`matchedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The included tags that matched the published endpoint when explicit tag filters were part
of the binding.

## Properties

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_Binding"></a> Binding

Gets the backend-for-frontend client binding that selected the endpoint.

```csharp
public BackendForFrontendClientBindingDescriptor Binding { get; }
```

#### Property Value

 [BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_BindingId"></a> BindingId

Gets the stable backend-for-frontend binding identifier.

```csharp
public string BindingId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_ClientId"></a> ClientId

Gets the stable client identifier.

```csharp
public string ClientId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_Endpoint"></a> Endpoint

Gets the published REST endpoint selected for that binding.

```csharp
public RestEndpointRuntimeDescriptor Endpoint { get; }
```

#### Property Value

 [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_Id"></a> Id

Gets the stable binding-plus-endpoint identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_MatchedBehaviorIds"></a> MatchedBehaviorIds

Gets the included behavior identifiers that matched the published endpoint.

```csharp
public IReadOnlyList<string> MatchedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_MatchedByDefault"></a> MatchedByDefault

Gets a value indicating whether the endpoint stayed visible because the binding declared no
positive include filters and the endpoint was not excluded.

```csharp
public bool MatchedByDefault { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_MatchedCapabilityKeys"></a> MatchedCapabilityKeys

Gets the included required-capability keys that matched the published endpoint.

```csharp
public IReadOnlyList<string> MatchedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_MatchedTags"></a> MatchedTags

Gets the included tags that matched the published endpoint.

```csharp
public IReadOnlyList<string> MatchedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_RestEndpointId"></a> RestEndpointId

Gets the stable published REST endpoint identifier.

```csharp
public string RestEndpointId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestEndpointRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the binding-owner module identifier.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
