---
title: Class BehaviorResilienceExceptionContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptioncontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Describes one behavior-execution exception being evaluated by the resilience pipeline.

```csharp
public sealed class BehaviorResilienceExceptionContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorResilienceExceptionContext](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptioncontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Exception_Cephalon_Abstractions_Behaviors_BehaviorIdempotencyMode_"></a> BehaviorResilienceExceptionContext\(string, string, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, Exception, BehaviorIdempotencyMode\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Resilience.BehaviorResilienceExceptionContext" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BehaviorResilienceExceptionContext(string policyId, string behaviorId, string? transportId, IReadOnlyList<string>? targetedBehaviorIds, IReadOnlyList<string>? targetedTransportIds, Exception exception, BehaviorIdempotencyMode behaviorIdempotency = BehaviorIdempotencyMode.Unknown)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable resilience-policy identifier handling the exception.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier being executed.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The active transport identifier when one is known.

`targetedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers targeted by the active policy.

`targetedTransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers targeted by the active policy.

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception being classified.

`behaviorIdempotency` [BehaviorIdempotencyMode](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioridempotencymode/)

The declared behavior idempotency mode when one is known.

## Properties

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier being executed.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_BehaviorIdempotency"></a> BehaviorIdempotency

Gets the declared behavior idempotency mode when one is known.

```csharp
public BehaviorIdempotencyMode BehaviorIdempotency { get; }
```

#### Property Value

 [BehaviorIdempotencyMode](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioridempotencymode/)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_Exception"></a> Exception

Gets the exception being classified.

```csharp
public Exception Exception { get; }
```

#### Property Value

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_PolicyId"></a> PolicyId

Gets the stable resilience-policy identifier handling the exception.

```csharp
public string PolicyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_TargetedBehaviorIds"></a> TargetedBehaviorIds

Gets the behavior identifiers targeted by the active policy.

```csharp
public IReadOnlyList<string> TargetedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_TargetedTransportIds"></a> TargetedTransportIds

Gets the transport identifiers targeted by the active policy.

```csharp
public IReadOnlyList<string> TargetedTransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Resilience_BehaviorResilienceExceptionContext_TransportId"></a> TransportId

Gets the active transport identifier when one is known.

```csharp
public string? TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
