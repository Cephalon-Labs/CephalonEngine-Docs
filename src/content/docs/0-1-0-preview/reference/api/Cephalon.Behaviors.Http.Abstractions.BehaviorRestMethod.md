---
title: Enum BehaviorRestMethod
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Defines the candidate REST verbs supported by behavior-authored REST profile metadata.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<BehaviorRestMethod>))]
public enum BehaviorRestMethod
```

#### Extension Methods

[BehaviorRestMethodExtensions.GetWireName\(BehaviorRestMethod\)](Cephalon.Behaviors.Http.Abstractions.BehaviorRestMethodExtensions.md\#Cephalon\_Behaviors\_Http\_Abstractions\_BehaviorRestMethodExtensions\_GetWireName\_Cephalon\_Behaviors\_Http\_Abstractions\_BehaviorRestMethod\_)

## Fields

`Delete = 5` 

Indicates a candidate <code>DELETE</code> projection.



`Get = 1` 

Indicates a candidate <code>GET</code> projection.



`Patch = 4` 

Indicates a candidate <code>PATCH</code> projection.



`Post = 2` 

Indicates a candidate <code>POST</code> projection.



`Put = 3` 

Indicates a candidate <code>PUT</code> projection.



`Unspecified = 0` 

No REST verb has been selected.
