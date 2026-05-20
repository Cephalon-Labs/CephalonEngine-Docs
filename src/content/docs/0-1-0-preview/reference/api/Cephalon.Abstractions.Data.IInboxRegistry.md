---
title: Interface IInboxRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iinboxregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Receives inbox descriptors contributed by active modules or packages.

```csharp
public interface IInboxRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Data_IInboxRegistry_Add_Cephalon_Abstractions_Data_InboxDescriptor_"></a> Add\(InboxDescriptor\)

Adds an inbox to the current runtime composition.

```csharp
void Add(InboxDescriptor inbox)
```

#### Parameters

`inbox` [InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)

The inbox descriptor to register.
