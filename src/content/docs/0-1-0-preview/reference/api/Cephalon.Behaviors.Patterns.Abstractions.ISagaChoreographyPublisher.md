---
title: Interface ISagaChoreographyPublisher
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographypublisher
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Publishes choreography publications produced by a saga choreography behavior step.

```csharp
public interface ISagaChoreographyPublisher
```

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaChoreographyPublisher_PublishAsync_Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_System_Threading_CancellationToken_"></a> PublishAsync\(SagaChoreographyPublication, CancellationToken\)

Publishes one choreography publication through the active choreography handoff path.

```csharp
ValueTask PublishAsync(SagaChoreographyPublication publication, CancellationToken cancellationToken = default)
```

#### Parameters

`publication` [SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

The publication to stage.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the publication.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the publication has been accepted.
