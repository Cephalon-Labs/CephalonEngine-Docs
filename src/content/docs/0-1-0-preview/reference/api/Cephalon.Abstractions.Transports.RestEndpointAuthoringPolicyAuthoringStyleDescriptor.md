---
title: Class RestEndpointAuthoringPolicyAuthoringStyleDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicyauthoringstyledescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one authoring-style partition inside a rule-centric REST authoring-policy runtime answer.

```csharp
public sealed class RestEndpointAuthoringPolicyAuthoringStyleDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointAuthoringPolicyAuthoringStyleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicyauthoringstyledescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This descriptor keeps one behavior-level authoring-policy answer readable without reopening the
broader publication-group surface when operators need to understand how authoring-policy,
precedence, and later governance outcomes distribute across authoring styles.

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSkippedSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSkippedOverrideSummaryDescriptor__"></a> RestEndpointAuthoringPolicyAuthoringStyleDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind\>?, IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor\>?\)

Creates an authoring-style partition for a rule-centric REST authoring-policy runtime answer.

```csharp
public RestEndpointAuthoringPolicyAuthoringStyleDescriptor(string authoringStyle, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? retainedCandidateIds = null, IReadOnlyList<string>? publishedCandidateIds = null, IReadOnlyList<string>? precedenceSuppressedCandidateIds = null, IReadOnlyList<string>? governanceSuppressedCandidateIds = null, IReadOnlyList<string>? suppressedCandidateIds = null, IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind>? suppressionKinds = null, IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor>? suppressionSummaries = null, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds = null, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries = null, IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor>? skippedSuppressionSummaries = null, IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor>? skippedOverrideSummaries = null)
```

#### Parameters

`authoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized authoring style summarized by this entry.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers contributed by this authoring style before authoring-policy
enforcement is considered.

`retainedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring-policy enforcement for this
authoring style, even if later precedence or host governance suppressed them.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that remain published after all runtime publication steps
for this authoring style.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring policy but were later suppressed
by candidate precedence for this authoring style.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring policy but were later suppressed
by host-level REST governance for this authoring style.

`suppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by behavior-level authoring-policy
enforcement for this authoring style.

`suppressionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)\>?

The grouped authoring-policy suppression kinds that appear in the runtime effect for this
authoring style.

`suppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind for this
authoring style.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections allowed host governance to
participate for this authoring style.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections kept host governance out of
scope for this authoring style.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted host-governance-ineligible
candidates for this authoring style.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted host-governance-ineligible candidates
for this authoring style.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule for this
authoring style.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule for this authoring
style.

`skippedSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedsuppressionsummarydescriptor/)\>?

The grouped host-governance-skipped suppression-rule outcomes summarized by rule for this
authoring style.

`skippedOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedoverridesummarydescriptor/)\>?

The grouped host-governance-skipped override-rule outcomes summarized by rule for this
authoring style.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_AuthoringStyle"></a> AuthoringStyle

Gets the normalized authoring style summarized by this entry.

```csharp
public string AuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers contributed by this authoring style.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_GovernanceOverrideSummaries"></a> GovernanceOverrideSummaries

Gets the grouped host-governance override-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor> GovernanceOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_GovernanceSuppressedCandidateIds"></a> GovernanceSuppressedCandidateIds

Gets the ordered candidate identifiers that survived authoring policy but were later suppressed by host governance for this authoring style.

```csharp
public IReadOnlyList<string> GovernanceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_GovernanceSuppressionSummaries"></a> GovernanceSuppressionSummaries

Gets the grouped host-governance suppression-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor> GovernanceSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_HostGovernanceEligibleCandidateIds"></a> HostGovernanceEligibleCandidateIds

Gets the ordered candidate identifiers whose original projections allowed host governance to participate for this authoring style.

```csharp
public IReadOnlyList<string> HostGovernanceEligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_HostGovernanceIneligibleCandidateIds"></a> HostGovernanceIneligibleCandidateIds

Gets the ordered candidate identifiers whose original projections kept host governance out of scope for this authoring style.

```csharp
public IReadOnlyList<string> HostGovernanceIneligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_PrecedenceSuppressedCandidateIds"></a> PrecedenceSuppressedCandidateIds

Gets the ordered candidate identifiers that survived authoring policy but were later suppressed by precedence for this authoring style.

```csharp
public IReadOnlyList<string> PrecedenceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_PublishedCandidateIds"></a> PublishedCandidateIds

Gets the ordered candidate identifiers that remain published after all runtime publication steps for this authoring style.

```csharp
public IReadOnlyList<string> PublishedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_RetainedCandidateIds"></a> RetainedCandidateIds

Gets the ordered candidate identifiers that survived authoring-policy enforcement for this authoring style.

```csharp
public IReadOnlyList<string> RetainedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override-rule identifiers that targeted host-governance-ineligible candidates for this authoring style.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SkippedOverrideSummaries"></a> SkippedOverrideSummaries

Gets the grouped host-governance-skipped override-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor> SkippedOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression-rule identifiers that targeted host-governance-ineligible candidates for this authoring style.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SkippedSuppressionSummaries"></a> SkippedSuppressionSummaries

Gets the grouped host-governance-skipped suppression-rule outcomes summarized by rule for this authoring style.

```csharp
public IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor> SkippedSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedsuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SuppressedCandidateIds"></a> SuppressedCandidateIds

Gets the ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement for this authoring style.

```csharp
public IReadOnlyList<string> SuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SuppressionKinds"></a> SuppressionKinds

Gets the grouped authoring-policy suppression kinds visible in the runtime effect for this authoring style.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind> SuppressionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor_SuppressionSummaries"></a> SuppressionSummaries

Gets the grouped authoring-policy suppression outcomes summarized by suppression kind for this authoring style.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor> SuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor/)\>
