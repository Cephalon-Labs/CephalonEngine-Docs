---
title: Class BehaviorExecutionResult
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutionresult
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

The result of a pattern-executed behavior invocation.

```csharp
public sealed class BehaviorExecutionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorExecutionResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionResult_HttpStatusCode"></a> HttpStatusCode

Gets the HTTP status code hint for HTTP transport bindings.

```csharp
public int HttpStatusCode { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionResult_IsFireAndForget"></a> IsFireAndForget

Gets a value indicating whether this was a fire-and-forget invocation.

```csharp
public bool IsFireAndForget { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionResult_Output"></a> Output

Gets the output value (may be null for fire-and-forget patterns).

```csharp
public object? Output { get; init; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?
