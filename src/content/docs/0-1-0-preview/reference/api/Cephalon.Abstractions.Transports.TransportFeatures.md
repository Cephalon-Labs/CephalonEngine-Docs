---
title: Enum TransportFeatures
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-transportfeatures
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes the protocol capabilities supported by a transport.

```csharp
[Flags]
public enum TransportFeatures
```

## Fields

`ClientStreaming = 4` 

Indicates client-streaming interactions are supported.



`DuplexStreaming = 8` 

Indicates duplex-streaming interactions are supported.



`None = 0` 

Indicates no transport features.



`RequestResponse = 1` 

Indicates request-response interactions are supported.



`ServerStreaming = 2` 

Indicates server-streaming interactions are supported.
