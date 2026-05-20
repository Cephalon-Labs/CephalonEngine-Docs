---
title: Interface ITechnologyServiceContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyservicecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Configures services required by active technology profiles.

```csharp
public interface ITechnologyServiceContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ITechnologyServiceContributor_ConfigureTechnologyServices_Microsoft_Extensions_DependencyInjection_IServiceCollection_Cephalon_Abstractions_Technologies_TechnologySelection_"></a> ConfigureTechnologyServices\(IServiceCollection, TechnologySelection\)

Configures services for the active technology selection.

```csharp
void ConfigureTechnologyServices(IServiceCollection services, TechnologySelection technologies)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection receiving technology services.

`technologies` [TechnologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyselection/)

The active technology selection.
