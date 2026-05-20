---
title: Class DatabaseMigrationOperationalExecutionGroupCommandBatch
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommandbatch
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one combined command-batch template derived from the selected command path of an engine-owned execution group.

```csharp
public sealed class DatabaseMigrationOperationalExecutionGroupCommandBatch
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseMigrationOperationalExecutionGroupCommandBatch](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationoperationalexecutiongroupcommandbatch/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch__ctor_System_String_System_String_System_String_System_String_System_Int32_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> DatabaseMigrationOperationalExecutionGroupCommandBatch\(string, string, string, string, int, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a new execution-group command-batch template.

```csharp
public DatabaseMigrationOperationalExecutionGroupCommandBatch(string id, string displayName, string description, string commandTemplate, int commandCount, IReadOnlyList<string>? databaseMigrationIds = null, IReadOnlyList<string>? commandIds = null, IReadOnlyList<string>? toolIds = null, IReadOnlyList<string>? workingDirectoryHints = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable batch identifier such as <code>production</code> or <code>manual</code>.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing batch name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable batch description.

`commandTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ordered combined command template for this execution-group path.

`commandCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of command entries represented in this batch.

`databaseMigrationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The logical migration targets represented in this batch, in execution order.

`commandIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The stable command identifiers represented in this batch, in encounter order.

`toolIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The stable operator tool identifiers represented in this batch, in encounter order.

`workingDirectoryHints` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The working-directory hints represented in this batch, in encounter order.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_CommandCount"></a> CommandCount

Gets the number of command entries represented in this batch.

```csharp
public int CommandCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_CommandIds"></a> CommandIds

Gets the stable command identifiers represented in this batch, in encounter order.

```csharp
public IReadOnlyList<string> CommandIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_CommandTemplate"></a> CommandTemplate

Gets the ordered combined command template for this execution-group path.

```csharp
public string CommandTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_DatabaseMigrationIds"></a> DatabaseMigrationIds

Gets the logical migration targets represented in this batch, in execution order.

```csharp
public IReadOnlyList<string> DatabaseMigrationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_Description"></a> Description

Gets the human-readable batch description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_DisplayName"></a> DisplayName

Gets the operator-facing batch name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_Id"></a> Id

Gets the stable batch identifier such as <code>production</code> or <code>manual</code>.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_PrimaryToolId"></a> PrimaryToolId

Gets the single stable operator tool identifier when the batch uses only one tool.

```csharp
public string? PrimaryToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_PrimaryWorkingDirectoryHint"></a> PrimaryWorkingDirectoryHint

Gets the single working-directory hint when every command in the batch uses the same working directory.

```csharp
public string? PrimaryWorkingDirectoryHint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_ToolIds"></a> ToolIds

Gets the stable operator tool identifiers represented in this batch, in encounter order.

```csharp
public IReadOnlyList<string> ToolIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseMigrationOperationalExecutionGroupCommandBatch_WorkingDirectoryHints"></a> WorkingDirectoryHints

Gets the working-directory hints represented in this batch, in encounter order.

```csharp
public IReadOnlyList<string> WorkingDirectoryHints { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
