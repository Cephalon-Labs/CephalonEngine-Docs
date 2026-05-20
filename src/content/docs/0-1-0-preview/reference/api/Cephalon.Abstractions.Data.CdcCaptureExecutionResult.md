---
title: Class CdcCaptureExecutionResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one bounded CDC capture batch and the outbox publications it produced.

```csharp
public sealed class CdcCaptureExecutionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_OutboxMessage__System_Nullable_System_Int32__System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureLagStatus_Cephalon_Abstractions_Data_CdcCapturePublicationStatus_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureExecutionResult\(IReadOnlyList<OutboxMessage\>?, int?, string?, string?, CdcCaptureFreshnessStatus?, CdcCaptureLagStatus?, CdcCapturePublicationStatus?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Data.CdcCaptureExecutionResult" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CdcCaptureExecutionResult(IReadOnlyList<OutboxMessage>? messages = null, int? capturedChangeCount = null, string? changeId = null, string? checkpoint = null, CdcCaptureFreshnessStatus? freshness = null, CdcCaptureLagStatus? lag = null, CdcCapturePublicationStatus? publication = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`messages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)\>?

The outbox publications produced by the capture batch.

`capturedChangeCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of source changes observed by the capture batch. When omitted, Cephalon uses
the produced-message count as the default captured-change answer for the batch.

`changeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing change identifier when one is available.

`checkpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing checkpoint or cursor when one is available.

`freshness` [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)?

The optional typed freshness answer reported by the capture implementation.

`lag` [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)?

The optional typed lag answer reported by the capture implementation.

`publication` [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)?

The optional typed publication-posture answer reported by the capture implementation before
any linked outbox-dispatch overlay is applied.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the batch.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_CapturedChangeCount"></a> CapturedChangeCount

Gets the number of source changes observed by the capture batch.

```csharp
public int CapturedChangeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_ChangeId"></a> ChangeId

Gets the latest provider-facing change identifier when one was reported.

```csharp
public string? ChangeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Checkpoint"></a> Checkpoint

Gets the latest provider-facing checkpoint or cursor when one was reported.

```csharp
public string? Checkpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Freshness"></a> Freshness

Gets the typed freshness answer reported by the capture implementation when one was supplied.

```csharp
public CdcCaptureFreshnessStatus? Freshness { get; }
```

#### Property Value

 [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Lag"></a> Lag

Gets the typed lag answer reported by the capture implementation when one was supplied.

```csharp
public CdcCaptureLagStatus? Lag { get; }
```

#### Property Value

 [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Messages"></a> Messages

Gets the outbox publications produced by the capture batch.

```csharp
public IReadOnlyList<OutboxMessage> Messages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the batch.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_ProducedMessageCount"></a> ProducedMessageCount

Gets the number of outbox publications produced by the capture batch.

```csharp
public int ProducedMessageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionResult_Publication"></a> Publication

Gets the typed publication-posture answer reported by the capture implementation when one was supplied.

```csharp
public CdcCapturePublicationStatus? Publication { get; }
```

#### Property Value

 [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)?
