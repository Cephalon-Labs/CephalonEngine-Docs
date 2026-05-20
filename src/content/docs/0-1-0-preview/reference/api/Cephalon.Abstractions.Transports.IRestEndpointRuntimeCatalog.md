---
title: Interface IRestEndpointRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the resolved public REST endpoints visible to the current runtime.

```csharp
public interface IRestEndpointRuntimeCatalog
```

## Remarks

This surface is runtime-facing rather than app-model-facing because it reflects the effective
REST endpoints published by the active host adapter after route prefixes, API version defaults,
and endpoint materialization have been resolved.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeCatalog_Endpoints"></a> Endpoints

Gets all resolved public REST endpoints visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointRuntimeDescriptor> Endpoints { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets all resolved public REST endpoints that dispatch through the requested behavior identifier.

```csharp
IReadOnlyList<RestEndpointRuntimeDescriptor> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)\>

The matching endpoint descriptors, or an empty list when the behavior is not exposed publicly.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one resolved public REST endpoint by its stable identifier.

```csharp
RestEndpointRuntimeDescriptor? GetById(string endpointId)
```

#### Parameters

`endpointId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The endpoint identifier to resolve.

#### Returns

 [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)?

The matching endpoint descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all resolved public REST endpoints owned by the requested source module.

```csharp
IReadOnlyList<RestEndpointRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)\>

The matching endpoint descriptors, or an empty list when the module is not active.
