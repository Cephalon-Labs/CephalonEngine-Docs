---
title: Class EntityFrameworkAuditHistoryModelBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-audit-entityframework-modeling-entityframeworkaudithistorymodelbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Audit.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-audit-entityframework-modeling/)  
Assembly: Cephalon.Audit.EntityFramework.dll  

Configures the shared Entity Framework Core model slice used by Cephalon durable audit history.

```csharp
public static class EntityFrameworkAuditHistoryModelBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkAuditHistoryModelBuilderExtensions](/0-1-0-preview/reference/api/cephalon-audit-entityframework-modeling-entityframeworkaudithistorymodelbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Audit_EntityFramework_Modeling_EntityFrameworkAuditHistoryModelBuilderExtensions_ConfigureCephalonAuditHistory_Microsoft_EntityFrameworkCore_ModelBuilder_System_String_System_String_"></a> ConfigureCephalonAuditHistory\(ModelBuilder, string, string?\)

Adds the Cephalon durable audit-history entity mapping to the supplied model.

```csharp
public static ModelBuilder ConfigureCephalonAuditHistory(this ModelBuilder modelBuilder, string tableName = "cephalon_audit_history", string? schema = null)
```

#### Parameters

`modelBuilder` [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The model builder to extend.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The table name that should hold durable audit-history rows.

`schema` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional schema that should own the durable audit-history table.

#### Returns

 [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The same model builder for fluent configuration.
