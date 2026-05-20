---
title: Interface IRestEndpointCandidateRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointcandidateruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the module-owned REST endpoint candidates visible to the current runtime.

```csharp
public interface IRestEndpointCandidateRuntimeCatalog
```

## Remarks

This surface complements <xref href="Cephalon.Abstractions.Transports.IRestEndpointRuntimeCatalog" data-throw-if-not-resolved="false"></xref> by showing candidate
projections that were published or suppressed after precedence resolution rather than only the
final active public REST endpoints.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeCatalog_Candidates"></a> Candidates

Gets all REST endpoint candidates visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointCandidateRuntimeDescriptor> Candidates { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets all REST endpoint candidates that target the requested behavior identifier.

```csharp
IReadOnlyList<RestEndpointCandidateRuntimeDescriptor> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>

The matching candidate descriptors, or an empty list when no candidates exist.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one REST endpoint candidate by its stable identifier.

```csharp
RestEndpointCandidateRuntimeDescriptor? GetById(string candidateId)
```

#### Parameters

`candidateId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The candidate identifier to resolve.

#### Returns

 [RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)?

The matching candidate descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not present.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointCandidateRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all REST endpoint candidates owned by the requested source module.

```csharp
IReadOnlyList<RestEndpointCandidateRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>

The matching candidate descriptors, or an empty list when no candidates exist.
