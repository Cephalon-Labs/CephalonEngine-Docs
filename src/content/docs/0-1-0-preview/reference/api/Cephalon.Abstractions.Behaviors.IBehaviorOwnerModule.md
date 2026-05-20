---
title: Interface IBehaviorOwnerModule
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorownermodule
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Declares that a module explicitly owns one or more Cephalon behaviors.

```csharp
public interface IBehaviorOwnerModule : IModule
```

#### Implements

[IModule](/0-1-0-preview/reference/api/cephalon-abstractions-modules-imodule/)

## Remarks

Modules can use this contract to keep behavior ownership deterministic without relying only on
assembly scanning. A module may still choose to expose only some of its owned behaviors through
a host adapter such as ASP.NET Core REST.

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorOwnerModule_ConfigureBehaviors_Cephalon_Abstractions_Behaviors_IBehaviorModuleBuilder_"></a> ConfigureBehaviors\(IBehaviorModuleBuilder\)

Registers the behaviors owned by the current module.

```csharp
void ConfigureBehaviors(IBehaviorModuleBuilder behaviors)
```

#### Parameters

`behaviors` [IBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviormodulebuilder/)

The builder that collects module-owned behavior registrations.
