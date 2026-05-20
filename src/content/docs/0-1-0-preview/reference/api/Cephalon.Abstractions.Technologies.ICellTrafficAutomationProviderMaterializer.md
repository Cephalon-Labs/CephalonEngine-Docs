---
title: Interface ICellTrafficAutomationProviderMaterializer
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationprovidermaterializer
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Applies provider-managed cell traffic automation posture to one external control plane.

```csharp
public interface ICellTrafficAutomationProviderMaterializer
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationProviderMaterializer_MaterializerId"></a> MaterializerId

Gets the stable materializer identifier that should appear on operator-facing runtime answers.

```csharp
string MaterializerId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationProviderMaterializer_Priority"></a> Priority

Gets the priority used when multiple provider materializers can reconcile the same automation answer.
Higher values win, while ties still fail deterministically.

```csharp
int Priority { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationProviderMaterializer_ProviderId"></a> ProviderId

Gets the external provider identifier that this materializer reconciles.

```csharp
string ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationProviderMaterializer_CanMaterialize_Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_"></a> CanMaterialize\(CellTrafficAutomationRuntimeDescriptor\)

Determines whether this materializer owns the requested traffic automation answer for the declared provider.

```csharp
bool CanMaterialize(CellTrafficAutomationRuntimeDescriptor automation)
```

#### Parameters

`automation` [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

The effective traffic automation answer to evaluate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when this materializer should reconcile the automation; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationProviderMaterializer_MaterializeAsync_Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_System_Threading_CancellationToken_"></a> MaterializeAsync\(CellTrafficAutomationRuntimeDescriptor, CancellationToken\)

Applies or reconciles the requested traffic automation answer against the owned provider.

```csharp
ValueTask<CellTrafficAutomationProviderMaterializationResult> MaterializeAsync(CellTrafficAutomationRuntimeDescriptor automation, CancellationToken cancellationToken = default)
```

#### Parameters

`automation` [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

The effective traffic automation answer to materialize.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[CellTrafficAutomationProviderMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult/)\>

The observed provider-materialization result.
