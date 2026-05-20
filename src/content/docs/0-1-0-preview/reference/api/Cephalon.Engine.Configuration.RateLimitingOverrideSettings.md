---
title: Class RateLimitingOverrideSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingoverridesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one named rate-limiting override configured for a subset of transports or behaviors.

```csharp
public sealed class RateLimitingOverrideSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RateLimitingOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingoverridesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Boolean__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> RateLimitingOverrideSettings\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, bool?, string?, int?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.RateLimitingOverrideSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RateLimitingOverrideSettings(string id, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? transportIds = null, bool? enabled = null, string? algorithm = null, int? permitLimit = null, int? queueLimit = null, int? windowSeconds = null, int? segmentsPerWindow = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted behavior identifiers.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted transport identifiers.

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether the override explicitly enables or disables rate limiting.

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

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_Algorithm"></a> Algorithm

Gets the requested rate-limiting algorithm, such as <code>FixedWindow</code> or <code>TokenBucket</code>.

```csharp
public string? Algorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_BehaviorIds"></a> BehaviorIds

Gets the targeted behavior identifiers.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_Enabled"></a> Enabled

Gets a value indicating whether rate limiting was explicitly enabled or disabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_HasValues"></a> HasValues

Gets a value indicating whether any override settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_PermitLimit"></a> PermitLimit

Gets the maximum permits available per limiter window or bucket.

```csharp
public int? PermitLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_QueueLimit"></a> QueueLimit

Gets the maximum queued requests allowed before rejection.

```csharp
public int? QueueLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_SegmentsPerWindow"></a> SegmentsPerWindow

Gets the number of segments per window when sliding windows are used.

```csharp
public int? SegmentsPerWindow { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_TransportIds"></a> TransportIds

Gets the targeted transport identifiers.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_RateLimitingOverrideSettings_WindowSeconds"></a> WindowSeconds

Gets the limiter window duration in seconds when the selected algorithm uses windows.

```csharp
public int? WindowSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
