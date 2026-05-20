---
title: Class RetrySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven retry settings for a Cephalon app.

```csharp
public sealed class RetrySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_RetrySettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Boolean__"></a> RetrySettings\(bool?, int?, string?, int?, int?, bool?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.RetrySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RetrySettings(bool? enabled = null, int? maxAttempts = null, string? backoff = null, int? baseDelayMilliseconds = null, int? maxDelayMilliseconds = null, bool? useJitter = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether retry support was explicitly enabled.

`maxAttempts` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum retry attempts requested for the policy.

`backoff` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The requested backoff mode, such as <code>Exponential</code> or <code>Linear</code>.

`baseDelayMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The base delay in milliseconds used by the retry policy.

`maxDelayMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum delay in milliseconds the retry policy may apply.

`useJitter` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether jitter was explicitly requested for retry delays.

## Properties

### <a id="Cephalon_Engine_Configuration_RetrySettings_Backoff"></a> Backoff

Gets the requested backoff mode, such as <code>Exponential</code> or <code>Linear</code>.

```csharp
public string? Backoff { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_RetrySettings_BaseDelayMilliseconds"></a> BaseDelayMilliseconds

Gets the base delay in milliseconds used by the retry policy.

```csharp
public int? BaseDelayMilliseconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RetrySettings_Empty"></a> Empty

Gets an empty retry-settings instance.

```csharp
public static RetrySettings Empty { get; }
```

#### Property Value

 [RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)

### <a id="Cephalon_Engine_Configuration_RetrySettings_Enabled"></a> Enabled

Gets a value indicating whether retry support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_RetrySettings_HasValues"></a> HasValues

Gets a value indicating whether any retry settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_RetrySettings_MaxAttempts"></a> MaxAttempts

Gets the maximum retry attempts requested for the policy.

```csharp
public int? MaxAttempts { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RetrySettings_MaxDelayMilliseconds"></a> MaxDelayMilliseconds

Gets the maximum delay in milliseconds the retry policy may apply.

```csharp
public int? MaxDelayMilliseconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_RetrySettings_UseJitter"></a> UseJitter

Gets a value indicating whether jitter was explicitly requested for retry delays.

```csharp
public bool? UseJitter { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?
