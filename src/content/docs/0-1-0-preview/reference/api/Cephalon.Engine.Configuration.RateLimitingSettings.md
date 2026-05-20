---
title: Class RateLimitingSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven rate-limiting settings for a Cephalon app.

```csharp
public sealed class RateLimitingSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings__ctor_System_Nullable_System_Boolean__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_RateLimitingOverrideSettings__"></a> RateLimitingSettings\(bool?, string?, int?, int?, int?, int?, IReadOnlyList<RateLimitingOverrideSettings\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.RateLimitingSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RateLimitingSettings(bool? enabled = null, string? algorithm = null, int? permitLimit = null, int? queueLimit = null, int? windowSeconds = null, int? segmentsPerWindow = null, IReadOnlyList<RateLimitingOverrideSettings>? overrides = null)
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

`overrides` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingoverridesettings/)\>?

The named override policies targeted at specific transports or behaviors.

## Properties

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_Algorithm"></a> Algorithm

Gets the requested rate-limiting algorithm, such as <code>FixedWindow</code> or <code>TokenBucket</code>.

```csharp
public string? Algorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_Empty"></a> Empty

Gets an empty rate-limiting-settings instance.

```csharp
public static RateLimitingSettings Empty { get; }
```

#### Property Value

 [RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_Enabled"></a> Enabled

Gets a value indicating whether rate limiting was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_HasValues"></a> HasValues

Gets a value indicating whether any rate-limiting settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_Overrides"></a> Overrides

Gets the named override policies targeted at specific transports or behaviors.

```csharp
public IReadOnlyList<RateLimitingOverrideSettings> Overrides { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingoverridesettings/)\>

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_PermitLimit"></a> PermitLimit

Gets the maximum permits available per limiter window or bucket.

```csharp
public int? PermitLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_QueueLimit"></a> QueueLimit

Gets the maximum queued requests allowed before rejection.

```csharp
public int? QueueLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_SegmentsPerWindow"></a> SegmentsPerWindow

Gets the number of segments per window when sliding windows are used.

```csharp
public int? SegmentsPerWindow { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RateLimitingSettings_WindowSeconds"></a> WindowSeconds

Gets the limiter window duration in seconds when the selected algorithm uses windows.

```csharp
public int? WindowSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
