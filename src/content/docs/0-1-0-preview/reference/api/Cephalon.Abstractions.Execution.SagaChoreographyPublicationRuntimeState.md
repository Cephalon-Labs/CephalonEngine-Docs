---
title: Class SagaChoreographyPublicationRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state reported for one live saga-choreography
publication path.

```csharp
public sealed record SagaChoreographyPublicationRuntimeState : IEquatable<SagaChoreographyPublicationRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SagaChoreographyPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographypublicationruntimestate/)

#### Implements

[IEquatable<SagaChoreographyPublicationRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState__ctor_System_String_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_String_System_Boolean_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SagaChoreographyPublicationRuntimeState\(string, string, string, string, string, DateTimeOffset, string?, IReadOnlyList<string\>, string?, string?, string?, bool, string?, DateTimeOffset?, string?, int, int, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state reported for one live saga-choreography
publication path.

```csharp
public SagaChoreographyPublicationRuntimeState(string Id, string BehaviorId, string PublicationId, string ChannelId, string EventType, DateTimeOffset OccurredAtUtc, string? SourceModuleId, IReadOnlyList<string> TransportIds, string? CorrelationId, string? TenantId, string? ContentType, bool IsCompensation, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastPublisherType, int AcceptedCount, int FailedCount, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`Id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable runtime-state identifier for this observed choreography publication path.

`BehaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable choreography behavior identifier that produced the publication.

`PublicationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier declared by the choreography step.

`ChannelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical channel or destination identifier used by the publication.

`EventType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event type identifier used by the publication.

`OccurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp carried by the observed publication itself.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when one is known at runtime.

`TransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The transport identifiers that expose the owning choreography behavior.

`CorrelationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the publication when one exists.

`TenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the publication when one exists.

`ContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The payload content type when one is known.

`IsCompensation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the publication represents compensation work.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported publication outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest publication observation was reported.

`LastPublisherType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last concrete publisher implementation type that accepted or rejected the publication when one
was reported.

`AcceptedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>accepted</code> observations reported so far.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>failed</code> observations reported so far.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when the publication handoff reported a failure.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest observation.

## Properties

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_AcceptedCount"></a> AcceptedCount

The number of <code>accepted</code> observations reported so far.

```csharp
public int AcceptedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_BehaviorId"></a> BehaviorId

The stable choreography behavior identifier that produced the publication.

```csharp
public string BehaviorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_ChannelId"></a> ChannelId

The logical channel or destination identifier used by the publication.

```csharp
public string ChannelId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_ContentType"></a> ContentType

The payload content type when one is known.

```csharp
public string? ContentType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_CorrelationId"></a> CorrelationId

The correlation identifier associated with the publication when one exists.

```csharp
public string? CorrelationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_EventType"></a> EventType

The logical event type identifier used by the publication.

```csharp
public string EventType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_Id"></a> Id

The stable runtime-state identifier for this observed choreography publication path.

```csharp
public string Id { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_IsAccepted"></a> IsAccepted

Gets a value indicating whether the latest report says the publication handoff succeeded.

```csharp
public bool IsAccepted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_IsCompensation"></a> IsCompensation

Indicates whether the publication represents compensation work.

```csharp
public bool IsCompensation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_IsFailed"></a> IsFailed

Gets a value indicating whether the latest report says the publication handoff failed.

```csharp
public bool IsFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_LastError"></a> LastError

The latest operator-facing error summary when the publication handoff reported a failure.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the latest publication observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_LastOutcome"></a> LastOutcome

The last reported publication outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_LastPublisherType"></a> LastPublisherType

The last concrete publisher implementation type that accepted or rejected the publication when one
was reported.

```csharp
public string? LastPublisherType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_OccurredAtUtc"></a> OccurredAtUtc

The UTC timestamp carried by the observed publication itself.

```csharp
public DateTimeOffset OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_PublicationId"></a> PublicationId

The stable publication identifier declared by the choreography step.

```csharp
public string PublicationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_SourceModuleId"></a> SourceModuleId

The owning module identifier when one is known at runtime.

```csharp
public string? SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_TenantId"></a> TenantId

The tenant identifier associated with the publication when one exists.

```csharp
public string? TenantId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_TotalReports"></a> TotalReports

Gets the total number of publication observations reported for this runtime-state entry.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_SagaChoreographyPublicationRuntimeState_TransportIds"></a> TransportIds

The transport identifiers that expose the owning choreography behavior.

```csharp
public IReadOnlyList<string> TransportIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
