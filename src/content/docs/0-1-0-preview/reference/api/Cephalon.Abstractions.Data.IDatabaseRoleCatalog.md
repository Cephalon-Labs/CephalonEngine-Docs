---
title: Interface IDatabaseRoleCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabaserolecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active engine-owned database-role catalog for the current runtime.

```csharp
public interface IDatabaseRoleCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IDatabaseRoleCatalog_DatabaseRoles"></a> DatabaseRoles

Gets every database role visible to the current runtime.

```csharp
IReadOnlyList<DatabaseRoleDescriptor> DatabaseRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseRoleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseRoleCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one database role by its logical identifier.

```csharp
DatabaseRoleDescriptor? GetById(string databaseRoleId)
```

#### Parameters

`databaseRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database-role identifier.

#### Returns

 [DatabaseRoleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor/)?

The matching database-role descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none exists.

### <a id="Cephalon_Abstractions_Data_IDatabaseRoleCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets every database role backed by the supplied provider identifier.

```csharp
IReadOnlyList<DatabaseRoleDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to match.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseRoleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor/)\>

The matching database-role descriptors.

### <a id="Cephalon_Abstractions_Data_IDatabaseRoleCatalog_GetByResolvedRole_System_String_"></a> GetByResolvedRole\(string\)

Gets every database role that resolves to the supplied concrete role identifier.

```csharp
IReadOnlyList<DatabaseRoleDescriptor> GetByResolvedRole(string resolvedRoleId)
```

#### Parameters

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved concrete database-role identifier.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseRoleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroledescriptor/)\>

The matching database-role descriptors.
