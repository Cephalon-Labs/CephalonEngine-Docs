---
title: Class CircuitBreakerSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven circuit-breaker settings for a Cephalon app.

```csharp
public sealed class CircuitBreakerSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Decimal__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> CircuitBreakerSettings\(bool?, decimal?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.CircuitBreakerSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CircuitBreakerSettings(bool? enabled = null, decimal? failureRatio = null, int? minimumThroughput = null, int? samplingDurationSeconds = null, int? breakDurationSeconds = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether circuit-breaker support was explicitly enabled.

`failureRatio` [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

The failure ratio threshold requested for opening the breaker.

`minimumThroughput` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The minimum throughput required before the breaker evaluates failures.

`samplingDurationSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The sampling duration in seconds used by the breaker.

`breakDurationSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The break duration in seconds requested for the open state.

## Properties

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_BreakDurationSeconds"></a> BreakDurationSeconds

Gets the break duration in seconds requested for the open state.

```csharp
public int? BreakDurationSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_Empty"></a> Empty

Gets an empty circuit-breaker-settings instance.

```csharp
public static CircuitBreakerSettings Empty { get; }
```

#### Property Value

 [CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_Enabled"></a> Enabled

Gets a value indicating whether circuit-breaker support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_FailureRatio"></a> FailureRatio

Gets the failure ratio threshold requested for opening the breaker.

```csharp
public decimal? FailureRatio { get; }
```

#### Property Value

 [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_HasValues"></a> HasValues

Gets a value indicating whether any circuit-breaker settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_MinimumThroughput"></a> MinimumThroughput

Gets the minimum throughput required before the breaker evaluates failures.

```csharp
public int? MinimumThroughput { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_CircuitBreakerSettings_SamplingDurationSeconds"></a> SamplingDurationSeconds

Gets the sampling duration in seconds used by the breaker.

```csharp
public int? SamplingDurationSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
