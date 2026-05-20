---
title: Class DatabaseTopologyOperationalAdvisory
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationaladvisory
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one reusable operator-facing advisory for the current database-topology posture.

```csharp
public sealed class DatabaseTopologyOperationalAdvisory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyOperationalAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationaladvisory/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> DatabaseTopologyOperationalAdvisory\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a new database-topology advisory.

```csharp
public DatabaseTopologyOperationalAdvisory(string id, string tone, string title, string detail, string actionLabel, string actionPath, IReadOnlyList<string>? sourceRoleIds = null, IReadOnlyList<string>? sourceMigrationIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable advisory identifier.

`tone` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing tone such as <code>Success</code>, <code>Warning</code>, or <code>Error</code>.

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable advisory title.

`detail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing advisory detail.

`actionLabel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action label.

`actionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action path.

`sourceRoleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional logical database-role identifiers that contributed to the advisory.

`sourceMigrationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional logical migration-target identifiers that contributed to the advisory.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_ActionLabel"></a> ActionLabel

Gets the suggested operator action label.

```csharp
public string ActionLabel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_ActionPath"></a> ActionPath

Gets the suggested operator action path.

```csharp
public string ActionPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_Detail"></a> Detail

Gets the operator-facing advisory detail.

```csharp
public string Detail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_Id"></a> Id

Gets the stable advisory identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_SourceMigrationIds"></a> SourceMigrationIds

Gets the logical migration-target identifiers that contributed to the advisory.

```csharp
public IReadOnlyList<string> SourceMigrationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_SourceRoleIds"></a> SourceRoleIds

Gets the logical database-role identifiers that contributed to the advisory.

```csharp
public IReadOnlyList<string> SourceRoleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_Title"></a> Title

Gets the human-readable advisory title.

```csharp
public string Title { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory_Tone"></a> Tone

Gets the operator-facing advisory tone.

```csharp
public string Tone { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
