---
title: Interface IProjection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iprojection-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Applies one message, event, or record to a projection target.

```csharp
public interface IProjection<in TMessage>
```

#### Type Parameters

`TMessage` 

The message type consumed by the projection.

## Methods

### <a id="Cephalon_Abstractions_Data_IProjection_1_ProjectAsync__0_System_Threading_CancellationToken_"></a> ProjectAsync\(TMessage, CancellationToken\)

Projects the supplied message into the target read model or data view.

```csharp
ValueTask ProjectAsync(TMessage message, CancellationToken cancellationToken = default)
```

#### Parameters

`message` TMessage

The message to project.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the projection has finished applying the message.
