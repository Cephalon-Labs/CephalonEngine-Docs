---
title: Interface IModuleLifecycle
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules-imodulelifecycle
editUrl: false
---

Namespace: [Cephalon.Abstractions.Modules](/0-1-0-preview/reference/api/cephalon-abstractions-modules/)  
Assembly: Cephalon.Abstractions.dll  

Defines the deterministic lifecycle hooks managed by the host runtime.

```csharp
public interface IModuleLifecycle
```

## Methods

### <a id="Cephalon_Abstractions_Modules_IModuleLifecycle_InitializeAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> InitializeAsync\(ModuleContext, CancellationToken\)

Initializes the module before the runtime starts serving work.

```csharp
Task InitializeAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels initialization.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when initialization finishes.

### <a id="Cephalon_Abstractions_Modules_IModuleLifecycle_StartAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> StartAsync\(ModuleContext, CancellationToken\)

Starts the module after initialization has completed.

```csharp
Task StartAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels startup.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when startup finishes.

### <a id="Cephalon_Abstractions_Modules_IModuleLifecycle_StopAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> StopAsync\(ModuleContext, CancellationToken\)

Stops the module during runtime shutdown.

```csharp
Task StopAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels shutdown.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when shutdown finishes.
