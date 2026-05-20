---
title: Class AgentToolExecutionDecisionKinds
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecisionkinds
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Defines stable decision identifiers returned by agent-tool execution policies.

```csharp
public static class AgentToolExecutionDecisionKinds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionDecisionKinds](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecisionkinds/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecisionKinds_Allow"></a> Allow

Gets the decision identifier used when execution can continue.

```csharp
public const string Allow = "allow"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecisionKinds_ApprovalRequired"></a> ApprovalRequired

Gets the decision identifier used when execution must wait for explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Agentics_Services_AgentToolExecutionDecisionKinds_Deny"></a> Deny

Gets the decision identifier used when execution is denied by policy.

```csharp
public const string Deny = "deny"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
