---
title: Class CdcCaptureExecutionAcknowledgement
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionacknowledgement
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one CDC batch that the shared runtime has already staged through the linked outbox
and is now safe to acknowledge durably.

```csharp
public sealed class CdcCaptureExecutionAcknowledgement
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionAcknowledgement](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionacknowledgement/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_OutboxMessage__System_Nullable_System_Int32__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureExecutionAcknowledgement\(string, string, IReadOnlyList<OutboxMessage\>?, int?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Data.CdcCaptureExecutionAcknowledgement" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CdcCaptureExecutionAcknowledgement(string cdcCaptureId, string outboxId, IReadOnlyList<OutboxMessage>? messages = null, int? capturedChangeCount = null, string? changeId = null, string? checkpoint = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier that owns the staged batch.

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier that already accepted the staged publications.

`messages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)\>?

The outbox publications that the shared runtime staged successfully.

`capturedChangeCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of source changes observed by the staged batch. When omitted, Cephalon uses the
staged-message count as the default captured-change answer.

`changeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing change identifier when one is available.

`checkpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing checkpoint or cursor when one is available.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the staged batch.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_CapturedChangeCount"></a> CapturedChangeCount

Gets the number of source changes observed by the staged batch.

```csharp
public int CapturedChangeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_CdcCaptureId"></a> CdcCaptureId

Gets the stable CDC capture identifier that owns the staged batch.

```csharp
public string CdcCaptureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_ChangeId"></a> ChangeId

Gets the latest provider-facing change identifier when one was reported.

```csharp
public string? ChangeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_Checkpoint"></a> Checkpoint

Gets the latest provider-facing checkpoint or cursor when one was reported.

```csharp
public string? Checkpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_Messages"></a> Messages

Gets the outbox publications that the shared runtime staged successfully.

```csharp
public IReadOnlyList<OutboxMessage> Messages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxMessage](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxmessage/)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the staged batch.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_OutboxId"></a> OutboxId

Gets the stable outbox identifier that already accepted the staged publications.

```csharp
public string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionAcknowledgement_StagedMessageCount"></a> StagedMessageCount

Gets the number of publications that the shared runtime staged successfully.

```csharp
public int StagedMessageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
