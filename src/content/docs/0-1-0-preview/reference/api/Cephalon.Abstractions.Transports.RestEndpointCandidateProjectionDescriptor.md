---
title: Class RestEndpointCandidateProjectionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned REST candidate projection shape before publication precedence or host-level overrides are applied.

```csharp
public sealed class RestEndpointCandidateProjectionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointCandidateProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor__ctor_System_String_System_String_System_String_System_String_System_Nullable_System_Int32__System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Nullable_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_String_System_Boolean_System_String_"></a> RestEndpointCandidateProjectionDescriptor\(string, string, string, string, int?, string?, IReadOnlyList<RestEndpointBindingDescriptor\>?, RestEndpointBindingFallbackMode?, string?, bool, string?\)

Creates a REST endpoint candidate projection descriptor.

```csharp
public RestEndpointCandidateProjectionDescriptor(string method, string routePattern, string routeGroupPrefix, string relativePattern, int? apiVersionMajor = null, string? openApiDocumentName = null, IReadOnlyList<RestEndpointBindingDescriptor>? bindingDescriptors = null, RestEndpointBindingFallbackMode? bindingFallbackMode = null, string? tagName = null, bool allowsHostGovernance = true, string? hostGovernanceScope = null)
```

#### Parameters

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projected HTTP method.

`routePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projected route pattern including the host REST prefix.

`routeGroupPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projected route-group prefix including the host REST prefix.

`relativePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projected route pattern relative to the owning route group.

`apiVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The projected public API major version when one is available.

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The projected OpenAPI document name when one is available.

`bindingDescriptors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>?

The projected request-binding descriptors when the projection exposes an explicit binding plan.

`bindingFallbackMode` [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)?

The projected request-binding fallback mode when the projection preserves deterministic
request-binding behavior beyond the explicit binding plan, such as preserved source
implicit-query fallback or preserved remaining request-body fallback.

`tagName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The projected primary OpenAPI tag name when one is available.

`allowsHostGovernance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when host-level REST suppression and override rules are allowed to
govern this projection candidate; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. Shorthand
candidates typically enable this automatically, while explicit module-DSL candidates stay
authoritative unless the owning route group opts into host governance.

`hostGovernanceScope` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable host-governance scope carried by the original authored route group when one is
available.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_AllowsHostGovernance"></a> AllowsHostGovernance

Gets a value indicating whether host-level REST suppression and override rules are allowed
to govern this projection candidate. Shorthand candidates typically enable this
automatically, while explicit module-DSL candidates stay authoritative unless the owning
route group opts into host governance.

```csharp
public bool AllowsHostGovernance { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_ApiVersionMajor"></a> ApiVersionMajor

Gets the projected public API major version when one is available.

```csharp
public int? ApiVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_BindingDescriptors"></a> BindingDescriptors

Gets the projected request-binding descriptors when the projection exposes an explicit binding plan.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> BindingDescriptors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_BindingFallbackMode"></a> BindingFallbackMode

Gets the projected request-binding fallback mode when the projection preserves deterministic
request-binding behavior beyond the explicit binding plan, such as preserved source
implicit-query fallback or preserved remaining request-body fallback.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public RestEndpointBindingFallbackMode? BindingFallbackMode { get; }
```

#### Property Value

 [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_HostGovernanceScope"></a> HostGovernanceScope

Gets the stable host-governance scope carried by the original authored route group when
one is available.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? HostGovernanceScope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_Method"></a> Method

Gets the projected HTTP method.

```csharp
public string Method { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_OpenApiDocumentName"></a> OpenApiDocumentName

Gets the projected OpenAPI document name when one is available.

```csharp
public string? OpenApiDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_RelativePattern"></a> RelativePattern

Gets the projected route pattern relative to the owning route group.

```csharp
public string RelativePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_RouteGroupPrefix"></a> RouteGroupPrefix

Gets the projected route-group prefix including the host REST prefix.

```csharp
public string RouteGroupPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_RoutePattern"></a> RoutePattern

Gets the projected route pattern including the host REST prefix.

```csharp
public string RoutePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_TagName"></a> TagName

Gets the projected primary OpenAPI tag name when one is available.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? TagName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
