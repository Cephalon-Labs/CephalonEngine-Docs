---
title: Interface IDatabaseMigrationContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabasemigrationcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more database-migration descriptors to the active Cephalon runtime.

```csharp
public interface IDatabaseMigrationContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseMigrationContributor_DescribeDatabaseMigrations"></a> DescribeDatabaseMigrations\(\)

Describes the database-migration targets that should appear in the active runtime catalog.

```csharp
IReadOnlyList<DatabaseMigrationDescriptor> DescribeDatabaseMigrations()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationdescriptor/)\>

The migration descriptors contributed by the current provider or module pack.
