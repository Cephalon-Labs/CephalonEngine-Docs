---
title: Class AgentToolDescriptor
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Describes a tool that can be surfaced through the agentic runtime pack.

```csharp
public sealed class AgentToolDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolDescriptor\(string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new agent tool descriptor.

```csharp
[JsonConstructor]
public AgentToolDescriptor(string id, string displayName, string description, IReadOnlyList<string>? tags = null, IReadOnlyList<string>? capabilityKeys = null, string? executionGraphId = null, string? hostedExecutionId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tool identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing tool name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the tool.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the tool.

`capabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional capability keys that the tool expects to use through the active runtime.

`executionGraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The related execution-graph identifier when the tool coordinates a published orchestration flow.

`hostedExecutionId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The related hosted-execution identifier when the tool coordinates one host-managed background surface.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata that should flow through the runtime surface.

## Properties

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_CapabilityKeys"></a> CapabilityKeys

Gets the capability keys that the tool expects to use through the active runtime.

```csharp
public IReadOnlyList<string> CapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_Description"></a> Description

Gets the human-readable description of the tool.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing display name for the tool.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_ExecutionGraphId"></a> ExecutionGraphId

Gets the related execution-graph identifier when one is declared.

```csharp
public string? ExecutionGraphId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_HostedExecutionId"></a> HostedExecutionId

Gets the related hosted-execution identifier when one is declared.

```csharp
public string? HostedExecutionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_Id"></a> Id

Gets the stable tool identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_Metadata"></a> Metadata

Gets additional operator-facing metadata associated with the tool.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolDescriptor_Tags"></a> Tags

Gets the normalized tag set associated with the tool.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
