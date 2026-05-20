---
title: Enum RestEndpointBindingSource
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsource
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Identifies which part of the HTTP request populates one resolved REST endpoint input binding.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointBindingSource>))]
public enum RestEndpointBindingSource
```

#### Extension Methods

[RestEndpointBindingSourceExtensions.GetWireName\(RestEndpointBindingSource\)](Cephalon.Abstractions.Transports.RestEndpointBindingSourceExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointBindingSourceExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointBindingSource\_)

## Fields

`Body = 4` 

Reads the value from the JSON request body.



`Header = 3` 

Reads the value from an HTTP header.



`Query = 2` 

Reads the value from the query string.



`Route = 1` 

Reads the value from a route placeholder such as <code>{orderId}</code>.



`Unspecified = 0` 

No explicit source has been selected.
