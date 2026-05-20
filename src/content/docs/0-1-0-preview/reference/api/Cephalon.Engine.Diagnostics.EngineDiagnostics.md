---
title: Class EngineDiagnostics
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-enginediagnostics
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Defines the stable meter, activity source, and counter names emitted by the engine runtime.

```csharp
public static class EngineDiagnostics
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineDiagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-enginediagnostics/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_ActivitySourceName"></a> ActivitySourceName

Gets the activity-source name emitted by the engine.

```csharp
public const string ActivitySourceName = "Cephalon.Engine"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_BuildActivityName"></a> BuildActivityName

Gets the activity name used while building the runtime.

```csharp
public const string BuildActivityName = "engine.build"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_EngineBuildCounterName"></a> EngineBuildCounterName

Gets the counter name for completed engine builds.

```csharp
public const string EngineBuildCounterName = "cephalon.engine.builds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_ExecutionGraphTransitionCounterName"></a> ExecutionGraphTransitionCounterName

Gets the counter name for execution-graph lifecycle transitions.

```csharp
public const string ExecutionGraphTransitionCounterName = "cephalon.execution-graphs.transitions"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_HostedExecutionTransitionCounterName"></a> HostedExecutionTransitionCounterName

Gets the counter name for hosted-execution lifecycle transitions.

```csharp
public const string HostedExecutionTransitionCounterName = "cephalon.hosted-executions.transitions"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_MeterName"></a> MeterName

Gets the meter name emitted by the engine.

```csharp
public const string MeterName = "Cephalon.Engine"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_ModuleFailureCounterName"></a> ModuleFailureCounterName

Gets the counter name for module lifecycle failures.

```csharp
public const string ModuleFailureCounterName = "cephalon.module.failures"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_ModuleTransitionCounterName"></a> ModuleTransitionCounterName

Gets the counter name for module lifecycle transitions.

```csharp
public const string ModuleTransitionCounterName = "cephalon.module.transitions"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_RuntimeFailureCounterName"></a> RuntimeFailureCounterName

Gets the counter name for runtime lifecycle failures.

```csharp
public const string RuntimeFailureCounterName = "cephalon.runtime.failures"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_RuntimeRestartCounterName"></a> RuntimeRestartCounterName

Gets the counter name for runtime restart attempts.

```csharp
public const string RuntimeRestartCounterName = "cephalon.runtime.restarts"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_EngineDiagnostics_RuntimeTransitionCounterName"></a> RuntimeTransitionCounterName

Gets the counter name for runtime lifecycle transitions.

```csharp
public const string RuntimeTransitionCounterName = "cephalon.runtime.transitions"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
