---
title: Class EntityFrameworkAuditHistoryEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-audit-entityframework-registration-entityframeworkaudithistoryenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Audit.EntityFramework.Registration](/0-1-0-preview/reference/api/cephalon-audit-entityframework-registration/)  
Assembly: Cephalon.Audit.EntityFramework.dll  

Registers the Entity Framework durable audit-history provider with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EntityFrameworkAuditHistoryEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkAuditHistoryEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-audit-entityframework-registration-entityframeworkaudithistoryenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Audit_EntityFramework_Registration_EntityFrameworkAuditHistoryEngineBuilderExtensions_AddEntityFrameworkAuditHistory__1_Cephalon_Engine_Composition_EngineBuilder_System_Action_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions__"></a> AddEntityFrameworkAuditHistory<TDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkAuditHistoryOptions\>?\)

Adds the Entity Framework durable audit-history provider with a host-owned <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> callback.

```csharp
public static EngineBuilder AddEntityFrameworkAuditHistory<TDbContext>(this EngineBuilder builder, Action<DbContextOptionsBuilder> configureDbContext, Action<EntityFrameworkAuditHistoryOptions>? configure = null) where TDbContext : DbContext, IEntityFrameworkAuditHistoryContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that configures the durable audit-history <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkAuditHistoryOptions](/0-1-0-preview/reference/api/cephalon-audit-entityframework-configuration-entityframeworkaudithistoryoptions/)\>?

An optional callback that configures host-owned audit-history provider options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TDbContext` 

The <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that persists audit-history rows.

### <a id="Cephalon_Audit_EntityFramework_Registration_EntityFrameworkAuditHistoryEngineBuilderExtensions_AddEntityFrameworkAuditHistory__1_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Microsoft_EntityFrameworkCore_DbContextOptionsBuilder__System_Action_Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions__"></a> AddEntityFrameworkAuditHistory<TDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkAuditHistoryOptions\>?\)

Adds the Entity Framework durable audit-history provider with the configured audit-history role resolved from <code>Engine:Databases</code>.

```csharp
public static EngineBuilder AddEntityFrameworkAuditHistory<TDbContext>(this EngineBuilder builder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder> configureDbContext, Action<EntityFrameworkAuditHistoryOptions>? configure = null) where TDbContext : DbContext, IEntityFrameworkAuditHistoryContext
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configureDbContext` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/), [DbContextOptionsBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder)\>

The callback that selects the EF Core provider for the resolved audit-history role and applies provider-specific tuning.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EntityFrameworkAuditHistoryOptions](/0-1-0-preview/reference/api/cephalon-audit-entityframework-configuration-entityframeworkaudithistoryoptions/)\>?

An optional callback that configures host-owned audit-history provider options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Type Parameters

`TDbContext` 

The <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that persists audit-history rows.
