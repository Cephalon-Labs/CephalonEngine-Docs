---
title: Class BehaviorExecutionResilienceOverrideSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-behaviorexecutionresilienceoverridesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one named behavior-execution resilience override configured for a subset of behaviors or transports.

```csharp
public sealed class BehaviorExecutionResilienceOverrideSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionResilienceOverrideSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-behaviorexecutionresilienceoverridesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Engine_Configuration_RetrySettings_Cephalon_Engine_Configuration_TimeoutSettings_Cephalon_Engine_Configuration_CircuitBreakerSettings_Cephalon_Engine_Configuration_BulkheadSettings_Cephalon_Engine_Configuration_RateLimitingSettings_"></a> BehaviorExecutionResilienceOverrideSettings\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, RetrySettings?, TimeoutSettings?, CircuitBreakerSettings?, BulkheadSettings?, RateLimitingSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.BehaviorExecutionResilienceOverrideSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BehaviorExecutionResilienceOverrideSettings(string id, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? transportIds = null, RetrySettings? retry = null, TimeoutSettings? timeout = null, CircuitBreakerSettings? circuitBreaker = null, BulkheadSettings? bulkhead = null, RateLimitingSettings? rateLimiting = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted behavior identifiers.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted transport identifiers.

`retry` [RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)?

The retry override requested for the targeted surface.

`timeout` [TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)?

The timeout override requested for the targeted surface.

`circuitBreaker` [CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)?

The circuit-breaker override requested for the targeted surface.

`bulkhead` [BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)?

The bulkhead override requested for the targeted surface.

`rateLimiting` [RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)?

The rate-limiting override requested for the targeted surface.

## Properties

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_BehaviorIds"></a> BehaviorIds

Gets the targeted behavior identifiers.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_Bulkhead"></a> Bulkhead

Gets the bulkhead override requested for the targeted surface.

```csharp
public BulkheadSettings Bulkhead { get; }
```

#### Property Value

 [BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_CircuitBreaker"></a> CircuitBreaker

Gets the circuit-breaker override requested for the targeted surface.

```csharp
public CircuitBreakerSettings CircuitBreaker { get; }
```

#### Property Value

 [CircuitBreakerSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-circuitbreakersettings/)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_HasStrategyValues"></a> HasStrategyValues

Gets a value indicating whether any strategy-level override settings were explicitly supplied.

```csharp
public bool HasStrategyValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_HasValues"></a> HasValues

Gets a value indicating whether any override settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_RateLimiting"></a> RateLimiting

Gets the rate-limiting override requested for the targeted surface.

```csharp
public RateLimitingSettings RateLimiting { get; }
```

#### Property Value

 [RateLimitingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-ratelimitingsettings/)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_Retry"></a> Retry

Gets the retry override requested for the targeted surface.

```csharp
public RetrySettings Retry { get; }
```

#### Property Value

 [RetrySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-retrysettings/)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_Timeout"></a> Timeout

Gets the timeout override requested for the targeted surface.

```csharp
public TimeoutSettings Timeout { get; }
```

#### Property Value

 [TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)

### <a id="Cephalon_Engine_Configuration_BehaviorExecutionResilienceOverrideSettings_TransportIds"></a> TransportIds

Gets the targeted transport identifiers.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
