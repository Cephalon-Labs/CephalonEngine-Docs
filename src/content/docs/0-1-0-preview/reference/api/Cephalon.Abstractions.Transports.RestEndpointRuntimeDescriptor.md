---
title: Class RestEndpointRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one resolved public REST endpoint visible to the current runtime.

```csharp
public sealed class RestEndpointRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_Int32__System_String_System_String_System_String_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Transports_RestEndpointCandidateProjectionDescriptor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Nullable_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointRuntimeDescriptor\(string, string, string, string, string, string?, string?, int?, string?, string?, string?, int?, IReadOnlyList<string\>?, string?, string?, string?, string?, string?, string?, RestEndpointCandidateProjectionDescriptor?, IReadOnlyList<RestEndpointBindingDescriptor\>?, RestEndpointBindingFallbackMode?, IReadOnlyDictionary<string, string\>?, string?, string?, string?, string?, string?, string?, string?, string?, IReadOnlyList<string\>?, string?, RestEndpointGovernanceRuleSelectionBasis?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?, IReadOnlyList<RestEndpointOverrideActionKind\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a resolved REST endpoint runtime descriptor.

```csharp
public RestEndpointRuntimeDescriptor(string id, string transportId, string sourceKind, string method, string routePattern, string? sourceModuleId = null, string? sourceModuleVersion = null, int? sourceModuleVersionMajor = null, string? behaviorId = null, string? endpointName = null, string? openApiDocumentName = null, int? apiVersionMajor = null, IReadOnlyList<string>? tags = null, string? summary = null, string? description = null, string? originalEndpointName = null, string? originalSummary = null, string? originalDescription = null, string? candidateId = null, RestEndpointCandidateProjectionDescriptor? originalProjection = null, IReadOnlyList<RestEndpointBindingDescriptor>? bindingDescriptors = null, RestEndpointBindingFallbackMode? bindingFallbackMode = null, IReadOnlyDictionary<string, string>? metadata = null, string? authoringStyle = null, string? routeGroupPrefix = null, string? relativePattern = null, string? behaviorType = null, string? sourceId = null, string? requiredCapabilityKey = null, string? originalRequiredCapabilityKey = null, string? appliedOverrideId = null, IReadOnlyList<string>? matchedOverrideIds = null, string? selectedOverrideId = null, RestEndpointGovernanceRuleSelectionBasis? overrideSelectionBasis = null, IReadOnlyList<string>? skippedSuppressionIds = null, IReadOnlyList<string>? skippedOverrideIds = null, IReadOnlyList<RestEndpointOverrideActionKind>? selectedOverrideActionKinds = null, IReadOnlyList<RestEndpointOverrideActionKind>? appliedOverrideActionKinds = null, IReadOnlyList<string>? requiredFeatureFlagIds = null, IReadOnlyList<string>? originalRequiredFeatureFlagIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable endpoint identifier.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier that published the endpoint.

`sourceKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source kind that produced the endpoint, such as <code>module-dsl</code> or <code>manual</code>.

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved HTTP method.

`routePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved route pattern including the host REST prefix.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable source-module identifier when one is known.

`sourceModuleVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared source-module version when one is available.

`sourceModuleVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The parsed source-module major version when one is available.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable behavior identifier when the endpoint dispatches through a Cephalon behavior.

`endpointName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved endpoint or operation name when one is available.

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved OpenAPI document name when one is available.

`apiVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The resolved public API major version when one is available.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The resolved OpenAPI tags when any are published.

`summary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved endpoint summary when one is available.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved endpoint description when one is available.

`originalEndpointName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The original endpoint or operation name before later endpoint-governance rewrites when the
runtime can classify that source answer.

`originalSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The original endpoint summary before later endpoint-governance rewrites when the runtime
can classify that source answer.

`originalDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The original endpoint description before later endpoint-governance rewrites when the
runtime can classify that source answer.

`candidateId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable originating candidate identifier when this endpoint was published from the
module-owned behavior projection pipeline.

`originalProjection` [RestEndpointCandidateProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor/)?

The original projection shape before later host-level overrides are applied when the
endpoint was published from the module-owned behavior projection pipeline.

`bindingDescriptors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>?

The resolved request-binding descriptors when the endpoint exposes an explicit binding plan.

`bindingFallbackMode` [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)?

The resolved request-binding fallback mode when the endpoint preserves deterministic
request-binding behavior beyond the explicit binding plan, such as preserved source
implicit-query fallback or preserved remaining request-body fallback.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional additive metadata.

`authoringStyle` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized authoring style such as <code>behavior-module-profile</code> or <code>minimal-api</code>
when the runtime can classify how the endpoint was published.

`routeGroupPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved route-group prefix including the host REST prefix when the runtime can classify
the grouped publication boundary that produced the endpoint.

`relativePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The resolved route pattern relative to the grouped publication boundary when the runtime can
classify that source shape.

`behaviorType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The concrete behavior implementation type name when the endpoint dispatches through a
Cephalon behavior and the runtime can classify that implementation identity.

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable source identity for the published endpoint when the runtime can classify the
authored source shape behind that publication.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The required Cephalon capability key enforced at the REST boundary when one is available.

`originalRequiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The original required Cephalon capability key before later endpoint-governance rewrites when
the runtime can classify that source answer.

`appliedOverrideId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The host-level override identifier when runtime governance actually changes the published
endpoint answer.

`matchedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override identifiers that matched this endpoint's originating candidate before
one winner was selected.

`selectedOverrideId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected override identifier when one winning override rule was resolved for this
endpoint's originating candidate, even if that winning rule became a runtime no-op.

`overrideSelectionBasis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?

The earliest decisive specificity rule that selected the winning override rule when one was
resolved for this endpoint's originating candidate.

`skippedSuppressionIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered suppression identifiers that otherwise target this endpoint's originating
candidate but were skipped because the original projection did not allow host governance to
participate.

`skippedOverrideIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered override identifiers that otherwise target this endpoint's originating
candidate but were skipped because the original projection did not allow host governance to
participate.

`selectedOverrideActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The normalized action dimensions declared by the selected override rule when one winning
override rule was resolved for this endpoint's originating candidate.

`appliedOverrideActionKinds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>?

The normalized action dimensions that materially changed the published endpoint answer when
the selected override rule was not a runtime no-op.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The required Cephalon feature-flag identifiers enforced at the REST boundary when any are
available.

`originalRequiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original required Cephalon feature-flag identifiers before later endpoint-governance
rewrites when the runtime can classify that source answer.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_ApiVersionMajor"></a> ApiVersionMajor

Gets the resolved public API major version when one is available.

```csharp
public int? ApiVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_AppliedOverrideActionKinds"></a> AppliedOverrideActionKinds

Gets the normalized action dimensions that materially changed the published endpoint answer
when the selected override rule was not a runtime no-op.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> AppliedOverrideActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_AppliedOverrideId"></a> AppliedOverrideId

Gets the host-level override identifier when runtime governance actually changes the
published endpoint answer.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? AppliedOverrideId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_AuthoringStyle"></a> AuthoringStyle

Gets the normalized authoring style such as <code>behavior-module-profile</code> or
<code>minimal-api</code> when the runtime can classify how the endpoint was published.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? AuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier when the endpoint dispatches through a Cephalon behavior.

```csharp
public string? BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_BehaviorType"></a> BehaviorType

Gets the concrete behavior implementation type name when the endpoint dispatches through a
Cephalon behavior and the runtime can classify that implementation identity.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? BehaviorType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_BindingDescriptors"></a> BindingDescriptors

Gets the resolved request-binding descriptors when the endpoint exposes an explicit binding plan.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> BindingDescriptors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingdescriptor/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_BindingFallbackMode"></a> BindingFallbackMode

Gets the resolved request-binding fallback mode when the endpoint preserves deterministic
request-binding behavior beyond the explicit binding plan, such as preserved source
implicit-query fallback or preserved remaining request-body fallback.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public RestEndpointBindingFallbackMode? BindingFallbackMode { get; }
```

#### Property Value

 [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_CandidateId"></a> CandidateId

Gets the stable originating candidate identifier when this endpoint was published from the
module-owned behavior projection pipeline.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? CandidateId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Description"></a> Description

Gets the resolved endpoint description when one is available.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_EndpointName"></a> EndpointName

Gets the resolved endpoint or operation name when one is available.

```csharp
public string? EndpointName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Id"></a> Id

Gets the stable endpoint identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_MatchedOverrideIds"></a> MatchedOverrideIds

Gets the ordered override identifiers that matched this endpoint's originating candidate
before one winner was selected.

```csharp
public IReadOnlyList<string> MatchedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Metadata"></a> Metadata

Gets optional additive metadata. Stable REST endpoint keys are defined by
<xref href="Cephalon.Abstractions.Transports.RestEndpointRuntimeMetadataKeys" data-throw-if-not-resolved="false"></xref>.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Method"></a> Method

Gets the resolved HTTP method.

```csharp
public string Method { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OpenApiDocumentName"></a> OpenApiDocumentName

Gets the resolved OpenAPI document name when one is available.

```csharp
public string? OpenApiDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalDescription"></a> OriginalDescription

Gets the original endpoint description before later endpoint-governance rewrites when the
runtime can classify that source answer.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? OriginalDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalEndpointName"></a> OriginalEndpointName

Gets the original endpoint or operation name before later endpoint-governance rewrites
when the runtime can classify that source answer.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? OriginalEndpointName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalProjection"></a> OriginalProjection

Gets the original projection shape before later host-level overrides are applied when the
endpoint was published from the module-owned behavior projection pipeline, including whether
host governance was allowed to participate for that source route.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public RestEndpointCandidateProjectionDescriptor? OriginalProjection { get; }
```

#### Property Value

 [RestEndpointCandidateProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidateprojectiondescriptor/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalRequiredCapabilityKey"></a> OriginalRequiredCapabilityKey

Gets the original required Cephalon capability key before later endpoint-governance rewrites
when the runtime can classify that source answer.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? OriginalRequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalRequiredFeatureFlagIds"></a> OriginalRequiredFeatureFlagIds

Gets the original required Cephalon feature-flag identifiers before later
endpoint-governance rewrites when the runtime can classify that source answer.

```csharp
public IReadOnlyList<string> OriginalRequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OriginalSummary"></a> OriginalSummary

Gets the original endpoint summary before later endpoint-governance rewrites when the
runtime can classify that source answer.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? OriginalSummary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_OverrideSelectionBasis"></a> OverrideSelectionBasis

Gets the earliest decisive specificity rule that selected the winning override rule when one
was resolved for this endpoint's originating candidate.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public RestEndpointGovernanceRuleSelectionBasis? OverrideSelectionBasis { get; }
```

#### Property Value

 [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_RelativePattern"></a> RelativePattern

Gets the resolved route pattern relative to the grouped publication boundary when the
runtime can classify that source shape.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? RelativePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_RequiredCapabilityKey"></a> RequiredCapabilityKey

Gets the required Cephalon capability key enforced at the REST boundary when one is available.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? RequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the required Cephalon feature-flag identifiers enforced at the REST boundary when any
are available.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_RouteGroupPrefix"></a> RouteGroupPrefix

Gets the resolved route-group prefix including the host REST prefix when the runtime can
classify the grouped publication boundary that produced the endpoint.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? RouteGroupPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_RoutePattern"></a> RoutePattern

Gets the resolved route pattern including the host REST prefix.

```csharp
public string RoutePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SelectedOverrideActionKinds"></a> SelectedOverrideActionKinds

Gets the normalized action dimensions declared by the selected override rule when one
winning override rule was resolved for this endpoint's originating candidate.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> SelectedOverrideActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SelectedOverrideId"></a> SelectedOverrideId

Gets the selected override identifier when one winning override rule was resolved for this
endpoint's originating candidate, even if that winning rule became a runtime no-op.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? SelectedOverrideId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SkippedOverrideIds"></a> SkippedOverrideIds

Gets the ordered override identifiers that otherwise target this endpoint's originating
candidate but were skipped because the original projection did not allow host governance.

```csharp
public IReadOnlyList<string> SkippedOverrideIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SkippedSuppressionIds"></a> SkippedSuppressionIds

Gets the ordered suppression identifiers that otherwise target this endpoint's originating
candidate but were skipped because the original projection did not allow host governance.

```csharp
public IReadOnlyList<string> SkippedSuppressionIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SourceId"></a> SourceId

Gets the stable source identity for the published endpoint when the runtime can classify the
authored source shape behind that publication.

```csharp
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? SourceId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SourceKind"></a> SourceKind

Gets the source kind that produced the endpoint.

```csharp
public string SourceKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the stable source-module identifier when one is known.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SourceModuleVersion"></a> SourceModuleVersion

Gets the declared source-module version when one is available.

```csharp
public string? SourceModuleVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_SourceModuleVersionMajor"></a> SourceModuleVersionMajor

Gets the parsed source-module major version when one is available.

```csharp
public int? SourceModuleVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Summary"></a> Summary

Gets the resolved endpoint summary when one is available.

```csharp
public string? Summary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_Tags"></a> Tags

Gets the resolved OpenAPI tags when any are published.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeDescriptor_TransportId"></a> TransportId

Gets the stable transport identifier that published the endpoint.

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
