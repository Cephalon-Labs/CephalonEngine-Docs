---
title: Interface IEventPublicationDispatcher
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ieventpublicationdispatcher
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Publishes integration events through the active eventing runtime without exposing package-specific implementation types to host adapters.

```csharp
public interface IEventPublicationDispatcher
```

## Methods

### <a id="Cephalon_Abstractions_Data_IEventPublicationDispatcher_PublishAsync_Cephalon_Abstractions_Data_EventPublicationRequest_System_Threading_CancellationToken_"></a> PublishAsync\(EventPublicationRequest, CancellationToken\)

Publishes one integration event through the active eventing runtime.

```csharp
ValueTask<EventPublicationResult> PublishAsync(EventPublicationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [EventPublicationRequest](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationrequest/)

The publication request to dispatch.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[EventPublicationResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationresult/)\>

The operator-facing publication result when the active runtime accepts the event.
