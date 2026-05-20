---
title: Interface IRestEndpointRuntimeRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointruntimeregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Collects resolved public REST endpoints while the active host materializes transport routes.

```csharp
public interface IRestEndpointRuntimeRegistry
```

## Remarks

Host adapters and transport helpers use this registry to publish the resolved Cephalon-owned
REST endpoint surface into <xref href="Cephalon.Abstractions.Transports.IRestEndpointRuntimeCatalog" data-throw-if-not-resolved="false"></xref>. Consumer code should
normally read the catalog instead of mutating the registry directly.

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeRegistry_Clear"></a> Clear\(\)

Clears any previously registered runtime endpoints before a host rematerializes its REST surface.

```csharp
void Clear()
```

### <a id="Cephalon_Abstractions_Transports_IRestEndpointRuntimeRegistry_Register_Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_"></a> Register\(RestEndpointRuntimeDescriptor\)

Registers one resolved public REST endpoint with the runtime catalog.

```csharp
void Register(RestEndpointRuntimeDescriptor endpoint)
```

#### Parameters

`endpoint` [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

The resolved endpoint descriptor to register.
