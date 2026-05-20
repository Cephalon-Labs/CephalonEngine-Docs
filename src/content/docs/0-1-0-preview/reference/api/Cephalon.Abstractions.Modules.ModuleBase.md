---
title: Class ModuleBase
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules-modulebase
editUrl: false
---

Namespace: [Cephalon.Abstractions.Modules](/0-1-0-preview/reference/api/cephalon-abstractions-modules/)  
Assembly: Cephalon.Abstractions.dll  

Provides default no-op implementations for module and lifecycle contracts.

```csharp
public abstract class ModuleBase : IModule, IModuleLifecycle
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleBase](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulebase/)

#### Implements

[IModule](/0-1-0-preview/reference/api/cephalon-abstractions-modules-imodule/), 
[IModuleLifecycle](/0-1-0-preview/reference/api/cephalon-abstractions-modules-imodulelifecycle/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Abstractions_Modules_ModuleBase_Descriptor"></a> Descriptor

Gets the module descriptor used for discovery, ordering, and manifest output.

```csharp
public abstract ModuleDescriptor Descriptor { get; }
```

#### Property Value

 [ModuleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-modules-moduledescriptor/)

## Methods

### <a id="Cephalon_Abstractions_Modules_ModuleBase_ConfigureServices_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> ConfigureServices\(IServiceCollection\)

Configures services required by the module.

```csharp
public virtual void ConfigureServices(IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection receiving module services.

### <a id="Cephalon_Abstractions_Modules_ModuleBase_InitializeAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> InitializeAsync\(ModuleContext, CancellationToken\)

Initializes the module before the runtime starts serving work.

```csharp
public virtual Task InitializeAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels initialization.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when initialization finishes.

### <a id="Cephalon_Abstractions_Modules_ModuleBase_RegisterCapabilities_Cephalon_Abstractions_Capabilities_ICapabilityRegistry_"></a> RegisterCapabilities\(ICapabilityRegistry\)

Registers capabilities exposed by the module.

```csharp
public virtual void RegisterCapabilities(ICapabilityRegistry capabilities)
```

#### Parameters

`capabilities` [ICapabilityRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities-icapabilityregistry/)

The capability registry receiving module capabilities.

### <a id="Cephalon_Abstractions_Modules_ModuleBase_StartAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> StartAsync\(ModuleContext, CancellationToken\)

Starts the module after initialization has completed.

```csharp
public virtual Task StartAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels startup.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when startup finishes.

### <a id="Cephalon_Abstractions_Modules_ModuleBase_StopAsync_Cephalon_Abstractions_Modules_ModuleContext_System_Threading_CancellationToken_"></a> StopAsync\(ModuleContext, CancellationToken\)

Stops the module during runtime shutdown.

```csharp
public virtual Task StopAsync(ModuleContext context, CancellationToken cancellationToken)
```

#### Parameters

`context` [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

The module runtime context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels shutdown.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when shutdown finishes.
