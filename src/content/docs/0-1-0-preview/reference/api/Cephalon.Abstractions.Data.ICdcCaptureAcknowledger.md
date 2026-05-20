---
title: Interface ICdcCaptureAcknowledger
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureacknowledger
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Allows an active <xref href="Cephalon.Abstractions.Data.ICdcCapture" data-throw-if-not-resolved="false"></xref> implementation to acknowledge durable progress only
after the shared runtime stages the linked outbox publications successfully.

```csharp
public interface ICdcCaptureAcknowledger
```

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureAcknowledger_AcknowledgeAsync_Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_System_Threading_CancellationToken_"></a> AcknowledgeAsync\(CdcCaptureExecutionAcknowledgement, CancellationToken\)

Commits or acknowledges provider-facing progress for one staged CDC batch.

```csharp
ValueTask AcknowledgeAsync(CdcCaptureExecutionAcknowledgement acknowledgement, CancellationToken cancellationToken = default)
```

#### Parameters

`acknowledgement` [CdcCaptureExecutionAcknowledgement](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionacknowledgement/)

The staged batch that is now safe to acknowledge durably.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the acknowledgement operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the provider-facing acknowledgement has finished.
