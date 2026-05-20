---
title: Interface IRuntime
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-iruntime
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Represents a built Cephalon runtime that can be initialized, started, restarted, stopped,
and introspected by a host.

```csharp
public interface IRuntime
```

## Properties

### <a id="Cephalon_Engine_Runtime_IRuntime_FailurePolicy"></a> FailurePolicy

Gets the failure policy that governs startup, stop, and restart behavior.

```csharp
FailurePolicy FailurePolicy { get; }
```

#### Property Value

 [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

### <a id="Cephalon_Engine_Runtime_IRuntime_LastFailure"></a> LastFailure

Gets the most recent failure captured by the lifecycle state machine, if any.

```csharp
RuntimeFailureInfo? LastFailure { get; }
```

#### Property Value

 [RuntimeFailureInfo](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimefailureinfo/)?

### <a id="Cephalon_Engine_Runtime_IRuntime_Manifest"></a> Manifest

Gets the immutable manifest that was produced when the runtime was built.

```csharp
RuntimeManifest Manifest { get; }
```

#### Property Value

 [RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

### <a id="Cephalon_Engine_Runtime_IRuntime_Modules"></a> Modules

Gets the ordered module set that participates in runtime lifecycle execution.

```csharp
IReadOnlyList<IModule> Modules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IModule\>

### <a id="Cephalon_Engine_Runtime_IRuntime_OperationalStory"></a> OperationalStory

Gets the richer operator-facing runtime story that explains what loaded, started, failed, and why.

```csharp
RuntimeOperationalStory OperationalStory { get; }
```

#### Property Value

 [RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

### <a id="Cephalon_Engine_Runtime_IRuntime_RestartCount"></a> RestartCount

Gets the number of successful manual restart attempts completed by the runtime.

```csharp
int RestartCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Runtime_IRuntime_Status"></a> Status

Gets the current lifecycle status of the runtime.

```csharp
RuntimeStatus Status { get; }
```

#### Property Value

 [RuntimeStatus](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus/)

### <a id="Cephalon_Engine_Runtime_IRuntime_StatusSnapshot"></a> StatusSnapshot

Gets the current status as a serializable snapshot.

```csharp
RuntimeStatusSnapshot StatusSnapshot { get; }
```

#### Property Value

 [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

## Methods

### <a id="Cephalon_Engine_Runtime_IRuntime_InitializeAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> InitializeAsync\(IServiceProvider, CancellationToken\)

Initializes the runtime and all lifecycle-aware modules.

```csharp
Task InitializeAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider that modules should use during initialization.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the initialization operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Cephalon_Engine_Runtime_IRuntime_RestartAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> RestartAsync\(IServiceProvider, CancellationToken\)

Restarts the runtime when the configured failure policy allows it.

```csharp
Task RestartAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider that modules should use during the restart flow.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the restart operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Cephalon_Engine_Runtime_IRuntime_StartAsync_System_IServiceProvider_System_Threading_CancellationToken_"></a> StartAsync\(IServiceProvider, CancellationToken\)

Starts the runtime and all lifecycle-aware modules.

```csharp
Task StartAsync(IServiceProvider services, CancellationToken cancellationToken = default)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The service provider that modules should use during startup.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the start operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

#### Remarks

If the runtime has not been initialized yet, the implementation may initialize it first.

### <a id="Cephalon_Engine_Runtime_IRuntime_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

Stops the runtime and all started lifecycle-aware modules.

```csharp
Task StopAsync(CancellationToken cancellationToken = default)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the stop operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)
