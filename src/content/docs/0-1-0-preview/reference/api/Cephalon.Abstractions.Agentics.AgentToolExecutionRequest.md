---
title: Class AgentToolExecutionRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Describes one request to execute an agent tool through the Cephalon-managed agentics runtime.

```csharp
public sealed class AgentToolExecutionRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolExecutionRequest\(string, string?, IReadOnlyDictionary<string, string\>?, string?, string?, int, IReadOnlyDictionary<string, string\>?\)

Creates a new agent-tool execution request.

```csharp
public AgentToolExecutionRequest(string toolId, string? runId = null, IReadOnlyDictionary<string, string>? arguments = null, string? actorId = null, string? correlationId = null, int attempt = 1, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tool identifier to execute.

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable run identifier. A generated identifier is used when omitted.

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

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_ActorId"></a> ActorId

Gets the optional actor identifier responsible for the request.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_Arguments"></a> Arguments

Gets optional string arguments supplied to the tool executor.

```csharp
public IReadOnlyDictionary<string, string> Arguments { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_Attempt"></a> Attempt

Gets the execution attempt number.

```csharp
public int Attempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the request.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the request.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_RunId"></a> RunId

Gets the stable run identifier for this execution.

```csharp
public string RunId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_ToolId"></a> ToolId

Gets the stable tool identifier to execute.

```csharp
public string ToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
