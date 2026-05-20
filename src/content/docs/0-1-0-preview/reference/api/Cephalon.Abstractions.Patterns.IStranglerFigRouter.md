---
title: Interface IStranglerFigRouter
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigrouter
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Resolves requests against the active strangler-fig migration routes.

```csharp
public interface IStranglerFigRouter
```

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRouter_ResolveAsync_Cephalon_Abstractions_Patterns_StranglerFigRequest_System_Threading_CancellationToken_"></a> ResolveAsync\(StranglerFigRequest, CancellationToken\)

Resolves the migration boundary that should receive the supplied request.

```csharp
ValueTask<StranglerFigRouteResolution?> ResolveAsync(StranglerFigRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [StranglerFigRequest](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrequest/)

The request to evaluate.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the evaluation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[StranglerFigRouteResolution](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrouteresolution/)?\>

The matched route resolution when the request is covered by an active strangler-fig route;
otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
