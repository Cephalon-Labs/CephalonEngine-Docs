---
title: Class EntityFrameworkDatabaseMigrationRegistration
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-services-entityframeworkdatabasemigrationregistration
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Services](/0-1-0-preview/reference/api/cephalon-data-entityframework-services/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Describes one Entity Framework Core <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that can satisfy
one or more logical <code>Engine:Databases</code> migration targets.

```csharp
public sealed class EntityFrameworkDatabaseMigrationRegistration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDatabaseMigrationRegistration](/0-1-0-preview/reference/api/cephalon-data-entityframework-services-entityframeworkdatabasemigrationregistration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationRegistration__ctor_System_Type_System_Collections_Generic_IReadOnlyList_System_String__"></a> EntityFrameworkDatabaseMigrationRegistration\(Type, IReadOnlyList<string\>\)

Initializes a new instance of the <xref href="Cephalon.Data.EntityFramework.Services.EntityFrameworkDatabaseMigrationRegistration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkDatabaseMigrationRegistration(Type dbContextType, IReadOnlyList<string> targetRoleIds)
```

#### Parameters

`dbContextType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that can apply schema changes.

`targetRoleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The logical migration targets satisfied by the context.

## Properties

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationRegistration_DbContextType"></a> DbContextType

Gets the <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that can apply schema changes.

```csharp
public Type DbContextType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationRegistration_TargetRoleIds"></a> TargetRoleIds

Gets the logical migration targets satisfied by the context.

```csharp
public IReadOnlyList<string> TargetRoleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
