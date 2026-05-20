---
title: Class ResilienceSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven resilience settings for a Cephalon app.

```csharp
public sealed class ResilienceSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ResilienceSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_ResilienceSettings__ctor_Cephalon_Engine_Configuration_RetrySettings_Cephalon_Engine_Configuration_TimeoutSettings_Cephalon_Engine_Configuration_CircuitBreakerSettings_Cephalon_Engine_Configuration_BulkheadSettings_Cephalon_Engine_Configuration_RateLimitingSettings_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings__"></a> ResilienceSettings\(RetrySettings?, TimeoutSettings?, CircuitBreakerSettings?, BulkheadSettings?, RateLimitingSettings?, IReadOnlyList<BehaviorExecutionResilienceOverrideSettings\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.ResilienceSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ResilienceSettings(RetrySettings? retry = null, TimeoutSettings? timeout = null, CircuitBreakerSettings? circuitBreaker = null, BulkheadSettings? bulkhead = null, RateLimitingSettings? rateLimiting = null, IReadOnlyList<BehaviorExecutionResilienceOverrideSettings>? behaviorExecutionOverrides = null)
```

#### Parameters

`retry` [RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)?

The retry settings resolved for the app.

`timeout` [TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)?

The timeout settings resolved for the app.

`circuitBreaker` [CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)?

The circuit-breaker settings resolved for the app.

`bulkhead` [BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)?

The bulkhead settings resolved for the app.

`rateLimiting` [RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)?

The rate-limiting settings resolved for the app.

`behaviorExecutionOverrides` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorExecutionResilienceOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-behaviorexecutionresilienceoverridesettings/)\>?

The named behavior-execution override policies targeted at specific behaviors or transports.

## Properties

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_BehaviorExecutionOverrides"></a> BehaviorExecutionOverrides

Gets the named behavior-execution override policies targeted at specific behaviors or transports.

```csharp
public IReadOnlyList<BehaviorExecutionResilienceOverrideSettings> BehaviorExecutionOverrides { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorExecutionResilienceOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-behaviorexecutionresilienceoverridesettings/)\>

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_Bulkhead"></a> Bulkhead

Gets the bulkhead settings resolved for the app.

```csharp
public BulkheadSettings Bulkhead { get; }
```

#### Property Value

 [BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_CircuitBreaker"></a> CircuitBreaker

Gets the circuit-breaker settings resolved for the app.

```csharp
public CircuitBreakerSettings CircuitBreaker { get; }
```

#### Property Value

 [CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_Empty"></a> Empty

Gets an empty resilience-settings instance.

```csharp
public static ResilienceSettings Empty { get; }
```

#### Property Value

 [ResilienceSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings/)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_HasValues"></a> HasValues

Gets a value indicating whether any resilience settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_RateLimiting"></a> RateLimiting

Gets the rate-limiting settings resolved for the app.

```csharp
public RateLimitingSettings RateLimiting { get; }
```

#### Property Value

 [RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_Retry"></a> Retry

Gets the retry settings resolved for the app.

```csharp
public RetrySettings Retry { get; }
```

#### Property Value

 [RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_Timeout"></a> Timeout

Gets the timeout settings resolved for the app.

```csharp
public TimeoutSettings Timeout { get; }
```

#### Property Value

 [TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_ResilienceSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads resilience settings from configuration.

```csharp
public static ResilienceSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [ResilienceSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings/)

The parsed resilience settings.
