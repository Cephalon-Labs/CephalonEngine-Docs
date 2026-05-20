---
title: Interface IEventChannelContributor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelcontributor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Allows a module to contribute event channels into the active eventing runtime pack.

```csharp
public interface IEventChannelContributor
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventChannelContributor_RegisterChannels_Cephalon_Eventing_Services_IEventChannelRegistry_"></a> RegisterChannels\(IEventChannelRegistry\)

Registers one or more event channel descriptors with the supplied registry.

```csharp
void RegisterChannels(IEventChannelRegistry channels)
```

#### Parameters

`channels` [IEventChannelRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelregistry/)

The registry that collects contributed channel descriptors.
