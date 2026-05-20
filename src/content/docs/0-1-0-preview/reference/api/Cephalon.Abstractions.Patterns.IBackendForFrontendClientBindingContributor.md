---
title: Interface IBackendForFrontendClientBindingContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendclientbindingcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute backend-for-frontend client bindings into the active runtime.

```csharp
public interface IBackendForFrontendClientBindingContributor
```

## Methods

### <a id="Cephalon_Abstractions_Patterns_IBackendForFrontendClientBindingContributor_RegisterClientBindings_Cephalon_Abstractions_Patterns_IBackendForFrontendClientBindingRegistry_"></a> RegisterClientBindings\(IBackendForFrontendClientBindingRegistry\)

Registers one or more backend-for-frontend client bindings with the supplied registry.

```csharp
void RegisterClientBindings(IBackendForFrontendClientBindingRegistry bindings)
```

#### Parameters

`bindings` [IBackendForFrontendClientBindingRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendclientbindingregistry/)

The registry that collects contributed client-binding descriptors.
