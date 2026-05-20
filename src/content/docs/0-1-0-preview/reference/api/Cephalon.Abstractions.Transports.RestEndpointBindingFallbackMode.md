---
title: Enum RestEndpointBindingFallbackMode
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes a resolved REST request-binding fallback mode when the runtime preserves behavior beyond
the explicit binding plan.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointBindingFallbackMode>))]
public enum RestEndpointBindingFallbackMode
```

#### Extension Methods

[RestEndpointBindingFallbackModeExtensions.GetWireName\(RestEndpointBindingFallbackMode\)](Cephalon.Abstractions.Transports.RestEndpointBindingFallbackModeExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointBindingFallbackModeExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointBindingFallbackMode\_)

## Fields

`PreserveRemainingBodyFallback = 2` 

Preserves the deterministic remaining request-body fallback surface for unbound properties on
body-capable endpoints that still expose an explicit binding plan.



`PreserveSourceImplicitFallback = 1` 

Preserves the remaining implicit fallback surface from the source shorthand projection.
