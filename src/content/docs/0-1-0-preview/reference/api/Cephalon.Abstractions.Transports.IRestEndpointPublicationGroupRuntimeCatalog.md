---
title: Interface IRestEndpointPublicationGroupRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointpublicationgroupruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes grouped REST endpoint publication visibility for behavior-backed public REST candidates.

```csharp
public interface IRestEndpointPublicationGroupRuntimeCatalog
```

## Remarks

This surface complements <xref href="Cephalon.Abstractions.Transports.IRestEndpointCandidateRuntimeCatalog" data-throw-if-not-resolved="false"></xref> by grouping the
candidate-level truth per behavior so operators can inspect published, precedence-suppressed,
and governance-suppressed shorthand outcomes without reconstructing that story manually.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointPublicationGroupRuntimeCatalog_Groups"></a> Groups

Gets the grouped REST endpoint publication answers visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointPublicationGroupDescriptor> Groups { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointPublicationGroupRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets one grouped REST endpoint publication answer by behavior identifier.

```csharp
RestEndpointPublicationGroupDescriptor? GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to resolve.

#### Returns

 [RestEndpointPublicationGroupDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupdescriptor/)?

The matching grouped publication answer, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not present.
