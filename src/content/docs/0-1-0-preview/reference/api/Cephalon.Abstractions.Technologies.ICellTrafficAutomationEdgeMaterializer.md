---
title: Interface ICellTrafficAutomationEdgeMaterializer
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationedgematerializer
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Applies edge-managed cell traffic automation posture to one edge runtime.

```csharp
public interface ICellTrafficAutomationEdgeMaterializer
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationEdgeMaterializer_MaterializerId"></a> MaterializerId

Gets the stable materializer identifier that should appear on operator-facing runtime answers.

```csharp
string MaterializerId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationEdgeMaterializer_Priority"></a> Priority

Gets the priority used when multiple edge materializers can reconcile the same automation answer.
Higher values win, while ties still fail deterministically.

```csharp
int Priority { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationEdgeMaterializer_CanMaterialize_Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_"></a> CanMaterialize\(CellTrafficAutomationRuntimeDescriptor\)

Determines whether this materializer owns the requested traffic automation answer.

```csharp
bool CanMaterialize(CellTrafficAutomationRuntimeDescriptor automation)
```

#### Parameters

`automation` [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

The effective traffic automation answer to evaluate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when this materializer should reconcile the automation; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationEdgeMaterializer_MaterializeAsync_Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_System_Threading_CancellationToken_"></a> MaterializeAsync\(CellTrafficAutomationRuntimeDescriptor, CancellationToken\)

Applies or reconciles the requested traffic automation answer against the owned edge runtime.

```csharp
ValueTask<CellTrafficAutomationMaterializationResult> MaterializeAsync(CellTrafficAutomationRuntimeDescriptor automation, CancellationToken cancellationToken = default)
```

#### Parameters

`automation` [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

The effective traffic automation answer to materialize.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[CellTrafficAutomationMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult/)\>

The observed edge-materialization result.
