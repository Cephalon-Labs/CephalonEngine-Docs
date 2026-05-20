---
title: Class AgentToolExecutionContext
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutioncontext
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Describes the host-agnostic execution context delivered to one managed agent-tool executor.

```csharp
public sealed class AgentToolExecutionContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionContext](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutioncontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext__ctor_Cephalon_Agentics_Services_AgentToolDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolExecutionContext\(AgentToolDescriptor, string, IReadOnlyDictionary<string, string\>?, string?, string?, int, IReadOnlyDictionary<string, string\>?\)

Creates a new agent-tool execution context.

```csharp
public AgentToolExecutionContext(AgentToolDescriptor tool, string runId, IReadOnlyDictionary<string, string>? arguments = null, string? actorId = null, string? correlationId = null, int attempt = 1, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tool` [AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)

The resolved tool descriptor being executed.

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier for this execution.

`arguments` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional string arguments supplied to the tool executor.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional actor identifier responsible for the request.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the request.

`attempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The execution attempt number.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the request.

## Properties

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_ActorId"></a> ActorId

Gets the optional actor identifier responsible for the request.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_Arguments"></a> Arguments

Gets optional string arguments supplied to the tool executor.

```csharp
public IReadOnlyDictionary<string, string> Arguments { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_Attempt"></a> Attempt

Gets the execution attempt number.

```csharp
public int Attempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the request.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the request.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_RunId"></a> RunId

Gets the stable run identifier for this execution.

```csharp
public string RunId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionContext_Tool"></a> Tool

Gets the resolved tool descriptor being executed.

```csharp
public AgentToolDescriptor Tool { get; }
```

#### Property Value

 [AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)
