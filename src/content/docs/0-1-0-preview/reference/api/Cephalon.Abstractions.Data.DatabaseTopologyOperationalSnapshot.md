---
title: Class DatabaseTopologyOperationalSnapshot
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsnapshot
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Combines the engine-owned operator-facing database-topology posture into one reusable payload.

```csharp
public sealed class DatabaseTopologyOperationalSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyOperationalSnapshot](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSnapshot__ctor_System_DateTimeOffset_Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_DatabaseTopologyOperationalAdvisory__Cephalon_Abstractions_Data_DatabaseTopologyOperationalActionPlan_"></a> DatabaseTopologyOperationalSnapshot\(DateTimeOffset, DatabaseTopologyOperationalSummary, IReadOnlyList<DatabaseTopologyOperationalAdvisory\>?, DatabaseTopologyOperationalActionPlan?\)

Creates a new database-topology operational snapshot.

```csharp
public DatabaseTopologyOperationalSnapshot(DateTimeOffset generatedAtUtc, DatabaseTopologyOperationalSummary summary, IReadOnlyList<DatabaseTopologyOperationalAdvisory>? advisories = null, DatabaseTopologyOperationalActionPlan? actionPlan = null)
```

#### Parameters

`generatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the snapshot was created.

`summary` [DatabaseTopologyOperationalSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsummary/)

The aggregate operator-facing topology summary.

`advisories` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseTopologyOperationalAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationaladvisory/)\>?

The reusable operator-facing advisories derived from the current topology state.

`actionPlan` [DatabaseTopologyOperationalActionPlan](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalactionplan/)?

The ordered engine-owned operator action plan derived from the current topology state.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSnapshot_ActionPlan"></a> ActionPlan

Gets the ordered engine-owned operator action plan derived from the current topology state.

```csharp
public DatabaseTopologyOperationalActionPlan ActionPlan { get; }
```

#### Property Value

 [DatabaseTopologyOperationalActionPlan](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalactionplan/)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSnapshot_Advisories"></a> Advisories

Gets the reusable operator-facing advisories derived from the current topology state.

```csharp
public IReadOnlyList<DatabaseTopologyOperationalAdvisory> Advisories { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DatabaseTopologyOperationalAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationaladvisory/)\>

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSnapshot_GeneratedAtUtc"></a> GeneratedAtUtc

Gets the UTC timestamp when the snapshot was created.

```csharp
public DateTimeOffset GeneratedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSnapshot_Summary"></a> Summary

Gets the aggregate operator-facing topology summary.

```csharp
public DatabaseTopologyOperationalSummary Summary { get; }
```

#### Property Value

 [DatabaseTopologyOperationalSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsummary/)
