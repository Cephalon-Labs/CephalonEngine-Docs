---
title: Enum RestEndpointAuthoringPolicySuppressionKind
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes why a REST endpoint candidate was suppressed by authoring-policy enforcement.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointAuthoringPolicySuppressionKind>))]
public enum RestEndpointAuthoringPolicySuppressionKind
```

#### Extension Methods

[RestEndpointAuthoringPolicySuppressionKindExtensions.GetWireName\(RestEndpointAuthoringPolicySuppressionKind\)](Cephalon.Abstractions.Transports.RestEndpointAuthoringPolicySuppressionKindExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointAuthoringPolicySuppressionKindExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointAuthoringPolicySuppressionKind\_)

## Fields

`DisallowedAuthoringStyle = 1` 

The candidate authoring style is explicitly disallowed by the behavior-level authoring policy.



`NotAllowedAuthoringStyle = 2` 

The candidate authoring style is outside the explicitly allowed authoring-style set.



`PreferredAuthoringStyleSelected = 3` 

The candidate was suppressed because a preferred authoring style is present for the behavior boundary.



`Unspecified = 0` 

The candidate was not classified with an authoring-policy suppression kind.
