---
title: Class RuntimeFailureInfo
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Describes a runtime lifecycle failure in a way that can be surfaced through diagnostics,
status endpoints, and operator tooling.

```csharp
public sealed record RuntimeFailureInfo : IEquatable<RuntimeFailureInfo>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)

#### Implements

[IEquatable<RuntimeFailureInfo\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo__ctor_System_String_System_String_System_String_Cephalon_Engine_Runtime_RuntimeStatus_System_String_System_String_System_DateTimeOffset_System_Boolean_System_Nullable_System_DateTimeOffset__Cephalon_Engine_Configuration_StartupFailureBehavior_Cephalon_Engine_Configuration_StopFailureBehavior_"></a> RuntimeFailureInfo\(string, string?, string?, RuntimeStatus, string, string, DateTimeOffset, bool, DateTimeOffset?, StartupFailureBehavior, StopFailureBehavior\)

Describes a runtime lifecycle failure in a way that can be surfaced through diagnostics,
status endpoints, and operator tooling.

```csharp
public RuntimeFailureInfo(string Phase, string? ModuleId, string? ModuleVersion, RuntimeStatus StatusBeforeFailure, string ExceptionType, string Message, DateTimeOffset OccurredAtUtc, bool CanRestart, DateTimeOffset? RestartAvailableAtUtc, StartupFailureBehavior StartupFailureBehavior, StopFailureBehavior StopFailureBehavior)
```

#### Parameters

`Phase` [string](https://learn.microsoft.com/dotnet/api/system.string)

The lifecycle phase that failed, such as <code>initialize</code>, <code>start</code>, or <code>stop</code>.

`ModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module identifier that triggered the failure when available.

`ModuleVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module version that was active when the failure occurred, if known.

`StatusBeforeFailure` [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

The runtime status immediately before the failure was captured.

`ExceptionType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified exception type that caused the failure.

`Message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The failure message surfaced to operators.

`OccurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the failure was captured.

`CanRestart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the current policy allows a manual restart after this failure.

`RestartAvailableAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when a manual restart exits its configured backoff window, if one applies.

`StartupFailureBehavior` [StartupFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-startupfailurebehavior/)

The startup failure behavior in effect when the failure occurred.

`StopFailureBehavior` [StopFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-stopfailurebehavior/)

The stop failure behavior in effect when the failure occurred.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_CanRestart"></a> CanRestart

Whether the current policy allows a manual restart after this failure.

```csharp
public bool CanRestart { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_ExceptionType"></a> ExceptionType

The fully qualified exception type that caused the failure.

```csharp
public string ExceptionType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_Message"></a> Message

The failure message surfaced to operators.

```csharp
public string Message { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_ModuleId"></a> ModuleId

The module identifier that triggered the failure when available.

```csharp
public string? ModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_ModuleVersion"></a> ModuleVersion

The module version that was active when the failure occurred, if known.

```csharp
public string? ModuleVersion { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_OccurredAtUtc"></a> OccurredAtUtc

The UTC timestamp when the failure was captured.

```csharp
public DateTimeOffset OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_Phase"></a> Phase

The lifecycle phase that failed, such as <code>initialize</code>, <code>start</code>, or <code>stop</code>.

```csharp
public string Phase { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_RestartAvailableAtUtc"></a> RestartAvailableAtUtc

The UTC timestamp when a manual restart exits its configured backoff window, if one applies.

```csharp
public DateTimeOffset? RestartAvailableAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_StartupFailureBehavior"></a> StartupFailureBehavior

The startup failure behavior in effect when the failure occurred.

```csharp
public StartupFailureBehavior StartupFailureBehavior { get; init; }
```

#### Property Value

 [StartupFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-startupfailurebehavior/)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_StatusBeforeFailure"></a> StatusBeforeFailure

The runtime status immediately before the failure was captured.

```csharp
public RuntimeStatus StatusBeforeFailure { get; init; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_RuntimeFailureInfo_StopFailureBehavior"></a> StopFailureBehavior

The stop failure behavior in effect when the failure occurred.

```csharp
public StopFailureBehavior StopFailureBehavior { get; init; }
```

#### Property Value

 [StopFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-stopfailurebehavior/)
