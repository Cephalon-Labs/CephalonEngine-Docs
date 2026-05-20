---
title: Interface ICellTrafficAutomationRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the effective cell traffic-automation answers visible to the current runtime.

```csharp
public interface ICellTrafficAutomationRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_Automations"></a> Automations

Gets all effective cell traffic-automation answers visible to the current runtime.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> Automations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetByEdgeNodeId_System_String_"></a> GetByEdgeNodeId\(string\)

Gets all effective cell traffic-automation answers that target the requested edge node.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetByEdgeNodeId(string edgeNodeId)
```

#### Parameters

`edgeNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The edge-node identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetByHealthIsolationId_System_String_"></a> GetByHealthIsolationId\(string\)

Gets all effective cell traffic-automation answers that reference the requested health-isolation identifier.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetByHealthIsolationId(string healthIsolationId)
```

#### Parameters

`healthIsolationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The health-isolation identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one effective cell traffic-automation answer by its stable identifier.

```csharp
CellTrafficAutomationRuntimeDescriptor? GetById(string automationId)
```

#### Parameters

`automationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The traffic-automation identifier to resolve.

#### Returns

 [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all effective cell traffic-automation answers that target the requested external provider.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetByRouteId_System_String_"></a> GetByRouteId\(string\)

Gets one effective cell traffic-automation answer by its governed route identifier.

```csharp
CellTrafficAutomationRuntimeDescriptor? GetByRouteId(string routeId)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governed route identifier to resolve.

#### Returns

 [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetBySourceCellId_System_String_"></a> GetBySourceCellId\(string\)

Gets all effective cell traffic-automation answers that originate from the requested source cell.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetBySourceCellId(string sourceCellId)
```

#### Parameters

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source-cell identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all effective cell traffic-automation answers owned by the requested module.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationRuntimeCatalog_GetByTargetCellId_System_String_"></a> GetByTargetCellId\(string\)

Gets all effective cell traffic-automation answers that target the requested cell.

```csharp
IReadOnlyList<CellTrafficAutomationRuntimeDescriptor> GetByTargetCellId(string targetCellId)
```

#### Parameters

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target-cell identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.
