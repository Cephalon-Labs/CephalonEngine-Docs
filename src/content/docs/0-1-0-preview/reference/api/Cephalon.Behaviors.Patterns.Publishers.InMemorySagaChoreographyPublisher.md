---
title: Class InMemorySagaChoreographyPublisher
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-publishers-inmemorysagachoreographypublisher
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Publishers](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-publishers/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Stores choreography publications in memory for local development, tests, and diagnostics.

```csharp
public sealed class InMemorySagaChoreographyPublisher : ISagaChoreographyPublisher
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InMemorySagaChoreographyPublisher](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-publishers-inmemorysagachoreographypublisher/)

#### Implements

[ISagaChoreographyPublisher](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographypublisher/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Patterns_Publishers_InMemorySagaChoreographyPublisher_PublishedPublications"></a> PublishedPublications

Gets the publications that have been accepted by this publisher.

```csharp
public IReadOnlyList<SagaChoreographyPublication> PublishedPublications { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Publishers_InMemorySagaChoreographyPublisher_PublishAsync_Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication_System_Threading_CancellationToken_"></a> PublishAsync\(SagaChoreographyPublication, CancellationToken\)

Publishes one choreography publication through the active choreography handoff path.

```csharp
public ValueTask PublishAsync(SagaChoreographyPublication publication, CancellationToken cancellationToken = default)
```

#### Parameters

`publication` [SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

The publication to stage.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the publication.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the publication has been accepted.
