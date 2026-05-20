---
title: Interface IEventChannelRegistry
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventchannelregistry
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Collects event channel descriptors contributed to the active eventing runtime pack.

```csharp
public interface IEventChannelRegistry
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventChannelRegistry_Add_Cephalon_Eventing_Services_EventChannelDescriptor_"></a> Add\(EventChannelDescriptor\)

Adds an event channel descriptor to the registry.

```csharp
void Add(EventChannelDescriptor channel)
```

#### Parameters

`channel` [EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)

The channel descriptor to contribute.
