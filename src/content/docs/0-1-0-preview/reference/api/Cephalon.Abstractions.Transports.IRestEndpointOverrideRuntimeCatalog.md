---
title: Interface IRestEndpointOverrideRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointoverrideruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the REST endpoint override rules visible to the current runtime.

```csharp
public interface IRestEndpointOverrideRuntimeCatalog
```

## Remarks

This surface complements <xref href="Cephalon.Abstractions.Transports.IRestEndpointCandidateRuntimeCatalog" data-throw-if-not-resolved="false"></xref> by publishing the
configured host-level override rules that can rewrite descriptor-backed module-owned REST
candidates that participate in host governance, including shorthand candidates and explicit
module-DSL route groups that opted in, before precedence resolution selects the final public
REST surface.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointOverrideRuntimeCatalog_OverrideRules"></a> OverrideRules

Gets all REST endpoint override rules visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointOverrideDescriptor> OverrideRules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointOverrideRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets all REST endpoint override rules that target the requested behavior identifier, either
directly or through configured behavior-id prefixes.

```csharp
IReadOnlyList<RestEndpointOverrideDescriptor> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor/)\>

The matching override descriptors, or an empty list when no rules exist.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointOverrideRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one REST endpoint override rule by its stable identifier.

```csharp
RestEndpointOverrideDescriptor? GetById(string overrideId)
```

#### Parameters

`overrideId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The override identifier to resolve.

#### Returns

 [RestEndpointOverrideDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor/)?

The matching override descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not present.

### <a id="Cephalon_Abstractions_Transports_IRestEndpointOverrideRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all REST endpoint override rules that target the requested source module identifier.

```csharp
IReadOnlyList<RestEndpointOverrideDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor/)\>

The matching override descriptors, or an empty list when no rules exist.
