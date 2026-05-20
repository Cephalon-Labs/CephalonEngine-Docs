---
title: Class AgenticRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-agentics-configuration-agenticruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Agentics.Configuration](/0-1-0-preview/reference/api/cephalon-agentics-configuration/)  
Assembly: Cephalon.Agentics.dll  

Configures the built-in agentic runtime pack.

```csharp
public sealed class AgenticRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgenticRuntimeOptions](/0-1-0-preview/reference/api/cephalon-agentics-configuration-agenticruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed the host-owned part of the agentic runtime. Installed modules can still
contribute additional tools through <xref href="Cephalon.Agentics.Services.IAgentToolContributor" data-throw-if-not-resolved="false"></xref>.

## Constructors

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions__ctor"></a> AgenticRuntimeOptions\(\)

Creates agentic runtime options with the default host-owned features enabled.

```csharp
public AgenticRuntimeOptions()
```

## Properties

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_EnableExecution"></a> EnableExecution

Gets or sets a value indicating whether Cephalon-managed tool dispatch and run-state features are enabled.

```csharp
public bool EnableExecution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_EnableExecutionIdempotency"></a> EnableExecutionIdempotency

Gets or sets a value indicating whether duplicate completed run ids should be skipped inside the current process.

```csharp
public bool EnableExecutionIdempotency { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a bounded, process-local idempotency posture. It suppresses duplicate completed
tool runs observed by the in-memory run catalog without claiming durable inbox storage,
cross-node deduplication, or distributed exactly-once execution.

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_EnableMemory"></a> EnableMemory

Gets or sets a value indicating whether agent memory features are enabled.

```csharp
public bool EnableMemory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_ExecutionIdempotencyRetentionMinutes"></a> ExecutionIdempotencyRetentionMinutes

Gets or sets the process-local retention window, in minutes, for completed run-id suppression.

```csharp
public int ExecutionIdempotencyRetentionMinutes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Values less than <code>1</code> are normalized to one minute by the dispatcher.

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_ExecutionMaxAttempts"></a> ExecutionMaxAttempts

Gets or sets the maximum number of process-local attempts for one managed tool execution.

```csharp
public int ExecutionMaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value preserves single-attempt execution. Values greater than <code>1</code> enable
bounded in-process retry for executor failures without claiming durable retry queues or
distributed coordination.

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_ExecutionRetryDelayMilliseconds"></a> ExecutionRetryDelayMilliseconds

Gets or sets the optional delay, in milliseconds, before a process-local retry attempt.

```csharp
public int ExecutionRetryDelayMilliseconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_Metadata"></a> Metadata

Gets arbitrary metadata that can be attached to the agentic runtime configuration.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Configuration_AgenticRuntimeOptions_Tools"></a> Tools

Gets the host-defined tool descriptors that should be available to the agentic runtime.

```csharp
public IList<AgentToolDescriptor> Tools { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)\>
