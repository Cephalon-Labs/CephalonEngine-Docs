---
title: Interface IBackendForFrontendRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the backend-for-frontend client bindings visible to the current runtime.

```csharp
public interface IBackendForFrontendRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendRuntimeCatalog_Bindings"></a> Bindings

Gets all backend-for-frontend client bindings visible to the current runtime.

```csharp
IReadOnlyList<BackendForFrontendClientBindingDescriptor> Bindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendRuntimeCatalog_GetByClientId_System_String_"></a> GetByClientId\(string\)

Gets all backend-for-frontend client bindings owned by the requested client identifier.

```csharp
IReadOnlyList<BackendForFrontendClientBindingDescriptor> GetByClientId(string clientId)
```

#### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The client identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)\>

The matching client binding descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one backend-for-frontend client binding by its stable identifier.

```csharp
BackendForFrontendClientBindingDescriptor? GetById(string bindingId)
```

#### Parameters

`bindingId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The binding identifier to resolve.

#### Returns

 [BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)?

The matching client binding descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all backend-for-frontend client bindings owned by the requested module.

```csharp
IReadOnlyList<BackendForFrontendClientBindingDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)\>

The matching client binding descriptors, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendRuntimeCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets all backend-for-frontend client bindings that target the requested transport.

```csharp
IReadOnlyList<BackendForFrontendClientBindingDescriptor> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)\>

The matching client binding descriptors, or an empty list when none are active.
