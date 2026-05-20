---
title: Class RestEndpointPublicationGroupDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes the grouped public REST publication outcome for one behavior across all of its visible candidates.

```csharp
public sealed class RestEndpointPublicationGroupDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor__Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor__"></a> RestEndpointPublicationGroupDescriptor\(string, IReadOnlyList<string\>?, int?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointCandidateRuntimeDescriptor\>?, RestEndpointPublicationGroupAuthoringPolicyDescriptor?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor\>?\)

Creates a grouped REST endpoint publication descriptor.

```csharp
public RestEndpointPublicationGroupDescriptor(string behaviorId, IReadOnlyList<string>? sourceModuleIds = null, int? winningPrecedenceRank = null, IReadOnlyList<string>? publishedCandidateIds = null, IReadOnlyList<string>? precedenceSuppressedCandidateIds = null, IReadOnlyList<string>? governanceSuppressedCandidateIds = null, IReadOnlyList<RestEndpointCandidateRuntimeDescriptor>? candidates = null, RestEndpointPublicationGroupAuthoringPolicyDescriptor? authoringPolicy = null, IReadOnlyList<string>? authoringPolicySuppressedCandidateIds = null, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor>? authoringPolicySuppressionSummaries = null, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds = null, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries = null, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries = null)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier for the grouped publication answer.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The distinct source-module identifiers that contributed the grouped candidates.

`winningPrecedenceRank` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The winning precedence rank for the published candidates when one or more candidates remain published.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that remain published for this behavior.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by another candidate through precedence resolution.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by host-level REST governance.

`candidates` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>?

The ordered candidate set that produced this grouped publication answer.

`authoringPolicy` [RestEndpointPublicationGroupAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicydescriptor/)?

The effective authoring-policy intent for this behavior-level publication group.

`authoringPolicySuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

`authoringPolicySuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers whose original projections allowed host governance to participate.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers whose original projections kept host governance out of scope.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted ineligible candidates in this behavior group.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted ineligible candidates in this behavior group.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule.

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor__Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor__"></a> RestEndpointPublicationGroupDescriptor\(string, IReadOnlyList<string\>?, int?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointCandidateRuntimeDescriptor\>?, RestEndpointPublicationGroupAuthoringPolicyDescriptor?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor\>?\)

Creates a grouped REST endpoint publication descriptor, including grouped skipped-governance summaries.

```csharp
[JsonConstructor]
public RestEndpointPublicationGroupDescriptor(string behaviorId, IReadOnlyList<string>? sourceModuleIds, int? winningPrecedenceRank, IReadOnlyList<string>? publishedCandidateIds, IReadOnlyList<string>? precedenceSuppressedCandidateIds, IReadOnlyList<string>? governanceSuppressedCandidateIds, IReadOnlyList<RestEndpointCandidateRuntimeDescriptor>? candidates, RestEndpointPublicationGroupAuthoringPolicyDescriptor? authoringPolicy, IReadOnlyList<string>? authoringPolicySuppressedCandidateIds, IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor>? authoringPolicySuppressionSummaries, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds, IReadOnlyList<string>? skippedSuppressionIds, IReadOnlyList<string>? skippedOverrideIds, IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor>? skippedSuppressionSummaries, IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor>? skippedOverrideSummaries)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier for the grouped publication answer.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The distinct source-module identifiers that contributed the grouped candidates.

`winningPrecedenceRank` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The winning precedence rank for the published candidates when one or more candidates remain published.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that remain published for this behavior.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by another candidate through precedence resolution.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by host-level REST governance.

`candidates` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>?

The ordered candidate set that produced this grouped publication answer.

`authoringPolicy` [RestEndpointPublicationGroupAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicydescriptor/)?

The effective authoring-policy intent for this behavior-level publication group.

`authoringPolicySuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

`authoringPolicySuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers whose original projections allowed host governance to participate.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The candidate identifiers whose original projections kept host governance out of scope.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted ineligible candidates in this behavior group.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted ineligible candidates in this behavior group.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule.

`skippedSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor/)\>?

The grouped host-governance-skipped suppression-rule outcomes summarized by rule.

`skippedOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedoverridesummarydescriptor/)\>?

The grouped host-governance-skipped override-rule outcomes summarized by rule.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_AuthoringPolicy"></a> AuthoringPolicy

Gets the effective authoring-policy intent for this behavior-level publication group.

```csharp
public RestEndpointPublicationGroupAuthoringPolicyDescriptor AuthoringPolicy { get; }
```

#### Property Value

 [RestEndpointPublicationGroupAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicydescriptor/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_AuthoringPolicySuppressedCandidateIds"></a> AuthoringPolicySuppressedCandidateIds

Gets the candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

```csharp
public IReadOnlyList<string> AuthoringPolicySuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_AuthoringPolicySuppressionSummaries"></a> AuthoringPolicySuppressionSummaries

Gets the grouped authoring-policy suppression outcomes summarized by suppression kind.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor> AuthoringPolicySuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_AuthoringStyleSummaries"></a> AuthoringStyleSummaries

Gets the grouped publication outcome summarized by authoring style for this behavior.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupAuthoringStyleDescriptor> AuthoringStyleSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupAuthoringStyleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringstyledescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier for the grouped publication answer.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_Candidates"></a> Candidates

Gets the ordered candidate set that produced this grouped publication answer.

```csharp
public IReadOnlyList<RestEndpointCandidateRuntimeDescriptor> Candidates { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_GovernanceOverrideSummaries"></a> GovernanceOverrideSummaries

Gets the grouped host-governance override-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor> GovernanceOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_GovernanceSuppressedCandidateIds"></a> GovernanceSuppressedCandidateIds

Gets the candidate identifiers that were suppressed by host-level REST governance.

```csharp
public IReadOnlyList<string> GovernanceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_GovernanceSuppressionSummaries"></a> GovernanceSuppressionSummaries

Gets the grouped host-governance suppression-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor> GovernanceSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernancesuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_HostGovernanceEligibleCandidateIds"></a> HostGovernanceEligibleCandidateIds

Gets the candidate identifiers whose original projections allowed host governance to participate.

```csharp
public IReadOnlyList<string> HostGovernanceEligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_HostGovernanceIneligibleCandidateIds"></a> HostGovernanceIneligibleCandidateIds

Gets the candidate identifiers whose original projections kept host governance out of scope.

```csharp
public IReadOnlyList<string> HostGovernanceIneligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_PrecedenceSuppressedCandidateIds"></a> PrecedenceSuppressedCandidateIds

Gets the candidate identifiers that were suppressed by precedence resolution.

```csharp
public IReadOnlyList<string> PrecedenceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_PublishedCandidateIds"></a> PublishedCandidateIds

Gets the candidate identifiers that remain published for this behavior.

```csharp
public IReadOnlyList<string> PublishedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override-rule identifiers that targeted ineligible candidates in this behavior group.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_SkippedOverrideSummaries"></a> SkippedOverrideSummaries

Gets the grouped host-governance-skipped override-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor> SkippedOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression-rule identifiers that targeted ineligible candidates in this behavior group.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_SkippedSuppressionSummaries"></a> SkippedSuppressionSummaries

Gets the grouped host-governance-skipped suppression-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor> SkippedSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointPublicationGroupGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupgovernanceskippedsuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_SourceModuleIds"></a> SourceModuleIds

Gets the distinct source-module identifiers that contributed the grouped candidates.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupDescriptor_WinningPrecedenceRank"></a> WinningPrecedenceRank

Gets the winning precedence rank for the published candidates when one or more remain published.

```csharp
public int? WinningPrecedenceRank { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
