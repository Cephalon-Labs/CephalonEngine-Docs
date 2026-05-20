---
title: Interface ICdcCapture
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccapture
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Captures database changes for one stable CDC surface and shapes them into outbox-ready publications.

```csharp
public interface ICdcCapture
```

## Properties

### <a id="Cephalon_Abstractions_Data_ICdcCapture_CdcCaptureId"></a> CdcCaptureId

Gets the stable CDC capture identifier owned by this implementation.

```csharp
string CdcCaptureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCapture_CaptureAsync_System_Threading_CancellationToken_"></a> CaptureAsync\(CancellationToken\)

Reads one bounded capture batch and returns the resulting outbox publications plus any
provider-facing execution metadata.

```csharp
ValueTask<CdcCaptureExecutionResult> CaptureAsync(CancellationToken cancellationToken = default)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the capture stream.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[CdcCaptureExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionresult/)\>

The captured batch result for the active CDC surface.
