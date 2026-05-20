---
title: Class RestEndpointPublicationGroupAuthoringStyleDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringstyledescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes the grouped publication outcome for one authoring style within a behavior-level REST publication group.

```csharp
public sealed class RestEndpointPublicationGroupAuthoringStyleDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupAuthoringStyleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringstyledescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor__"></a> RestEndpointPublicationGroupAuthoringStyleDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor\>?\)

Creates a grouped publication descriptor for one authoring style.

```csharp
public RestEndpointPublicationGroupAuthoringStyleDescriptor(string authoringStyle, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<int>? precedenceRanks = null, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? publishedCandidateIds = null, IReadOnlyList<string>? precedenceSuppressedCandidateIds = null, IReadOnlyList<string>? governanceSuppressedCandidateIds = null, IReadOnlyList<string>? authoringPolicySuppressedCandidateIds = null, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor>? authoringPolicySuppressionSummaries = null, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds = null, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries = null)
```

#### Parameters

`authoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized authoring style that contributed the grouped candidates.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The distinct source-module identifiers that contributed candidates for this authoring style.

`precedenceRanks` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The distinct precedence ranks visible for this authoring style within the group.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers contributed by this authoring style.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that remain published for this authoring style.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by another candidate through precedence resolution.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by host-level REST governance.

`authoringPolicySuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

`authoringPolicySuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind for this authoring style.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections allowed host governance to participate.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections kept host governance out of scope.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted ineligible candidates for this authoring style.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted ineligible candidates for this authoring style.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule for this authoring style.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule for this authoring style.

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor__"></a> RestEndpointPublicationGroupAuthoringStyleDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor\>?\)

Creates a grouped publication descriptor for one authoring style, including grouped skipped-governance summaries.

```csharp
[JsonConstructor]
public RestEndpointPublicationGroupAuthoringStyleDescriptor(string authoringStyle, IReadOnlyList<string>? sourceModuleIds, IReadOnlyList<int>? precedenceRanks, IReadOnlyList<string>? candidateIds, IReadOnlyList<string>? publishedCandidateIds, IReadOnlyList<string>? precedenceSuppressedCandidateIds, IReadOnlyList<string>? governanceSuppressedCandidateIds, IReadOnlyList<string>? authoringPolicySuppressedCandidateIds, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor>? authoringPolicySuppressionSummaries, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds, IReadOnlyList<string>? skippedSuppressionIds, IReadOnlyList<string>? skippedOverrideIds, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor>? skippedSuppressionSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor>? skippedOverrideSummaries)
```

#### Parameters

`authoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized authoring style that contributed the grouped candidates.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The distinct source-module identifiers that contributed candidates for this authoring style.

`precedenceRanks` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The distinct precedence ranks visible for this authoring style within the group.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers contributed by this authoring style.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that remain published for this authoring style.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by another candidate through precedence resolution.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by host-level REST governance.

`authoringPolicySuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

`authoringPolicySuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind for this authoring style.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections allowed host governance to participate.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections kept host governance out of scope.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted ineligible candidates for this authoring style.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted ineligible candidates for this authoring style.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule for this authoring style.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule for this authoring style.

`skippedSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor/)\>?

The grouped host-governance-skipped suppression-rule outcomes summarized by rule for this authoring style.

`skippedOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedoverridesummarydescriptor/)\>?

The grouped host-governance-skipped override-rule outcomes summarized by rule for this authoring style.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_AuthoringPolicySuppressedCandidateIds"></a> AuthoringPolicySuppressedCandidateIds

Gets the ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

```csharp
public IReadOnlyList<string> AuthoringPolicySuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_AuthoringPolicySuppressionSummaries"></a> AuthoringPolicySuppressionSummaries

Gets the grouped authoring-policy suppression outcomes summarized by suppression kind for this authoring style.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor> AuthoringPolicySuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_AuthoringStyle"></a> AuthoringStyle

Gets the normalized authoring style that contributed the grouped candidates.

```csharp
public string AuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers contributed by this authoring style.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_GovernanceOverrideSummaries"></a> GovernanceOverrideSummaries

Gets the grouped host-governance override-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor> GovernanceOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_GovernanceSuppressedCandidateIds"></a> GovernanceSuppressedCandidateIds

Gets the ordered candidate identifiers that were suppressed by host-level REST governance.

```csharp
public IReadOnlyList<string> GovernanceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_GovernanceSuppressionSummaries"></a> GovernanceSuppressionSummaries

Gets the grouped host-governance suppression-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor> GovernanceSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_HostGovernanceEligibleCandidateIds"></a> HostGovernanceEligibleCandidateIds

Gets the ordered candidate identifiers whose original projections allowed host governance to participate.

```csharp
public IReadOnlyList<string> HostGovernanceEligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_HostGovernanceIneligibleCandidateIds"></a> HostGovernanceIneligibleCandidateIds

Gets the ordered candidate identifiers whose original projections kept host governance out of scope.

```csharp
public IReadOnlyList<string> HostGovernanceIneligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_PrecedenceRanks"></a> PrecedenceRanks

Gets the distinct precedence ranks visible for this authoring style within the group.

```csharp
public IReadOnlyList<int> PrecedenceRanks { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_PrecedenceSuppressedCandidateIds"></a> PrecedenceSuppressedCandidateIds

Gets the ordered candidate identifiers that were suppressed by precedence resolution.

```csharp
public IReadOnlyList<string> PrecedenceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_PublishedCandidateIds"></a> PublishedCandidateIds

Gets the ordered candidate identifiers that remain published for this authoring style.

```csharp
public IReadOnlyList<string> PublishedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override-rule identifiers that targeted ineligible candidates for this authoring style.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_SkippedOverrideSummaries"></a> SkippedOverrideSummaries

Gets the grouped host-governance-skipped override-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor> SkippedOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression-rule identifiers that targeted ineligible candidates for this authoring style.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_SkippedSuppressionSummaries"></a> SkippedSuppressionSummaries

Gets the grouped host-governance-skipped suppression-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor> SkippedSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringStyleDescriptor_SourceModuleIds"></a> SourceModuleIds

Gets the distinct source-module identifiers that contributed candidates for this authoring style.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
