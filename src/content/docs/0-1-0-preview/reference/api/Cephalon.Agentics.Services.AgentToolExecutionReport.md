---
title: Class AgentToolExecutionReport
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutionreport
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Describes one runtime observation for an agent-tool run.

```csharp
public sealed class AgentToolExecutionReport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionReport](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutionreport/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport__ctor_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_String_System_Int32_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolExecutionReport\(string, string, string, DateTimeOffset, string?, string?, int, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new runtime observation for an agent-tool run.

```csharp
public AgentToolExecutionReport(string toolId, string runId, string outcome, DateTimeOffset observedAtUtc, string? actorId = null, string? correlationId = null, int attempt = 1, string? outputSummary = null, string? error = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tool identifier.

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outcome identifier.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the observation occurred.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional actor identifier responsible for the run.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier associated with the run.

`attempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The execution attempt number.

`outputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing output summary.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing error summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the observation.

## Properties

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_ActorId"></a> ActorId

Gets the optional actor identifier responsible for the run.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_Attempt"></a> Attempt

Gets the execution attempt number.

```csharp
public int Attempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier associated with the run.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_Error"></a> Error

Gets the optional operator-facing error summary.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the observation occurred.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_Outcome"></a> Outcome

Gets the stable outcome identifier.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_OutputSummary"></a> OutputSummary

Gets the optional operator-facing output summary.

```csharp
public string? OutputSummary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_RunId"></a> RunId

Gets the stable run identifier.

```csharp
public string RunId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionReport_ToolId"></a> ToolId

Gets the stable tool identifier.

```csharp
public string ToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
