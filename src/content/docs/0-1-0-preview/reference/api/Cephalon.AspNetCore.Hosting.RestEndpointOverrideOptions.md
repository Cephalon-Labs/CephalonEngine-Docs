---
title: Class RestEndpointOverrideOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointoverrideoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Describes one host-level override rule for descriptor-backed REST shorthand candidates.

```csharp
public sealed class RestEndpointOverrideOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointOverrideOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointoverrideoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_Int32__System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_Cephalon_Abstractions_Transports_RestEndpointOverrideBindingMode_System_Boolean_System_Boolean_System_Boolean_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_"></a> RestEndpointOverrideOptions\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, int?, string?, string?, string?, string?, string?, string?, string?, string?, string?, bool, IReadOnlyList<string\>?, bool, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, bool, RestEndpointOverrideBindingMode, bool, bool, bool, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointBindingFallbackMode\>?, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, bool\)

Initializes a new instance of the <xref href="Cephalon.AspNetCore.Hosting.RestEndpointOverrideOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RestEndpointOverrideOptions(string id, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<string>? authoringStyles = null, IReadOnlyList<int>? apiVersionMajors = null, IReadOnlyList<string>? methods = null, IReadOnlyList<string>? relativePatterns = null, IReadOnlyList<string>? routeGroupPrefixes = null, int? apiVersionMajor = null, string? method = null, string? pattern = null, string? routeGroupPrefix = null, string? openApiDocumentName = null, string? tagName = null, string? endpointName = null, string? summary = null, string? description = null, string? requiredCapabilityKey = null, bool clearRequiredCapability = false, IReadOnlyList<string>? requiredFeatureFlagIds = null, bool clearRequiredFeatureFlags = false, IReadOnlyList<RestEndpointBindingDescriptor>? bindings = null, IReadOnlyList<string>? removedBindingProperties = null, bool clearBindings = false, RestEndpointOverrideBindingMode bindingMode = RestEndpointOverrideBindingMode.Unspecified, bool clearEndpointName = false, bool clearSummary = false, bool clearDescription = false, IReadOnlyList<string>? openApiDocumentNames = null, IReadOnlyList<string>? tagNames = null, IReadOnlyList<string>? endpointNames = null, IReadOnlyList<RestEndpointBindingFallbackMode>? bindingFallbackModes = null, IReadOnlyList<RestEndpointBindingDescriptor>? targetBindings = null, IReadOnlyList<string>? hostGovernanceScopes = null, IReadOnlyList<string>? behaviorIdPrefixes = null, bool preserveImplicitQueryFallback = false)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable override identifier.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand candidate identifiers targeted by the override rule.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers targeted by the override rule.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The source-module identifiers targeted by the override rule.

`authoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module-owned REST authoring styles targeted by the override rule. When omitted, the
rule targets only shorthand styles <code>behavior-module-profile</code> and
<code>behavior-module-generated</code>. Explicit <code>behavior-module-dsl</code> routes participate
only when the owning route group opted into host governance.

`apiVersionMajors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The effective API major versions targeted by the override rule before any override actions
are applied.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The effective HTTP methods targeted by the override rule before any override actions are
applied.

`relativePatterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The shorthand relative route patterns targeted by the override rule before any override
actions are applied.

`routeGroupPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published route-group prefixes targeted by the override rule before any override actions
are applied.

`apiVersionMajor` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The effective API major version applied when the rule matches a shorthand candidate.

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective HTTP method applied when the rule matches a shorthand candidate.

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective relative route pattern applied when the rule matches a shorthand candidate.

`routeGroupPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective published route-group prefix applied when the rule matches a shorthand
candidate.

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI document name applied when the rule matches a shorthand candidate.

`tagName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective primary OpenAPI tag name applied when the rule matches a shorthand candidate.

`endpointName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective endpoint name applied when the rule matches a shorthand candidate.

`summary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI summary applied when the rule matches a shorthand candidate.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The effective OpenAPI description applied when the rule matches a shorthand candidate.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The required Cephalon capability key enforced at the REST boundary when the rule matches a shorthand candidate.

`clearRequiredCapability` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared Cephalon capability
boundary from the matched shorthand candidate.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The required Cephalon feature-flag identifiers enforced at the REST boundary when the rule
matches a shorthand candidate.

`clearRequiredFeatureFlags` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared Cephalon
feature-flag requirements from the matched shorthand candidate.

`bindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>?

