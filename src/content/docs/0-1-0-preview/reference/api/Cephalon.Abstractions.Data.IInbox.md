---
title: Interface IInbox
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iinbox
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Tracks inbound messages so consumer pipelines can enforce idempotent handling.

```csharp
public interface IInbox
```

## Methods

### <a id="Cephalon_Abstractions_Data_IInbox_HasProcessedAsync_System_String_System_Threading_CancellationToken_"></a> HasProcessedAsync\(string, CancellationToken\)

Determines whether the requested message identifier has already been recorded as processed.

```csharp
ValueTask<bool> HasProcessedAsync(string messageId, CancellationToken cancellationToken = default)
```

#### Parameters

`messageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable inbound message identifier.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the message has already been processed; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Data_IInbox_MarkProcessedAsync_Cephalon_Abstractions_Data_InboxMessage_System_Threading_CancellationToken_"></a> MarkProcessedAsync\(InboxMessage, CancellationToken\)

Records one inbound message as processed.

```csharp
ValueTask MarkProcessedAsync(InboxMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` [InboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxmessage/)

The inbound message that completed processing.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the inbox has persisted the processed-message record.
