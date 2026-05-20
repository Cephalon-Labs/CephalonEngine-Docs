---
title: Class BehaviorExecutionResilienceOverrideSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-behaviorexecutionresilienceoverrideselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes one named behavior-execution resilience override requested for a subset of behaviors or transports.

```csharp
public sealed class BehaviorExecutionResilienceOverrideSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionResilienceOverrideSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-behaviorexecutionresilienceoverrideselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Abstractions_AppModel_RetrySelection_Cephalon_Abstractions_AppModel_TimeoutSelection_Cephalon_Abstractions_AppModel_CircuitBreakerSelection_Cephalon_Abstractions_AppModel_BulkheadSelection_Cephalon_Abstractions_AppModel_RateLimitingSelection_"></a> BehaviorExecutionResilienceOverrideSelection\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, RetrySelection?, TimeoutSelection?, CircuitBreakerSelection?, BulkheadSelection?, RateLimitingSelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.BehaviorExecutionResilienceOverrideSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public BehaviorExecutionResilienceOverrideSelection(string id, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? transportIds = null, RetrySelection? retry = null, TimeoutSelection? timeout = null, CircuitBreakerSelection? circuitBreaker = null, BulkheadSelection? bulkhead = null, RateLimitingSelection? rateLimiting = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted behavior identifiers.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The targeted transport identifiers.

`retry` [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)?

The retry override requested for the targeted surface.

`timeout` [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)?

The timeout override requested for the targeted surface.

`circuitBreaker` [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)?

The circuit-breaker override requested for the targeted surface.

`bulkhead` [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)?

The bulkhead override requested for the targeted surface.

`rateLimiting` [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)?

The rate-limiting override requested for the targeted surface.

## Properties

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this override.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_Bulkhead"></a> Bulkhead

Gets the bulkhead override requested for the targeted surface.

```csharp
public BulkheadSelection Bulkhead { get; }
```

#### Property Value

 [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_CircuitBreaker"></a> CircuitBreaker

Gets the circuit-breaker override requested for the targeted surface.

```csharp
public CircuitBreakerSelection CircuitBreaker { get; }
```

#### Property Value

 [CircuitBreakerSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-circuitbreakerselection/)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_HasStrategyValues"></a> HasStrategyValues

Gets a value indicating whether any strategy-level override values were explicitly supplied.

```csharp
public bool HasStrategyValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_HasValues"></a> HasValues

Gets a value indicating whether any override values were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_RateLimiting"></a> RateLimiting

Gets the rate-limiting override requested for the targeted surface.

```csharp
public RateLimitingSelection RateLimiting { get; }
```

#### Property Value

 [RateLimitingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-ratelimitingselection/)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_Retry"></a> Retry

Gets the retry override requested for the targeted surface.

```csharp
public RetrySelection Retry { get; }
```

#### Property Value

 [RetrySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-retryselection/)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_Timeout"></a> Timeout

Gets the timeout override requested for the targeted surface.

```csharp
public TimeoutSelection Timeout { get; }
```

#### Property Value

 [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)

### <a id="Cephalon_Abstractions_AppModel_BehaviorExecutionResilienceOverrideSelection_TransportIds"></a> TransportIds

Gets the transport identifiers targeted by this override.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
