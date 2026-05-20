---
title: Class RestEndpointCandidateRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned REST endpoint candidate and whether it was published or suppressed.

```csharp
public sealed class RestEndpointCandidateRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointCandidateRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor__ctor_System_String_Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_System_String_System_Int32_Cephalon_Abstractions_Transports_RestEndpointCandidateStatus_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind__System_String_System_Nullable_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__System_Nullable_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__"></a> RestEndpointCandidateRuntimeDescriptor\(string, RestEndpointRuntimeDescriptor, RestEndpointCandidateProjectionDescriptor, string, int, RestEndpointCandidateStatus, string?, string?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, string?, RestEndpointAuthoringPolicySuppressionKind?, string?, RestEndpointGovernanceRuleSelectionBasis?, RestEndpointGovernanceRuleSelectionBasis?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?\)

Creates a REST endpoint candidate runtime descriptor.

```csharp
public RestEndpointCandidateRuntimeDescriptor(string id, RestEndpointRuntimeDescriptor projectedEndpoint, RestEndpointCandidateProjectionDescriptor originalProjection, string authoringStyle, int precedenceRank, RestEndpointCandidateStatus status, string? suppressedByCandidateId = null, string? suppressedBySuppressionId = null, string? appliedOverrideId = null, IReadOnlyList<string>? matchedSuppressionIds = null, IReadOnlyList<string>? matchedOverrideIds = null, string? suppressionReason = null, RestEndpointAuthoringPolicySuppressionKind? suppressedByAuthoringPolicyKind = null, string? selectedOverrideId = null, RestEndpointGovernanceRuleSelectionBasis? suppressionSelectionBasis = null, RestEndpointGovernanceRuleSelectionBasis? overrideSelectionBasis = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointOverrideActionKind>? selectedOverrideActionKinds = null, IReadOnlyList<RestEndpointOverrideActionKind>? appliedOverrideActionKinds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable candidate identifier derived from the original projection before any host-level
overrides are applied.

`projectedEndpoint` [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

The resolved endpoint shape the candidate would publish when it wins precedence.

`originalProjection` [RestEndpointCandidateProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor/)

The original projection shape contributed by the source authoring path before host-level overrides are applied.

`authoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized authoring style such as <code>behavior-module-dsl</code>.

`precedenceRank` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The precedence rank used during publication resolution. Lower values win.

`status` [RestEndpointCandidateStatus](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatus/)

The publication status assigned to the candidate.

`suppressedByCandidateId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The winning candidate identifier when this candidate was suppressed.

`suppressedBySuppressionId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The host-level suppression identifier when this candidate was suppressed by REST governance.

`appliedOverrideId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The host-level override identifier when this candidate shape was rewritten by REST governance.

`matchedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that matched this candidate before one winner was selected.

`matchedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that matched this candidate before one winner was selected.

`suppressionReason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing suppression reason when one is available.

`suppressedByAuthoringPolicyKind` [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)?

The authoring-policy suppression kind when this candidate was suppressed by behavior-level
authoring-policy enforcement.

`selectedOverrideId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected host-level override identifier when one winning override rule was resolved for
this candidate, even if that winning rule became a runtime no-op.

`suppressionSelectionBasis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?

The earliest decisive specificity rule that selected the winning suppression rule when this
candidate was suppressed by REST governance.

`overrideSelectionBasis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?

The earliest decisive specificity rule that selected the winning override rule when one was
resolved for this candidate.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression-rule identifiers that otherwise target this candidate but were
skipped because the original projection did not allow host governance to participate.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override-rule identifiers that otherwise target this candidate but were skipped
because the original projection did not allow host governance to participate.

`selectedOverrideActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The normalized action dimensions declared by the selected override rule when one winning
override rule was resolved for this candidate.

`appliedOverrideActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The normalized action dimensions that materially changed the candidate's effective runtime
answer when the selected override rule was not a runtime no-op.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_AppliedOverrideActionKinds"></a> AppliedOverrideActionKinds

Gets the normalized action dimensions that materially changed the candidate's effective
runtime answer when the selected override rule was not a runtime no-op.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> AppliedOverrideActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_AppliedOverrideId"></a> AppliedOverrideId

Gets the host-level override identifier when this candidate shape was rewritten by REST governance.

```csharp
public string? AppliedOverrideId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_AuthoringStyle"></a> AuthoringStyle

Gets the normalized authoring style used to produce the candidate.

```csharp
public string AuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_Id"></a> Id

Gets the stable candidate identifier derived from the original projection before any
host-level overrides are applied.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_MatchedOverrideIds"></a> MatchedOverrideIds

Gets the ordered override-rule identifiers that matched this candidate before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_MatchedSuppressionIds"></a> MatchedSuppressionIds

Gets the ordered suppression-rule identifiers that matched this candidate before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_OriginalProjection"></a> OriginalProjection

Gets the original projection shape contributed by the source authoring path before host-level overrides are applied.

```csharp
public RestEndpointCandidateProjectionDescriptor OriginalProjection { get; }
```

#### Property Value

 [RestEndpointCandidateProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_OverrideSelectionBasis"></a> OverrideSelectionBasis

Gets the earliest decisive specificity rule that selected the winning override rule when one
was resolved for this candidate.

```csharp
public RestEndpointGovernanceRuleSelectionBasis? OverrideSelectionBasis { get; }
```

#### Property Value

 [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_PrecedenceRank"></a> PrecedenceRank

Gets the precedence rank used during publication resolution. Lower values win.

```csharp
public int PrecedenceRank { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_ProjectedEndpoint"></a> ProjectedEndpoint

Gets the resolved endpoint shape the candidate would publish when it wins precedence.

```csharp
public RestEndpointRuntimeDescriptor ProjectedEndpoint { get; }
```

#### Property Value

 [RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SelectedOverrideActionKinds"></a> SelectedOverrideActionKinds

Gets the normalized action dimensions declared by the selected override rule when one
winning override rule was resolved for this candidate.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> SelectedOverrideActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SelectedOverrideId"></a> SelectedOverrideId

Gets the selected host-level override identifier when one winning override rule was
resolved for this candidate, even if that winning rule became a runtime no-op.

```csharp
public string? SelectedOverrideId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override-rule identifiers that otherwise target this candidate but were
skipped because the original projection did not allow host governance.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression-rule identifiers that otherwise target this candidate but were
skipped because the original projection did not allow host governance.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_Status"></a> Status

Gets whether the candidate is published or suppressed in the active runtime.

```csharp
public RestEndpointCandidateStatus Status { get; }
```

#### Property Value

 [RestEndpointCandidateStatus](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatus/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SuppressedByAuthoringPolicyKind"></a> SuppressedByAuthoringPolicyKind

Gets the authoring-policy suppression kind when this candidate was suppressed by behavior-level authoring-policy enforcement.

```csharp
public RestEndpointAuthoringPolicySuppressionKind? SuppressedByAuthoringPolicyKind { get; }
```

#### Property Value

 [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SuppressedByCandidateId"></a> SuppressedByCandidateId

Gets the winning candidate identifier when this candidate was suppressed.

```csharp
public string? SuppressedByCandidateId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SuppressedBySuppressionId"></a> SuppressedBySuppressionId

Gets the host-level suppression identifier when this candidate was suppressed by REST governance.

```csharp
public string? SuppressedBySuppressionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SuppressionReason"></a> SuppressionReason

Gets the operator-facing suppression reason when one is available.

```csharp
public string? SuppressionReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateRuntimeDescriptor_SuppressionSelectionBasis"></a> SuppressionSelectionBasis

Gets the earliest decisive specificity rule that selected the winning suppression rule when
this candidate was suppressed by REST governance.

```csharp
public RestEndpointGovernanceRuleSelectionBasis? SuppressionSelectionBasis { get; }
```

#### Property Value

 [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?
