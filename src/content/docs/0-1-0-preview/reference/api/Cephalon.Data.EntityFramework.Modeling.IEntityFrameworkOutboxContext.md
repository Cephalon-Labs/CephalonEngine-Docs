---
title: Interface IEntityFrameworkOutboxContext
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-ientityframeworkoutboxcontext
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Modeling](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Declares the write-side Entity Framework Core surface required by the Cephalon outbox implementation.

```csharp
public interface IEntityFrameworkOutboxContext
```

## Properties

### <a id="Cephalon_Data_EntityFramework_Modeling_IEntityFrameworkOutboxContext_OutboxMessages"></a> OutboxMessages

Gets the outbox rows staged by the current write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref>.

```csharp
DbSet<EntityFrameworkOutboxEntry> OutboxMessages { get; }
```

#### Property Value

 [DbSet](https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbset\-1)<[EntityFrameworkOutboxEntry](/0-1-0-preview/reference/api/cephalon-data-entityframework-modeling-entityframeworkoutboxentry/)\>
