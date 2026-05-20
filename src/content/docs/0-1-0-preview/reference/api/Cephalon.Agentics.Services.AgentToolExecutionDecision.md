---
title: Class AgentToolExecutionDecision
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Describes a policy decision for one agent-tool execution request.

```csharp
public sealed class AgentToolExecutionDecision
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolExecutionDecision\(string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new agent-tool execution decision.

```csharp
public AgentToolExecutionDecision(string kind, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable decision identifier.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing reason associated with the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured with the decision.

## Properties

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_Kind"></a> Kind

Gets the stable decision identifier.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_Metadata"></a> Metadata

Gets optional metadata captured with the decision.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_Reason"></a> Reason

Gets the operator-facing reason associated with the decision.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_Allow_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Allow\(string?, IReadOnlyDictionary<string, string\>?\)

Creates an allow decision.

```csharp
public static AgentToolExecutionDecision Allow(string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing reason for the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured with the decision.

#### Returns

 [AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)

An allow decision.

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_Deny_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Deny\(string?, IReadOnlyDictionary<string, string\>?\)

Creates a deny decision.

```csharp
public static AgentToolExecutionDecision Deny(string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing reason for the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured with the decision.

#### Returns

 [AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)

A deny decision.

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecision_RequireApproval_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> RequireApproval\(string?, IReadOnlyDictionary<string, string\>?\)

Creates an approval-required decision.

```csharp
public static AgentToolExecutionDecision RequireApproval(string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing reason for the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured with the decision.

#### Returns

 [AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)

An approval-required decision.
