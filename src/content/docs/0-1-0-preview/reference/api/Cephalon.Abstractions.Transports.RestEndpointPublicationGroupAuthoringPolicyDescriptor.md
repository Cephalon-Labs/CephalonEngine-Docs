---
title: Class RestEndpointPublicationGroupAuthoringPolicyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes the effective authoring-policy intent for one behavior-level REST publication group.

```csharp
public sealed class RestEndpointPublicationGroupAuthoringPolicyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This descriptor captures authoring-policy intent, not the already-resolved publication outcome.
The grouped publication answer remains authoritative for which candidates actually published or
were suppressed at runtime.

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor__ctor_System_String_System_Boolean_System_Boolean_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointPublicationGroupAuthoringPolicyDescriptor\(string, bool, bool, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a behavior-level REST publication-group authoring policy descriptor.

```csharp
public RestEndpointPublicationGroupAuthoringPolicyDescriptor(string behaviorId, bool isConfigured = false, bool allowMultiplePublishedCandidates = false, string? preferredAuthoringStyle = null, IReadOnlyList<string>? allowedAuthoringStyles = null, IReadOnlyList<string>? disallowedAuthoringStyles = null)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier that this authoring policy applies to.

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

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_AllowMultiplePublishedCandidates"></a> AllowMultiplePublishedCandidates

Gets a value indicating whether the policy explicitly allows multiple published candidates
for the same behavior boundary after authoring-policy enforcement.

```csharp
public bool AllowMultiplePublishedCandidates { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_AllowedAuthoringStyles"></a> AllowedAuthoringStyles

Gets the normalized authoring styles that the policy explicitly allows.

```csharp
public IReadOnlyList<string> AllowedAuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier that this authoring policy applies to.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_DisallowedAuthoringStyles"></a> DisallowedAuthoringStyles

Gets the normalized authoring styles that the policy explicitly disallows.

```csharp
public IReadOnlyList<string> DisallowedAuthoringStyles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_IsConfigured"></a> IsConfigured

Gets a value indicating whether this authoring policy came from explicit host configuration.

```csharp
public bool IsConfigured { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor_PreferredAuthoringStyle"></a> PreferredAuthoringStyle

Gets the normalized preferred authoring style when the policy declares one.

```csharp
public string? PreferredAuthoringStyle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
