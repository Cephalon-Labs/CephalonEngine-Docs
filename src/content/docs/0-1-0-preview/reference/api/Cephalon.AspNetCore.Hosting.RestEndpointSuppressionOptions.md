---
title: Class RestEndpointSuppressionOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointsuppressionoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Describes one host-level suppression rule for descriptor-backed REST shorthand candidates.

```csharp
public sealed class RestEndpointSuppressionOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointSuppressionOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointsuppressionoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointBindingDescriptor__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointSuppressionOptions\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<int\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<RestEndpointBindingFallbackMode\>?, IReadOnlyList<RestEndpointBindingDescriptor\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Initializes a new instance of the <xref href="Cephalon.AspNetCore.Hosting.RestEndpointSuppressionOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RestEndpointSuppressionOptions(string id, IReadOnlyList<string>? candidateIds = null, IReadOnlyList<string>? behaviorIds = null, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<string>? authoringStyles = null, IReadOnlyList<int>? apiVersionMajors = null, IReadOnlyList<string>? methods = null, IReadOnlyList<string>? relativePatterns = null, IReadOnlyList<string>? routeGroupPrefixes = null, IReadOnlyList<string>? openApiDocumentNames = null, IReadOnlyList<string>? tagNames = null, IReadOnlyList<string>? endpointNames = null, IReadOnlyList<RestEndpointBindingFallbackMode>? bindingFallbackModes = null, IReadOnlyList<RestEndpointBindingDescriptor>? targetBindings = null, IReadOnlyList<string>? hostGovernanceScopes = null, IReadOnlyList<string>? behaviorIdPrefixes = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable suppression identifier.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand candidate identifiers targeted by the suppression rule.

`behaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers targeted by the suppression rule.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The source-module identifiers targeted by the suppression rule.

`authoringStyles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module-owned REST authoring styles targeted by the suppression rule. When omitted, the
rule targets only shorthand styles <code>behavior-module-profile</code> and
<code>behavior-module-generated</code>. Explicit <code>behavior-module-dsl</code> routes participate
only when the owning route group opted into host governance.

`apiVersionMajors` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The effective API major versions targeted by the suppression rule before any override
actions are applied.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The effective HTTP methods targeted by the suppression rule before any override actions are
applied.

`relativePatterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The shorthand relative route patterns targeted by the suppression rule before any override
actions are applied.

`routeGroupPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published route-group prefixes targeted by the suppression rule before any override
actions are applied.

`openApiDocumentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand OpenAPI document names targeted by the suppression rule before any
override actions are applied.

`tagNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand primary OpenAPI tag names targeted by the suppression rule before
any override actions are applied.

`endpointNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand endpoint names targeted by the suppression rule before any override
actions are applied.

`bindingFallbackModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingFallbackMode\>?

The original shorthand request-binding fallback modes targeted by the suppression rule
before any override actions are applied.

`targetBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>?

The original shorthand explicit binding descriptors targeted by the suppression rule before
any override actions are applied.

`hostGovernanceScopes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original shorthand host-governance scopes targeted by the suppression rule before any
override actions are applied. This selector can also serve as the rule's primary target
when candidate, behavior, and source-module identifiers are intentionally omitted.

`behaviorIdPrefixes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior-id prefixes targeted by the suppression rule. Prefix matches use the stable
dot-separated behavior-id hierarchy, so a prefix targets the exact behavior id and any
descendant behavior ids beneath that prefix.

## Properties

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_ApiVersionMajors"></a> ApiVersionMajors

Gets the effective API major versions targeted by this suppression rule before override actions are applied.

```csharp
public IReadOnlyList<int> ApiVersionMajors { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_AuthoringStyles"></a> AuthoringStyles

Gets the normalized shorthand authoring styles targeted by this suppression rule.

```csharp
public IReadOnlyList<string> AuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_BehaviorIdPrefixes"></a> BehaviorIdPrefixes

Gets the behavior-id prefixes targeted by this suppression rule.

```csharp
public IReadOnlyList<string> BehaviorIdPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_BehaviorIds"></a> BehaviorIds

Gets the behavior identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> BehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_BindingFallbackModes"></a> BindingFallbackModes

Gets the original shorthand request-binding fallback modes targeted by this suppression rule
before override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingFallbackMode> BindingFallbackModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingFallbackMode\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_CandidateIds"></a> CandidateIds

Gets the original shorthand candidate identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_EndpointNames"></a> EndpointNames

Gets the original shorthand endpoint names targeted by this suppression rule before
override actions are applied.

```csharp
public IReadOnlyList<string> EndpointNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_HasValues"></a> HasValues

Gets a value indicating whether any targeting values were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_HostGovernanceScopes"></a> HostGovernanceScopes

Gets the original shorthand host-governance scopes targeted by this suppression rule
before override actions are applied. These scopes can also act as the rule's primary target.

```csharp
public IReadOnlyList<string> HostGovernanceScopes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_Id"></a> Id

Gets the stable suppression identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_Methods"></a> Methods

Gets the effective HTTP methods targeted by this suppression rule before override actions are applied.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_OpenApiDocumentNames"></a> OpenApiDocumentNames

Gets the original shorthand OpenAPI document names targeted by this suppression rule before
override actions are applied.

```csharp
public IReadOnlyList<string> OpenApiDocumentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_RelativePatterns"></a> RelativePatterns

Gets the shorthand relative route patterns targeted by this suppression rule before override actions are applied.

```csharp
public IReadOnlyList<string> RelativePatterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_RouteGroupPrefixes"></a> RouteGroupPrefixes

Gets the published route-group prefixes targeted by this suppression rule before override actions are applied.

```csharp
public IReadOnlyList<string> RouteGroupPrefixes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_SourceModuleIds"></a> SourceModuleIds

Gets the source-module identifiers targeted by this suppression rule.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_TagNames"></a> TagNames

Gets the original shorthand primary OpenAPI tag names targeted by this suppression rule
before override actions are applied.

```csharp
public IReadOnlyList<string> TagNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions_TargetBindings"></a> TargetBindings

Gets the original shorthand explicit binding descriptors targeted by this suppression rule
before override actions are applied.

```csharp
public IReadOnlyList<RestEndpointBindingDescriptor> TargetBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointBindingDescriptor\>
