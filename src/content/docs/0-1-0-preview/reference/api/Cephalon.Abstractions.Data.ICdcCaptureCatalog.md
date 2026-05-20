---
title: Interface ICdcCaptureCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccapturecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the CDC capture surfaces visible to the current runtime.

```csharp
public interface ICdcCaptureCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_CdcCaptures"></a> CdcCaptures

Gets all CDC capture surfaces visible to the current runtime.

```csharp
IReadOnlyList<CdcCaptureDescriptor> CdcCaptures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetByExecutionRuntimeId_System_String_"></a> GetByExecutionRuntimeId\(string\)

Gets all CDC captures currently owned by the requested execution runtime.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetByExecutionRuntimeId(string executionRuntimeId)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution-runtime identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when the runtime owns none.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one CDC capture by its stable identifier.

```csharp
CdcCaptureDescriptor? GetById(string cdcCaptureId)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The CDC capture identifier to resolve.

#### Returns

 [CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)?

The matching CDC capture, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetByOutboxId_System_String_"></a> GetByOutboxId\(string\)

Gets all CDC captures that publish through the requested outbox.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetByOutboxId(string outboxId)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when no capture uses that outbox.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all CDC captures backed by the requested provider identifier.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when the provider contributes none.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetByResourceId_System_String_"></a> GetByResourceId\(string\)

Gets all CDC captures that explicitly observe the requested resource identifier.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetByResourceId(string resourceId)
```

#### Parameters

`resourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resource identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when no capture declares that resource.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetBySourceId_System_String_"></a> GetBySourceId\(string\)

Gets all CDC captures that observe the requested logical source identifier.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetBySourceId(string sourceId)
```

#### Parameters

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when no capture uses that source.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all CDC captures contributed by the requested module.

```csharp
IReadOnlyList<CdcCaptureDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)\>

The matching CDC captures, or an empty list when the module contributed none.
