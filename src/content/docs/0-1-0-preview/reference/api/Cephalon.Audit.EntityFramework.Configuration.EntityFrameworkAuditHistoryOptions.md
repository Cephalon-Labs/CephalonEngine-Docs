---
title: Class EntityFrameworkAuditHistoryOptions
slug: 0-1-0-preview/reference/api/cephalon-audit-entityframework-configuration-entityframeworkaudithistoryoptions
editUrl: false
---

Namespace: [Cephalon.Audit.EntityFramework.Configuration](/0-1-0-preview/reference/api/cephalon-audit-entityframework-configuration/)  
Assembly: Cephalon.Audit.EntityFramework.dll  

Describes host-owned options for the Entity Framework durable audit-history provider.

```csharp
public sealed class EntityFrameworkAuditHistoryOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkAuditHistoryOptions](/0-1-0-preview/reference/api/cephalon-audit-entityframework-configuration-entityframeworkaudithistoryoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions__ctor_System_Type_"></a> EntityFrameworkAuditHistoryOptions\(Type\)

Initializes a new instance of the <xref href="Cephalon.Audit.EntityFramework.Configuration.EntityFrameworkAuditHistoryOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkAuditHistoryOptions(Type dbContextType)
```

#### Parameters

`dbContextType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that persists durable audit-history rows.

## Fields

### <a id="Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by this pack.

```csharp
public const string ProviderId = "entity-framework"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions_DbContextType"></a> DbContextType

Gets the <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type that persists durable audit-history rows.

```csharp
public Type DbContextType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Cephalon_Audit_EntityFramework_Configuration_EntityFrameworkAuditHistoryOptions_UsesEngineDatabaseTopology"></a> UsesEngineDatabaseTopology

Gets or sets a value indicating whether this pack resolves its database role from <code>Engine:Databases</code>.

```csharp
public bool UsesEngineDatabaseTopology { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
