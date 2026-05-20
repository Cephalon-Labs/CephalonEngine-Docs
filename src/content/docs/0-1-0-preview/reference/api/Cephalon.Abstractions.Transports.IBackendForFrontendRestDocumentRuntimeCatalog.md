---
title: Interface IBackendForFrontendRestDocumentRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-ibackendforfrontendrestdocumentruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the client-aware REST documentation surfaces derived from the active backend-for-frontend
bindings and published REST endpoint catalog.

```csharp
public interface IBackendForFrontendRestDocumentRuntimeCatalog
```

## Remarks

This runtime surface keeps filtered OpenAPI JSON and Scalar materialization aligned with the
existing backend-for-frontend binding and REST endpoint runtime catalogs instead of introducing
a host-only documentation registry.

## Properties

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestDocumentRuntimeCatalog_Documents"></a> Documents

Gets all client-aware REST documentation surfaces visible to the current runtime.

```csharp
IReadOnlyList<BackendForFrontendRestDocumentRuntimeDescriptor> Documents { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestDocumentRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestDocumentRuntimeCatalog_GetByBindingId_System_String_"></a> GetByBindingId\(string\)

Gets all binding-scoped REST documentation surfaces owned by the requested binding.

```csharp
IReadOnlyList<BackendForFrontendRestDocumentRuntimeDescriptor> GetByBindingId(string bindingId)
```

#### Parameters

`bindingId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The backend-for-frontend binding identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestDocumentRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the binding is not active.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestDocumentRuntimeCatalog_GetByClientId_System_String_"></a> GetByClientId\(string\)

Gets all client-scoped REST documentation surfaces owned by the requested client.

```csharp
IReadOnlyList<BackendForFrontendRestDocumentRuntimeDescriptor> GetByClientId(string clientId)
```

#### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The client identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestDocumentRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the client is not active.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestDocumentRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one client-aware REST documentation surface by its stable identifier.

```csharp
BackendForFrontendRestDocumentRuntimeDescriptor? GetById(string documentId)
```

#### Parameters

`documentId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The documentation-surface identifier to resolve.

#### Returns

 [BackendForFrontendRestDocumentRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.
