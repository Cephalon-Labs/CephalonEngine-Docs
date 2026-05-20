---
title: Interface IDatabaseMigrationOperationalPlaybookProvider
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabasemigrationoperationalplaybookprovider
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Creates the engine-owned ordered operator playbook for the current database-migration catalog.

```csharp
public interface IDatabaseMigrationOperationalPlaybookProvider
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseMigrationOperationalPlaybookProvider_CreatePlaybook"></a> CreatePlaybook\(\)

Creates the current database-migration playbook.

```csharp
DatabaseMigrationOperationalPlaybook CreatePlaybook()
```

#### Returns

 [DatabaseMigrationOperationalPlaybook](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalplaybook/)

The current ordered operator playbook for database migrations.
