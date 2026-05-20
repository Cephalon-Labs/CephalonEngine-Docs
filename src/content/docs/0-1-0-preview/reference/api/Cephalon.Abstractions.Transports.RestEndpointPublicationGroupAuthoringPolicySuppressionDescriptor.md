---
title: Class RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped authoring-policy suppression outcome within a REST publication-group answer.

```csharp
public sealed class RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointpublicationgroupauthoringpolicysuppressiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor__ctor_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind_System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor\(RestEndpointAuthoringPolicySuppressionKind, IReadOnlyList<string\>?\)

Creates a grouped authoring-policy suppression descriptor.

```csharp
public RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor(RestEndpointAuthoringPolicySuppressionKind kind, IReadOnlyList<string>? candidateIds = null)
```

#### Parameters

`kind` [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)

The authoring-policy suppression kind summarized by this entry.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers suppressed by this suppression kind.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers suppressed by this suppression kind.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicySuppressionDescriptor_Kind"></a> Kind

Gets the authoring-policy suppression kind summarized by this entry.

```csharp
public RestEndpointAuthoringPolicySuppressionKind Kind { get; }
```

#### Property Value

 [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)
