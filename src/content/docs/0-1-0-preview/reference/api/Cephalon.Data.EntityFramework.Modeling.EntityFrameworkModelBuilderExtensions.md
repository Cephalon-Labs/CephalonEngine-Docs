---
title: Class EntityFrameworkModelBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkmodelbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Configures shared Cephalon Entity Framework Core model slices.

```csharp
public static class EntityFrameworkModelBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkModelBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkmodelbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkModelBuilderExtensions_ConfigureCephalonInbox_Microsoft_EntityFrameworkCore_ModelBuilder_System_String_"></a> ConfigureCephalonInbox\(ModelBuilder, string\)

Adds the Cephalon inbox entity mapping to the supplied model.

```csharp
public static ModelBuilder ConfigureCephalonInbox(this ModelBuilder modelBuilder, string tableName = "cephalon_inbox_messages")
```

#### Parameters

`modelBuilder` [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The model builder to extend.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The table name that should hold processed inbox rows.

#### Returns

 [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The same model builder for fluent configuration.

### <a id="Cephalon_Data_EntityFramework_Modeling_EntityFrameworkModelBuilderExtensions_ConfigureCephalonOutbox_Microsoft_EntityFrameworkCore_ModelBuilder_System_String_"></a> ConfigureCephalonOutbox\(ModelBuilder, string\)

Adds the Cephalon outbox entity mapping to the supplied model.

```csharp
public static ModelBuilder ConfigureCephalonOutbox(this ModelBuilder modelBuilder, string tableName = "cephalon_outbox_messages")
```

#### Parameters

`modelBuilder` [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The model builder to extend.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The table name that should hold durable outbox rows.

#### Returns

 [ModelBuilder](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.modelbuilder)

The same model builder for fluent configuration.
