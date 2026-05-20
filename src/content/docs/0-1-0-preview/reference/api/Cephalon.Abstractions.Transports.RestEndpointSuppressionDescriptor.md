---
title: Class RestEndpointSuppressionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one host-level REST endpoint suppression rule visible to the current runtime for
module-owned REST candidates that participate in host governance.

```csharp
public sealed class RestEndpointSuppressionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointSuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointsuppressiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointGovernanceSelectionBasisSummaryDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointSuppressionDescriptor\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointBindingFallbackMode\>?, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis\>?, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a REST endpoint suppression descriptor.

```csharp
public RestEndpointSuppressionDescriptor(string id, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<string>? authoringStyles = null, IReadOnlyList<int>? apiVersionMajors = null, IReadOnlyList<string>? methods = null, IReadOnlyList<string>? relativePatterns = null, IReadOnlyList<string>? routeGroupPrefixes = null, IReadOnlyList<string>? openApiDocumentNames = null, IReadOnlyList<string>? tagNames = null, IReadOnlyList<string>? endpointNames = null, IReadOnlyList<RestEndpointBindingFallbackMode>? bindingFallbackModes = null, IReadOnlyList<RestEndpointBindingDescriptor>? targetBindings = null, IReadOnlyList<string>? matchedCandidateIds = null, IReadOnlyList<string>? suppressedCandidateIds = null, IReadOnlyList<string>? skippedCandidateIds = null, IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis>? selectionBases = null, IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor>? selectionBasisSummaries = null, IReadOnlyList<string>? hostGovernanceScopes = null, IReadOnlyList<string>? behaviorIdPrefixes = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable suppression identifier.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate identifiers targeted by the suppression rule.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers targeted by the suppression rule.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The source-module identifiers targeted by the suppression rule.

`authoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized authoring styles targeted by the suppression rule. Explicit module-DSL
routes participate only when their owning route group opted into host governance.

`apiVersionMajors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The effective API major versions targeted by the suppression rule.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The effective HTTP methods targeted by the suppression rule.

`relativePatterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The shorthand relative route patterns targeted by the suppression rule.

`routeGroupPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published route-group prefixes targeted by the suppression rule.

`openApiDocumentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate OpenAPI document names targeted by the suppression rule.

`tagNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate primary OpenAPI tag names targeted by the suppression rule.

`endpointNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate endpoint names targeted by the suppression rule.

`bindingFallbackModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)\>?

The original candidate request-binding fallback modes targeted by the suppression rule.

`targetBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>?

The original candidate explicit binding descriptors targeted by the suppression rule before
any override actions are applied.

`matchedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that matched this suppression rule, including candidates
where another suppression rule won selection.

`suppressedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that were actually suppressed by this rule after
governance selection completed.

`skippedCandidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The runtime candidate identifiers that this rule would otherwise target but skipped because
the original projection did not allow host governance to participate.

`selectionBases` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)\>?

The union of decisive specificity rules that selected this suppression rule for one or more
runtime candidates.

`selectionBasisSummaries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>?

The grouped selection-basis buckets for runtime candidates that were actually suppressed by
this rule.

`hostGovernanceScopes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original candidate host-governance scopes targeted by the suppression rule.

`behaviorIdPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior-id prefixes targeted by the suppression rule. Prefix matches use the stable
dot-separated behavior-id hierarchy, so a prefix targets the exact behavior id and any
descendant behavior ids beneath that prefix.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_ApiVersionMajors"></a> ApiVersionMajors

Gets the effective API major versions targeted by this suppression rule.

```csharp
public IReadOnlyList<int> ApiVersionMajors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_AuthoringStyles"></a> AuthoringStyles

Gets the normalized authoring styles targeted by this suppression rule. Explicit
module-DSL routes participate only when their owning route group opted into host
governance.

```csharp
public IReadOnlyList<string> AuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_BehaviorIdPrefixes"></a> BehaviorIdPrefixes

Gets the behavior-id prefixes targeted by this suppression rule.

```csharp
public IReadOnlyList<string> BehaviorIdPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_BindingFallbackModes"></a> BindingFallbackModes

Gets the original candidate request-binding fallback modes targeted by this suppression
rule.

```csharp
public IReadOnlyList<RestEndpointBindingFallbackMode> BindingFallbackModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_CandidateIds"></a> CandidateIds

Gets the original candidate identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_EndpointNames"></a> EndpointNames

Gets the original candidate endpoint names targeted by this suppression rule.

```csharp
public IReadOnlyList<string> EndpointNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_HostGovernanceScopes"></a> HostGovernanceScopes

Gets the original candidate host-governance scopes targeted by this suppression rule.

```csharp
public IReadOnlyList<string> HostGovernanceScopes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_Id"></a> Id

Gets the stable suppression identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_MatchedCandidateIds"></a> MatchedCandidateIds

Gets the runtime candidate identifiers that matched this suppression rule, including
candidates where another suppression rule won selection.

```csharp
public IReadOnlyList<string> MatchedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_Methods"></a> Methods

Gets the effective HTTP methods targeted by this suppression rule.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_OpenApiDocumentNames"></a> OpenApiDocumentNames

Gets the original candidate OpenAPI document names targeted by this suppression rule.

```csharp
public IReadOnlyList<string> OpenApiDocumentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_RelativePatterns"></a> RelativePatterns

Gets the relative route patterns targeted by this suppression rule.

```csharp
public IReadOnlyList<string> RelativePatterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_RouteGroupPrefixes"></a> RouteGroupPrefixes

Gets the published route-group prefixes targeted by this suppression rule.

```csharp
public IReadOnlyList<string> RouteGroupPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_SelectionBases"></a> SelectionBases

Gets the union of decisive specificity rules that selected this suppression rule for one or
more runtime candidates.

```csharp
public IReadOnlyList<RestEndpointGovernanceRuleSelectionBasis> SelectionBases { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_SelectionBasisSummaries"></a> SelectionBasisSummaries

Gets the grouped selection-basis buckets for runtime candidates that were actually
suppressed by this rule.

```csharp
public IReadOnlyList<RestEndpointGovernanceSelectionBasisSummaryDescriptor> SelectionBasisSummaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointGovernanceSelectionBasisSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceselectionbasissummarydescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_SkippedCandidateIds"></a> SkippedCandidateIds

Gets the runtime candidate identifiers that this rule would otherwise target but skipped
because the original projection did not allow host governance to participate.

```csharp
public IReadOnlyList<string> SkippedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_SourceModuleIds"></a> SourceModuleIds

Gets the source-module identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_SuppressedCandidateIds"></a> SuppressedCandidateIds

Gets the runtime candidate identifiers that were actually suppressed by this rule after
governance selection completed.

```csharp
public IReadOnlyList<string> SuppressedCandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_TagNames"></a> TagNames

Gets the original candidate primary OpenAPI tag names targeted by this suppression rule.

```csharp
public IReadOnlyList<string> TagNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointSuppressionDescriptor_TargetBindings"></a> TargetBindings

Gets the original candidate explicit binding descriptors targeted by this suppression rule
before any override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> TargetBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>
