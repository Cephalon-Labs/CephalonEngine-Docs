---
title: Interface IInboxContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iinboxcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more inbox descriptors to the active runtime.

```csharp
public interface IInboxContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IInboxContributor_RegisterInboxes_Cephalon_Abstractions_Data_IInboxRegistry_"></a> RegisterInboxes\(IInboxRegistry\)

Registers one or more inbox descriptors with the supplied registry.

```csharp
void RegisterInboxes(IInboxRegistry inboxes)
```

#### Parameters

`inboxes` [IInboxRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-data-iinboxregistry/)

The registry that collects contributed inbox descriptors.
