---
title: Class BehaviorModuleBase
slug: 0-1-0-preview/reference/api/cephalon-behaviors-modules-behaviormodulebase
editUrl: false
---

Namespace: [Cephalon.Behaviors.Modules](/0-1-0-preview/reference/api/cephalon-behaviors-modules/)  
Assembly: Cephalon.Behaviors.dll  

Base class for modules that explicitly own Cephalon behaviors.

```csharp
public abstract class BehaviorModuleBase : ModuleBase, IModuleLifecycle, IBehaviorOwnerModule, IModule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ModuleBase ← 
[BehaviorModuleBase](/0-1-0-preview/reference/api/cephalon-behaviors-modules-behaviormodulebase/)

#### Implements

IModuleLifecycle, 
IBehaviorOwnerModule, 
IModule

#### Inherited Members

ModuleBase.Descriptor, 
ModuleBase.ConfigureServices\(IServiceCollection\), 
ModuleBase.RegisterCapabilities\(ICapabilityRegistry\), 
ModuleBase.InitializeAsync\(ModuleContext, CancellationToken\), 
ModuleBase.StartAsync\(ModuleContext, CancellationToken\), 
ModuleBase.StopAsync\(ModuleContext, CancellationToken\), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This base class keeps behavior ownership host-agnostic. Derived modules can still remain
process-only, or they can layer one or more public transport adapters on top separately.

## Methods

### <a id="Cephalon_Behaviors_Modules_BehaviorModuleBase_ConfigureBehaviors_Cephalon_Abstractions_Behaviors_IBehaviorModuleBuilder_"></a> ConfigureBehaviors\(IBehaviorModuleBuilder\)

Registers the behaviors owned by the current module.

```csharp
public abstract void ConfigureBehaviors(IBehaviorModuleBuilder behaviors)
```

#### Parameters

`behaviors` IBehaviorModuleBuilder

The module-owned behavior builder.