The effective explicit request-binding plan applied when the rule matches a shorthand
candidate.

`removedBindingProperties` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The explicit shorthand binding properties removed from the source binding plan when the rule
matches.

`clearBindings` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes the matched shorthand candidate's entire
explicit binding plan and returns publication to the implicit request-binding baseline.

`bindingMode` RestEndpointOverrideBindingMode

The mode used to apply <code class="paramref">bindings</code> and
<code class="paramref">removedBindingProperties</code> to the shorthand candidate's explicit binding
plan.

`clearEndpointName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared shorthand endpoint
name from the matched candidate.

`clearSummary` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared shorthand endpoint
summary from the matched candidate.

`clearDescription` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule removes any previously declared shorthand endpoint
description from the matched candidate.

`openApiDocumentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand OpenAPI document names targeted by the override rule before any
override actions are applied.

`tagNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand primary OpenAPI tag names targeted by the override rule before any
override actions are applied.

`endpointNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand endpoint names targeted by the override rule before any override
actions are applied.

`bindingFallbackModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingFallbackMode\>?

The original shorthand request-binding fallback modes targeted by the override rule before
any override actions are applied.

`targetBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>?

The original shorthand explicit binding descriptors targeted by the override rule before
any override actions are applied.

`hostGovernanceScopes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand host-governance scopes targeted by the override rule before any
override actions are applied. This selector can also serve as the rule's primary target
when candidate, behavior, and source-module identifiers are intentionally omitted.

`behaviorIdPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior-id prefixes targeted by the override rule. Prefix matches use the stable
dot-separated behavior-id hierarchy, so a prefix targets the exact behavior id and any
descendant behavior ids beneath that prefix.

`preserveImplicitQueryFallback` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the rule opts the matched explicit-binding shorthand candidate
into preserved implicit-query fallback for any remaining unbound query properties.

## Properties

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ActionKinds"></a> ActionKinds

Gets the normalized action dimensions declared by this override rule.

```csharp
public IReadOnlyList<RestEndpointOverrideActionKind> ActionKinds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointOverrideActionKind\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ApiVersionMajor"></a> ApiVersionMajor

Gets the effective API major version applied when this override rule matches.

```csharp
public int? ApiVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ApiVersionMajors"></a> ApiVersionMajors

Gets the effective API major versions targeted by this override rule before override actions are applied.

```csharp
public IReadOnlyList<int> ApiVersionMajors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_AuthoringStyles"></a> AuthoringStyles

Gets the normalized shorthand authoring styles targeted by this override rule.

```csharp
public IReadOnlyList<string> AuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_BehaviorIdPrefixes"></a> BehaviorIdPrefixes

Gets the behavior-id prefixes targeted by this override rule.

