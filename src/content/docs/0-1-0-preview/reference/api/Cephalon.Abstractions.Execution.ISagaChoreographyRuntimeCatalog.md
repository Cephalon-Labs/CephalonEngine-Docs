---
title: Interface ISagaChoreographyRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-isagachoreographyruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active saga-choreography behaviors visible to the current runtime.

```csharp
public interface ISagaChoreographyRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyRuntimeCatalog_SagaChoreographies"></a> SagaChoreographies

Gets all active saga-choreography behaviors visible to the current runtime.

```csharp
IReadOnlyList<SagaChoreographyRuntimeDescriptor> SagaChoreographies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one saga-choreography behavior by its stable behavior identifier.

```csharp
SagaChoreographyRuntimeDescriptor? GetById(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The choreography behavior identifier to resolve.

#### Returns

 [SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)?

The matching choreography descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all saga-choreography behaviors contributed by the requested module.

```csharp
IReadOnlyList<SagaChoreographyRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)\>

The matching choreographies, or an empty list when the module contributed none.

### <a id="Cephalon_Abstractions_Execution_ISagaChoreographyRuntimeCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets all saga-choreography behaviors exposed over the requested transport.

```csharp
IReadOnlyList<SagaChoreographyRuntimeDescriptor> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-sagachoreographyruntimedescriptor/)\>

The matching choreographies, or an empty list when none expose that transport.
