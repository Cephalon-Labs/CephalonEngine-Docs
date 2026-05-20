---
title: Class RestEndpointAuthoringPolicyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one behavior-level REST authoring policy together with its runtime effect.

```csharp
public sealed class RestEndpointAuthoringPolicyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This descriptor keeps authoring-policy intent readable as a first-class runtime answer while
preserving separate buckets for authoring-policy suppression, later precedence suppression, and
later governance suppression.

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor__ctor_System_String_System_Boolean_System_Boolean_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyAuthoringStyleDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSkippedSuppressionSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSkippedOverrideSummaryDescriptor__"></a> RestEndpointAuthoringPolicyDescriptor\(string, bool, bool, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind\>?, IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointAuthoringPolicyAuthoringStyleDescriptor\>?, IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor\>?\)

Creates a REST authoring-policy runtime descriptor.

```csharp
public RestEndpointAuthoringPolicyDescriptor(string behaviorId, bool isConfigured = false, bool allowMultiplePublishedCandidates = false, string? preferredAuthoringStyle = null, IReadOnlyList<string>? allowedAuthoringStyles = null, IReadOnlyList<string>? disallowedAuthoringStyles = null, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? retainedCandidateIds = null, IReadOnlyList<string>? publishedCandidateIds = null, IReadOnlyList<string>? precedenceSuppressedCandidateIds = null, IReadOnlyList<string>? governanceSuppressedCandidateIds = null, IReadOnlyList<string>? suppressedCandidateIds = null, IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind>? suppressionKinds = null, IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor>? suppressionSummaries = null, IReadOnlyList<string>? hostGovernanceEligibleCandidateIds = null, IReadOnlyList<string>? hostGovernanceIneligibleCandidateIds = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointAuthoringPolicyAuthoringStyleDescriptor>? authoringStyleSummaries = null, IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor>? governanceSuppressionSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor>? governanceOverrideSummaries = null, IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor>? skippedSuppressionSummaries = null, IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor>? skippedOverrideSummaries = null)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier that this policy applies to.

`isConfigured` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the policy was supplied through host configuration;
otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> when the runtime is exposing the implicit default policy.

`allowMultiplePublishedCandidates` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the policy explicitly allows more than one projection candidate
to remain published for the same behavior boundary after authoring-policy enforcement.

`preferredAuthoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized preferred authoring style when the policy declares one.

`allowedAuthoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized authoring styles that the policy explicitly allows for this behavior
boundary when one or more are declared.

`disallowedAuthoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized authoring styles that the policy explicitly disallows for this behavior
boundary when one or more are declared.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers visible for this behavior boundary before authoring-policy
enforcement is considered.

`retainedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring-policy enforcement, even if a
later precedence or host-governance step suppressed them.

`publishedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that remain published after all runtime publication steps.

`precedenceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring policy but were later suppressed
by candidate precedence.

`governanceSuppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that survived authoring policy but were later suppressed
by host-level REST governance.

`suppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

`suppressionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)\>?

The grouped authoring-policy suppression kinds that appear in the runtime effect.

`suppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor/)\>?

The grouped authoring-policy suppression outcomes summarized by suppression kind.

`hostGovernanceEligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections allowed host governance to
participate for this behavior boundary.

`hostGovernanceIneligibleCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers whose original projections kept host governance out of
scope for this behavior boundary.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that targeted host-governance-ineligible
candidates in this behavior boundary.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that targeted host-governance-ineligible candidates
in this behavior boundary.

`authoringStyleSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicyAuthoringStyleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicyauthoringstyledescriptor/)\>?

The per-authoring-style runtime buckets that explain how this policy's candidate,
retained, published, precedence-suppressed, governance-suppressed, and
authoring-policy-suppressed outcomes distribute across authoring styles.

`governanceSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor/)\>?

The grouped host-governance suppression-rule outcomes summarized by rule for this behavior
boundary.

`governanceOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor/)\>?

The grouped host-governance override-rule outcomes summarized by rule for this behavior
boundary.

`skippedSuppressionSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedsuppressionsummarydescriptor/)\>?

The grouped host-governance-skipped suppression-rule outcomes summarized by rule for this
behavior boundary.

`skippedOverrideSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedoverridesummarydescriptor/)\>?

The grouped host-governance-skipped override-rule outcomes summarized by rule for this
behavior boundary.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_AllowMultiplePublishedCandidates"></a> AllowMultiplePublishedCandidates

Gets a value indicating whether the policy explicitly allows multiple published candidates
for the same behavior boundary after authoring-policy enforcement.

```csharp
public bool AllowMultiplePublishedCandidates { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_AllowedAuthoringStyles"></a> AllowedAuthoringStyles

Gets the normalized authoring styles that the policy explicitly allows.

```csharp
public IReadOnlyList<string> AllowedAuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_AuthoringStyleSummaries"></a> AuthoringStyleSummaries

Gets the per-authoring-style runtime buckets that explain how this policy's outcomes
distribute across authoring styles.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicyAuthoringStyleDescriptor> AuthoringStyleSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicyAuthoringStyleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicyauthoringstyledescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier that this authoring policy applies to.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers visible for this behavior boundary.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_DisallowedAuthoringStyles"></a> DisallowedAuthoringStyles

Gets the normalized authoring styles that the policy explicitly disallows.

```csharp
public IReadOnlyList<string> DisallowedAuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_GovernanceOverrideSummaries"></a> GovernanceOverrideSummaries

Gets the grouped host-governance override-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideSummaryDescriptor> GovernanceOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_GovernanceSuppressedCandidateIds"></a> GovernanceSuppressedCandidateIds

Gets the ordered candidate identifiers that survived authoring policy but were later suppressed by host governance.

```csharp
public IReadOnlyList<string> GovernanceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_GovernanceSuppressionSummaries"></a> GovernanceSuppressionSummaries

Gets the grouped host-governance suppression-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceSuppressionSummaryDescriptor> GovernanceSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernancesuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_HostGovernanceEligibleCandidateIds"></a> HostGovernanceEligibleCandidateIds

Gets the ordered candidate identifiers whose original projections allowed host governance to participate.

```csharp
public IReadOnlyList<string> HostGovernanceEligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_HostGovernanceIneligibleCandidateIds"></a> HostGovernanceIneligibleCandidateIds

Gets the ordered candidate identifiers whose original projections kept host governance out of scope.

```csharp
public IReadOnlyList<string> HostGovernanceIneligibleCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_IsConfigured"></a> IsConfigured

Gets a value indicating whether this authoring policy came from explicit host configuration.

```csharp
public bool IsConfigured { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_PrecedenceSuppressedCandidateIds"></a> PrecedenceSuppressedCandidateIds

Gets the ordered candidate identifiers that survived authoring policy but were later suppressed by precedence.

```csharp
public IReadOnlyList<string> PrecedenceSuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_PreferredAuthoringStyle"></a> PreferredAuthoringStyle

Gets the normalized preferred authoring style when the policy declares one.

```csharp
public string? PreferredAuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_PublishedCandidateIds"></a> PublishedCandidateIds

Gets the ordered candidate identifiers that remain published after all runtime publication steps.

```csharp
public IReadOnlyList<string> PublishedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_RetainedCandidateIds"></a> RetainedCandidateIds

Gets the ordered candidate identifiers that survived authoring-policy enforcement.

```csharp
public IReadOnlyList<string> RetainedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override-rule identifiers that targeted host-governance-ineligible candidates in this behavior boundary.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SkippedOverrideSummaries"></a> SkippedOverrideSummaries

Gets the grouped host-governance-skipped override-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceSkippedOverrideSummaryDescriptor> SkippedOverrideSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedOverrideSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedoverridesummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression-rule identifiers that targeted host-governance-ineligible candidates in this behavior boundary.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SkippedSuppressionSummaries"></a> SkippedSuppressionSummaries

Gets the grouped host-governance-skipped suppression-rule outcomes summarized by rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceSkippedSuppressionSummaryDescriptor> SkippedSuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSkippedSuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceskippedsuppressionsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SuppressedCandidateIds"></a> SuppressedCandidateIds

Gets the ordered candidate identifiers that were suppressed by behavior-level authoring-policy enforcement.

```csharp
public IReadOnlyList<string> SuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SuppressionKinds"></a> SuppressionKinds

Gets the grouped authoring-policy suppression kinds visible in the runtime effect.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicySuppressionKind> SuppressionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicyDescriptor_SuppressionSummaries"></a> SuppressionSummaries

Gets the grouped authoring-policy suppression outcomes summarized by suppression kind.

```csharp
public IReadOnlyList<RestEndpointAuthoringPolicySuppressionSummaryDescriptor> SuppressionSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicySuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor/)\>
