---
title: Class RateLimitingOverrideSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingoverrideselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes one named rate-limiting override requested for a subset of transports or behaviors.

```csharp
public sealed class RateLimitingOverrideSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RateLimitingOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingoverrideselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Boolean__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> RateLimitingOverrideSelection\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, bool?, string?, int?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.RateLimitingOverrideSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public RateLimitingOverrideSelection(string id, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? transportIds = null, bool? enabled = null, string? algorithm = null, int? permitLimit = null, int? queueLimit = null, int? windowSeconds = null, int? segmentsPerWindow = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted behavior identifiers.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted transport identifiers.

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether the override explicitly enables or disables rate limiting for the targeted surface.

`algorithm` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The requested rate-limiting algorithm, such as <code>FixedWindow</code> or <code>TokenBucket</code>.

`permitLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum permits available per limiter window or bucket.

`queueLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum queued requests allowed before rejection.

`windowSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The limiter window duration in seconds when the selected algorithm uses windows.

`segmentsPerWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of segments per window when sliding windows are used.

## Properties

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_Algorithm"></a> Algorithm

Gets the requested rate-limiting algorithm, such as <code>FixedWindow</code> or <code>TokenBucket</code>.

```csharp
public string? Algorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this override.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_Enabled"></a> Enabled

Gets a value indicating whether rate limiting was explicitly enabled or disabled for the targeted surface.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_HasValues"></a> HasValues

Gets a value indicating whether any override values were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_PermitLimit"></a> PermitLimit

Gets the maximum permits available per limiter window or bucket.

```csharp
public int? PermitLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_QueueLimit"></a> QueueLimit

Gets the maximum queued requests allowed before rejection.

```csharp
public int? QueueLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_SegmentsPerWindow"></a> SegmentsPerWindow

Gets the number of segments per window when sliding windows are used.

```csharp
public int? SegmentsPerWindow { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_TransportIds"></a> TransportIds

Gets the transport identifiers targeted by this override.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection_WindowSeconds"></a> WindowSeconds

Gets the limiter window duration in seconds when the selected algorithm uses windows.

```csharp
public int? WindowSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
