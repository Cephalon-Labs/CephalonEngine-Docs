---
title: Class RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped host-governance-skipped suppression-rule outcome within a REST publication-group answer.

```csharp
public sealed class RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor\(string, IReadOnlyList<string\>?\)

Creates a grouped host-governance-skipped suppression-rule summary.

```csharp
public RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor(string ruleId, IReadOnlyList<string>? candidateIds = null)
```

#### Parameters

`ruleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable host-level suppression-rule identifier summarized by this entry.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that this suppression rule targeted before host governance was skipped.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers that this suppression rule targeted before host governance was skipped.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor_RuleId"></a> RuleId

Gets the stable host-level suppression-rule identifier summarized by this entry.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
