---
title: Enum RestEndpointOverrideBindingMode
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmode
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes how a REST endpoint override rule applies its explicit binding descriptors.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointOverrideBindingMode>))]
public enum RestEndpointOverrideBindingMode
```

#### Extension Methods

[RestEndpointOverrideBindingModeExtensions.GetWireName\(RestEndpointOverrideBindingMode\)](Cephalon.Abstractions.Transports.RestEndpointOverrideBindingModeExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointOverrideBindingModeExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointOverrideBindingMode\_)

## Fields

`MergeExplicit = 2` 

Merges configured binding descriptors into the candidate's explicit binding plan by
property name and can also remove selected explicit bindings.



`ReplaceExplicit = 1` 

Replaces the candidate's explicit binding plan with the configured descriptors.



`Unspecified = 0` 

No explicit binding-override mode has been selected.
