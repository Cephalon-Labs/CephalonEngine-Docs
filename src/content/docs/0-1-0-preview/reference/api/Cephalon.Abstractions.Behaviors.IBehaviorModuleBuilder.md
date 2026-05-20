---
title: Interface IBehaviorModuleBuilder
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviormodulebuilder
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Collects behavior ownership declarations contributed by a Cephalon module.

```csharp
public interface IBehaviorModuleBuilder
```

## Remarks

This builder is host-agnostic and only declares which behaviors a module owns.
Public REST exposure stays in host adapters such as ASP.NET Core.

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorModuleBuilder_Add__1"></a> Add<TBehavior\>\(\)

Declares that the current module owns the specified behavior.

```csharp
IBehaviorModuleBuilder Add<TBehavior>() where TBehavior : class
```

#### Returns

 [IBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviormodulebuilder/)

The same builder for fluent ownership registration.

#### Type Parameters

`TBehavior` 

The concrete behavior type owned by the module.

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorModuleBuilder_Add__1_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__"></a> Add<TBehavior\>\(Action<IBehaviorTopologyBuilder\>\)

Declares that the current module owns the specified behavior and supplies an explicit topology override.

```csharp
IBehaviorModuleBuilder Add<TBehavior>(Action<IBehaviorTopologyBuilder> configureTopology) where TBehavior : class
```

#### Parameters

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)\>

The callback that selects the resolved behavior topology when attribute-only synthesis is not enough.

#### Returns

 [IBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviormodulebuilder/)

The same builder for fluent ownership registration.

#### Type Parameters

`TBehavior` 

The concrete behavior type owned by the module.
