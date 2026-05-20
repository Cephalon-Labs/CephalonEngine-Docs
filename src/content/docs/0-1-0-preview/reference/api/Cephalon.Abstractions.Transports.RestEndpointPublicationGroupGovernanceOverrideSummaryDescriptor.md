---
title: Class RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped host-governance override-rule outcome within a REST publication-group answer.

```csharp
public sealed class RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor__"></a> RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor\>?\)

Creates a grouped host-governance override-rule summary.

```csharp
public RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor(string ruleId, IReadOnlyList<string>? matchedCandidateIds = null, IReadOnlyList<string>? selectedCandidateIds = null, IReadOnlyList<string>? appliedCandidateIds = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor>? selectionBasisSummaries = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor>? selectedActionKindSummaries = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor>? appliedActionKindSummaries = null)
```

#### Parameters

`ruleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable host-level override-rule identifier summarized by this entry.

`matchedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that matched this override rule before one winner was selected.

`selectedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that selected this override rule, including runtime no-op selections.

`appliedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose effective runtime answer was materially changed by this override rule.

`selectionBasisSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceselectionbasissummarydescriptor/)\>?

The grouped decisive selection-basis buckets for the candidates that selected this override rule.

`selectedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped declared override-action buckets for the candidates that selected this override rule.

`appliedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped materially applied override-action buckets for the candidates this override rule changed.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_AppliedActionKindSummaries"></a> AppliedActionKindSummaries

Gets the grouped materially applied override-action buckets for the candidates this override rule changed.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor> AppliedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_AppliedCandidateIds"></a> AppliedCandidateIds

Gets the ordered candidate identifiers whose effective runtime answer was materially changed by this override rule.

```csharp
public IReadOnlyList<string> AppliedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_MatchedCandidateIds"></a> MatchedCandidateIds

Gets the ordered candidate identifiers that matched this override rule before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_RuleId"></a> RuleId

Gets the stable host-level override-rule identifier summarized by this entry.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_SelectedActionKindSummaries"></a> SelectedActionKindSummaries

Gets the grouped declared override-action buckets for the candidates that selected this override rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor> SelectedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_SelectedCandidateIds"></a> SelectedCandidateIds

Gets the ordered candidate identifiers that selected this override rule, including runtime no-op selections.

```csharp
public IReadOnlyList<string> SelectedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor_SelectionBasisSummaries"></a> SelectionBasisSummaries

Gets the grouped decisive selection-basis buckets for the candidates that selected this override rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor> SelectionBasisSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceselectionbasissummarydescriptor/)\>
