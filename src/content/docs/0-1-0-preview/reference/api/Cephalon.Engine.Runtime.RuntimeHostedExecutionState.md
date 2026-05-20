---
title: Class RuntimeHostedExecutionState
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehostedexecutionstate
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Describes the current operator-facing lifecycle state for one hosted execution visible to the runtime.

```csharp
public sealed record RuntimeHostedExecutionState : IEquatable<RuntimeHostedExecutionState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeHostedExecutionState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehostedexecutionstate/)

#### Implements

[IEquatable<RuntimeHostedExecutionState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Nullable_System_DateTimeOffset__"></a> RuntimeHostedExecutionState\(string, string, string?, string, string?, string, string?, bool, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, DateTimeOffset?\)

Describes the current operator-facing lifecycle state for one hosted execution visible to the runtime.

```csharp
public RuntimeHostedExecutionState(string HostedExecutionId, string DisplayName, string? Description, string SourceModuleId, string? SourceModuleVersion, string Kind, string? ExecutionGraphId, bool StartsWithHost, DateTimeOffset? LoadedAtUtc, DateTimeOffset? ActivatedAtUtc, DateTimeOffset? DeactivatedAtUtc, string? LastObservedPhase, DateTimeOffset? LastObservedAtUtc)
```

#### Parameters

`HostedExecutionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable hosted-execution identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing hosted-execution display name.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing hosted-execution description when one was published.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module that contributed the hosted execution.

`SourceModuleVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective version of the source module when available.

`Kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing hosted-execution kind.

`ExecutionGraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The related execution-graph identifier when one was declared.

`StartsWithHost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the hosted execution is expected to become active when the runtime host starts.

`LoadedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the hosted execution became visible to the built runtime story.

`ActivatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the hosted execution most recently became active with the runtime.

`DeactivatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the hosted execution most recently became inactive because the runtime stopped.

`LastObservedPhase` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last lifecycle phase recorded for the hosted execution.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last lifecycle phase was recorded.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_ActivatedAtUtc"></a> ActivatedAtUtc

The UTC timestamp when the hosted execution most recently became active with the runtime.

```csharp
public DateTimeOffset? ActivatedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_DeactivatedAtUtc"></a> DeactivatedAtUtc

The UTC timestamp when the hosted execution most recently became inactive because the runtime stopped.

```csharp
public DateTimeOffset? DeactivatedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_Description"></a> Description

The operator-facing hosted-execution description when one was published.

```csharp
public string? Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_DisplayName"></a> DisplayName

The operator-facing hosted-execution display name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_ExecutionGraphId"></a> ExecutionGraphId

The related execution-graph identifier when one was declared.

```csharp
public string? ExecutionGraphId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_HostedExecutionId"></a> HostedExecutionId

The stable hosted-execution identifier.

```csharp
public string HostedExecutionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_IsActive"></a> IsActive

Gets a value indicating whether the hosted execution is currently active with the runtime host.

```csharp
public bool IsActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_IsDeactivated"></a> IsDeactivated

Gets a value indicating whether the hosted execution most recently observed a deactivation event.

```csharp
public bool IsDeactivated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_IsLoaded"></a> IsLoaded

Gets a value indicating whether the hosted execution is visible to the runtime story.

```csharp
public bool IsLoaded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_Kind"></a> Kind

The operator-facing hosted-execution kind.

```csharp
public string Kind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last lifecycle phase was recorded.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_LastObservedPhase"></a> LastObservedPhase

The last lifecycle phase recorded for the hosted execution.

```csharp
public string? LastObservedPhase { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_LoadedAtUtc"></a> LoadedAtUtc

The UTC timestamp when the hosted execution became visible to the built runtime story.

```csharp
public DateTimeOffset? LoadedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_SourceModuleId"></a> SourceModuleId

The module that contributed the hosted execution.

```csharp
public string SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_SourceModuleVersion"></a> SourceModuleVersion

The effective version of the source module when available.

```csharp
public string? SourceModuleVersion { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeHostedExecutionState_StartsWithHost"></a> StartsWithHost

A value indicating whether the hosted execution is expected to become active when the runtime host starts.

```csharp
public bool StartsWithHost { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
