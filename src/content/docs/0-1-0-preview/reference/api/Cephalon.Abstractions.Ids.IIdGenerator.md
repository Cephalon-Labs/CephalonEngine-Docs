---
title: Interface IIdGenerator
slug: 0-1-0-preview/reference/api/cephalon-abstractions-ids-iidgenerator
editUrl: false
---

Namespace: [Cephalon.Abstractions.Ids](/0-1-0-preview/reference/api/cephalon-abstractions-ids/)  
Assembly: Cephalon.Abstractions.dll  

Generates stable textual identifiers for Cephalon workloads.

```csharp
public interface IIdGenerator
```

## Properties

### <a id="Cephalon_Abstractions_Ids_IIdGenerator_StrategyId"></a> StrategyId

Gets the stable identifier-generation strategy identifier.

```csharp
string StrategyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Ids_IIdGenerator_GenerateAsync_Cephalon_Abstractions_Ids_IdGenerationRequest_System_Threading_CancellationToken_"></a> GenerateAsync\(IdGenerationRequest?, CancellationToken\)

Generates one identifier.

```csharp
ValueTask<string> GenerateAsync(IdGenerationRequest? request = null, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [IdGenerationRequest](/0-1-0-preview/reference/api/cephalon-abstractions-ids-idgenerationrequest/)?

Optional generation hints supplied by the caller.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

A task that completes with the generated identifier.
