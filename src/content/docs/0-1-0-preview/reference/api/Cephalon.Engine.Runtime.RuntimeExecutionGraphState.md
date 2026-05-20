---
title: Class RuntimeExecutionGraphState
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeexecutiongraphstate
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Describes the current operator-facing lifecycle state for one execution graph visible to the runtime.

```csharp
public sealed record RuntimeExecutionGraphState : IEquatable<RuntimeExecutionGraphState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeExecutionGraphState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeexecutiongraphstate/)

#### Implements

[IEquatable<RuntimeExecutionGraphState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Nullable_System_DateTimeOffset__"></a> RuntimeExecutionGraphState\(string, string, string?, string, string?, string, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, DateTimeOffset?\)

Describes the current operator-facing lifecycle state for one execution graph visible to the runtime.

```csharp
public RuntimeExecutionGraphState(string GraphId, string DisplayName, string? Description, string SourceModuleId, string? SourceModuleVersion, string EntryNodeId, DateTimeOffset? LoadedAtUtc, DateTimeOffset? ActivatedAtUtc, DateTimeOffset? DeactivatedAtUtc, string? LastObservedPhase, DateTimeOffset? LastObservedAtUtc)
```

#### Parameters

`GraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-graph identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing execution-graph display name.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing execution-graph description when one was published.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module that contributed the execution graph.

`SourceModuleVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective version of the source module when available.

`EntryNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The entry node used when the graph begins execution.

`LoadedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the graph became visible to the built runtime story.

`ActivatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the graph most recently became active with the runtime.

`DeactivatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the graph most recently became inactive because the runtime stopped.

`LastObservedPhase` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last lifecycle phase recorded for the execution graph.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last lifecycle phase was recorded.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_ActivatedAtUtc"></a> ActivatedAtUtc

The UTC timestamp when the graph most recently became active with the runtime.

```csharp
public DateTimeOffset? ActivatedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_DeactivatedAtUtc"></a> DeactivatedAtUtc

The UTC timestamp when the graph most recently became inactive because the runtime stopped.

```csharp
public DateTimeOffset? DeactivatedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_Description"></a> Description

The operator-facing execution-graph description when one was published.

```csharp
public string? Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_DisplayName"></a> DisplayName

The operator-facing execution-graph display name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_EntryNodeId"></a> EntryNodeId

The entry node used when the graph begins execution.

```csharp
public string EntryNodeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_GraphId"></a> GraphId

The stable execution-graph identifier.

```csharp
public string GraphId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_IsActive"></a> IsActive

Gets a value indicating whether the execution graph is currently active with the runtime.

```csharp
public bool IsActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_IsDeactivated"></a> IsDeactivated

Gets a value indicating whether the execution graph most recently observed a deactivation event.

```csharp
public bool IsDeactivated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_IsLoaded"></a> IsLoaded

Gets a value indicating whether the execution graph is visible to the runtime story.

```csharp
public bool IsLoaded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last lifecycle phase was recorded.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_LastObservedPhase"></a> LastObservedPhase

The last lifecycle phase recorded for the execution graph.

```csharp
public string? LastObservedPhase { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_LoadedAtUtc"></a> LoadedAtUtc

The UTC timestamp when the graph became visible to the built runtime story.

```csharp
public DateTimeOffset? LoadedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_SourceModuleId"></a> SourceModuleId

The module that contributed the execution graph.

```csharp
public string SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeExecutionGraphState_SourceModuleVersion"></a> SourceModuleVersion

The effective version of the source module when available.

```csharp
public string? SourceModuleVersion { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
