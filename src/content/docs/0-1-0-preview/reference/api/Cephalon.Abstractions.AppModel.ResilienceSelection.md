---
title: Class ResilienceSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the resilience-policy inputs resolved for a Cephalon app.

```csharp
public sealed class ResilienceSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection__ctor_Cephalon_Abstractions_AppModel_RetrySelection_Cephalon_Abstractions_AppModel_TimeoutSelection_Cephalon_Abstractions_AppModel_CircuitBreakerSelection_Cephalon_Abstractions_AppModel_BulkheadSelection_Cephalon_Abstractions_AppModel_RateLimitingSelection_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection__"></a> ResilienceSelection\(RetrySelection?, TimeoutSelection?, CircuitBreakerSelection?, BulkheadSelection?, RateLimitingSelection?, IReadOnlyList<BehaviorExecutionResilienceOverrideSelection\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.ResilienceSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public ResilienceSelection(RetrySelection? retry = null, TimeoutSelection? timeout = null, CircuitBreakerSelection? circuitBreaker = null, BulkheadSelection? bulkhead = null, RateLimitingSelection? rateLimiting = null, IReadOnlyList<BehaviorExecutionResilienceOverrideSelection>? behaviorExecutionOverrides = null)
```

#### Parameters

`retry` [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)?

The retry policy resolved for the app.

`timeout` [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)?

The timeout policy resolved for the app.

`circuitBreaker` [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)?

The circuit-breaker policy resolved for the app.

`bulkhead` [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)?

The bulkhead policy resolved for the app.

`rateLimiting` [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)?

The rate-limiting policy resolved for the app.

`behaviorExecutionOverrides` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorExecutionResilienceOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-behaviorexecutionresilienceoverrideselection/)\>?

The named behavior-execution override policies targeted at specific behaviors or transports.

## Properties

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_BehaviorExecutionOverrides"></a> BehaviorExecutionOverrides

Gets the named behavior-execution override policies targeted at specific behaviors or transports.

```csharp
public IReadOnlyList<BehaviorExecutionResilienceOverrideSelection> BehaviorExecutionOverrides { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorExecutionResilienceOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-behaviorexecutionresilienceoverrideselection/)\>

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_Bulkhead"></a> Bulkhead

Gets the bulkhead policy resolved for the app.

```csharp
public BulkheadSelection Bulkhead { get; }
```

#### Property Value

 [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_CircuitBreaker"></a> CircuitBreaker

Gets the circuit-breaker policy resolved for the app.

```csharp
public CircuitBreakerSelection CircuitBreaker { get; }
```

#### Property Value

 [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_Empty"></a> Empty

Gets an empty resilience-selection instance.

```csharp
public static ResilienceSelection Empty { get; }
```

#### Property Value

 [ResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection/)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_HasValues"></a> HasValues

Gets a value indicating whether any resilience-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_RateLimiting"></a> RateLimiting

Gets the rate-limiting policy resolved for the app.

```csharp
public RateLimitingSelection RateLimiting { get; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_Retry"></a> Retry

Gets the retry policy resolved for the app.

```csharp
public RetrySelection Retry { get; }
```

#### Property Value

 [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)

### <a id="Cephalon_Abstractions_AppModel_ResilienceSelection_Timeout"></a> Timeout

Gets the timeout policy resolved for the app.

```csharp
public TimeoutSelection Timeout { get; }
```

#### Property Value

 [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)
