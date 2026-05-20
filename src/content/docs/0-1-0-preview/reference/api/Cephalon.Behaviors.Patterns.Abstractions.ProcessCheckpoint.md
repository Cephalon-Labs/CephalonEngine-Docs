---
title: Class ProcessCheckpoint
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Represents a snapshot of a process manager's current step and metadata.

```csharp
public class ProcessCheckpoint
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ProcessCheckpoint](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_CompletedAt"></a> CompletedAt

Gets the timestamp when this process completed, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if still in progress.

```csharp
public DateTimeOffset? CompletedAt { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_CreatedAt"></a> CreatedAt

Gets the timestamp when this process was created.

```csharp
public required DateTimeOffset CreatedAt { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_CurrentStep"></a> CurrentStep

Gets the name of the current step within the process.

```csharp
public required string CurrentStep { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_Metadata"></a> Metadata

Gets additional metadata associated with this checkpoint.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_ProcessId"></a> ProcessId

Gets the unique identifier of the process instance.

```csharp
public required string ProcessId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
