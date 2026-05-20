---
title: Class RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped override-action bucket within a REST publication-group governance summary.

```csharp
public sealed class RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor__ctor_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind_System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor\(RestEndpointOverrideActionKind, IReadOnlyList<string\>?\)

Creates a grouped override-action bucket for a REST publication-group governance summary.

```csharp
public RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor(RestEndpointOverrideActionKind actionKind, IReadOnlyList<string>? candidateIds = null)
```

#### Parameters

`actionKind` [RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)

The override action dimension represented by this grouped bucket.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that selected or materially applied this override action dimension.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor_ActionKind"></a> ActionKind

Gets the override action dimension represented by this grouped bucket.

```csharp
public RestEndpointOverrideActionKind ActionKind { get; }
```

#### Property Value

 [RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers that selected or materially applied this override action dimension.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
