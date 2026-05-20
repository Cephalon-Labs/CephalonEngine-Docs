---
title: Interface IEntityFrameworkInboxContext
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-ientityframeworkinboxcontext
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Declares the write-side Entity Framework Core surface required by the Cephalon inbox implementation.

```csharp
public interface IEntityFrameworkInboxContext
```

## Properties

### <a id="Cephalon_Data_EntityFramework_Modeling_IEntityFrameworkInboxContext_InboxMessages"></a> InboxMessages

Gets the processed-message rows tracked by the current write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

```csharp
DbSet<EntityFrameworkInboxEntry> InboxMessages { get; }
```

#### Property Value

 [DbSet](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbset\-1)<[EntityFrameworkInboxEntry](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkinboxentry/)\>
