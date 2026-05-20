---
title: Interface IOutboxContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ioutboxcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more outbox descriptors to the active runtime.

```csharp
public interface IOutboxContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IOutboxContributor_RegisterOutboxes_Cephalon_Abstractions_Data_IOutboxRegistry_"></a> RegisterOutboxes\(IOutboxRegistry\)

Registers one or more outbox descriptors with the supplied registry.

```csharp
void RegisterOutboxes(IOutboxRegistry outboxes)
```

#### Parameters

`outboxes` [IOutboxRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-data-ioutboxregistry/)

The registry that collects contributed outbox descriptors.
