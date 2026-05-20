---
title: Interface IEventPublisher
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventpublisher
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Accepts integration events for the active eventing runtime.

```csharp
public interface IEventPublisher
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventPublisher_PublishAsync_Cephalon_Eventing_Services_EventPublication_System_Threading_CancellationToken_"></a> PublishAsync\(EventPublication, CancellationToken\)

Publishes one integration event through the active eventing runtime.

```csharp
ValueTask PublishAsync(EventPublication publication, CancellationToken cancellationToken = default)
```

#### Parameters

`publication` [EventPublication](/0-1-0-preview/reference/api/cephalon-eventing-services-eventpublication/)

The publication request to handle.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the publication has been accepted by the runtime.
