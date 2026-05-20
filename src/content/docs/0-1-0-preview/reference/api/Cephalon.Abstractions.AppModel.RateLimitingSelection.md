---
title: Class RateLimitingSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the rate-limiting inputs resolved for a Cephalon app.

```csharp
public sealed class RateLimitingSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection__ctor_System_Nullable_System_Boolean__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_RateLimitingOverrideSelection__"></a> RateLimitingSelection\(bool?, string?, int?, int?, int?, int?, IReadOnlyList<RateLimitingOverrideSelection\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.RateLimitingSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public RateLimitingSelection(bool? enabled = null, string? algorithm = null, int? permitLimit = null, int? queueLimit = null, int? windowSeconds = null, int? segmentsPerWindow = null, IReadOnlyList<RateLimitingOverrideSelection>? overrides = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether rate limiting was explicitly enabled.

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

`overrides` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingoverrideselection/)\>?

The named override policies targeted at specific transports or behaviors.

## Properties

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_Algorithm"></a> Algorithm

Gets the requested rate-limiting algorithm, such as <code>FixedWindow</code> or <code>TokenBucket</code>.

```csharp
public string? Algorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_Empty"></a> Empty

Gets an empty rate-limiting-selection instance.

```csharp
public static RateLimitingSelection Empty { get; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_Enabled"></a> Enabled

Gets a value indicating whether rate limiting was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_HasValues"></a> HasValues

Gets a value indicating whether any rate-limiting-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_Overrides"></a> Overrides

Gets the named override policies targeted at specific transports or behaviors.

```csharp
public IReadOnlyList<RateLimitingOverrideSelection> Overrides { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingoverrideselection/)\>

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_PermitLimit"></a> PermitLimit

Gets the maximum permits available per limiter window or bucket.

```csharp
public int? PermitLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_QueueLimit"></a> QueueLimit

Gets the maximum queued requests allowed before rejection.

```csharp
public int? QueueLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_SegmentsPerWindow"></a> SegmentsPerWindow

Gets the number of segments per window when sliding windows are used.

```csharp
public int? SegmentsPerWindow { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_RateLimitingSelection_WindowSeconds"></a> WindowSeconds

Gets the limiter window duration in seconds when the selected algorithm uses windows.

```csharp
public int? WindowSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
