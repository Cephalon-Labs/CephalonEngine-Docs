---
title: Interface IDependencyHealthContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-health-idependencyhealthcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Health](/0-1-0-preview/reference/api/cephalon-abstractions-health/)  
Assembly: Cephalon.Abstractions.dll  

Contributes dependency-health information to the runtime.

```csharp
public interface IDependencyHealthContributor
```

## Methods

### <a id="Cephalon_Abstractions_Health_IDependencyHealthContributor_GetDependencyHealth"></a> GetDependencyHealth\(\)

Returns the dependency-health reports currently known to the contributor.

```csharp
IReadOnlyList<DependencyHealthReport> GetDependencyHealth()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DependencyHealthReport](/0-1-0-preview/reference/api/cephalon-abstractions-health-dependencyhealthreport/)\>

The contributed dependency-health reports.
