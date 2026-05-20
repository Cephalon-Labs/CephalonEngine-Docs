---
title: Class EntityFrameworkDatabaseRoleResolver
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaseroleresolver
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Configuration](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Resolves <code>Engine:Databases</code> role selections into Entity Framework-specific role contexts.

```csharp
public static class EntityFrameworkDatabaseRoleResolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDatabaseRoleResolver](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaseroleresolver/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveHistory_System_IServiceProvider_"></a> ResolveHistory\(IServiceProvider\)

Resolves the audit-history database role.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveHistory(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveOutbox_System_IServiceProvider_"></a> ResolveOutbox\(IServiceProvider\)

Resolves the outbox database role, falling back to the write role when a dedicated outbox role is not configured.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveOutbox(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveRead_System_IServiceProvider_"></a> ResolveRead\(IServiceProvider\)

Resolves the read database role.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveRead(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveRole_System_IServiceProvider_System_String_"></a> ResolveRole\(IServiceProvider, string\)

Resolves an arbitrary supported database role from <code>Engine:Databases</code>.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveRole(IServiceProvider serviceProvider, string requestedRoleId)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical database role identifier to resolve.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveSharedWrite_System_IServiceProvider_"></a> ResolveSharedWrite\(IServiceProvider\)

Resolves the shared write role used when one <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>
type serves both reads and writes.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveSharedWrite(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleResolver_ResolveWrite_System_IServiceProvider_"></a> ResolveWrite\(IServiceProvider\)

Resolves the write database role.

```csharp
public static EntityFrameworkDatabaseRoleContext ResolveWrite(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The current service provider.

#### Returns

 [EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

The resolved Entity Framework database-role context.
