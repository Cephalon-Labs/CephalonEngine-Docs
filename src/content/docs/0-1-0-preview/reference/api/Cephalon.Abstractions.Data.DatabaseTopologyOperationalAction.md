---
title: Class DatabaseTopologyOperationalAction
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalaction
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one engine-owned operator action for the current database-topology posture.

```csharp
public sealed class DatabaseTopologyOperationalAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyOperationalAction](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalaction/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> DatabaseTopologyOperationalAction\(string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a new database-topology operator action.

```csharp
public DatabaseTopologyOperationalAction(string id, string category, string tone, string title, string detail, string completionSignal, string actionLabel, string actionPath, IReadOnlyList<string>? sourceRoleIds = null, IReadOnlyList<string>? sourceMigrationIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable action identifier.

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable machine-readable remediation category.

`tone` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing tone such as <code>Success</code>, <code>Warning</code>, or <code>Error</code>.

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable action title.

`detail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing action detail.

`completionSignal` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing signal that the action is complete.

`actionLabel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action label.

`actionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action path.

`sourceRoleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional logical database-role identifiers that contributed to the action.

`sourceMigrationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional logical migration-target identifiers that contributed to the action.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_ActionLabel"></a> ActionLabel

Gets the suggested operator action label.

```csharp
public string ActionLabel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_ActionPath"></a> ActionPath

Gets the suggested operator action path.

```csharp
public string ActionPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_Category"></a> Category

Gets the stable machine-readable remediation category.

```csharp
public string Category { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_CompletionSignal"></a> CompletionSignal

Gets the operator-facing signal that the action is complete.

```csharp
public string CompletionSignal { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_Detail"></a> Detail

Gets the operator-facing action detail.

```csharp
public string Detail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_Id"></a> Id

Gets the stable action identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_SourceMigrationIds"></a> SourceMigrationIds

Gets the logical migration-target identifiers that contributed to the action.

```csharp
public IReadOnlyList<string> SourceMigrationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_SourceRoleIds"></a> SourceRoleIds

Gets the logical database-role identifiers that contributed to the action.

```csharp
public IReadOnlyList<string> SourceRoleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_Title"></a> Title

Gets the human-readable action title.

```csharp
public string Title { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction_Tone"></a> Tone

Gets the operator-facing action tone.

```csharp
public string Tone { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
