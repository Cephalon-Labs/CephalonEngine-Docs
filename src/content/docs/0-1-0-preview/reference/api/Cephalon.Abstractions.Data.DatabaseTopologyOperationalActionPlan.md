---
title: Class DatabaseTopologyOperationalActionPlan
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalactionplan
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the engine-owned ordered operator action plan for the current database-topology posture.

```csharp
public sealed class DatabaseTopologyOperationalActionPlan
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyOperationalActionPlan](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalactionplan/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan__ctor_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseTopologyOperationalAction__"></a> DatabaseTopologyOperationalActionPlan\(DateTimeOffset, IReadOnlyList<DatabaseTopologyOperationalAction\>?\)

Creates a new database-topology action plan.

```csharp
public DatabaseTopologyOperationalActionPlan(DateTimeOffset generatedAtUtc, IReadOnlyList<DatabaseTopologyOperationalAction>? actions = null)
```

#### Parameters

`generatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the plan was created.

`actions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseTopologyOperationalAction](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalaction/)\>?

The ordered operator actions derived from the current topology posture.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_Actions"></a> Actions

Gets the ordered operator actions derived from the current topology posture.

```csharp
public IReadOnlyList<DatabaseTopologyOperationalAction> Actions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseTopologyOperationalAction](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalaction/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_AttentionActionCount"></a> AttentionActionCount

Gets the number of attention-level actions in the plan.

```csharp
public int AttentionActionCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_BlockingActionCount"></a> BlockingActionCount

Gets the number of blocking actions in the plan.

```csharp
public int BlockingActionCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_GeneratedAtUtc"></a> GeneratedAtUtc

Gets the UTC timestamp when the plan was created.

```csharp
public DateTimeOffset GeneratedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_ReadyActionCount"></a> ReadyActionCount

Gets the number of ready-state actions in the plan.

```csharp
public int ReadyActionCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_TotalActionCount"></a> TotalActionCount

Gets the total number of operator actions in the plan.

```csharp
public int TotalActionCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
