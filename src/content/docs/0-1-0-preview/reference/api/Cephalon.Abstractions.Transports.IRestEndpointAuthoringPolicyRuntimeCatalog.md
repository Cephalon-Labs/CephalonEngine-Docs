---
title: Interface IRestEndpointAuthoringPolicyRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-irestendpointauthoringpolicyruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Exposes behavior-level REST authoring-policy visibility for the current runtime.

```csharp
public interface IRestEndpointAuthoringPolicyRuntimeCatalog
```

## Remarks

This surface complements <xref href="Cephalon.Abstractions.Transports.IRestEndpointPublicationGroupRuntimeCatalog" data-throw-if-not-resolved="false"></xref> by making
authoring-policy intent plus authoring-policy-specific runtime effect readable without reopening
grouped publication answers, while also keeping explicitly configured policies visible even when
no current REST endpoint candidates match the behavior boundary.

## Properties

### <a id="Cephalon_Abstractions_Transports_IRestEndpointAuthoringPolicyRuntimeCatalog_Policies"></a> Policies

Gets the behavior-level REST authoring-policy answers visible to the current runtime.

```csharp
IReadOnlyList<RestEndpointAuthoringPolicyDescriptor> Policies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Transports_IRestEndpointAuthoringPolicyRuntimeCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets one REST authoring-policy answer by behavior identifier.

```csharp
RestEndpointAuthoringPolicyDescriptor? GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to resolve.

#### Returns

 [RestEndpointAuthoringPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicydescriptor/)?

The matching authoring-policy descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not present.
