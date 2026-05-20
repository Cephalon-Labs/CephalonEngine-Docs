---
title: Interface IOutbox
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ioutbox
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Stages messages for durable delivery after the current write-side operation completes.

```csharp
public interface IOutbox
```

## Properties

### <a id="Cephalon_Abstractions_Data_IOutbox_OutboxId"></a> OutboxId

Gets the stable outbox identifier owned by this implementation.

```csharp
string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Data_IOutbox_EnqueueAsync_Cephalon_Abstractions_Data_OutboxMessage_System_Threading_CancellationToken_"></a> EnqueueAsync\(OutboxMessage, CancellationToken\)

Enqueues one message for later delivery.

```csharp
ValueTask EnqueueAsync(OutboxMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)

The message to stage for later delivery.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the message has been persisted to the outbox.
