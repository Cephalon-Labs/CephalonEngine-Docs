---
title: Class EntityFrameworkDatabaseRoleContext
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Configuration](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Describes one resolved <code>Engine:Databases</code> role as consumed by the Entity Framework pack.

```csharp
public sealed class EntityFrameworkDatabaseRoleContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDatabaseRoleContext](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdatabaserolecontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext__ctor_System_String_System_String_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_System_String_"></a> EntityFrameworkDatabaseRoleContext\(string, string, DatabaseTargetSelection, DatabaseRuntimeSelection, string\)

Initializes a new instance of the <xref href="Cephalon.Data.EntityFramework.Configuration.EntityFrameworkDatabaseRoleContext" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkDatabaseRoleContext(string requestedRoleId, string resolvedRoleId, DatabaseTargetSelection target, DatabaseRuntimeSelection runtime, string connectionString)
```

#### Parameters

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical role the caller requested, such as <code>write</code> or <code>read</code>.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical role that ultimately supplied the effective database target.

`target` DatabaseTargetSelection

The effective database target metadata after applying any configured role reference.

`runtime` DatabaseRuntimeSelection

The merged runtime settings for the role.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved connection string for the role.

## Properties

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_ConnectionString"></a> ConnectionString

Gets the resolved connection string for the selected role.

```csharp
public string ConnectionString { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_ConnectionStringName"></a> ConnectionStringName

Gets the selected named connection-string reference, if one was declared.

```csharp
public string? ConnectionStringName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_IsFallback"></a> IsFallback

Gets a value indicating whether the requested role resolved through another configured role.

```csharp
public bool IsFallback { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Provider"></a> Provider

Gets the selected provider identifier, if one was declared.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_RequestedRoleId"></a> RequestedRoleId

Gets the logical database role requested by the caller.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_ResolvedRoleId"></a> ResolvedRoleId

Gets the logical database role that supplied the effective target.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Role"></a> Role

Gets the convenience role identifier used by most host callbacks.

```csharp
public string Role { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Runtime"></a> Runtime

Gets the merged runtime settings for the selected role.

```csharp
public DatabaseRuntimeSelection Runtime { get; }
```

#### Property Value

 DatabaseRuntimeSelection

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Schema"></a> Schema

Gets the selected schema override, if one was declared.

```csharp
public string? Schema { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_Target"></a> Target

Gets the effective database target metadata after applying any configured role reference.

```csharp
public DatabaseTargetSelection Target { get; }
```

#### Property Value

 DatabaseTargetSelection

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDatabaseRoleContext_UsesNamedConnectionString"></a> UsesNamedConnectionString

Gets a value indicating whether the role resolved through a named connection string.

```csharp
public bool UsesNamedConnectionString { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
