---
title: Interface IAppBehavior
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-iappbehavior-2
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Single interface for all behavior patterns. Developers implement this once; pattern and transport are config-driven.

```csharp
public interface IAppBehavior<TIn, TOut>
```

#### Type Parameters

`TIn` 

`TOut` 

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IAppBehavior_2_ConfigureTopology_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_"></a> ConfigureTopology\(IBehaviorTopologyBuilder\)

Optional author-intent topology declaration. Called by source generator at build time. Override to declare pattern/transport defaults in code.

```csharp
public static void ConfigureTopology(IBehaviorTopologyBuilder builder)
```

#### Parameters

`builder` [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IAppBehavior_2_HandleAsync__0_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> HandleAsync\(TIn, IBehaviorContext, CancellationToken\)

Handles the behavior input and returns the output.

```csharp
Task<TOut> HandleAsync(TIn input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`input` TIn

`context` [IBehaviorContext](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcontext/)

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<TOut\>
