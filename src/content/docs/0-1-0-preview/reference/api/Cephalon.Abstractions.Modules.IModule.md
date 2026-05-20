---
title: Interface IModule
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules-imodule
editUrl: false
---

Namespace: [Cephalon.Abstractions.Modules](/0-1-0-preview/reference/api/cephalon-abstractions-modules/)  
Assembly: Cephalon.Abstractions.dll  

Defines the host-agnostic contract that every Cephalon module implements.

```csharp
public interface IModule
```

## Properties

### <a id="Cephalon_Abstractions_Modules_IModule_Descriptor"></a> Descriptor

Gets the module descriptor used for discovery, ordering, and manifest output.

```csharp
ModuleDescriptor Descriptor { get; }
```

#### Property Value

 [ModuleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-modules-moduledescriptor/)

## Methods

### <a id="Cephalon_Abstractions_Modules_IModule_ConfigureServices_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> ConfigureServices\(IServiceCollection\)

Configures services required by the module.

```csharp
void ConfigureServices(IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection receiving module services.

### <a id="Cephalon_Abstractions_Modules_IModule_RegisterCapabilities_Cephalon_Abstractions_Capabilities_ICapabilityRegistry_"></a> RegisterCapabilities\(ICapabilityRegistry\)

Registers capabilities exposed by the module.

```csharp
void RegisterCapabilities(ICapabilityRegistry capabilities)
```

#### Parameters

`capabilities` [ICapabilityRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities-icapabilityregistry/)

The capability registry receiving module capabilities.
