---
title: Interface IOutboxRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ioutboxregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Receives outbox descriptors contributed by active modules or packages.

```csharp
public interface IOutboxRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Data_IOutboxRegistry_Add_Cephalon_Abstractions_Data_OutboxDescriptor_"></a> Add\(OutboxDescriptor\)

Adds an outbox to the current runtime composition.

```csharp
void Add(OutboxDescriptor outbox)
```

#### Parameters

`outbox` [OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)

The outbox descriptor to register.
