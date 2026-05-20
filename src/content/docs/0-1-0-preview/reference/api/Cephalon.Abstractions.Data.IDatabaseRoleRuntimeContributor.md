---
title: Interface IDatabaseRoleRuntimeContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabaseroleruntimecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes additive runtime state for one or more logical database roles.

```csharp
public interface IDatabaseRoleRuntimeContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseRoleRuntimeContributor_DescribeDatabaseRoleRuntime"></a> DescribeDatabaseRoleRuntime\(\)

Describes the runtime state that should be merged into the active database-role catalog.

```csharp
IReadOnlyList<DatabaseRoleRuntimeDescriptor> DescribeDatabaseRoleRuntime()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseRoleRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleruntimedescriptor/)\>

The runtime descriptors that should enrich the active database-role catalog.
