---
title: Interface IBackendForFrontendClientBindingRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendclientbindingregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Collects backend-for-frontend client binding descriptors contributed to the active runtime.

```csharp
public interface IBackendForFrontendClientBindingRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendClientBindingRegistry_Add_Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_"></a> Add\(BackendForFrontendClientBindingDescriptor\)

Adds a backend-for-frontend client binding descriptor to the current runtime composition.

```csharp
void Add(BackendForFrontendClientBindingDescriptor binding)
```

#### Parameters

`binding` [BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)

The client binding descriptor to register.
