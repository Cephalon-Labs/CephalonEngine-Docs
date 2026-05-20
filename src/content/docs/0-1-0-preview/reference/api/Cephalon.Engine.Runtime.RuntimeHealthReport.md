---
title: Class RuntimeHealthReport
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthreport
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Captures the health result for a runtime liveness or readiness probe.

```csharp
public sealed record RuntimeHealthReport : IEquatable<RuntimeHealthReport>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeHealthReport](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthreport/)

#### Implements

[IEquatable<RuntimeHealthReport\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport__ctor_System_String_Cephalon_Engine_Runtime_RuntimeHealthState_System_String_Cephalon_Engine_Runtime_RuntimeStatus_System_Int32_Cephalon_Engine_Runtime_RuntimeFailureInfo_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Health_DependencyHealthReport__System_String_System_Nullable_System_DateTimeOffset__"></a> RuntimeHealthReport\(string, RuntimeHealthState, string, RuntimeStatus, int, RuntimeFailureInfo?, IReadOnlyList<DependencyHealthReport\>, string?, DateTimeOffset?\)

Captures the health result for a runtime liveness or readiness probe.

```csharp
public RuntimeHealthReport(string Probe, RuntimeHealthState State, string Description, RuntimeStatus RuntimeStatus, int RestartCount, RuntimeFailureInfo? LastFailure, IReadOnlyList<DependencyHealthReport> Dependencies, string? ActiveWindow = null, DateTimeOffset? ActiveWindowEndsAtUtc = null)
```

#### Parameters

`Probe` [string](https://learn.microsoft.com/dotnet/api/system.string)

The probe name that produced the report.

`State` [RuntimeHealthState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthstate/)

The evaluated runtime health state.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the evaluated state.

`RuntimeStatus` [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

The runtime lifecycle status at the time of evaluation.

`RestartCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of completed manual restarts.

`LastFailure` [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

The last runtime failure when one is available.

`Dependencies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DependencyHealthReport\>

The dependency-health reports visible during evaluation.

`ActiveWindow` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The active policy-driven lifecycle window, such as startup warmup, shutdown drain, or restart backoff.

`ActiveWindowEndsAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the active lifecycle window ends, if applicable.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_ActiveWindow"></a> ActiveWindow

The active policy-driven lifecycle window, such as startup warmup, shutdown drain, or restart backoff.

```csharp
public string? ActiveWindow { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_ActiveWindowEndsAtUtc"></a> ActiveWindowEndsAtUtc

The UTC timestamp when the active lifecycle window ends, if applicable.

```csharp
public DateTimeOffset? ActiveWindowEndsAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_Dependencies"></a> Dependencies

The dependency-health reports visible during evaluation.

```csharp
public IReadOnlyList<DependencyHealthReport> Dependencies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DependencyHealthReport\>

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_Description"></a> Description

A human-readable description of the evaluated state.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_IsHealthy"></a> IsHealthy

Gets a value indicating whether the report represents a healthy state.

```csharp
public bool IsHealthy { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_LastFailure"></a> LastFailure

The last runtime failure when one is available.

```csharp
public RuntimeFailureInfo? LastFailure { get; init; }
```

#### Property Value

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_Probe"></a> Probe

The probe name that produced the report.

```csharp
public string Probe { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_RestartCount"></a> RestartCount

The number of completed manual restarts.

```csharp
public int RestartCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_RuntimeStatus"></a> RuntimeStatus

The runtime lifecycle status at the time of evaluation.

```csharp
public RuntimeStatus RuntimeStatus { get; init; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_RuntimeHealthReport_State"></a> State

The evaluated runtime health state.

```csharp
public RuntimeHealthState State { get; init; }
```

#### Property Value

 [RuntimeHealthState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthstate/)
