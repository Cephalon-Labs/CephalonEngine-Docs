---
title: Class DatabaseTargetSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes one database role target resolved for a Cephalon app.

```csharp
public sealed class DatabaseTargetSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection__ctor_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_"></a> DatabaseTargetSelection\(string?, string?, string?, string?, string?, DatabaseRuntimeSelection?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.DatabaseTargetSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public DatabaseTargetSelection(string? provider = null, string? connectionStringName = null, string? connectionString = null, string? useRole = null, string? schema = null, DatabaseRuntimeSelection? runtime = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`connectionStringName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`useRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`schema` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`runtime` [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)?

## Properties

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_ConnectionString"></a> ConnectionString

Gets the inline connection string selected for this database role.

```csharp
public string? ConnectionString { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_ConnectionStringName"></a> ConnectionStringName

Gets the root connection-string name selected for this database role.

```csharp
public string? ConnectionStringName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Empty"></a> Empty

Gets an empty database-target selection instance.

```csharp
public static DatabaseTargetSelection Empty { get; }
```

#### Property Value

 [DatabaseTargetSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetargetselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_HasValues"></a> HasValues

Gets a value indicating whether any target-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Provider"></a> Provider

Gets the selected logical provider identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Runtime"></a> Runtime

Gets the role-specific runtime overrides for this database target.

```csharp
public DatabaseRuntimeSelection Runtime { get; }
```

#### Property Value

 [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Schema"></a> Schema

Gets the schema override selected for this database role.

```csharp
public string? Schema { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseTargetSelection_UseRole"></a> UseRole

Gets the referenced concrete database role that supplies the physical connection target.

```csharp
public string? UseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
