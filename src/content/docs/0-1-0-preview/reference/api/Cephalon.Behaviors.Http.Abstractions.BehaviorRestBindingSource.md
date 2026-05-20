---
title: Enum BehaviorRestBindingSource
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Identifies the HTTP request source that should populate one behavior input property for a
module-owned REST projection.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<BehaviorRestBindingSource>))]
public enum BehaviorRestBindingSource
```

#### Extension Methods

[BehaviorRestBindingSourceExtensions.GetWireName\(BehaviorRestBindingSource\)](Cephalon.Behaviors.Http.Abstractions.BehaviorRestBindingSourceExtensions.md\#Cephalon\_Behaviors\_Http\_Abstractions\_BehaviorRestBindingSourceExtensions\_GetWireName\_Cephalon\_Behaviors\_Http\_Abstractions\_BehaviorRestBindingSource\_)

## Fields

`Body = 4` 

Reads the value from the JSON request body.



`Header = 3` 

Reads the value from an HTTP header.



`Query = 2` 

Reads the value from the query string.



`Route = 1` 

Reads the value from a route placeholder such as <code>{cartId}</code>.



`Unspecified = 0` 

No explicit source has been selected.
