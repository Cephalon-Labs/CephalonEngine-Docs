---
title: Class RestEndpointGovernanceSuppressionSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped suppression-rule outcome within a rule-centric REST governance summary.

```csharp
public sealed class RestEndpointGovernanceSuppressionSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor__"></a> RestEndpointGovernanceSuppressionSummaryDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor\>?\)

Creates a grouped suppression-rule summary.

```csharp
public RestEndpointGovernanceSuppressionSummaryDescriptor(string ruleId, IReadOnlyList<string>? matchedCandidateIds = null, IReadOnlyList<string>? suppressedCandidateIds = null, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor>? selectionBasisSummaries = null)
```

#### Parameters

`ruleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable host-level suppression-rule identifier summarized by this entry.

`matchedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that matched this suppression rule before one winner was selected.

`suppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that this suppression rule ultimately suppressed.

`selectionBasisSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>?

The grouped decisive selection-basis buckets for the candidates this suppression rule ultimately suppressed.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor_MatchedCandidateIds"></a> MatchedCandidateIds

Gets the ordered candidate identifiers that matched this suppression rule before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor_RuleId"></a> RuleId

Gets the stable host-level suppression-rule identifier summarized by this entry.

```csharp
public string RuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor_SelectionBasisSummaries"></a> SelectionBasisSummaries

Gets the grouped decisive selection-basis buckets for the candidates this suppression rule ultimately suppressed.

```csharp
public IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor> SelectionBasisSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor_SuppressedCandidateIds"></a> SuppressedCandidateIds

Gets the ordered candidate identifiers that this suppression rule ultimately suppressed.

```csharp
public IReadOnlyList<string> SuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
