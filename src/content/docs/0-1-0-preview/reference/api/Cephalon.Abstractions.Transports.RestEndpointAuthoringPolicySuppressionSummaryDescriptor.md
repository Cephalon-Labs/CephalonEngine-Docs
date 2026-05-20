---
title: Class RestEndpointAuthoringPolicySuppressionSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one grouped authoring-policy suppression outcome for a rule-centric REST runtime answer.

```csharp
public sealed class RestEndpointAuthoringPolicySuppressionSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointAuthoringPolicySuppressionSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionsummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionSummaryDescriptor__ctor_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind_System_Collections_Generic_IReadOnlyList_System_String__"></a> RestEndpointAuthoringPolicySuppressionSummaryDescriptor\(RestEndpointAuthoringPolicySuppressionKind, IReadOnlyList<string\>?\)

Creates an authoring-policy suppression summary descriptor.

```csharp
public RestEndpointAuthoringPolicySuppressionSummaryDescriptor(RestEndpointAuthoringPolicySuppressionKind kind, IReadOnlyList<string>? candidateIds = null)
```

#### Parameters

`kind` [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)

The authoring-policy suppression kind summarized by this entry.

`candidateIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered candidate identifiers suppressed by this suppression kind.

## Properties

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionSummaryDescriptor_CandidateIds"></a> CandidateIds

Gets the ordered candidate identifiers suppressed by this suppression kind.

```csharp
public IReadOnlyList<string> CandidateIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionSummaryDescriptor_Kind"></a> Kind

Gets the authoring-policy suppression kind summarized by this entry.

```csharp
public RestEndpointAuthoringPolicySuppressionKind Kind { get; }
```

#### Property Value

 [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)
