---
title: Enum RestEndpointCandidateStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes whether a REST endpoint candidate is published or suppressed in the active runtime.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointCandidateStatus>))]
public enum RestEndpointCandidateStatus
```

#### Extension Methods

[RestEndpointCandidateStatusExtensions.GetWireName\(RestEndpointCandidateStatus\)](Cephalon.Abstractions.Transports.RestEndpointCandidateStatusExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointCandidateStatusExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointCandidateStatus\_)

## Fields

`Published = 1` 

The candidate is published into the active public REST surface.



`Suppressed = 2` 

The candidate was considered but suppressed from the active public REST surface.



`Unspecified = 0` 

The candidate has not been classified.
