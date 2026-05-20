---
title: Interface IBehaviorContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Contributes behavior topology descriptors to the active runtime's catalog.
Implementations are collected via dependency injection enumeration.

```csharp
public interface IBehaviorContributor
```

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContributor_Contribute"></a> Contribute\(\)

Returns the behavior topology descriptors contributed by this instance.

```csharp
IReadOnlyList<BehaviorTopologyDescriptor> Contribute()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)\>

The contributed descriptors.
