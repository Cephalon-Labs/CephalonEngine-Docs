---
title: Class RestEndpointGovernanceSelectionBasisSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped selection-basis bucket within a rule-centric REST governance summary.

```csharp
public sealed class RestEndpointGovernanceSelectionBasisSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor__ctor_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis_System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointGovernanceSelectionBasisSummaryDescriptor\(RestEndpointGovernanceRuleSelectionBasis, IReadOnlyList<string\>?\)

Creates a grouped selection-basis bucket for a rule-centric REST governance summary.

```csharp
public RestEndpointGovernanceSelectionBasisSummaryDescriptor(RestEndpointGovernanceRuleSelectionBasis selectionBasis, IReadOnlyList<string>? candidateIds = null)
```

#### Parameters

`selectionBasis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)

The decisive specificity basis that selected the winning governance rule for the grouped candidates.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that resolved the winning governance rule with this selection basis.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers that resolved the winning governance rule with this selection basis.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor_SelectionBasis"></a> SelectionBasis

Gets the decisive specificity basis that selected the winning governance rule for the grouped candidates.

```csharp
public RestEndpointGovernanceRuleSelectionBasis SelectionBasis { get; }
```

#### Property Value

 [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)
