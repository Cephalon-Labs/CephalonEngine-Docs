---
title: Interface ISagaChoreographyStepResult
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographystepresult
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Describes the local output and staged publications produced by one choreography-based saga step.

```csharp
public interface ISagaChoreographyStepResult
```

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaChoreographyStepResult_Output"></a> Output

Gets the optional local output returned to the caller.

```csharp
object? Output { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaChoreographyStepResult_Publications"></a> Publications

Gets the publications that continue or compensate the saga.

```csharp
IReadOnlyList<SagaChoreographyPublication> Publications { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)\>
