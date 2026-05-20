---
title: Class KnowledgeIndexState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest managed index and query execution state for one knowledge collection.

```csharp
public sealed record KnowledgeIndexState : IEquatable<KnowledgeIndexState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeIndexState](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate/)

#### Implements

[IEquatable<KnowledgeIndexState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState__ctor_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Int32_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeIndexState\(string, string?, string?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, int, string, int, int, int, int, int, DateTimeOffset?, string?, int, int, string?, string?, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest managed index and query execution state for one knowledge collection.

```csharp
public KnowledgeIndexState(string CollectionId, string? LastRunId, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, DateTimeOffset? LastIndexedAtUtc, DateTimeOffset? SourceFreshnessUtc, int DocumentCount, string FreshnessState, int StartedCount, int SucceededCount, int FailedCount, int SkippedCount, int QueryCount, DateTimeOffset? LastQueriedAtUtc, string? LastQueryFingerprint, int LastQueryLength, int LastQueryMatchedCount, string? LastActorId, string? LastCorrelationId, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`CollectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier represented by this state.

`LastRunId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest indexing run identifier when one has been observed.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest indexing outcome when one has been observed.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest indexing observation was recorded.

`LastIndexedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest replacement index was published.

`SourceFreshnessUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The newest source-document timestamp observed during the latest successful indexing run.

`DocumentCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of documents currently stored in the managed index.

`FreshnessState` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing freshness state captured for the latest indexing observation.

`StartedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of indexing runs that have started.

`SucceededCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of indexing runs that have completed successfully.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of indexing runs that have failed.

`SkippedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of indexing runs that have been skipped.

`QueryCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of managed queries executed against this collection.

`LastQueriedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest query was executed.

`LastQueryFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

A non-reversible SHA-256 fingerprint of the latest query text.

`LastQueryLength` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The character length of the latest query text.

`LastQueryMatchedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of matches returned by the latest query.

`LastActorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest actor identifier when one was supplied by an indexing request.

`LastCorrelationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest correlation identifier when one was supplied by an indexing request.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when indexing failed.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Optional operator-facing metadata captured with the latest indexing observation.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_CollectionId"></a> CollectionId

The collection identifier represented by this state.

```csharp
public string CollectionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_DocumentCount"></a> DocumentCount

The number of documents currently stored in the managed index.

```csharp
public int DocumentCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_FailedCount"></a> FailedCount

The number of indexing runs that have failed.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_FreshnessState"></a> FreshnessState

The operator-facing freshness state captured for the latest indexing observation.

```csharp
public string FreshnessState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastActorId"></a> LastActorId

The latest actor identifier when one was supplied by an indexing request.

```csharp
public string? LastActorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastCorrelationId"></a> LastCorrelationId

The latest correlation identifier when one was supplied by an indexing request.

```csharp
public string? LastCorrelationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastError"></a> LastError

The latest operator-facing error summary when indexing failed.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastIndexedAtUtc"></a> LastIndexedAtUtc

The UTC timestamp when the latest replacement index was published.

```csharp
public DateTimeOffset? LastIndexedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the latest indexing observation was recorded.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastOutcome"></a> LastOutcome

The latest indexing outcome when one has been observed.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastQueriedAtUtc"></a> LastQueriedAtUtc

The UTC timestamp when the latest query was executed.

```csharp
public DateTimeOffset? LastQueriedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastQueryFingerprint"></a> LastQueryFingerprint

A non-reversible SHA-256 fingerprint of the latest query text.

```csharp
public string? LastQueryFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastQueryLength"></a> LastQueryLength

The character length of the latest query text.

```csharp
public int LastQueryLength { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastQueryMatchedCount"></a> LastQueryMatchedCount

The number of matches returned by the latest query.

```csharp
public int LastQueryMatchedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_LastRunId"></a> LastRunId

The latest indexing run identifier when one has been observed.

```csharp
public string? LastRunId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_Metadata"></a> Metadata

Optional operator-facing metadata captured with the latest indexing observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_QueryCount"></a> QueryCount

The number of managed queries executed against this collection.

```csharp
public int QueryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_SkippedCount"></a> SkippedCount

The number of indexing runs that have been skipped.

```csharp
public int SkippedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_SourceFreshnessUtc"></a> SourceFreshnessUtc

The newest source-document timestamp observed during the latest successful indexing run.

```csharp
public DateTimeOffset? SourceFreshnessUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_StartedCount"></a> StartedCount

The number of indexing runs that have started.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_SucceededCount"></a> SucceededCount

The number of indexing runs that have completed successfully.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexState_TotalIndexRuns"></a> TotalIndexRuns

Gets the total number of indexing observations recorded for this collection.

```csharp
public int TotalIndexRuns { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
