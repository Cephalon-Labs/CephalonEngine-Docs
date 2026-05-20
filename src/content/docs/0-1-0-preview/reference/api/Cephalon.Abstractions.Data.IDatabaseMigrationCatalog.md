---
title: Interface IDatabaseMigrationCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabasemigrationcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active runtime database-migration catalog for the current Cephalon host.

```csharp
public interface IDatabaseMigrationCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IDatabaseMigrationCatalog_DatabaseMigrations"></a> DatabaseMigrations

Gets every migration target visible to the current runtime.

```csharp
IReadOnlyList<DatabaseMigrationDescriptor> DatabaseMigrations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseMigrationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseMigrationCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one migration target by its logical identifier.

```csharp
DatabaseMigrationDescriptor? GetById(string databaseMigrationId)
```

#### Parameters

`databaseMigrationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical migration-target identifier.

#### Returns

 [DatabaseMigrationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationdescriptor/)?

The matching migration-target descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none exists.
