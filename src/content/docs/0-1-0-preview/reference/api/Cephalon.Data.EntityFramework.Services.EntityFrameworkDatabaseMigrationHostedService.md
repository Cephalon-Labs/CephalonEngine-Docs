---
title: Class EntityFrameworkDatabaseMigrationHostedService
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-services-entityframeworkdatabasemigrationhostedservice
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Services](/0-1-0-preview/reference/api/cephalon-data-entityframework-services/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Applies startup schema changes for Entity Framework Core database-role targets selected through <code>Engine:Databases</code>.

```csharp
public sealed class EntityFrameworkDatabaseMigrationHostedService : IHostedService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDatabaseMigrationHostedService](/0-1-0-preview/reference/api/cephalon-data-entityframework-services-entityframeworkdatabasemigrationhostedservice/)

#### Implements

[IHostedService](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.ihostedservice)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationHostedService__ctor_System_IServiceProvider_Cephalon_Abstractions_AppModel_AppProfile_System_Collections_Generic_IEnumerable_Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationRegistration__"></a> EntityFrameworkDatabaseMigrationHostedService\(IServiceProvider, AppProfile, IEnumerable<EntityFrameworkDatabaseMigrationRegistration\>\)

Applies startup schema changes for Entity Framework Core database-role targets selected through <code>Engine:Databases</code>.

```csharp
public EntityFrameworkDatabaseMigrationHostedService(IServiceProvider serviceProvider, AppProfile appProfile, IEnumerable<EntityFrameworkDatabaseMigrationRegistration> registrations)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

`appProfile` AppProfile

`registrations` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityFrameworkDatabaseMigrationRegistration](/0-1-0-preview/reference/api/cephalon-data-entityframework-services-entityframeworkdatabasemigrationregistration/)\>

## Methods

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationHostedService_StartAsync_System_Threading_CancellationToken_"></a> StartAsync\(CancellationToken\)

Applies the configured startup migration policy for every targeted Entity Framework database role.

```csharp
public Task StartAsync(CancellationToken cancellationToken)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels startup migration execution.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="Cephalon_Data_EntityFramework_Services_EntityFrameworkDatabaseMigrationHostedService_StopAsync_System_Threading_CancellationToken_"></a> StopAsync\(CancellationToken\)

Stops the hosted service. Entity Framework startup migration execution is synchronous during startup, so there is no background work to drain.

```csharp
public Task StopAsync(CancellationToken cancellationToken)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels shutdown.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A completed task.
