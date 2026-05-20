---
title: Class EngineRuntime
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-engineruntime
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Executes module lifecycle transitions and exposes runtime status, manifest, and failure information.

```csharp
public sealed class EngineRuntime : IRuntime, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-engineruntime/)

#### Implements

[IRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-iruntime/), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_EngineRuntime__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Modules_IModule__Cephalon_Engine_Manifest_RuntimeManifest_Cephalon_Engine_Configuration_FailurePolicy_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_ExecutionGraphDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_HostedExecutionDescriptor__"></a> EngineRuntime\(IReadOnlyList<IModule\>, RuntimeManifest, FailurePolicy, IReadOnlyList<ExecutionGraphDescriptor\>?, IReadOnlyList<HostedExecutionDescriptor\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Runtime.EngineRuntime" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EngineRuntime(IReadOnlyList<IModule> modules, RuntimeManifest manifest, FailurePolicy failurePolicy, IReadOnlyList<ExecutionGraphDescriptor>? executionGraphs = null, IReadOnlyList<HostedExecutionDescriptor>? hostedExecutions = null)
```

#### Parameters

`modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IModule\>

The modules that participate in runtime lifecycle transitions.

`manifest` [RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

The runtime manifest that describes the built runtime shape.

`failurePolicy` [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

The failure policy that governs startup, stop, and restart behavior.

`executionGraphs` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<ExecutionGraphDescriptor\>?

The execution graphs visible to the runtime story and diagnostics surface.

`hostedExecutions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<HostedExecutionDescriptor\>?

The hosted executions visible to the runtime story and operator-facing introspection surfaces.

## Properties

### <a id="Cephalon_Engine_Runtime_EngineRuntime_FailurePolicy"></a> FailurePolicy

Gets the failure policy that governs startup, stop, and restart behavior.

```csharp
public FailurePolicy FailurePolicy { get; }
```

#### Property Value

 [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

### <a id="Cephalon_Engine_Runtime_EngineRuntime_LastFailure"></a> LastFailure

Gets the last captured lifecycle failure when one is available.

```csharp
public RuntimeFailureInfo? LastFailure { get; }
```

#### Property Value

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

### <a id="Cephalon_Engine_Runtime_EngineRuntime_Manifest"></a> Manifest

Gets the runtime manifest that describes the built runtime shape.

```csharp
public RuntimeManifest Manifest { get; }
```

#### Property Value

 [RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

### <a id="Cephalon_Engine_Runtime_EngineRuntime_Modules"></a> Modules

Gets the modules that participate in runtime lifecycle transitions.

```csharp
public IReadOnlyList<IModule> Modules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IModule\>

### <a id="Cephalon_Engine_Runtime_EngineRuntime_OperationalStory"></a> OperationalStory

Gets the richer operator-facing lifecycle story for the runtime.

```csharp
public RuntimeOperationalStory OperationalStory { get; }
```

#### Property Value

 [RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

### <a id="Cephalon_Engine_Runtime_EngineRuntime_RestartCount"></a> RestartCount

Gets the number of completed manual restarts.

```csharp
public int RestartCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Runtime_EngineRuntime_Status"></a> Status

Gets the current lifecycle status.

```csharp
public RuntimeStatus Status { get; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_EngineRuntime_StatusSnapshot"></a> StatusSnapshot

Gets a serialization-friendly snapshot of the current runtime status.

```csharp
public RuntimeStatusSnapshot StatusSnapshot { get; }
```

#### Property Value

 [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

## Methods

### <a id="Cephalon_Engine_Runtime_EngineRuntime_Dispose"></a> Dispose\(\)

Releases runtime resources.

```csharp
public void Dispose()
```

### <a id="Cephalon_Engine_Runtime_EngineRuntime_InitializeAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> InitializeAsync\(IServiceProvider, CancellationToken\)

Initializes the runtime and its modules.

```csharp
public Task InitializeAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider bound to the runtime lifecycle.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the initialization operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when initialization finishes.

### <a id="Cephalon_Engine_Runtime_EngineRuntime_RestartAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> RestartAsync\(IServiceProvider, CancellationToken\)

Restarts the runtime when the current failure policy allows it.

```csharp
public Task RestartAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider bound to the runtime lifecycle.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the restart operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the restart finishes.

### <a id="Cephalon_Engine_Runtime_EngineRuntime_StartAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> StartAsync\(IServiceProvider, CancellationToken\)

Starts the runtime and its modules.

```csharp
public Task StartAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider bound to the runtime lifecycle.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the startup operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when startup finishes.

### <a id="Cephalon_Engine_Runtime_EngineRuntime_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

Stops started modules and transitions the runtime to a stopped state.

```csharp
public Task StopAsync(CancellationToken cancellationToken = default)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the stop operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when shutdown finishes.
