---
title: Interface IRestEndpointCandidateRuntimeRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointcandidateruntimeregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Collects REST endpoint candidates while the active host resolves publication precedence.

```csharp
public interface IRestEndpointCandidateRuntimeRegistry
```

## Remarks

Host adapters and transport helpers use this registry to publish candidate visibility into
<xref href="Cephalon.Abstractions.Transports.IRestEndpointCandidateRuntimeCatalog" data-throw-if-not-resolved="false"></xref>. Consumer code should normally read the
catalog instead of mutating the registry directly.

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeRegistry_Clear"></a> Clear\(\)

Clears any previously registered runtime candidates before a host rematerializes its REST surface.

```csharp
void Clear()
```

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeRegistry_Register_Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_"></a> Register\(RestEndpointCandidateRuntimeDescriptor\)

Registers one REST endpoint candidate with the runtime catalog.

```csharp
void Register(RestEndpointCandidateRuntimeDescriptor candidate)
```

#### Parameters

`candidate` [RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)

The candidate descriptor to register.
