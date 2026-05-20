---
title: Class DatabaseMigrationCommandDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing command template for executing a database-migration target.

```csharp
public sealed class DatabaseMigrationCommandDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationCommandDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationcommanddescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_System_String_"></a> DatabaseMigrationCommandDescriptor\(string, string, string, string, bool, IReadOnlyDictionary<string, string\>?, string?, string?, string?\)

Creates a new database-migration command descriptor.

```csharp
public DatabaseMigrationCommandDescriptor(string id, string displayName, string description, string commandTemplate, bool recommendedForProduction = false, IReadOnlyDictionary<string, string>? metadata = null, string? toolId = null, string? executionCategory = null, string? workingDirectoryHint = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command identifier such as <code>bundle</code>, <code>script</code>, or <code>update</code>.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing command name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable command description.

`commandTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The command template that operators can adapt for their environment.

`recommendedForProduction` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether this command is recommended for production use.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the command.

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional stable tool identifier such as <code>dotnet-ef</code>.

`executionCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional execution category such as <code>deploy-time</code> or <code>manual</code>.

`workingDirectoryHint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional working-directory hint for where the command is typically run.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_CommandTemplate"></a> CommandTemplate

Gets the command template that operators can adapt for their environment.

```csharp
public string CommandTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_Description"></a> Description

Gets the human-readable command description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing command name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_ExecutionCategory"></a> ExecutionCategory

Gets the execution category when the provider can distinguish deploy-time, manual, or other command paths.

```csharp
public string? ExecutionCategory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_Id"></a> Id

Gets the stable command identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata associated with the command.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_RecommendedForProduction"></a> RecommendedForProduction

Gets a value indicating whether this command is recommended for production use.

```csharp
public bool RecommendedForProduction { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_ToolId"></a> ToolId

Gets the stable operator tool identifier when the provider can name one.

```csharp
public string? ToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationCommandDescriptor_WorkingDirectoryHint"></a> WorkingDirectoryHint

Gets the provider-published working-directory hint when one is known.

```csharp
public string? WorkingDirectoryHint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
