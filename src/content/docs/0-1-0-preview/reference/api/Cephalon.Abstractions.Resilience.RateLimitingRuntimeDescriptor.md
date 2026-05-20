---
title: Class RateLimitingRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Describes one effective HTTP rate-limiting policy exposed by the current runtime.

```csharp
public sealed record RateLimitingRuntimeDescriptor : IEquatable<RateLimitingRuntimeDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RateLimitingRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor/)

#### Implements

[IEquatable<RateLimitingRuntimeDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Int32_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_AppModel_RateLimitingSelection_Cephalon_Abstractions_AppModel_RateLimitingSelection_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> RateLimitingRuntimeDescriptor\(string, string, string, string, string, int, IReadOnlyList<string\>, IReadOnlyList<string\>, RateLimitingSelection, RateLimitingSelection, IReadOnlyDictionary<string, string\>\)

Describes one effective HTTP rate-limiting policy exposed by the current runtime.

```csharp
public RateLimitingRuntimeDescriptor(string Id, string DisplayName, string Description, string ExecutionMode, string Scope, int RejectionStatusCode, IReadOnlyList<string> TransportIds, IReadOnlyList<string> ExcludedPathPrefixes, RateLimitingSelection Requested, RateLimitingSelection Effective, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`Id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable runtime policy identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable policy name.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable policy description.

`ExecutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The enforcement mode used by the active host, such as <code>aspnetcore-global-middleware</code> or <code>disabled</code>.

`Scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The runtime scope covered by the policy, such as <code>public-http-endpoints</code>.

`RejectionStatusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The HTTP status code returned when the limiter rejects a request.

`TransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The transport identifiers whose HTTP surfaces are covered by the policy.

`ExcludedPathPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The rooted path prefixes intentionally excluded from enforcement, such as operator or documentation routes.

`Requested` [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

The requested app-model selection that asked for rate limiting.

`Effective` [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

The effective policy values after host defaults and adapter-specific normalization have been applied.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Additional host-specific metadata describing the policy.

## Properties

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Description"></a> Description

The human-readable policy description.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_DisplayName"></a> DisplayName

The human-readable policy name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Effective"></a> Effective

The effective policy values after host defaults and adapter-specific normalization have been applied.

```csharp
public RateLimitingSelection Effective { get; init; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_ExcludedPathPrefixes"></a> ExcludedPathPrefixes

The rooted path prefixes intentionally excluded from enforcement, such as operator or documentation routes.

```csharp
public IReadOnlyList<string> ExcludedPathPrefixes { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_ExecutionMode"></a> ExecutionMode

The enforcement mode used by the active host, such as <code>aspnetcore-global-middleware</code> or <code>disabled</code>.

```csharp
public string ExecutionMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Id"></a> Id

The stable runtime policy identifier.

```csharp
public string Id { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Metadata"></a> Metadata

Additional host-specific metadata describing the policy.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_RejectionStatusCode"></a> RejectionStatusCode

The HTTP status code returned when the limiter rejects a request.

```csharp
public int RejectionStatusCode { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Requested"></a> Requested

The requested app-model selection that asked for rate limiting.

```csharp
public RateLimitingSelection Requested { get; init; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_Scope"></a> Scope

The runtime scope covered by the policy, such as <code>public-http-endpoints</code>.

```csharp
public string Scope { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_RateLimitingRuntimeDescriptor_TransportIds"></a> TransportIds

The transport identifiers whose HTTP surfaces are covered by the policy.

```csharp
public IReadOnlyList<string> TransportIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
