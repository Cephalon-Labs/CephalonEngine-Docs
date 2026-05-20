---
title: Class BehaviorExecutionResilienceSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Describes the subset of resilience policy selections that apply to behavior execution pipelines.

```csharp
public sealed class BehaviorExecutionResilienceSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection__ctor_Cephalon_Abstractions_AppModel_RetrySelection_Cephalon_Abstractions_AppModel_TimeoutSelection_Cephalon_Abstractions_AppModel_CircuitBreakerSelection_Cephalon_Abstractions_AppModel_BulkheadSelection_Cephalon_Abstractions_AppModel_RateLimitingSelection_"></a> BehaviorExecutionResilienceSelection\(RetrySelection?, TimeoutSelection?, CircuitBreakerSelection?, BulkheadSelection?, RateLimitingSelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Resilience.BehaviorExecutionResilienceSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BehaviorExecutionResilienceSelection(RetrySelection? retry = null, TimeoutSelection? timeout = null, CircuitBreakerSelection? circuitBreaker = null, BulkheadSelection? bulkhead = null, RateLimitingSelection? rateLimiting = null)
```

#### Parameters

`retry` [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)?

The retry selection that applies to behavior execution.

`timeout` [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)?

The timeout selection that applies to behavior execution.

`circuitBreaker` [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)?

The circuit-breaker selection that applies to behavior execution.

`bulkhead` [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)?

The bulkhead selection that applies to behavior execution.

`rateLimiting` [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)?

The rate-limiting selection that applies to behavior execution.

## Properties

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_Bulkhead"></a> Bulkhead

Gets the bulkhead selection that applies to behavior execution.

```csharp
public BulkheadSelection Bulkhead { get; }
```

#### Property Value

 [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_CircuitBreaker"></a> CircuitBreaker

Gets the circuit-breaker selection that applies to behavior execution.

```csharp
public CircuitBreakerSelection CircuitBreaker { get; }
```

#### Property Value

 [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_Empty"></a> Empty

Gets an empty behavior-execution resilience selection.

```csharp
public static BehaviorExecutionResilienceSelection Empty { get; }
```

#### Property Value

 [BehaviorExecutionResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorexecutionresilienceselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_HasValues"></a> HasValues

Gets a value indicating whether any behavior-execution resilience inputs were supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_RateLimiting"></a> RateLimiting

Gets the rate-limiting selection that applies to behavior execution.

```csharp
public RateLimitingSelection RateLimiting { get; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_Retry"></a> Retry

Gets the retry selection that applies to behavior execution.

```csharp
public RetrySelection Retry { get; }
```

#### Property Value

 [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorExecutionResilienceSelection_Timeout"></a> Timeout

Gets the timeout selection that applies to behavior execution.

```csharp
public TimeoutSelection Timeout { get; }
```

#### Property Value

 [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)