```csharp
public IReadOnlyList<string> BehaviorIdPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_BindingFallbackModes"></a> BindingFallbackModes

Gets the original shorthand request-binding fallback modes targeted by this override rule
before any override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingFallbackMode> BindingFallbackModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingFallbackMode\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_BindingMode"></a> BindingMode

Gets how <xref href="Cephalon.AspNetCore.Hosting.RestEndpointOverrideOptions.Bindings" data-throw-if-not-resolved="false"></xref> and <xref href="Cephalon.AspNetCore.Hosting.RestEndpointOverrideOptions.RemovedBindingProperties" data-throw-if-not-resolved="false"></xref> apply to the shorthand candidate's explicit binding plan.

```csharp
public RestEndpointOverrideBindingMode BindingMode { get; }
```

#### Property Value

 RestEndpointOverrideBindingMode

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Bindings"></a> Bindings

Gets the effective explicit request-binding plan applied when this override rule matches.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> Bindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_CandidateIds"></a> CandidateIds

Gets the original shorthand candidate identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearBindings"></a> ClearBindings

Gets a value indicating whether this override rule clears the matched shorthand candidate's
entire explicit binding plan.

```csharp
public bool ClearBindings { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearDescription"></a> ClearDescription

Gets a value indicating whether this override rule clears any previously declared endpoint
description from the matched shorthand candidate.

```csharp
public bool ClearDescription { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearEndpointName"></a> ClearEndpointName

Gets a value indicating whether this override rule clears any previously declared endpoint
name from the matched shorthand candidate.

```csharp
public bool ClearEndpointName { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearRequiredCapability"></a> ClearRequiredCapability

Gets a value indicating whether this override rule clears any previously declared Cephalon
capability boundary from the matched shorthand candidate.

```csharp
public bool ClearRequiredCapability { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearRequiredFeatureFlags"></a> ClearRequiredFeatureFlags

Gets a value indicating whether this override rule clears any previously declared
Cephalon feature-flag requirements from the matched shorthand candidate.

```csharp
public bool ClearRequiredFeatureFlags { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_ClearSummary"></a> ClearSummary

Gets a value indicating whether this override rule clears any previously declared endpoint
summary from the matched shorthand candidate.

```csharp
public bool ClearSummary { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Description"></a> Description

Gets the effective OpenAPI description applied when this override rule matches.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_EndpointName"></a> EndpointName

Gets the effective endpoint name applied when this override rule matches.

```csharp
public string? EndpointName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_EndpointNames"></a> EndpointNames

Gets the original shorthand endpoint names targeted by this override rule before any
override actions are applied.

```csharp
public IReadOnlyList<string> EndpointNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_HasValues"></a> HasValues

Gets a value indicating whether any targeting values or override actions were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_HostGovernanceScopes"></a> HostGovernanceScopes

Gets the original shorthand host-governance scopes targeted by this override rule before
any override actions are applied. These scopes can also act as the rule's primary target.

```csharp
public IReadOnlyList<string> HostGovernanceScopes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Id"></a> Id

Gets the stable override identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Method"></a> Method

Gets the effective HTTP method applied when this override rule matches.

```csharp
public string? Method { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Methods"></a> Methods

Gets the effective HTTP methods targeted by this override rule before override actions are applied.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_OpenApiDocumentName"></a> OpenApiDocumentName

Gets the effective OpenAPI document name applied when this override rule matches.

```csharp
public string? OpenApiDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_OpenApiDocumentNames"></a> OpenApiDocumentNames

Gets the original shorthand OpenAPI document names targeted by this override rule before any
override actions are applied.

```csharp
public IReadOnlyList<string> OpenApiDocumentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Pattern"></a> Pattern

Gets the effective relative route pattern applied when this override rule matches.

```csharp
public string? Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_PreserveImplicitQueryFallback"></a> PreserveImplicitQueryFallback

Gets a value indicating whether this override rule opts the matched explicit-binding
shorthand candidate into preserved implicit-query fallback for remaining unbound query
properties.

```csharp
public bool PreserveImplicitQueryFallback { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RelativePatterns"></a> RelativePatterns

Gets the shorthand relative route patterns targeted by this override rule before override actions are applied.

```csharp
public IReadOnlyList<string> RelativePatterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RemovedBindingProperties"></a> RemovedBindingProperties

Gets the explicit shorthand binding properties removed from the source binding plan when this override rule matches.

```csharp
public IReadOnlyList<string> RemovedBindingProperties { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RequiredCapabilityKey"></a> RequiredCapabilityKey

Gets the required Cephalon capability key enforced at the REST boundary when this override rule matches.

```csharp
public string? RequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the required Cephalon feature-flag identifiers enforced at the REST boundary when this
override rule matches.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RouteGroupPrefix"></a> RouteGroupPrefix

Gets the effective published route-group prefix applied when this override rule matches.

```csharp
public string? RouteGroupPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_RouteGroupPrefixes"></a> RouteGroupPrefixes

Gets the published route-group prefixes targeted by this override rule before override actions are applied.

```csharp
public IReadOnlyList<string> RouteGroupPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_SourceModuleIds"></a> SourceModuleIds

Gets the source-module identifiers targeted by this override rule.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_Summary"></a> Summary

Gets the effective OpenAPI summary applied when this override rule matches.

```csharp
public string? Summary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_TagName"></a> TagName

Gets the effective primary OpenAPI tag name applied when this override rule matches.

```csharp
public string? TagName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_TagNames"></a> TagNames

Gets the original shorthand primary OpenAPI tag names targeted by this override rule before
any override actions are applied.

```csharp
public IReadOnlyList<string> TagNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions_TargetBindings"></a> TargetBindings

Gets the original shorthand explicit binding descriptors targeted by this override rule
before any override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> TargetBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>
