---
title: Class RestEndpointGovernanceOverrideSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped override-rule outcome within a rule-centric REST governance summary.

```csharp
public sealed class RestEndpointGovernanceOverrideSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideActionKindSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideActionKindSummaryDescriptor__"></a> RestEndpointGovernanceOverrideSummaryDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor\>?\)

Creates a grouped override-rule summary.

```csharp
public RestEndpointGovernanceOverrideSummaryDescriptor(string ruleId, IReadOnlyList<string>? matchedCandidateIds = null, IReadOnlyList<string>? selectedCandidateIds = null, IReadOnlyList<string>? appliedCandidateIds = null, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor>? selectionBasisSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor>? selectedActionKindSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor>? appliedActionKindSummaries = null)
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

`selectionBasisSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>?

The grouped decisive selection-basis buckets for the candidates that selected this override rule.

`selectedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped declared override-action buckets for the candidates that selected this override rule.

`appliedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped materially applied override-action buckets for the candidates this override rule changed.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_AppliedActionKindSummaries"></a> AppliedActionKindSummaries

Gets the grouped materially applied override-action buckets for the candidates this override rule changed.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor> AppliedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_AppliedCandidateIds"></a> AppliedCandidateIds

Gets the ordered candidate identifiers whose effective runtime answer was materially changed by this override rule.

```csharp
public IReadOnlyList<string> AppliedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_MatchedCandidateIds"></a> MatchedCandidateIds

Gets the ordered candidate identifiers that matched this override rule before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_RuleId"></a> RuleId

Gets the stable host-level override-rule identifier summarized by this entry.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_SelectedActionKindSummaries"></a> SelectedActionKindSummaries

Gets the grouped declared override-action buckets for the candidates that selected this override rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor> SelectedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_SelectedCandidateIds"></a> SelectedCandidateIds

Gets the ordered candidate identifiers that selected this override rule, including runtime no-op selections.

```csharp
public IReadOnlyList<string> SelectedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor_SelectionBasisSummaries"></a> SelectionBasisSummaries

Gets the grouped decisive selection-basis buckets for the candidates that selected this override rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor> SelectionBasisSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>
