---
title: Class RuntimeModuleLifecycleState
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimemodulelifecyclestate
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Describes the current operator-facing lifecycle state for one loaded module.

```csharp
public sealed record RuntimeModuleLifecycleState : IEquatable<RuntimeModuleLifecycleState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeModuleLifecycleState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimemodulelifecyclestate/)

#### Implements

[IEquatable<RuntimeModuleLifecycleState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState__ctor_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Nullable_System_DateTimeOffset__Cephalon_Engine_Runtime_RuntimeFailureInfo_"></a> RuntimeModuleLifecycleState\(string, string, string, string, string?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, DateTimeOffset?, RuntimeFailureInfo?\)

Describes the current operator-facing lifecycle state for one loaded module.

```csharp
public RuntimeModuleLifecycleState(string ModuleId, string DisplayName, string Version, string AssemblyName, string? PackageId, DateTimeOffset? LoadedAtUtc, DateTimeOffset? InitializedAtUtc, DateTimeOffset? StartedAtUtc, DateTimeOffset? StoppedAtUtc, string? LastObservedPhase, DateTimeOffset? LastObservedAtUtc, RuntimeFailureInfo? LastFailure)
```

#### Parameters

`ModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing module display name.

`Version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The effective module version.

`AssemblyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembly that contains the module implementation.

`PackageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The package that supplied the module when package loading was used.

`LoadedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the module became part of the built runtime story.

`InitializedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when module initialization last completed successfully.

`StartedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when module startup last completed successfully.

`StoppedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when module shutdown last completed successfully.

`LastObservedPhase` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last lifecycle phase recorded for the module.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last lifecycle phase was recorded for the module.

`LastFailure` [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

The last failure recorded for the module when one is still relevant to the current runtime story.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_AssemblyName"></a> AssemblyName

The assembly that contains the module implementation.

```csharp
public string AssemblyName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_DisplayName"></a> DisplayName

The operator-facing module display name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_InitializedAtUtc"></a> InitializedAtUtc

The UTC timestamp when module initialization last completed successfully.

```csharp
public DateTimeOffset? InitializedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_IsInitialized"></a> IsInitialized

Gets a value indicating whether the module completed initialization successfully.

```csharp
public bool IsInitialized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_IsLoaded"></a> IsLoaded

Gets a value indicating whether the module is present in the built runtime.

```csharp
public bool IsLoaded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_IsStarted"></a> IsStarted

Gets a value indicating whether the module most recently completed startup without a later successful stop.

```csharp
public bool IsStarted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_IsStopped"></a> IsStopped

Gets a value indicating whether the module most recently completed shutdown.

```csharp
public bool IsStopped { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_LastFailure"></a> LastFailure

The last failure recorded for the module when one is still relevant to the current runtime story.

```csharp
public RuntimeFailureInfo? LastFailure { get; init; }
```

#### Property Value

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last lifecycle phase was recorded for the module.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_LastObservedPhase"></a> LastObservedPhase

The last lifecycle phase recorded for the module.

```csharp
public string? LastObservedPhase { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_LoadedAtUtc"></a> LoadedAtUtc

The UTC timestamp when the module became part of the built runtime story.

```csharp
public DateTimeOffset? LoadedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_ModuleId"></a> ModuleId

The stable module identifier.

```csharp
public string ModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_PackageId"></a> PackageId

The package that supplied the module when package loading was used.

```csharp
public string? PackageId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_StartedAtUtc"></a> StartedAtUtc

The UTC timestamp when module startup last completed successfully.

```csharp
public DateTimeOffset? StartedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_StoppedAtUtc"></a> StoppedAtUtc

The UTC timestamp when module shutdown last completed successfully.

```csharp
public DateTimeOffset? StoppedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Engine_Runtime_RuntimeModuleLifecycleState_Version"></a> Version

The effective module version.

```csharp
public string Version { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
