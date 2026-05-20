---
title: Class RestEndpointOverrideDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one host-level REST endpoint override rule visible to the current runtime for
module-owned REST candidates that participate in host governance.

```csharp
public sealed class RestEndpointOverrideDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointOverrideDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Int32__System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_Cephalon_Abstractions_Transports_RestEndpointOverrideBindingMode_System_Boolean_System_Boolean_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideActionKindSummaryDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceOverrideActionKindSummaryDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_"></a> RestEndpointOverrideDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, int?, string?, string?, string?, string?, string?, string?, string?, string?, string?, bool, IReadOnlyList<string\>?, bool, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, bool, RestEndpointOverrideBindingMode, bool, bool, bool, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointBindingFallbackMode\>?, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor\>?, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, bool\)

Creates a REST endpoint override descriptor.

```csharp
public RestEndpointOverrideDescriptor(string id, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<string>? authoringStyles = null, IReadOnlyList<int>? apiVersionMajors = null, IReadOnlyList<string>? methods = null, IReadOnlyList<string>? relativePatterns = null, IReadOnlyList<string>? routeGroupPrefixes = null, int? apiVersionMajor = null, string? method = null, string? pattern = null, string? routeGroupPrefix = null, string? openApiDocumentName = null, string? tagName = null, string? endpointName = null, string? summary = null, string? description = null, string? requiredCapabilityKey = null, bool clearRequiredCapability = false, IReadOnlyList<string>? requiredFeatureFlagIds = null, bool clearRequiredFeatureFlags = false, IReadOnlyList<RestEndpointBindingDescriptor>? bindings = null, IReadOnlyList<string>? removedBindingProperties = null, bool clearBindings = false, RestEndpointOverrideBindingMode bindingMode = RestEndpointOverrideBindingMode.Unspecified, bool clearEndpointName = false, bool clearSummary = false, bool clearDescription = false, IReadOnlyList<string>? openApiDocumentNames = null, IReadOnlyList<string>? tagNames = null, IReadOnlyList<string>? endpointNames = null, IReadOnlyList<RestEndpointBindingFallbackMode>? bindingFallbackModes = null, IReadOnlyList<RestEndpointBindingDescriptor>? targetBindings = null, IReadOnlyList<string>? matchedCandidateIds = null, IReadOnlyList<string>? selectedCandidateIds = null, IReadOnlyList<string>? appliedCandidateIds = null, IReadOnlyList<string>? skippedCandidateIds = null, IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis>? selectionBases = null, IReadOnlyList<RestEndpointOverrideActionKind>? selectedActionKinds = null, IReadOnlyList<RestEndpointOverrideActionKind>? appliedActionKinds = null, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor>? selectionBasisSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor>? selectedActionKindSummaries = null, IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor>? appliedActionKindSummaries = null, IReadOnlyList<string>? hostGovernanceScopes = null, IReadOnlyList<string>? behaviorIdPrefixes = null, bool preserveImplicitQueryFallback = false)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate identifiers targeted by the override rule.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers targeted by the override rule.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The source-module identifiers targeted by the override rule.

`authoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized authoring styles targeted by the override rule. Explicit module-DSL routes
participate only when their owning route group opted into host governance.

`apiVersionMajors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The effective API major versions targeted by the override rule.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The effective HTTP methods targeted by the override rule.

`relativePatterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The shorthand relative route patterns targeted by the override rule.

`routeGroupPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published route-group prefixes targeted by the override rule.

`apiVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The effective API major version applied when the rule matches.

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective HTTP method applied when the rule matches.

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective relative route pattern applied when the rule matches.

`routeGroupPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective published route-group prefix applied when the rule matches.

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI document name applied when the rule matches.

`tagName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective primary OpenAPI tag name applied when the rule matches.

`endpointName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective endpoint name applied when the rule matches.

`summary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI summary applied when the rule matches.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI description applied when the rule matches.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The required Cephalon capability key enforced at the REST boundary when the rule matches.

`clearRequiredCapability` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared Cephalon capability
boundary from the matched candidate.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The required Cephalon feature-flag identifiers enforced at the REST boundary when the rule
matches.

`clearRequiredFeatureFlags` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared Cephalon feature-flag
requirements from the matched candidate.

`bindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>?

The effective explicit request-binding plan applied when the rule matches.

`removedBindingProperties` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit binding properties removed from the source binding plan when the rule matches.

`clearBindings` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes the matched candidate's entire explicit
binding plan and returns publication to the implicit request-binding baseline.

`bindingMode` [RestEndpointOverrideBindingMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmode/)

The mode used to apply <code class="paramref">bindings</code> and
<code class="paramref">removedBindingProperties</code> to the candidate's explicit binding plan.

`clearEndpointName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared endpoint name from
the matched candidate.

`clearSummary` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared endpoint summary
from the matched candidate.

`clearDescription` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared endpoint description
from the matched candidate.

`openApiDocumentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate OpenAPI document names targeted by the override rule before override
actions are applied.

`tagNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate primary OpenAPI tag names targeted by the override rule before
override actions are applied.

`endpointNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate endpoint names targeted by the override rule before override
actions are applied.

`bindingFallbackModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)\>?

The original candidate request-binding fallback modes targeted by the override rule before
override actions are applied.

`targetBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>?

The original candidate explicit binding descriptors targeted by the override rule before
override actions are applied.

`matchedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that matched this override rule, including candidates
where another override rule won selection.

`selectedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that selected this override rule as the winning rule,
including runtime no-op selections.

`appliedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers whose effective answer was materially changed by this
override rule.

`skippedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that this rule would otherwise target but skipped because
the original projection did not allow host governance to participate.

`selectionBases` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)\>?

The union of decisive specificity rules that selected this override rule for one or more
runtime candidates.

`selectedActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The union of configured override action dimensions that were selected for one or more
runtime candidates, including runtime no-op selections.

`appliedActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The union of override action dimensions that materially changed one or more runtime
candidates.

`selectionBasisSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>?

The grouped selection-basis buckets for runtime candidates that selected this override
rule, including runtime no-op selections.

`selectedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped override-action buckets for runtime candidates that selected this override
rule, including runtime no-op selections.

`appliedActionKindSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>?

The grouped override-action buckets for runtime candidates materially changed by this
override rule.

`hostGovernanceScopes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate host-governance scopes targeted by the override rule before
override actions are applied.

`behaviorIdPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior-id prefixes targeted by the override rule. Prefix matches use the stable
dot-separated behavior-id hierarchy, so a prefix targets the exact behavior id and any
descendant behavior ids beneath that prefix.

`preserveImplicitQueryFallback` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule opts the matched explicit-binding shorthand candidate
into preserved implicit-query fallback for any remaining unbound query properties.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ActionKinds"></a> ActionKinds

Gets the normalized action dimensions declared by this override rule.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> ActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ApiVersionMajor"></a> ApiVersionMajor

Gets the effective API major version applied when this override rule matches.

```csharp
public int? ApiVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ApiVersionMajors"></a> ApiVersionMajors

Gets the effective API major versions targeted by this override rule.

```csharp
public IReadOnlyList<int> ApiVersionMajors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_AppliedActionKindSummaries"></a> AppliedActionKindSummaries

Gets the grouped override-action buckets for runtime candidates materially changed by this
override rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor> AppliedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_AppliedActionKinds"></a> AppliedActionKinds

Gets the union of override action dimensions that materially changed one or more runtime
candidates.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> AppliedActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_AppliedCandidateIds"></a> AppliedCandidateIds

Gets the runtime candidate identifiers whose effective answer was materially changed by this
override rule.

```csharp
public IReadOnlyList<string> AppliedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_AuthoringStyles"></a> AuthoringStyles

Gets the normalized authoring styles targeted by this override rule. Explicit module-DSL
routes participate only when their owning route group opted into host governance.

```csharp
public IReadOnlyList<string> AuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_BehaviorIdPrefixes"></a> BehaviorIdPrefixes

Gets the behavior-id prefixes targeted by this override rule.

```csharp
public IReadOnlyList<string> BehaviorIdPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_BindingFallbackModes"></a> BindingFallbackModes

Gets the original candidate request-binding fallback modes targeted by this override rule.

