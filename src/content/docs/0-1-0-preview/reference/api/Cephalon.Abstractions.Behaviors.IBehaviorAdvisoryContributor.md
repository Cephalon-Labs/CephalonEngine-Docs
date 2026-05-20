---
title: Interface IBehaviorAdvisoryContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisorycontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Contributes behavior advisories to the active runtime's advisory catalog.
Implementations are collected via dependency injection enumeration.

```csharp
public interface IBehaviorAdvisoryContributor
```

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisoryContributor_Contribute"></a> Contribute\(\)

Contributes advisories for the current runtime state.

```csharp
IReadOnlyList<IBehaviorAdvisory> Contribute()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBehaviorAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory/)\>

The advisories contributed by this instance.
