---
title: Class AgentToolExecutionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionoutcomes
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable outcome identifiers for agent-tool execution observations.

```csharp
public static class AgentToolExecutionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionOutcomes](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_ApprovalRequired"></a> ApprovalRequired

Gets the outcome identifier used when a tool run needs an approval step before execution.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_Denied"></a> Denied

Gets the outcome identifier used when a policy denies a tool run.

```csharp
public const string Denied = "denied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_Failed"></a> Failed

Gets the outcome identifier used when a tool run fails.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_RetryScheduled"></a> RetryScheduled

Gets the outcome identifier used when a failed tool attempt is scheduled for another process-local attempt.

```csharp
public const string RetryScheduled = "retry-scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_Skipped"></a> Skipped

Gets the outcome identifier used when a tool run is intentionally skipped.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_Started"></a> Started

Gets the outcome identifier used when a tool run begins.

```csharp
public const string Started = "started"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionOutcomes_Succeeded"></a> Succeeded

Gets the outcome identifier used when a tool run completes successfully.

```csharp
public const string Succeeded = "succeeded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