```csharp
public IReadOnlyList<RestEndpointBindingFallbackMode> BindingFallbackModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_BindingMode"></a> BindingMode

Gets how <xref href="Cephalon.Abstractions.Transports.RestEndpointOverrideDescriptor.Bindings" data-throw-if-not-resolved="false"></xref> and <xref href="Cephalon.Abstractions.Transports.RestEndpointOverrideDescriptor.RemovedBindingProperties" data-throw-if-not-resolved="false"></xref> apply to the
candidate's explicit binding plan.

```csharp
public RestEndpointOverrideBindingMode BindingMode { get; }
```

#### Property Value

 [RestEndpointOverrideBindingMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmode/)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Bindings"></a> Bindings

Gets the effective explicit request-binding plan applied when this override rule matches.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> Bindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_CandidateIds"></a> CandidateIds

Gets the original candidate identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearBindings"></a> ClearBindings

Gets a value indicating whether this override rule clears the matched candidate's entire
explicit binding plan.

```csharp
public bool ClearBindings { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearDescription"></a> ClearDescription

Gets a value indicating whether this override rule clears any previously declared endpoint
description from the matched candidate.

```csharp
public bool ClearDescription { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearEndpointName"></a> ClearEndpointName

Gets a value indicating whether this override rule clears any previously declared endpoint
name from the matched candidate.

```csharp
public bool ClearEndpointName { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearRequiredCapability"></a> ClearRequiredCapability

Gets a value indicating whether this override rule clears any previously declared Cephalon
capability boundary from the matched candidate.

```csharp
public bool ClearRequiredCapability { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearRequiredFeatureFlags"></a> ClearRequiredFeatureFlags

Gets a value indicating whether this override rule clears any previously declared
Cephalon feature-flag requirements from the matched candidate.

```csharp
public bool ClearRequiredFeatureFlags { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_ClearSummary"></a> ClearSummary

Gets a value indicating whether this override rule clears any previously declared endpoint
summary from the matched candidate.

```csharp
public bool ClearSummary { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Description"></a> Description

Gets the effective OpenAPI description applied when this override rule matches.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_EndpointName"></a> EndpointName

Gets the effective endpoint name applied when this override rule matches.

```csharp
public string? EndpointName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_EndpointNames"></a> EndpointNames

Gets the original candidate endpoint names targeted by this override rule.

```csharp
public IReadOnlyList<string> EndpointNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_HostGovernanceScopes"></a> HostGovernanceScopes

Gets the original candidate host-governance scopes targeted by this override rule.

```csharp
public IReadOnlyList<string> HostGovernanceScopes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_MatchedCandidateIds"></a> MatchedCandidateIds

Gets the runtime candidate identifiers that matched this override rule, including
candidates where another override rule won selection.

```csharp
public IReadOnlyList<string> MatchedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Method"></a> Method

Gets the effective HTTP method applied when this override rule matches.

```csharp
public string? Method { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Methods"></a> Methods

Gets the effective HTTP methods targeted by this override rule.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_OpenApiDocumentName"></a> OpenApiDocumentName

Gets the effective OpenAPI document name applied when this override rule matches.

```csharp
public string? OpenApiDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_OpenApiDocumentNames"></a> OpenApiDocumentNames

Gets the original candidate OpenAPI document names targeted by this override rule.

```csharp
public IReadOnlyList<string> OpenApiDocumentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Pattern"></a> Pattern

Gets the effective relative route pattern applied when this override rule matches.

```csharp
public string? Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_PreserveImplicitQueryFallback"></a> PreserveImplicitQueryFallback

Gets a value indicating whether this override rule opts the matched explicit-binding
shorthand candidate into preserved implicit-query fallback for remaining unbound query
properties.

```csharp
public bool PreserveImplicitQueryFallback { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RelativePatterns"></a> RelativePatterns

Gets the relative route patterns targeted by this override rule.

```csharp
public IReadOnlyList<string> RelativePatterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RemovedBindingProperties"></a> RemovedBindingProperties

Gets the explicit binding properties removed from the source binding plan when this override rule matches.

```csharp
public IReadOnlyList<string> RemovedBindingProperties { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RequiredCapabilityKey"></a> RequiredCapabilityKey

Gets the required Cephalon capability key enforced at the REST boundary when this override rule matches.

```csharp
public string? RequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the required Cephalon feature-flag identifiers enforced at the REST boundary when this
override rule matches.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RouteGroupPrefix"></a> RouteGroupPrefix

Gets the effective published route-group prefix applied when this override rule matches.

```csharp
public string? RouteGroupPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_RouteGroupPrefixes"></a> RouteGroupPrefixes

Gets the published route-group prefixes targeted by this override rule.

```csharp
public IReadOnlyList<string> RouteGroupPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SelectedActionKindSummaries"></a> SelectedActionKindSummaries

Gets the grouped override-action buckets for runtime candidates that selected this override
rule, including runtime no-op selections.

```csharp
public IReadOnlyList<RestEndpointGovernanceOverrideActionKindSummaryDescriptor> SelectedActionKindSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceOverrideActionKindSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceoverrideactionkindsummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SelectedActionKinds"></a> SelectedActionKinds

Gets the union of configured override action dimensions that were selected for one or more
runtime candidates, including runtime no-op selections.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> SelectedActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SelectedCandidateIds"></a> SelectedCandidateIds

Gets the runtime candidate identifiers that selected this override rule as the winning
rule, including runtime no-op selections.

```csharp
public IReadOnlyList<string> SelectedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SelectionBases"></a> SelectionBases

Gets the union of decisive specificity rules that selected this override rule for one or
more runtime candidates.

```csharp
public IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis> SelectionBases { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SelectionBasisSummaries"></a> SelectionBasisSummaries

Gets the grouped selection-basis buckets for runtime candidates that selected this override
rule, including runtime no-op selections.

```csharp
public IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor> SelectionBasisSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SkippedCandidateIds"></a> SkippedCandidateIds

Gets the runtime candidate identifiers that this rule would otherwise target but skipped
because the original projection did not allow host governance to participate.

```csharp
public IReadOnlyList<string> SkippedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_SourceModuleIds"></a> SourceModuleIds

Gets the source-module identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_Summary"></a> Summary

Gets the effective OpenAPI summary applied when this override rule matches.

```csharp
public string? Summary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_TagName"></a> TagName

Gets the effective primary OpenAPI tag name applied when this override rule matches.

```csharp
public string? TagName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_TagNames"></a> TagNames

Gets the original candidate primary OpenAPI tag names targeted by this override rule.

```csharp
public IReadOnlyList<string> TagNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideDescriptor_TargetBindings"></a> TargetBindings

Gets the original candidate explicit binding descriptors targeted by this override rule
before override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> TargetBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>
