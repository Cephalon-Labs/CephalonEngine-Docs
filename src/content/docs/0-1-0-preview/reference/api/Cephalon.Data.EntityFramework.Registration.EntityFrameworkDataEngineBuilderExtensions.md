---
title: Class EntityFrameworkDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-registration-entityframeworkdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Registration](/0-1-0-preview/reference/api/cephalon-data-entityframework-registration/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Registers the Entity Framework Core data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EntityFrameworkDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-entityframework-registration-entityframeworkdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_EntityFramework_Registration_EntityFrameworkDataEngineBuilderExtensions_AddEntityFrameworkData__1_Cephalon_Engine_Composition_EngineBuilder_System_Action_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions__"></a> AddEntityFrameworkData<TDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)

Adds the Entity Framework Core data pack with one shared <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type for both read and write workloads.

```csharp
public static EngineBuilder AddEntityFrameworkData<TDbContext>(this EngineBuilder builder, Action<DbContextOptionsBuilder> configureDbContext, Action<EntityFrameworkDataOptions>? configure = null) where TDbContext : DbContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that configures the shared Entity Framework Core <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkDataOptions](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions/)\>?

An optional callback that configures the host-owned Entity Framework pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TDbContext` 

The shared <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

#### Remarks

Pair this pack with <code>AddData()</code> when you want Cephalon-managed <code>IReadStore</code> and <code>IWriteStore</code>
dispatching on top of the registered <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> services.

### <a id="Cephalon_Data_EntityFramework_Registration_EntityFrameworkDataEngineBuilderExtensions_AddEntityFrameworkData__1_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions__"></a> AddEntityFrameworkData<TDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)

Adds the Entity Framework Core data pack with one shared <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type configured from
the engine-owned <code>Engine:Databases</code> topology.

```csharp
public static EngineBuilder AddEntityFrameworkData<TDbContext>(this EngineBuilder builder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder> configureDbContext, Action<EntityFrameworkDataOptions>? configure = null) where TDbContext : DbContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/), [DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that selects the EF Core provider for the resolved role and applies provider-specific tuning
such as retries.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkDataOptions](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions/)\>?

An optional callback that configures the host-owned Entity Framework pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TDbContext` 

The shared <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

#### Remarks

This overload keeps the physical connection topology inside <code>Engine:Databases</code> while leaving the provider
package selection with the consuming host or provider companion pack.

### <a id="Cephalon_Data_EntityFramework_Registration_EntityFrameworkDataEngineBuilderExtensions_AddEntityFrameworkData__2_Cephalon_Engine_Composition_EngineBuilder_System_Action_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions__"></a> AddEntityFrameworkData<TReadDbContext, TWriteDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)

Adds the Entity Framework Core data pack with explicit read and write <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> types.

```csharp
public static EngineBuilder AddEntityFrameworkData<TReadDbContext, TWriteDbContext>(this EngineBuilder builder, Action<DbContextOptionsBuilder> configureReadDbContext, Action<DbContextOptionsBuilder> configureWriteDbContext, Action<EntityFrameworkDataOptions>? configure = null) where TReadDbContext : DbContext where TWriteDbContext : DbContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureReadDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that configures the read-side Entity Framework Core <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

`configureWriteDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that configures the write-side Entity Framework Core <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkDataOptions](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions/)\>?

An optional callback that configures the host-owned Entity Framework pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TReadDbContext` 

The read-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

`TWriteDbContext` 

The write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

#### Remarks

Pair this pack with <code>AddData()</code> when you want Cephalon-managed <code>IReadStore</code> and <code>IWriteStore</code>
dispatching on top of the registered <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> services.

### <a id="Cephalon_Data_EntityFramework_Registration_EntityFrameworkDataEngineBuilderExtensions_AddEntityFrameworkData__2_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions__"></a> AddEntityFrameworkData<TReadDbContext, TWriteDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)

Adds the Entity Framework Core data pack with distinct read and write <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> types configured
from the engine-owned <code>Engine:Databases</code> topology.

```csharp
public static EngineBuilder AddEntityFrameworkData<TReadDbContext, TWriteDbContext>(this EngineBuilder builder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder> configureDbContext, Action<EntityFrameworkDataOptions>? configure = null) where TReadDbContext : DbContext where TWriteDbContext : DbContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/), [DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that selects the EF Core provider for each resolved role and applies provider-specific tuning such
as retries.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkDataOptions](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions/)\>?

An optional callback that configures the host-owned Entity Framework pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TReadDbContext` 

The read-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

`TWriteDbContext` 

The write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.
