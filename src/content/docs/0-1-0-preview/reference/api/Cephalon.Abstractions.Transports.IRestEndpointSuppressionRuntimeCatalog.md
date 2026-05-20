---
title: Interface IRestEndpointSuppressionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointsuppressionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the REST endpoint suppression rules visible to the current runtime.

```csharp
public interface IRestEndpointSuppressionRuntimeCatalog
```

## Remarks

This surface complements <xref href="Cephalon.Abstractions.Transports.IRestEndpointCandidateRuntimeCatalog" data-throw-if-not-resolved="false"></xref> by publishing the
configured host-level suppression rules that can hide descriptor-backed module-owned REST
candidates that participate in host governance, including shorthand candidates and explicit
module-DSL route groups that opted in, before precedence resolution selects the final public
REST surface.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointSuppressionRuntimeCatalog_Suppressions"></a> Suppressions

Gets all REST endpoint suppression rules visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointSuppressionDescriptor> Suppressions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointSuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointSuppressionRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets all REST endpoint suppression rules that target the requested behavior identifier,
either directly or through configured behavior-id prefixes.

```csharp
IReadOnlyList<RestEndpointSuppressionDescriptor> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointSuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor/)\>

The matching suppression descriptors, or an empty list when no rules exist.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointSuppressionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one REST endpoint suppression rule by its stable identifier.

```csharp
RestEndpointSuppressionDescriptor? GetById(string suppressionId)
```

#### Parameters

`suppressionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suppression identifier to resolve.

#### Returns

 [RestEndpointSuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor/)?

The matching suppression descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not present.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointSuppressionRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all REST endpoint suppression rules that target the requested source module identifier.

```csharp
IReadOnlyList<RestEndpointSuppressionDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointSuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor/)\>

The matching suppression descriptors, or an empty list when no rules exist.
