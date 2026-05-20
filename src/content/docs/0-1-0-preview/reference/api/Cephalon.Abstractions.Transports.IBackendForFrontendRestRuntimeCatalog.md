---
title: Interface IBackendForFrontendRestRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-ibackendforfrontendrestruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the client-aware published REST endpoint projections derived from the active
backend-for-frontend bindings.

```csharp
public interface IBackendForFrontendRestRuntimeCatalog
```

## Remarks

This surface keeps backend-for-frontend client bindings and published REST endpoint material
separate from the broader binding catalog so hosts can answer which REST endpoints are visible
to each client binding without inventing a host-only registry outside the shared runtime truth.

## Properties

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_Endpoints"></a> Endpoints

Gets all client-aware published REST endpoint projections visible to the current runtime.

```csharp
IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> Endpoints { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_GetByBindingId_System_String_"></a> GetByBindingId\(string\)

Gets all client-aware published REST endpoint projections owned by the requested binding.

```csharp
IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> GetByBindingId(string bindingId)
```

#### Parameters

`bindingId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The backend-for-frontend binding identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the binding is not active.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_GetByClientId_System_String_"></a> GetByClientId\(string\)

Gets all client-aware published REST endpoint projections owned by the requested client.

```csharp
IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> GetByClientId(string clientId)
```

#### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The client identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the client is not active.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one client-aware published REST endpoint projection by its stable identifier.

```csharp
BackendForFrontendRestEndpointRuntimeDescriptor? GetById(string runtimeEndpointId)
```

#### Parameters

`runtimeEndpointId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The binding-plus-endpoint identifier to resolve.

#### Returns

 [BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_GetByRestEndpointId_System_String_"></a> GetByRestEndpointId\(string\)

Gets all client-aware runtime projections that expose the requested published REST endpoint.

```csharp
IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> GetByRestEndpointId(string restEndpointId)
```

#### Parameters

`restEndpointId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The published REST endpoint identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the endpoint is not visible.

### <a id="Cephalon_Abstractions_Transports_IBackendForFrontendRestRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all client-aware published REST endpoint projections contributed by the requested
binding-owner module.

```csharp
IReadOnlyList<BackendForFrontendRestEndpointRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The binding-owner module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendRestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestendpointruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when the module is not active.
