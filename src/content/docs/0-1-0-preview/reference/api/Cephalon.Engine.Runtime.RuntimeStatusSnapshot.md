---
title: Class RuntimeStatusSnapshot
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Captures the current runtime lifecycle state in a serialization-friendly form.

```csharp
public sealed record RuntimeStatusSnapshot : IEquatable<RuntimeStatusSnapshot>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

#### Implements

[IEquatable<RuntimeStatusSnapshot\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot__ctor_Cephalon_Engine_Runtime_RuntimeStatus_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Int32_Cephalon_Engine_Runtime_RuntimeFailureInfo_"></a> RuntimeStatusSnapshot\(RuntimeStatus, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, int, RuntimeFailureInfo?\)

Captures the current runtime lifecycle state in a serialization-friendly form.

```csharp
public RuntimeStatusSnapshot(RuntimeStatus Status, DateTimeOffset? InitializedAtUtc, DateTimeOffset? StartedAtUtc, DateTimeOffset? StoppingAtUtc, DateTimeOffset? StoppedAtUtc, int RestartCount, RuntimeFailureInfo? LastFailure)
```

#### Parameters

`Status` [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

The current lifecycle status.

`InitializedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when initialization completed, if it has completed.

`StartedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when startup completed, if it has completed.

`StoppingAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when shutdown most recently entered the stopping phase, if any.

`StoppedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the runtime last transitioned to a stopped state, if any.

`RestartCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of completed manual restarts.

`LastFailure` [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

The last captured failure, if the runtime has faulted.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_InitializedAtUtc"></a> InitializedAtUtc

The UTC timestamp when initialization completed, if it has completed.

```csharp
public DateTimeOffset? InitializedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_LastFailure"></a> LastFailure

The last captured failure, if the runtime has faulted.

```csharp
public RuntimeFailureInfo? LastFailure { get; init; }
```

#### Property Value

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_RestartCount"></a> RestartCount

The number of completed manual restarts.

```csharp
public int RestartCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_StartedAtUtc"></a> StartedAtUtc

The UTC timestamp when startup completed, if it has completed.

```csharp
public DateTimeOffset? StartedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_Status"></a> Status

The current lifecycle status.

```csharp
public RuntimeStatus Status { get; init; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_StoppedAtUtc"></a> StoppedAtUtc

The UTC timestamp when the runtime last transitioned to a stopped state, if any.

```csharp
public DateTimeOffset? StoppedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeStatusSnapshot_StoppingAtUtc"></a> StoppingAtUtc

The UTC timestamp when shutdown most recently entered the stopping phase, if any.

```csharp
public DateTimeOffset? StoppingAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?
